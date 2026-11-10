// 8 RAMAS PRINCIPALES
const CATEGORIES = [
  { id: 'languages', name: 'Lenguajes de Código', color: '#fbbf24', description: 'Lenguajes clave en desarrollo web, multiplataforma, datos y GPU.' },
  { id: 'motion', name: 'Animación & Scroll', color: '#38bdf8', description: 'Líneas de tiempo, scroll inercial y transiciones fluidas a 60 FPS.' },
  { id: 'webgl', name: '3D, WebGL & Shaders', color: '#a855f7', description: 'Renderizado 3D en navegador, iluminación y efectos en tarjeta gráfica.' },
  { id: 'vector', name: 'UI Creativa & Físicas', color: '#ec4899', description: 'Sistemas Bento, máquinas de estados vectoriales y colisiones 2D.' },
  { id: 'frameworks', name: 'Frameworks & Base', color: '#10b981', description: 'Arquitecturas web y móviles de alto rendimiento.' },
  { id: 'backend', name: 'Backend, Datos & IA', color: '#06b6d4', description: 'Bases de datos SQL/NoSQL, contenedores Docker e IA local/cloud.' },
  { id: 'assets', name: 'Assets 3D, Fuentes & FX', color: '#f97316', description: 'Modelado 3D, tipografías de estudio, iconos y audio.' },
  { id: 'inspiration', name: 'Inspiración & Deploy', color: '#6366f1', description: 'Galerías premiadas, demos con código y hosting gratuito.' }
];

