import os
import json
import urllib.request
import urllib.parse
from datetime import datetime, timedelta, timezone

DAILY_FILE = "daily_tools.json"
MAX_DAILY_ITEMS = 24

VALID_CATEGORIES = [
    "languages",
    "motion",
    "webgl",
    "vector",
    "frameworks",
    "backend",
    "assets",
    "inspiration"
]

# Términos de búsqueda alineados con desarrollo web creativo, full-stack y multiplataforma
SEARCH_TOPICS = [
    "topic:webgl",
    "topic:threejs",
    "topic:animation",
    "topic:ui-components",
    "topic:astro",
    "topic:svelte",
    "topic:tailwindcss",
    "topic:kotlin-multiplatform",
    "topic:local-ai"
]


def load_existing_tools():
    if not os.path.exists(DAILY_FILE):
        return []
    try:
        with open(DAILY_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return []


def fetch_trending_github_repos():
    since_date = (datetime.now(timezone.utc) - timedelta(days=14)).strftime("%Y-%m-%d")
    topics_query = " OR ".join(SEARCH_TOPICS)
    raw_query = f"({topics_query}) pushed:>={since_date} stars:>=80"
    encoded_query = urllib.parse.quote(raw_query)

    url = f"https://api.github.com/search/repositories?q={encoded_query}&sort=stars&order=desc&per_page=15"
    headers = {
        "Accept": "application/vnd.github+json",
        "User-Agent": "DevTree-Autonomous-Updater"
    }

    github_token = os.environ.get("GITHUB_TOKEN")
    if github_token:
        headers["Authorization"] = f"Bearer {github_token}"

    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=20) as response:
        data = json.loads(response.read().decode("utf-8"))
        return data.get("items", [])


def classify_with_gemini(repo):
    api_key = os.environ.get("GEMINI_API_KEY")
    repo_name = repo.get("name", "Tool")
    repo_url = repo.get("html_url", "")
    repo_desc = repo.get("description") or "Herramienta moderna de desarrollo."
    repo_lang = repo.get("language") or "JavaScript"
    repo_topics = ", ".join(repo.get("topics", [])[:6])

    # Fallback determinista si aún no has configurado GEMINI_API_KEY
    if not api_key:
        return build_fallback_entry(repo_name, repo_url, repo_desc, repo_lang, repo_topics)

    prompt = f"""
Eres un arquitecto de software. Convierte este repositorio en tendencia en una ficha para el catálogo DevTree.
Repositorio: {repo_name}
URL: {repo_url}
Descripción original: {repo_desc}
Lenguaje principal: {repo_lang}
Temas: {repo_topics}

Devuelve ÚNICAMENTE un objeto JSON válido con estas claves exactas en español:
- "category": elige UNA entre {json.dumps(VALID_CATEGORIES)}
- "badge": etiqueta corta de máximo 22 caracteres (ej. "NUEVO · Motor WebGL")
- "summary": explicación clara en español de máximo 210 caracteres sobre qué hace y por qué destaca.
- "useCase": en qué tipo de proyecto viene mejor usarlo (máximo 140 caracteres).
- "synergy": con qué tecnologías combinarlo (ej. "Astro + GSAP + TypeScript").
- "keywords": 6 palabras clave en minúsculas separadas por espacios para el buscador del asesor.
- "snippet": comando de instalación o breve ejemplo de uso en 1 o 2 líneas.
"""

    endpoint = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={api_key}"
    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {
            "temperature": 0.2,
            "responseMimeType": "application/json"
        }
    }

    try:
        req = urllib.request.Request(
            endpoint,
            data=json.dumps(payload).encode("utf-8"),
            headers={"Content-Type": "application/json"},
            method="POST"
        )
        with urllib.request.urlopen(req, timeout=25) as resp:
            result = json.loads(resp.read().decode("utf-8"))
            text_json = result["candidates"][0]["content"]["parts"][0]["text"]
            parsed = json.loads(text_json)

            category = parsed.get("category", "frameworks")
            if category not in VALID_CATEGORIES:
                category = "frameworks"

            today_str = datetime.now(timezone.utc).strftime("%d/%m")
            return {
                "id": f"auto_{repo.get('id')}",
                "name": f"{repo_name} [NUEVO]",
                "category": category,
                "badge": f"NUEVO {today_str} · {parsed.get('badge', repo_lang)[:18]}",
                "url": repo_url,
                "summary": parsed.get("summary", repo_desc),
                "useCase": parsed.get("useCase", "Proyectos modernos de alto rendimiento."),
                "synergy": parsed.get("synergy", f"{repo_lang} + Stack Moderno"),
                "keywords": f"nuevo tendencia {parsed.get('keywords', repo_topics)}".lower(),
                "snippet": parsed.get("snippet", f"# Clonar o instalar {repo_name}\ngit clone {repo_url}")
            }
    except Exception as err:
        print(f"Aviso en llamada a Gemini ({err}). Usando clasificador local.")
        return build_fallback_entry(repo_name, repo_url, repo_desc, repo_lang, repo_topics, repo.get("id"))


def build_fallback_entry(name, url, desc, lang, topics, repo_id="local"):
    topics_lower = f"{desc} {topics}".lower()
    category = "frameworks"
    if any(k in topics_lower for k in ["webgl", "three", "shader", "3d"]):
        category = "webgl"
    elif any(k in topics_lower for k in ["animat", "scroll", "motion", "transition"]):
        category = "motion"
    elif any(k in topics_lower for k in ["ui", "tailwind", "css", "svg", "icon"]):
        category = "vector"
    elif any(k in topics_lower for k in ["ai", "llm", "database", "sql", "docker", "backend"]):
        category = "backend"

    today_str = datetime.now(timezone.utc).strftime("%d/%m")
    return {
        "id": f"auto_{repo_id}",
        "name": f"{name} [NUEVO]",
        "category": category,
        "badge": f"NUEVO {today_str} · {lang}",
        "url": url,
        "summary": desc[:210],
        "useCase": "Integración en proyectos web y multiplataforma actuales.",
        "synergy": f"{lang} + Vite + Git",
        "keywords": f"nuevo tendencia {name.lower()} {lang.lower()} {topics.replace(',', '')}",
        "snippet": f"# Repositorio oficial en tendencia:\ngit clone {url}"
    }


def main():
    existing_tools = load_existing_tools()
    existing_urls = {item.get("url") for item in existing_tools}

    repos = fetch_trending_github_repos()
    new_entries = []

    for repo in repos:
        repo_url = repo.get("html_url")
        if not repo_url or repo_url in existing_urls:
            continue

        entry = classify_with_gemini(repo)
        new_entries.append(entry)
        existing_urls.add(repo_url)

        # Añadimos hasta 2 herramientas nuevas por día para mantener calidad y orden
        if len(new_entries) >= 2:
            break

    if not new_entries:
        print("No se encontraron herramientas nuevas hoy.")
        return

    updated_catalog = (new_entries + existing_tools)[:MAX_DAILY_ITEMS]
    with open(DAILY_FILE, "w", encoding="utf-8") as f:
        json.dump(updated_catalog, f, ensure_ascii=False, indent=2)

    print(f"Se añadieron {len(new_entries)} tecnologías nuevas a {DAILY_FILE}.")


if __name__ == "__main__":
    main()