// CATÁLOGO DE 48 TECNOLOGÍAS (6 por rama)
const INITIAL_TOOLS = [
  // 1. Lenguajes
  { id: 'lang-js', name: 'JavaScript (ES2026)', category: 'languages', badge: 'Frontend & Web Core', url: 'https://developer.mozilla.org/es/docs/Web/JavaScript', summary: 'El lenguaje nativo del navegador. Controla el DOM, animaciones GSAP, lienzos 3D WebGL y lógica full-stack.', useCase: 'Imprescindible para webs interactivas, PWAs y animaciones a medida.', synergy: 'HTML + CSS + GSAP + Three.js', keywords: 'javascript js web frontend dom animaciones interactivo navegador pwa', snippet: `const cargar = async (url) => (await fetch(url)).json();` },
  { id: 'lang-ts', name: 'TypeScript', category: 'languages', badge: 'Tipado Estático Pro', url: 'https://www.typescriptlang.org/', summary: 'Añade tipos estáticos e interfaces a JavaScript para evitar errores y ofrecer autocompletado inteligente en VS Code.', useCase: 'Proyectos escalables con Astro, Next.js, React o arquitecturas complejas.', synergy: 'Next.js + Astro + Supabase', keywords: 'typescript ts tipado escalable react nextjs astro empresas fullstack', snippet: `interface Proyecto { nombre: string; stack: string[]; }` },
  { id: 'lang-python', name: 'Python', category: 'languages', badge: 'IA, Backend & Scripts', url: 'https://www.python.org/', summary: 'Líder en inteligencia artificial, lectura de PDFs, automatización de datos y creación de APIs rápidas con FastAPI.', useCase: 'Conectar modelos locales en Ollama, API de Gemini o scripts de actualización diaria.', synergy: 'FastAPI + Ollama + Docker', keywords: 'python ia inteligencia artificial backend api datos pdf scripts', snippet: `@app.get("/ia")\ndef consultar(prompt: str): return {"ok": True}` },
  { id: 'lang-java', name: 'Java', category: 'languages', badge: 'Multiplataforma & Android', url: 'https://dev.java/', summary: 'Lenguaje robusto orientado a objetos, base del desarrollo de aplicaciones multiplataforma (DAM), Android nativo y servidores.', useCase: 'Apps móviles en Android Studio, sistemas de escritorio y backends empresariales.', synergy: 'Android Studio + Firebase + SQL', keywords: 'java android movil multiplataforma dam escritorio backend', snippet: `public record App(String nombre, int version) {}` },
  { id: 'lang-kotlin', name: 'Kotlin', category: 'languages', badge: 'Android & Multiplatform', url: 'https://kotlinlang.org/', summary: 'Lenguaje conciso 100% compatible con Java, estándar oficial para Android y aplicaciones multiplataforma modernas.', useCase: 'Desarrollo ágil de interfaces móviles modernas con Jetpack Compose.', synergy: 'Android Studio + Firebase', keywords: 'kotlin android movil multiplataforma apps interfaz', snippet: `val activas = herramientas.filter { it.seleccionada }` },
  { id: 'lang-sql-glsl', name: 'SQL & GLSL', category: 'languages', badge: 'Datos Relacionales & GPU', url: 'https://www.postgresql.org/', summary: 'SQL gestiona bases de datos relacionales (PostgreSQL/MySQL) y GLSL programa efectos visuales en la tarjeta gráfica.', useCase: 'SQL para cuentas y registros; GLSL para distorsiones y fondos líquidos 3D.', synergy: 'PostgreSQL / Supabase + Three.js', keywords: 'sql base de datos postgres mysql glsl shaders gpu 3d', snippet: `SELECT nombre, rama FROM tecnologias WHERE recomendada = true;` },

  // 2. Animación & Scroll
  { id: 'gsap', name: 'GSAP 3.13+ (Gratis)', category: 'motion', badge: 'Timelines Profesionales', url: 'https://gsap.com/', summary: 'El motor estándar para animaciones web de estudio. Totalmente gratuito incluyendo SplitText, MorphSVG y ScrollTrigger.', useCase: 'Coreografías de entrada, textos animados letra por letra y transiciones.', synergy: 'Lenis + ScrollTrigger + Three.js', keywords: 'gsap animacion timelines texto fluido awwwards portfolio landing', snippet: `gsap.from(".nodo", { y: 40, opacity: 0, stagger: 0.05 });` },
  { id: 'scrolltrigger', name: 'ScrollTrigger', category: 'motion', badge: 'Scrollytelling', url: 'https://gsap.com/docs/v3/Plugins/ScrollTrigger/', summary: 'Sincroniza líneas de tiempo de GSAP con el progreso del scroll y permite fijar secciones en pantalla (pinning).', useCase: 'Galerías de proyectos que avanzan en horizontal al bajar con la rueda del ratón.', synergy: 'GSAP + Lenis', keywords: 'scrolltrigger scroll horizontal pin narrativo portfolio animacion', snippet: `ScrollTrigger.create({ trigger: ".sec", pin: true, scrub: 1 });` },
  { id: 'lenis', name: 'Lenis Smooth Scroll', category: 'motion', badge: 'Scroll Inercial', url: 'https://lenis.darkroom.engineering/', summary: 'Aporta inercia suave al desplazamiento de la página sin romper elementos fijos ni penalizar el rendimiento.', useCase: 'Base obligatoria en cualquier portfolio o landing page de estética premium.', synergy: 'GSAP + Astro / Next.js', keywords: 'lenis smooth scroll suave fluido inercia awwwards', snippet: `const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });` },
  { id: 'motion-dev', name: 'Motion (Framer)', category: 'motion', badge: 'Físicas & Layout UI', url: 'https://motion.dev/', summary: 'Animaciones basadas en muelles físicos reales y reordenación fluida automática de tarjetas en React y JS.', useCase: 'Tarjetas Bento que se expanden y filtran con suavidad.', synergy: 'React / Next.js + Tailwind CSS', keywords: 'motion framer react fisicas muelles layout tarjetas bento', snippet: `<motion.div layout whileHover={{ scale: 1.03 }} />` },
  { id: 'animejs', name: 'Anime.js v4', category: 'motion', badge: 'Animación SVG & Grids', url: 'https://animejs.com/', summary: 'Motor modular ultraligero excelente para animar trazos vectoriales SVG, líneas de tiempo y cuadrículas.', useCase: 'Animar grafos, conexiones SVG y contadores numéricos.', synergy: 'Vanilla JS + SVG + Vite', keywords: 'animejs svg ligero animacion nodos', snippet: `animate("path", { strokeDashoffset: [100, 0], duration: 900 });` },
  { id: 'barba-vt', name: 'Barba.js & View Transitions', category: 'motion', badge: 'Cambio de Página Fluido', url: 'https://barba.js.org/', summary: 'Elimina el parpadeo al navegar entre páginas creando transiciones continuas estilo aplicación nativa.', useCase: 'Pasar de la portada a la página de un proyecto con una máscara animada.', synergy: 'Astro + GSAP', keywords: 'transiciones pagina barba view transitions spa navegacion', snippet: `document.startViewTransition(() => actualizarVista());` },

  // 3. 3D, WebGL & Shaders
  { id: 'threejs', name: 'Three.js', category: 'webgl', badge: 'Motor 3D WebGL/WebGPU', url: 'https://threejs.org/', summary: 'Librería principal para crear mundos 3D, cargar modelos de Blender, aplicar luces e interactuar con el ratón.', useCase: 'Portadas inmersivas con objetos 3D que reaccionan al movimiento del usuario.', synergy: 'Blender + GSAP + Vite', keywords: 'threejs 3d webgl webgpu modelos escena interactivo particulas', snippet: `const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });` },
  { id: 'r3f', name: 'React Three Fiber', category: 'webgl', badge: 'Three.js en React', url: 'https://r3f.docs.pmnd.rs/', summary: 'Permite montar escenas de Three.js mediante componentes declarativos de React junto a la librería de utilidades Drei.', useCase: 'Conectar el interfaz de tu app directamente con objetos 3D.', synergy: 'Next.js + Three.js + Motion', keywords: 'r3f react three fiber drei 3d componentes', snippet: `<Canvas><Float><mesh><boxGeometry /></mesh></Float></Canvas>` },
  { id: 'spline', name: 'Spline 3D', category: 'webgl', badge: 'Editor 3D Interactivo', url: 'https://spline.design/', summary: 'Herramienta visual en navegador para diseñar objetos 3D interactivos e incrustarlos en una línea de código.', useCase: 'Añadir elementos 3D interactivos sin tener que programar shaders complejos.', synergy: 'Astro / HTML / React', keywords: 'spline 3d visual rapido interactivo diseño portada', snippet: `<spline-viewer url="https://prod.spline.design/escena/scene.splinecode"></spline-viewer>` },
  { id: 'theatrejs', name: 'Theatre.js', category: 'webgl', badge: 'Timeline estilo After Effects', url: 'https://www.theatrejs.com/', summary: 'Editor visual de curvas y keyframes para dirigir movimientos de cámara 3D y secuencias con precisión de cine.', useCase: 'Recorridos de cámara guiados por el scroll o herramientas de preproducción.', synergy: 'Three.js + ScrollTrigger', keywords: 'theatrejs camara cine after effects timeline 3d animacion', snippet: `const sheet = core.getProject("Cine").sheet("Camara");` },
  { id: 'curtains-ogl', name: 'OGL & Curtains.js', category: 'webgl', badge: 'Imágenes Líquidas WebGL', url: 'https://www.curtainsjs.com/', summary: 'Convierte imágenes HTML normales en lienzos WebGL para aplicarles ondas y distorsiones al hacer scroll.', useCase: 'Galerías de imágenes con efecto de distorsión líquida al pasar el cursor.', synergy: 'Lenis + GLSL', keywords: 'ogl curtains webgl imagenes liquido distorsion shaders ligero', snippet: `const curtains = new Curtains({ container: "canvas" });` },
  { id: 'shadertoy-p5', name: 'Shadertoy & p5.js', category: 'webgl', badge: 'Arte Generativo', url: 'https://www.shadertoy.com/', summary: 'Entornos para crear fondos matemáticos generativos, partículas y visualizadores reactivos al sonido.', useCase: 'Fondos animados con shaders o visualizadores de frecuencias musicales.', synergy: 'JavaScript + Web Audio API', keywords: 'shadertoy p5js generativo particulas audio musica visualizador', snippet: `function draw() { circle(mouseX, mouseY, 30); }` },

  // 4. UI Creativa & Físicas
  { id: 'tailwind', name: 'Tailwind CSS v4', category: 'vector', badge: 'Estilos Utility-First', url: 'https://tailwindcss.com/', summary: 'Acelera el diseño de interfaces oscuras, rejillas Bento simétricas y efectos glassmorphism directamente en el marcado.', useCase: 'Maquetar cualquier web o aplicación moderna manteniendo simetría total.', synergy: 'Astro / Next.js + Shadcn UI', keywords: 'tailwind css estilos bento oscuro diseño interfaz responsive', snippet: `<div class="grid grid-cols-3 gap-4 rounded-xl bg-slate-900/80 p-4"></div>` },
  { id: 'shadcn-radix', name: 'Shadcn UI & Radix', category: 'vector', badge: 'Componentes Accesibles', url: 'https://ui.shadcn.com/', summary: 'Componentes profesionales personalizables (modales, pestañas, buscadores Cmd+K) que se integran en tu código.', useCase: 'Interfaces de aplicaciones de gestión, paneles y herramientas web.', synergy: 'Tailwind CSS + Next.js', keywords: 'shadcn radix ui componentes dashboard modales accesible', snippet: `npx shadcn@latest add dialog tabs command` },
  { id: 'rive', name: 'Rive', category: 'vector', badge: 'Vectores con Estados', url: 'https://rive.app/', summary: 'Animaciones vectoriales interactivas que siguen al cursor o cambian de estado al hacer clic pesando pocos kilobytes.', useCase: 'Iconos animados interactivos, avatares o pantallas de carga.', synergy: 'Web Canvas + Android', keywords: 'rive vectorial 2d iconos interactivo estados animacion', snippet: `new Rive({ src: "icono.riv", canvas, autoplay: true });` },
  { id: 'lottie', name: 'dotLottie / LottieFiles', category: 'vector', badge: 'Animación Vectorial JSON', url: 'https://lottiefiles.com/', summary: 'Reproduce animaciones vectoriales exportadas desde After Effects pudiendo vincularlas al avance del scroll.', useCase: 'Microinteracciones fluidas en botones e iconos explicativos.', synergy: 'GSAP ScrollTrigger', keywords: 'lottie dotlottie vectores iconos animacion ligero', snippet: `new DotLottie({ canvas, src: "anim.lottie", autoplay: true });` },
  { id: 'matterjs', name: 'Matter.js', category: 'vector', badge: 'Físicas 2D & Gravedad', url: 'https://brm.io/matter-js/', summary: 'Motor de físicas 2D en JavaScript con gravedad, rebotes y colisiones interactivas con el ratón.', useCase: 'Sección interactiva donde las etiquetas de tus skills caen y chocan entre sí.', synergy: 'HTML5 Canvas + JS', keywords: 'matterjs fisicas 2d gravedad colisiones interactivo', snippet: `const engine = Matter.Engine.create();` },
  { id: 'uiverse-aceternity', name: 'Uiverse & Aceternity UI', category: 'vector', badge: 'Efectos UI Listos', url: 'https://uiverse.io/', summary: 'Repositorios abiertos de tarjetas con iluminación, bordes animados y botones creativos listos para copiar.', useCase: 'Dar acabado visual llamativo a tarjetas y botones en minutos.', synergy: 'Tailwind CSS + Motion', keywords: 'uiverse aceternity botones efectos tarjetas iluminacion css', snippet: `/* Componentes abiertos en CSS y Tailwind listos para copiar */` },

  // 5. Frameworks & Base
  { id: 'astro', name: 'Astro', category: 'frameworks', badge: 'Arquitectura de Islas', url: 'https://astro.build/', summary: 'Genera webs ultrarrápidas enviando cero JavaScript innecesario y cargando solo los bloques 3D o animados que elijas.', useCase: 'El mejor framework para portfolios creativos y webs de clientes locales.', synergy: 'Lenis + GSAP + Tailwind CSS', keywords: 'astro portfolio landing rapido seo islas estatico', snippet: `npm create astro@latest mi-portfolio` },
  { id: 'nextjs', name: 'Next.js (React)', category: 'frameworks', badge: 'Full-Stack React', url: 'https://nextjs.org/', summary: 'Framework completo de React con servidor integrado, rutas API, optimización de imágenes y soporte para PWAs.', useCase: 'Aplicaciones web con usuarios, paneles de control y bases de datos.', synergy: 'TypeScript + Tailwind + Supabase', keywords: 'nextjs react fullstack pwa saas dashboard aplicacion web', snippet: `npx create-next-app@latest mi-app` },
  { id: 'vite', name: 'Vite', category: 'frameworks', badge: 'Bundler Instantáneo', url: 'https://vite.dev/', summary: 'Entorno de desarrollo ultrarrápido para proyectos en Vanilla JS, TypeScript, React o Three.js.', useCase: 'Crear prototipos rápidos y proyectos ligeros sin configuración pesada.', synergy: 'JavaScript + Three.js + GSAP', keywords: 'vite bundler rapido vanilla js prototipo webgl', snippet: `npm create vite@latest mi-proyecto` },
  { id: 'sveltekit', name: 'SvelteKit', category: 'frameworks', badge: 'Reactividad Compilada', url: 'https://kit.svelte.dev/', summary: 'Compila componentes a JS puro sin Virtual DOM, ideal para interfaces muy dinámicas como editores con líneas de tiempo.', useCase: 'Aplicaciones creativas con mucho estado interactivo en pantalla.', synergy: 'GSAP + Tailwind', keywords: 'svelte sveltekit ligero reactivo editor interactivo', snippet: `npx sv create mi-app` },
  { id: 'android-pwa', name: 'Android Studio & PWA', category: 'frameworks', badge: 'Móvil Nativo & Web App', url: 'https://developer.android.com/studio', summary: 'Entorno oficial para apps nativas Android en Java/Kotlin y estándares PWA para instalar webs en el móvil.', useCase: 'Apps de streaming de música, gestión de gastos compartidos o utilidades.', synergy: 'Java / Kotlin + Firebase', keywords: 'android studio movil app pwa capacitor java kotlin', snippet: `navigator.serviceWorker?.register("/sw.js");` },
  { id: 'tanstack-zustand', name: 'Zustand & TanStack', category: 'frameworks', badge: 'Gestión de Estado Simple', url: 'https://zustand-demo.pmnd.rs/', summary: 'Gestiona el estado compartido de tu aplicación (usuario, reproductor, escena 3D) en apenas 1KB de código.', useCase: 'Comunicar tu escena 3D o reproductor de audio con la interfaz.', synergy: 'React + React Three Fiber', keywords: 'zustand tanstack estado global datos react', snippet: `const useStore = create((set) => ({ play: false }));` },

  // 6. Backend, Datos & IA
  { id: 'supabase', name: 'Supabase (PostgreSQL)', category: 'backend', badge: 'SQL en la Nube & Auth', url: 'https://supabase.com/', summary: 'Base de datos PostgreSQL con login de usuarios, API automática y sincronización en tiempo real en su plan gratuito.', useCase: 'Guardar proyectos, gastos de piso, cuentas de usuario y datos relacionales.', synergy: 'SQL + Next.js / Astro', keywords: 'supabase postgresql sql base de datos login usuarios tiempo real gastos', snippet: `const { data } = await supabase.from("proyectos").select("*");` },
  { id: 'firebase', name: 'Firebase', category: 'backend', badge: 'NoSQL & SDK Android/Web', url: 'https://firebase.google.com/', summary: 'Plataforma de Google con integración directa en Android Studio y Web para autenticación, Firestore y almacenamiento.', useCase: 'Backends rápidos para aplicaciones móviles Android y sincronización en vivo.', synergy: 'Android Studio (Java/Kotlin) + Web', keywords: 'firebase nosql auth google android movil nube tiempo real', snippet: `const snapshot = await getDocs(collection(db, "canciones"));` },
  { id: 'docker', name: 'Docker & Compose', category: 'backend', badge: 'Contenedores Aislados', url: 'https://www.docker.com/', summary: 'Ejecuta PostgreSQL, MySQL, backends en Python/Java o servicios autoalojados en contenedores limpios y reproducibles.', useCase: 'Desplegar tu propio entorno de base de datos e IA local con un comando.', synergy: 'PostgreSQL + Python + Ollama', keywords: 'docker contenedores servidor base de datos despliegue local', snippet: `docker compose up -d` },
  { id: 'ollama-ai', name: 'Ollama & Gemini API', category: 'backend', badge: 'IA Local & Cloud LLMs', url: 'https://ollama.com/', summary: 'Ejecuta modelos como Qwen Coder en local con tu tarjeta gráfica o conéctate a la API de Gemini para funciones inteligentes.', useCase: 'Generadores automáticos de tests desde PDF, asistentes de código o análisis.', synergy: 'Python + JavaScript', keywords: 'ollama gemini ia inteligencia artificial local llm asistente generador', snippet: `fetch("http://localhost:11434/api/generate", { method: "POST" });` },
  { id: 'prisma-drizzle', name: 'Drizzle / Prisma ORM', category: 'backend', badge: 'Consultas SQL Tipadas', url: 'https://orm.drizzle.team/', summary: 'Conecta tus tablas de PostgreSQL o MySQL con TypeScript ofreciendo autocompletado seguro y migraciones.', useCase: 'Trabajar con bases de datos SQL en proyectos web modernos sin errores.', synergy: 'PostgreSQL + TypeScript', keywords: 'prisma drizzle orm sql base de datos typescript', snippet: `await db.insert(proyectos).values({ titulo: "Nuevo" });` },
  { id: 'pocketbase', name: 'PocketBase', category: 'backend', badge: 'Backend Autoalojado Ligero', url: 'https://pocketbase.io/', summary: 'Todo un backend con base de datos, usuarios y panel de control dentro de un único archivo ejecutable gratuito.', useCase: 'Autoalojar proyectos personales y PWAs sin depender de servicios externos.', synergy: 'Docker + Vite / Astro', keywords: 'pocketbase backend ligero sqlite autoalojado open source', snippet: `./pocketbase serve` },

  // 7. Assets 3D, Fuentes & FX
  { id: 'blender', name: 'Blender 3D', category: 'assets', badge: 'Modelado 3D Open Source', url: 'https://www.blender.org/', summary: 'Suite completa gratuita para modelar, iluminar y exportar archivos .glb comprimidos listos para la web.', useCase: 'Crear tus propios objetos 3D personalizados para Three.js.', synergy: 'Three.js + Poly Haven', keywords: 'blender 3d modelado glb animacion texturas', snippet: `# Exportar como glTF 2.0 (.glb) con compresión Draco activada` },
  { id: 'fontshare', name: 'Fontshare & Google Fonts', category: 'assets', badge: 'Tipografías de Estudio', url: 'https://www.fontshare.com/', summary: 'Fuentes gratuitas de uso comercial (Clash Display, Satoshi, Space Grotesk) que elevan la estética visual.', useCase: 'Titulares con carácter de estudio de diseño y lectura técnica limpia.', synergy: 'Tailwind CSS + GSAP', keywords: 'fontshare fuentes tipografia diseño titulares', snippet: `font-family: 'Space Grotesk', sans-serif;` },
  { id: 'lucide-phosphor', name: 'Lucide & Phosphor Icons', category: 'assets', badge: 'Iconos SVG Animables', url: 'https://lucide.dev/', summary: 'Colecciones de iconos vectoriales consistentes y ligeros listos para personalizar color y trazo.', useCase: 'Iconografía limpia en paneles laterales, botones y tarjetas.', synergy: 'Tailwind CSS + HTML/React', keywords: 'lucide phosphor iconos svg interfaz botones', snippet: `npm install lucide` },
  { id: 'howlerjs', name: 'Howler.js & Web Audio', category: 'assets', badge: 'Audio & Streaming Web', url: 'https://howlerjs.com/', summary: 'Control total de reproducción de audio, listas musicales, efectos de interfaz y sonido espacial en la web.', useCase: 'Reproductores musicales o feedback sonoro sutil al interactuar.', synergy: 'JavaScript + Three.js', keywords: 'howler audio sonido musica streaming reproductor efectos', snippet: `const sound = new Howl({ src: ["track.mp3"] });` },
  { id: 'squoosh-gltf', name: 'Squoosh & gltf-transform', category: 'assets', badge: 'Optimización Extrema', url: 'https://squoosh.app/', summary: 'Comprime imágenes a formato AVIF/WebP y reduce el tamaño de modelos 3D para que la web vuele.', useCase: 'Asegurar carga instantánea antes de subir el proyecto a internet.', synergy: 'Astro + Three.js', keywords: 'squoosh avif webp optimizacion rendimiento velocidad', snippet: `npx @gltf-transform/cli optimize in.glb out.glb --compress draco` },
  { id: 'polyhaven-sketchfab', name: 'Poly Haven & Sketchfab', category: 'assets', badge: 'Modelos & Luces HDRI Gratis', url: 'https://polyhaven.com/', summary: 'Texturas PBR, mapas de iluminación de estudio HDRI y modelos 3D gratuitos (CC0) listos para descargar.', useCase: 'Conseguir reflejos realistas y modelos 3D para tus escenas.', synergy: 'Blender + Three.js', keywords: 'polyhaven sketchfab 3d modelos texturas hdri iluminacion gratis', snippet: `new RGBELoader().load("studio.hdr", (t) => scene.environment = t);` },

  // 8. Inspiración & Deploy
  { id: 'awwwards', name: 'Awwwards', category: 'inspiration', badge: 'Webs Premiadas a Diario', url: 'https://www.awwwards.com/', summary: 'El escaparate mundial donde se premian las webs más avanzadas en diseño, animaciones y fluidez.', useCase: 'Analizar tendencias reales para aplicarlas en tu portfolio.', synergy: 'Chrome DevTools', keywords: 'awwwards inspiracion diseño portfolio premios tendencias', snippet: `// Inspecciona las ganadoras del Site of the Day` },
  { id: 'codrops', name: 'Codrops (Tympanus)', category: 'inspiration', badge: 'Tutoriales + Código GitHub', url: 'https://tympanus.net/codrops/', summary: 'Publica tutoriales gratuitos con código descargable en GitHub sobre los efectos más punteros con GSAP y Three.js.', useCase: 'Aprender cómo se programan los efectos visuales paso a paso.', synergy: 'GSAP + Three.js + Lenis', keywords: 'codrops tutoriales efectos codigo github demos webgl', snippet: `# Todos sus artículos incluyen demo en vivo y enlace a GitHub` },
  { id: 'godly-dark', name: 'Godly.website', category: 'inspiration', badge: 'Galería en Vídeo', url: 'https://godly.website/', summary: 'Recopilación curada en vídeo de las webs más fluidas, portfolios de desarrolladores e interfaces Bento oscuras.', useCase: 'Tomar referencias rápidas de distribución y movimiento.', synergy: 'Figma + Tailwind CSS', keywords: 'godly dark design galeria inspiracion bento modo oscuro', snippet: `/* Filtra por las categorías Developer y Motion */` },
  { id: 'figma', name: 'Figma', category: 'inspiration', badge: 'Diseño UI & Simetría', url: 'https://www.figma.com/', summary: 'Herramienta clave para diseñar interfaces simétricas, definir paletas de color y exportar vectores SVG antes de programar.', useCase: 'Bocetar la estructura visual de tus apps para ir a tiro fijo en VS Code.', synergy: 'Tailwind CSS + SVG', keywords: 'figma diseño ui ux boceto prototipo svg simetria', snippet: `# Copia cualquier elemento como SVG directo al portapapeles` },
  { id: 'vercel', name: 'Vercel', category: 'inspiration', badge: 'Hosting & Deploy Gratis', url: 'https://vercel.com/', summary: 'Conecta tu repositorio de GitHub y publica tus aplicaciones web gratis con URL pública y actualización automática.', useCase: 'Alojar tu portfolio y tus aplicaciones web para enseñarlas al instante.', synergy: 'GitHub + Astro / Next.js / Vite', keywords: 'vercel hosting deploy gratis github url produccion', snippet: `vercel --prod` },
  { id: 'cloudflare-github', name: 'Cloudflare Pages & GitHub', category: 'inspiration', badge: 'CDN Ilimitado & Acciones', url: 'https://pages.cloudflare.com/', summary: 'Hosting gratuito con ancho de banda ilimitado más GitHub Actions para automatizar tareas diarias en tu repositorio.', useCase: 'Servir webs con vídeos o 3D pesados y ejecutar scripts diarios.', synergy: 'Git + GitHub Actions', keywords: 'cloudflare github pages hosting gratis cdn rapido', snippet: `git push origin main` }
];

// CLAVES DE PERSISTENCIA EN LOCALSTORAGE
const KEY_PROGRESS = 'devtree_v5_progress';
const KEY_CUSTOM_TOOLS = 'devtree_v5_custom_tools';
const KEY_SAVED_PROJECTS = 'devtree_v5_saved_projects';
const KEY_ACTIVE_PROJECT = 'devtree_v5_active_project';

// ESTADO GLOBAL DE LA APLICACIÓN
const state = {
  view: 'tree',                 // 'tree' | 'bento'
  layout: 'matrix',             // Por defecto 'matrix' con esfera central
  expandedCategories: new Set(),// Vacío al inicio = solo se ven la esfera central y las categorías
  stackFocusMode: false,        // Si es true, solo muestra las tecnologías del Stack Lab
  search: '',
  selectedToolId: null,
  recommendedIds: [],
  tools: [],
  userProgress: {},
  // Proyecto activo en curso
  currentProject: {
    id: null,
    name: '',
    description: '',
    stackIds: []
  },
  savedProjects: [],
  // Motor de cámara LERP a 60 FPS
  camera: {
    currentX: 0,
    currentY: 0,
    currentScale: 0.72,
    targetX: 0,
    targetY: 0,
    targetScale: 0.72,
    isDragging: false,
    dragStartX: 0,
    dragStartY: 0
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  await loadAllData();
  populateModalCategories();
  bindEvents();
  centerCamera(true);
  startSmoothCameraLoop();
  renderAll();
});

async function loadAllData() {
  try {
    const prog = localStorage.getItem(KEY_PROGRESS);
    if (prog) state.userProgress = JSON.parse(prog);

    const custom = localStorage.getItem(KEY_CUSTOM_TOOLS);
    const customList = custom ? JSON.parse(custom) : [];

    // Cargar las novedades descubiertas por el bot diario
    let dailyList = [];
    try {
      const res = await fetch('./daily_tools.json', { cache: 'no-store' });
      if (res.ok) {
        dailyList = await res.json();
      }
    } catch (fetchErr) {
      // Si se abre sin servidor o aún está vacío, continúa con normalidad
      dailyList = [];
    }

    // Unir catálogo base + descubrimientos diarios + herramientas manuales sin duplicar IDs
    const merged = [...INITIAL_TOOLS, ...dailyList, ...customList];
    const uniqueMap = new Map();
    merged.forEach(item => uniqueMap.set(item.id, item));
    state.tools = Array.from(uniqueMap.values());

    const savedProjs = localStorage.getItem(KEY_SAVED_PROJECTS);
    if (savedProjs) state.savedProjects = JSON.parse(savedProjs);

    const activeProj = localStorage.getItem(KEY_ACTIVE_PROJECT);
    if (activeProj) {
      state.currentProject = JSON.parse(activeProj);
      document.getElementById('projectNameInput').value = state.currentProject.name || '';
      document.getElementById('advisorInput').value = state.currentProject.description || '';
    }
  } catch (e) {
    state.tools = [...INITIAL_TOOLS];
  }
}

function persistActiveProject() {
  localStorage.setItem(KEY_ACTIVE_PROJECT, JSON.stringify(state.currentProject));
  updateHeaderProjectLabel();
}

function persistSavedProjects() {
  localStorage.setItem(KEY_SAVED_PROJECTS, JSON.stringify(state.savedProjects));
  document.getElementById('projectsCountBadge').textContent = state.savedProjects.length;
}

function updateHeaderProjectLabel() {
  const label = document.getElementById('activeProjectHeader');
  const name = state.currentProject.name.trim();
  const count = state.currentProject.stackIds.length;
  label.textContent = name
    ? `Proyecto activo: ${name} (${count} en Stack)`
    : `Proyecto en curso (${count} en Stack)`;
}

function getToolProgress(toolId) {
  return state.userProgress[toolId] || { status: 'none', notes: '' };
}

// Comprueba si una herramienta pasa los filtros activos (Búsqueda o Modo Enfoque Stack Lab)
function isToolVisibleByFilter(tool) {
  if (state.stackFocusMode) {
    return state.currentProject.stackIds.includes(tool.id);
  }
  if (state.search.trim() !== '') {
    const q = state.search.toLowerCase();
    const hay = `${tool.name} ${tool.badge} ${tool.summary} ${tool.keywords || ''}`.toLowerCase();
    return hay.includes(q);
  }
  return true;
}

// MOTOR DE CÁMARA FLUIDA LERP A 60 FPS (Punto 6)
function startSmoothCameraLoop() {
  const stage = document.getElementById('treeStage');
  const readout = document.getElementById('zoomReadout');

  function step() {
    const cam = state.camera;
    const lerpFactor = cam.isDragging ? 0.38 : 0.16;

    const dx = cam.targetX - cam.currentX;
    const dy = cam.targetY - cam.currentY;
    const ds = cam.targetScale - cam.currentScale;

    if (Math.abs(dx) > 0.05 || Math.abs(dy) > 0.05 || Math.abs(ds) > 0.0005) {
      cam.currentX += dx * lerpFactor;
      cam.currentY += dy * lerpFactor;
      cam.currentScale += ds * lerpFactor;

      stage.style.transform = `translate3d(${cam.currentX.toFixed(2)}px, ${cam.currentY.toFixed(2)}px, 0) scale(${cam.currentScale.toFixed(4)})`;
      readout.textContent = `${Math.round(cam.currentScale * 100)}%`;
    }

    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

function centerCamera(instant = false) {
  const viewport = document.getElementById('treeViewport');
  const vw = viewport.clientWidth || window.innerWidth;
  const vh = viewport.clientHeight || (window.innerHeight - 106);

  // Si la ventana flotante derecha está abierta, desplazamos ligeramente el centro hacia la izquierda para que quede simétrico en el área libre
  const isWindowOpen = document.getElementById('floatingWindow').classList.contains('open');
  const usableWidth = isWindowOpen && vw > 1000 ? vw - 410 : vw;

  const targetScale = vw < 1200 ? 0.58 : 0.72;
  const anchorY = state.layout === 'matrix' ? 880 : 1300;

  state.camera.targetScale = targetScale;
  state.camera.targetX = usableWidth / 2 - 1800 * targetScale;
  state.camera.targetY = vh / 2 - anchorY * targetScale;

  if (instant) {
    state.camera.currentScale = state.camera.targetScale;
    state.camera.currentX = state.camera.targetX;
    state.camera.currentY = state.camera.targetY;
    const stage = document.getElementById('treeStage');
    stage.style.transform = `translate3d(${state.camera.currentX}px, ${state.camera.currentY}px, 0) scale(${state.camera.currentScale})`;
  }
}

function applyZoomAtPoint(newScale, mouseX, mouseY) {
  const clamped = Math.min(1.6, Math.max(0.32, newScale));
  const ratio = clamped / state.camera.targetScale;
  state.camera.targetX = mouseX - (mouseX - state.camera.targetX) * ratio;
  state.camera.targetY = mouseY - (mouseY - state.camera.targetY) * ratio;
  state.camera.targetScale = clamped;
}

// RENDERIZADO GENERAL
function renderAll() {
  updateHeaderProjectLabel();
  renderTree();
  renderBento();
  renderStackDock();
  renderSavedProjectsList();
}

// RENDERIZADO DEL ÁRBOL (Con esfera central en todos los modos y categorías plegadas por defecto)
function renderTree() {
  const svg = document.getElementById('treeSvg');
  const nodesLayer = document.getElementById('treeNodes');
  svg.innerHTML = '';
  nodesLayer.innerHTML = '';

  const centerX = 1800;
  // En modo Matriz la esfera central se sitúa arriba en el centro (Y = 420); en los demás en el centro (Y = 1300)
  const rootY = state.layout === 'matrix' ? 420 : 1300;

  // 1. ESFERA CENTRAL (Presente también en Matriz)
  const rootEl = document.createElement('div');
  rootEl.className = 'node node-root';
  rootEl.style.left = `${centerX}px`;
  rootEl.style.top = `${rootY}px`;
  const allExpanded = state.expandedCategories.size === CATEGORIES.length;
  rootEl.innerHTML = `
    <span class="node-root-tag">CORE ATLAS</span>
    <div class="node-root-title">${state.currentProject.name ? state.currentProject.name.toUpperCase() : 'STACK PRO'}</div>
    <span class="node-root-sub">${allExpanded ? 'Clic para plegar ramas' : 'Clic para desplegar todas'}</span>
  `;
  rootEl.addEventListener('click', (e) => {
    e.stopPropagation();
    if (state.expandedCategories.size === CATEGORIES.length) {
      state.expandedCategories.clear();
    } else {
      CATEGORIES.forEach(c => state.expandedCategories.add(c.id));
    }
    renderTree();
  });
  nodesLayer.appendChild(rootEl);

  // 2. CATEGORÍAS (8 RAMAS SIMÉTRICAS)
  CATEGORIES.forEach((cat, catIdx) => {
    const allCatTools = state.tools.filter(t => t.category === cat.id);
    const visibleCatTools = allCatTools.filter(t => isToolVisibleByFilter(t));

    // Una categoría muestra sus hijos si el usuario la ha desplegado, o si hay búsqueda activa / Modo Enfoque Stack Lab
    const isExpanded =
      state.expandedCategories.has(cat.id) ||
      state.stackFocusMode ||
      state.search.trim() !== '';

    const hasVisibleItems = visibleCatTools.length > 0;

    let catX = centerX;
    let catY = rootY;
    const isLeftSide = catIdx < 4;

    if (state.layout === 'matrix') {
      // 8 columnas simétricas debajo de la esfera central
      const colOffset = (catIdx - 3.5) * 242;
      catX = centerX + colOffset;
      catY = 740;
    } else if (state.layout === 'wing') {
      // 4 ramas a la izquierda y 4 a la derecha
      const sideSign = isLeftSide ? -1 : 1;
      const rowIdx = catIdx % 4;
      const rowOffsets = [-690, -230, 230, 690];
      catX = centerX + sideSign * 420;
      catY = rootY + rowOffsets[rowIdx];
    } else if (state.layout === 'orbital') {
      const angle = (catIdx / CATEGORIES.length) * Math.PI * 2 - Math.PI / 2;
      const radiusCat = 420;
      catX = centerX + Math.cos(angle) * radiusCat;
      catY = rootY + Math.sin(angle) * radiusCat;
    }

    // Curva desde la Esfera Central hasta cada Categoría
    drawConnection(svg, centerX, rootY, catX, catY, cat.color, !hasVisibleItems, `cat-${cat.id}`, state.layout === 'matrix');

    const catEl = document.createElement('div');
    catEl.className = `node node-category ${!hasVisibleItems ? 'dimmed' : ''}`;
    catEl.style.left = `${catX}px`;
    catEl.style.top = `${catY}px`;
    catEl.style.setProperty('--cat-color', cat.color);
    catEl.innerHTML = `
      <div class="node-category-top">
        <span class="node-category-title">${cat.name}</span>
        <span class="cat-chevron">${isExpanded ? '▾' : '▸'}</span>
      </div>
      <div class="node-category-count">${visibleCatTools.length} tecnologías · ${isExpanded ? 'Ocultar' : 'Ver'}</div>
    `;

    catEl.addEventListener('click', (e) => {
      e.stopPropagation();
      if (state.expandedCategories.has(cat.id)) {
        state.expandedCategories.delete(cat.id);
      } else {
        state.expandedCategories.add(cat.id);
      }
      renderTree();
    });

    nodesLayer.appendChild(catEl);

    // Si la categoría está plegada, no dibujamos las herramientas hijas (Punto 3)
    if (!isExpanded) return;

    // 3. NODOS DE HERRAMIENTAS HIJAS
    visibleCatTools.forEach((tool, toolIdx) => {
      let toolX = catX;
      let toolY = catY;

      if (state.layout === 'matrix') {
        toolX = catX;
        toolY = catY + 115 + toolIdx * 78;
      } else if (state.layout === 'wing') {
        const sideSign = isLeftSide ? -1 : 1;
        const spreadY = (toolIdx - (visibleCatTools.length - 1) / 2) * 72;
        toolX = catX + sideSign * 410;
        toolY = catY + spreadY;
      } else if (state.layout === 'orbital') {
        const baseAngle = (catIdx / CATEGORIES.length) * Math.PI * 2 - Math.PI / 2;
        const spread = 0.55;
        const offset = visibleCatTools.length > 1
          ? ((toolIdx / (visibleCatTools.length - 1)) - 0.5) * spread
          : 0;
        const angle = baseAngle + offset;
        const radiusTool = 840;
        toolX = centerX + Math.cos(angle) * radiusTool;
        toolY = rootY + Math.sin(angle) * radiusTool;
      }

      const isRecommended = state.recommendedIds.includes(tool.id);
      const inStack = state.currentProject.stackIds.includes(tool.id);
      const edgeColor = inStack ? '#10b981' : (isRecommended ? '#fbbf24' : cat.color);

      drawConnection(svg, catX, catY, toolX, toolY, edgeColor, false, `tool-${tool.id}`, state.layout === 'matrix');

      const prog = getToolProgress(tool.id);
      const toolEl = document.createElement('div');
      toolEl.className = [
        'node node-tool',
        state.selectedToolId === tool.id ? 'selected' : '',
        isRecommended ? 'recommended' : '',
        inStack ? 'in-stack-node' : ''
      ].join(' ').trim();

      toolEl.style.left = `${toolX}px`;
      toolEl.style.top = `${toolY}px`;
      toolEl.style.setProperty('--cat-color', cat.color);

      const dotHtml = prog.status !== 'none' ? `<span class="status-dot ${prog.status}"></span>` : '';
      const recHtml = isRecommended ? `<span class="rec-star">★</span>` : '';

      toolEl.innerHTML = `
        <div class="node-tool-top">
          <span class="node-tool-name">${tool.name}</span>
          <div class="node-tool-actions">
            ${recHtml}
            ${dotHtml}
            <button type="button" class="node-stack-btn ${inStack ? 'in-stack' : ''}">
              ${inStack ? '✓S' : '+S'}
            </button>
          </div>
        </div>
        <div class="node-tool-badge">${tool.badge}</div>
      `;

      toolEl.addEventListener('mouseenter', () => {
        svg.querySelectorAll(`[data-edge="tool-${tool.id}"], [data-edge="cat-${cat.id}"]`).forEach(p => p.classList.add('edge-highlight'));
      });
      toolEl.addEventListener('mouseleave', () => {
        svg.querySelectorAll('.edge-highlight').forEach(p => p.classList.remove('edge-highlight'));
      });

      toolEl.querySelector('.node-stack-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleToolInStack(tool.id);
      });

      toolEl.addEventListener('click', (e) => {
        e.stopPropagation();
        inspectTool(tool.id);
      });

      nodesLayer.appendChild(toolEl);
    });
  });
}

function drawConnection(svg, x1, y1, x2, y2, color, isDimmed, edgeKey, isVerticalFlow) {
  const dx = (x2 - x1) * 0.5;
  const dy = (y2 - y1) * 0.5;

  const d = isVerticalFlow
    ? `M ${x1} ${y1} C ${x1} ${y1 + dy}, ${x2} ${y2 - dy}, ${x2} ${y2}`
    : `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', d);
  path.setAttribute('stroke', color);
  path.setAttribute('class', 'edge-base');
  path.setAttribute('data-edge', edgeKey);
  if (isDimmed) path.style.opacity = '0.06';
  svg.appendChild(path);
}

// RENDERIZADO CUADRÍCULA BENTO
function renderBento() {
  const container = document.getElementById('bentoContainer');
  container.innerHTML = '';

  CATEGORIES.forEach(cat => {
    const tools = state.tools.filter(t => t.category === cat.id && isToolVisibleByFilter(t));
    if (tools.length === 0) return;

    const group = document.createElement('div');
    group.innerHTML = `
      <div class="bento-group-header">
        <span class="bento-group-dot" style="background:${cat.color}"></span>
        <h3 class="bento-group-title">${cat.name}</h3>
      </div>
      <div class="bento-grid"></div>
    `;

    const grid = group.querySelector('.bento-grid');
    tools.forEach(tool => {
      const inStack = state.currentProject.stackIds.includes(tool.id);
      const isRec = state.recommendedIds.includes(tool.id);

      const card = document.createElement('article');
      card.className = 'bento-card';
      card.style.setProperty('--cat-color', cat.color);
      card.innerHTML = `
        <div class="bento-card-header">
          <div class="bento-card-title">${isRec ? '★ ' : ''}${tool.name}</div>
          <span class="bento-card-badge">${tool.badge}</span>
        </div>
        <p class="bento-card-summary">${tool.summary}</p>
        <div class="bento-card-footer">
          <span>Clic para ver código</span>
          <button type="button" class="node-stack-btn ${inStack ? 'in-stack' : ''}">
            ${inStack ? '✓ En Stack' : '+ Stack'}
          </button>
        </div>
      `;

      card.querySelector('.node-stack-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleToolInStack(tool.id);
      });
      card.addEventListener('click', () => inspectTool(tool.id));
      grid.appendChild(card);
    });

    container.appendChild(group);
  });
}

// MOTOR DEL ASESOR INTELIGENTE DE PROYECTOS (Punto 2)
function runProjectAdvisor(rawText) {
  const text = rawText.toLowerCase().trim();
  state.currentProject.description = rawText.trim();
  persistActiveProject();

  const container = document.getElementById('advisorResultsContainer');
  const btnPassAll = document.getElementById('btnPassAllToStack');

  if (!text) {
    state.recommendedIds = [];
    btnPassAll.style.display = 'none';
    container.innerHTML = `<p class="empty-hint">Describe tu proyecto arriba y pulsa <strong>Recomendar Tecnologías</strong>.</p>`;
    renderAll();
    return;
  }

  const intentRules = [
    {
      match: ['portfolio', 'awwwards', 'landing', 'fluida', 'animada', 'animaciones', 'creativa', 'scroll', 'estudio'],
      boostIds: ['lang-js', 'lang-ts', 'gsap', 'scrolltrigger', 'lenis', 'astro', 'tailwind', 'fontshare', 'vercel']
    },
    {
      match: ['3d', 'webgl', 'modelo', 'modelos', 'shaders', 'particulas', 'blender', 'spline', 'inmersiva'],
      boostIds: ['lang-js', 'lang-sql-glsl', 'threejs', 'r3f', 'spline', 'blender', 'polyhaven-sketchfab', 'squoosh-gltf']
    },
    {
      match: ['app', 'pwa', 'aplicacion', 'gastos', 'piso', 'tareas', 'usuarios', 'login', 'sql', 'base de datos', 'fullstack'],
      boostIds: ['lang-ts', 'lang-js', 'lang-sql-glsl', 'nextjs', 'tailwind', 'shadcn-radix', 'motion-dev', 'supabase', 'prisma-drizzle']
    },
    {
      match: ['movil', 'android', 'java', 'kotlin', 'musica', 'streaming', 'reproductor', 'audio'],
      boostIds: ['lang-java', 'lang-kotlin', 'android-pwa', 'firebase', 'howlerjs', 'rive']
    },
    {
      match: ['ia', 'inteligencia artificial', 'local', 'ollama', 'pdf', 'test', 'cine', 'video', 'timeline', 'python', 'docker'],
      boostIds: ['lang-python', 'lang-ts', 'ollama-ai', 'docker', 'supabase', 'sveltekit', 'theatrejs']
    }
  ];

  const scores = new Map();
  state.tools.forEach(t => scores.set(t.id, 0));

  intentRules.forEach(rule => {
    const hits = rule.match.filter(w => text.includes(w)).length;
    if (hits > 0) {
      rule.boostIds.forEach(id => scores.set(id, (scores.get(id) || 0) + hits * 4));
    }
  });

  const words = text.split(/\s+/).filter(w => w.length > 2);
  state.tools.forEach(tool => {
    const hay = `${tool.name} ${tool.badge} ${tool.summary} ${tool.useCase} ${tool.keywords || ''}`.toLowerCase();
    words.forEach(w => {
      if (hay.includes(w)) scores.set(tool.id, (scores.get(tool.id) || 0) + 3);
    });
  });

  let ranked = state.tools
    .map(t => ({ tool: t, score: scores.get(t.id) || 0 }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score);

  if (ranked.length === 0) {
    const def = ['lang-ts', 'lang-js', 'gsap', 'lenis', 'astro', 'tailwind', 'supabase', 'vercel'];
    ranked = state.tools.filter(t => def.includes(t.id)).map(t => ({ tool: t, score: 5 }));
  }

  const topTools = ranked.slice(0, 10).map(r => r.tool);
  state.recommendedIds = topTools.map(t => t.id);

  // Abrir automáticamente en el árbol las ramas que contienen las recomendaciones
  state.expandedCategories.clear();
  topTools.forEach(t => state.expandedCategories.add(t.category));

  btnPassAll.style.display = 'inline-flex';
  container.innerHTML = '';

  topTools.forEach(tool => {
    const inStack = state.currentProject.stackIds.includes(tool.id);
    const row = document.createElement('div');
    row.className = 'rec-item';
    row.innerHTML = `
      <div class="rec-item-info">
        <span class="rec-item-name">★ ${tool.name}</span>
        <span class="rec-item-sub">${tool.badge}</span>
      </div>
      <button type="button" class="node-stack-btn ${inStack ? 'in-stack' : ''}">
        ${inStack ? '✓ En Stack' : '+ Stack'}
      </button>
    `;

    row.querySelector('.node-stack-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleToolInStack(tool.id);
      runProjectAdvisor(rawText);
    });

    row.addEventListener('click', () => inspectTool(tool.id));
    container.appendChild(row);
  });

  renderAll();
}

// STACK LAB Y MODO ENFOQUE
function toggleToolInStack(toolId) {
  const list = state.currentProject.stackIds;
  const idx = list.indexOf(toolId);
  if (idx >= 0) {
    list.splice(idx, 1);
  } else {
    list.push(toolId);
    const tool = state.tools.find(t => t.id === toolId);
    if (tool) state.expandedCategories.add(tool.category);
  }
  persistActiveProject();
  if (state.selectedToolId === toolId) updateInspectorStackBtn(toolId);
  renderAll();
}

function renderStackDock() {
  const chipsContainer = document.getElementById('stackDockChips');
  const countBadge = document.getElementById('stackCountBadge');
  const focusBtn = document.getElementById('btnToggleStackFocus');

  const ids = state.currentProject.stackIds;
  countBadge.textContent = `${ids.length} en el proyecto`;
  focusBtn.classList.toggle('active', state.stackFocusMode);
  focusBtn.textContent = state.stackFocusMode ? '🎯 Viendo solo mi Stack (Ver todo)' : '🎯 Ver solo mi Stack';

  if (ids.length === 0) {
    chipsContainer.innerHTML = `<span class="stack-dock-empty">Usa el Asesor o pulsa "+S" en cualquier tecnología para armar el Stack de tu proyecto</span>`;
    return;
  }

  chipsContainer.innerHTML = '';
  ids.forEach(id => {
    const tool = state.tools.find(t => t.id === id);
    if (!tool) return;
    const chip = document.createElement('span');
    chip.className = 'stack-chip';
    chip.innerHTML = `${tool.name} <button type="button">✕</button>`;
    chip.querySelector('button').addEventListener('click', () => toggleToolInStack(id));
    chipsContainer.appendChild(chip);
  });
}

// GESTIÓN DE PROYECTOS GUARDADOS (Punto 5)
function saveCurrentProjectToLibrary() {
  const nameInput = document.getElementById('projectNameInput');
  const descInput = document.getElementById('advisorInput');

  let name = nameInput.value.trim();
  if (!name) {
    name = `Proyecto #${state.savedProjects.length + 1}`;
    nameInput.value = name;
  }

  state.currentProject.name = name;
  state.currentProject.description = descInput.value.trim();

  if (!state.currentProject.id) {
    state.currentProject.id = 'proj_' + Date.now();
  }

  const record = {
    id: state.currentProject.id,
    name: state.currentProject.name,
    description: state.currentProject.description,
    stackIds: [...state.currentProject.stackIds],
    updatedAt: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })
  };

  const existingIdx = state.savedProjects.findIndex(p => p.id === record.id);
  if (existingIdx >= 0) {
    state.savedProjects[existingIdx] = record;
  } else {
    state.savedProjects.unshift(record);
  }

  persistActiveProject();
  persistSavedProjects();
  renderAll();
  switchFloatingTab('projects');
}

function loadSavedProject(projId) {
  const found = state.savedProjects.find(p => p.id === projId);
  if (!found) return;

  state.currentProject = {
    id: found.id,
    name: found.name,
    description: found.description,
    stackIds: [...found.stackIds]
  };

  document.getElementById('projectNameInput').value = found.name;
  document.getElementById('advisorInput').value = found.description;

  // Desplegar automáticamente las ramas de las tecnologías que usa este proyecto
  state.expandedCategories.clear();
  state.currentProject.stackIds.forEach(id => {
    const t = state.tools.find(item => item.id === id);
    if (t) state.expandedCategories.add(t.category);
  });

  persistActiveProject();
  renderAll();
}

function startNewBlankProject() {
  state.currentProject = {
    id: null,
    name: '',
    description: '',
    stackIds: []
  };
  state.recommendedIds = [];
  state.stackFocusMode = false;
  state.expandedCategories.clear();

  document.getElementById('projectNameInput').value = '';
  document.getElementById('advisorInput').value = '';
  document.getElementById('advisorResultsContainer').innerHTML = `<p class="empty-hint">Describe tu nuevo proyecto arriba.</p>`;
  document.getElementById('btnPassAllToStack').style.display = 'none';

  persistActiveProject();
  renderAll();
  switchFloatingTab('advisor');
}

function deleteSavedProject(projId) {
  state.savedProjects = state.savedProjects.filter(p => p.id !== projId);
  if (state.currentProject.id === projId) {
    state.currentProject.id = null;
  }
  persistSavedProjects();
  persistActiveProject();
  renderSavedProjectsList();
}

function renderSavedProjectsList() {
  const listEl = document.getElementById('savedProjectsList');
  document.getElementById('projectsCountBadge').textContent = state.savedProjects.length;

  if (state.savedProjects.length === 0) {
    listEl.innerHTML = `<p class="empty-hint">Aún no has guardado ningún proyecto. Arma un Stack con el Asesor y pulsa Guardar.</p>`;
    return;
  }

  listEl.innerHTML = '';
  state.savedProjects.forEach(proj => {
    const isCurrent = state.currentProject.id === proj.id;
    const toolNames = proj.stackIds
      .map(id => state.tools.find(t => t.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const card = document.createElement('div');
    card.className = `saved-project-card ${isCurrent ? 'active-proj' : ''}`;
    card.innerHTML = `
      <div class="sp-header">
        <span class="sp-title">${proj.name}</span>
        <span class="sp-date">${proj.updatedAt}</span>
      </div>
      <p class="sp-desc">${proj.description || 'Sin descripción'}</p>
      <p class="sp-desc"><strong>Stack (${proj.stackIds.length}):</strong> ${toolNames || 'Ninguna seleccionada'}</p>
      <div class="sp-actions">
        <button type="button" class="btn-primary btn-xs btn-load-proj">${isCurrent ? '✓ Proyecto cargado' : 'Cargar proyecto'}</button>
        <button type="button" class="btn-ghost btn-xs btn-focus-proj">Ver solo su Stack</button>
        <button type="button" class="btn-ghost btn-xs btn-del-proj">Eliminar</button>
      </div>
    `;

    card.querySelector('.btn-load-proj').addEventListener('click', () => loadSavedProject(proj.id));
    card.querySelector('.btn-focus-proj').addEventListener('click', () => {
      loadSavedProject(proj.id);
      state.stackFocusMode = true;
      renderAll();
    });
    card.querySelector('.btn-del-proj').addEventListener('click', () => deleteSavedProject(proj.id));

    listEl.appendChild(card);
  });
}

// FICHA TÉCNICA / INSPECTOR EN LA VENTANA FLOTANTE
function inspectTool(toolId) {
  const tool = state.tools.find(t => t.id === toolId);
  if (!tool) return;

  state.selectedToolId = toolId;
  const cat = CATEGORIES.find(c => c.id === tool.category);
  const prog = getToolProgress(toolId);

  document.getElementById('inspectorEmptyState').style.display = 'none';
  document.getElementById('inspectorContent').style.display = 'flex';

  document.getElementById('inspCategory').textContent = cat ? cat.name : 'TECNOLOGÍA';
  document.getElementById('inspCategory').style.color = cat ? cat.color : '#38bdf8';
  document.getElementById('inspTitle').textContent = tool.name;
  document.getElementById('inspBadge').textContent = tool.badge;
  document.getElementById('inspUrl').href = tool.url;
  document.getElementById('inspSummary').textContent = tool.summary;
  document.getElementById('inspUseCase').textContent = tool.useCase;
  document.getElementById('inspSynergy').textContent = tool.synergy || 'Stack Web & Multiplataforma';
  document.getElementById('inspSnippet').textContent = tool.snippet || `// Documentación en ${tool.url}`;
  document.getElementById('inspNotes').value = prog.notes || '';

  document.querySelectorAll('#inspStatusGroup .status-opt').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.status === prog.status);
  });

  updateInspectorStackBtn(toolId);

  const fw = document.getElementById('floatingWindow');
  fw.classList.add('open');
  switchFloatingTab('inspector');
  renderTree();
}

function updateInspectorStackBtn(toolId) {
  const btn = document.getElementById('btnToggleStackFromInspector');
  const inStack = state.currentProject.stackIds.includes(toolId);
  btn.textContent = inStack ? '✓ Quitar del Stack del Proyecto' : '+ Añadir al Stack del Proyecto';
}

function switchFloatingTab(tabName) {
  document.querySelectorAll('.fw-tab').forEach(b => b.classList.toggle('active', b.dataset.tab === tabName));
  document.getElementById('paneAdvisor').classList.toggle('active', tabName === 'advisor');
  document.getElementById('paneProjects').classList.toggle('active', tabName === 'projects');
  document.getElementById('paneInspector').classList.toggle('active', tabName === 'inspector');
}

function populateModalCategories() {
  const select = document.getElementById('toolCategory');
  select.innerHTML = CATEGORIES.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
}

// ENLACE DE EVENTOS
function bindEvents() {
  // Conmutador Árbol / Bento
  document.getElementById('btnViewTree').addEventListener('click', () => {
    state.view = 'tree';
    document.getElementById('btnViewTree').classList.add('active');
    document.getElementById('btnViewBento').classList.remove('active');
    document.getElementById('treeViewport').classList.add('active');
    document.getElementById('bentoViewport').classList.remove('active');
  });

  document.getElementById('btnViewBento').addEventListener('click', () => {
    state.view = 'bento';
    document.getElementById('btnViewBento').classList.add('active');
    document.getElementById('btnViewTree').classList.remove('active');
    document.getElementById('bentoViewport').classList.add('active');
    document.getElementById('treeViewport').classList.remove('active');
  });

  // Abrir / Cerrar Ventana Flotante Derecha
  const fw = document.getElementById('floatingWindow');
  document.getElementById('btnToggleWindow').addEventListener('click', () => {
    fw.classList.toggle('open');
  });
  document.getElementById('btnCloseWindow').addEventListener('click', () => {
    fw.classList.remove('open');
  });

  document.querySelectorAll('.fw-tab').forEach(tabBtn => {
    tabBtn.addEventListener('click', () => switchFloatingTab(tabBtn.dataset.tab));
  });

  // Disposiciones del Árbol
  const setLayout = (mode) => {
    state.layout = mode;
    document.getElementById('btnLayoutMatrix').classList.toggle('active', mode === 'matrix');
    document.getElementById('btnLayoutWing').classList.toggle('active', mode === 'wing');
    document.getElementById('btnLayoutOrbital').classList.toggle('active', mode === 'orbital');
    renderTree();
    centerCamera(false);
  };

  document.getElementById('btnLayoutMatrix').addEventListener('click', () => setLayout('matrix'));
  document.getElementById('btnLayoutWing').addEventListener('click', () => setLayout('wing'));
  document.getElementById('btnLayoutOrbital').addEventListener('click', () => setLayout('orbital'));

  // Desplegar / Plegar todas las ramas
  document.getElementById('btnExpandAll').addEventListener('click', () => {
    CATEGORIES.forEach(c => state.expandedCategories.add(c.id));
    renderTree();
  });

  document.getElementById('btnCollapseAll').addEventListener('click', () => {
    state.expandedCategories.clear();
    state.stackFocusMode = false;
    renderAll();
    centerCamera(false);
  });

  // Búsqueda
  document.getElementById('searchInput').addEventListener('input', (e) => {
    state.search = e.target.value;
    renderAll();
  });

  // Arrastre y Zoom LERP a 60 FPS en el lienzo
  const treeViewport = document.getElementById('treeViewport');

  treeViewport.addEventListener('mousedown', (e) => {
    if (e.target.closest('.canvas-hud') || e.target.closest('.node')) return;
    state.camera.isDragging = true;
    state.camera.dragStartX = e.clientX - state.camera.targetX;
    state.camera.dragStartY = e.clientY - state.camera.targetY;
    treeViewport.classList.add('dragging');
  });

  window.addEventListener('mousemove', (e) => {
    if (!state.camera.isDragging) return;
    state.camera.targetX = e.clientX - state.camera.dragStartX;
    state.camera.targetY = e.clientY - state.camera.dragStartY;
  });

  window.addEventListener('mouseup', () => {
    state.camera.isDragging = false;
    treeViewport.classList.remove('dragging');
  });

  treeViewport.addEventListener('wheel', (e) => {
    e.preventDefault();
    const rect = treeViewport.getBoundingClientRect();
    const factor = e.deltaY < 0 ? 1.1 : 0.9;
    applyZoomAtPoint(state.camera.targetScale * factor, e.clientX - rect.left, e.clientY - rect.top);
  }, { passive: false });

  document.getElementById('btnZoomIn').addEventListener('click', () => {
    applyZoomAtPoint(state.camera.targetScale * 1.18, treeViewport.clientWidth / 2, treeViewport.clientHeight / 2);
  });
  document.getElementById('btnZoomOut').addEventListener('click', () => {
    applyZoomAtPoint(state.camera.targetScale * 0.84, treeViewport.clientWidth / 2, treeViewport.clientHeight / 2);
  });
  document.getElementById('btnResetCamera').addEventListener('click', () => centerCamera(false));

  // Eventos del Asesor de Proyectos
  document.getElementById('projectNameInput').addEventListener('input', (e) => {
    state.currentProject.name = e.target.value;
    persistActiveProject();
    renderTree();
  });

  document.getElementById('btnRunAdvisor').addEventListener('click', () => {
    runProjectAdvisor(document.getElementById('advisorInput').value);
  });

  document.getElementById('btnClearAdvisor').addEventListener('click', () => {
    document.getElementById('advisorInput').value = '';
    runProjectAdvisor('');
  });

  document.querySelectorAll('.preset-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.getElementById('projectNameInput').value = chip.dataset.name;
      document.getElementById('advisorInput').value = chip.dataset.prompt;
      state.currentProject.name = chip.dataset.name;
      runProjectAdvisor(chip.dataset.prompt);
    });
  });

  document.getElementById('btnPassAllToStack').addEventListener('click', () => {
    state.recommendedIds.forEach(id => {
      if (!state.currentProject.stackIds.includes(id)) {
        state.currentProject.stackIds.push(id);
      }
    });
    persistActiveProject();
    renderAll();
  });

  // Eventos de Guardado de Proyectos
  document.getElementById('btnSaveProjectQuick').addEventListener('click', saveCurrentProjectToLibrary);
  document.getElementById('btnSaveCurrentProjectFull').addEventListener('click', saveCurrentProjectToLibrary);
  document.getElementById('btnSaveStackAsProject').addEventListener('click', () => {
    fw.classList.add('open');
    saveCurrentProjectToLibrary();
  });
  document.getElementById('btnNewBlankProject').addEventListener('click', startNewBlankProject);

  // Eventos del Stack Lab Inferior
  document.getElementById('btnToggleStackFocus').addEventListener('click', () => {
    if (state.currentProject.stackIds.length === 0 && !state.stackFocusMode) {
      alert('Añade primero al menos una tecnología a tu Stack Lab (o usa el Asesor) para activar el Modo Enfoque.');
      return;
    }
    state.stackFocusMode = !state.stackFocusMode;
    renderAll();
  });

  document.getElementById('btnCopyStackCmd').addEventListener('click', () => {
    const tools = state.currentProject.stackIds.map(id => state.tools.find(t => t.id === id)).filter(Boolean);
    const title = state.currentProject.name || 'Mi Proyecto';
    const text = `# ${title}\n` + tools.map(t => `- ${t.name} (${t.badge}): ${t.url}`).join('\n');
    navigator.clipboard.writeText(text);
    const btn = document.getElementById('btnCopyStackCmd');
    btn.textContent = '¡Copiado!';
    setTimeout(() => { btn.textContent = 'Copiar Lista'; }, 1400);
  });

  document.getElementById('btnClearStack').addEventListener('click', () => {
    state.currentProject.stackIds = [];
    state.stackFocusMode = false;
    persistActiveProject();
    renderAll();
  });

  // Eventos del Inspector
  document.getElementById('btnToggleStackFromInspector').addEventListener('click', () => {
    if (state.selectedToolId) toggleToolInStack(state.selectedToolId);
  });

  document.querySelectorAll('#inspStatusGroup .status-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!state.selectedToolId) return;
      const cur = getToolProgress(state.selectedToolId);
      state.userProgress[state.selectedToolId] = { ...cur, status: btn.dataset.status };
      localStorage.setItem(KEY_PROGRESS, JSON.stringify(state.userProgress));
      inspectTool(state.selectedToolId);
    });
  });

  document.getElementById('inspNotes').addEventListener('input', (e) => {
    if (!state.selectedToolId) return;
    const cur = getToolProgress(state.selectedToolId);
    state.userProgress[state.selectedToolId] = { ...cur, notes: e.target.value };
    localStorage.setItem(KEY_PROGRESS, JSON.stringify(state.userProgress));
  });

  document.getElementById('btnCopyCode').addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById('inspSnippet').textContent);
    const btn = document.getElementById('btnCopyCode');
    btn.textContent = '¡Copiado!';
    setTimeout(() => { btn.textContent = 'Copiar'; }, 1400);
  });

  // Modal Añadir Tecnología
  const modal = document.getElementById('modalBackdrop');
  document.getElementById('btnOpenModal').addEventListener('click', () => modal.classList.add('open'));
  document.getElementById('btnCloseModal').addEventListener('click', () => modal.classList.remove('open'));
  document.getElementById('btnCancelModal').addEventListener('click', () => modal.classList.remove('open'));

  document.getElementById('addToolForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const newTool = {
      id: 'custom_' + Date.now(),
      name: document.getElementById('toolName').value.trim(),
      category: document.getElementById('toolCategory').value,
      badge: document.getElementById('toolBadge').value.trim(),
      url: document.getElementById('toolUrl').value.trim(),
      summary: document.getElementById('toolSummary').value.trim(),
      useCase: document.getElementById('toolUseCase').value.trim(),
      synergy: document.getElementById('toolSynergy').value.trim() || 'Stack Personalizado',
      keywords: document.getElementById('toolKeywords').value.trim(),
      snippet: document.getElementById('toolSnippet').value.trim()
    };

    state.tools.push(newTool);
    const savedCustom = localStorage.getItem(KEY_CUSTOM_TOOLS);
    const list = savedCustom ? JSON.parse(savedCustom) : [];
    list.push(newTool);
    localStorage.setItem(KEY_CUSTOM_TOOLS, JSON.stringify(list));

    state.expandedCategories.add(newTool.category);
    e.target.reset();
    modal.classList.remove('open');
    renderAll();
    inspectTool(newTool.id);
  });

  // Exportar Backup JSON
  document.getElementById('btnExportJson').addEventListener('click', () => {
    const data = {
      exportedAt: new Date().toISOString(),
      savedProjects: state.savedProjects,
      userProgress: state.userProgress,
      tools: state.tools
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'devtree-studio-backup.json';
    a.click();
    URL.revokeObjectURL(url);
  });
}