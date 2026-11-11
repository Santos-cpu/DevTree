// 8 RAMAS PRINCIPALES
const CATEGORIES = [
  { id: 'languages', name: 'Lenguajes de Código', color: '#fbbf24', description: 'Lenguajes clave en desarrollo web, multiplataforma, datos y GPU.' },
  { id: 'motion', name: 'Animación & Scroll', color: '#38bdf8', description: 'Líneas de tiempo, scroll inercial y transiciones fluidas a 60 FPS.' },
  { id: 'webgl', name: '3D, WebGL & Shaders', color: '#a855f7', description: 'Renderizado 3D en navegador, iluminación y efectos en tarjeta gráfica.' },
  { id: 'vector', name: 'UI Creativa & Físicas', color: '#ec4899', description: 'Sistemas Bento, máquinas de estados vectoriales y colisiones 2D.' },
  { id: 'frameworks', name: 'Frameworks & Base', color: '#10b981', description: 'Arquitecturas web y móviles de alto rendimiento.' },
  { id: 'backend', name: 'Backend, Datos & IA', color: '#06b6d4', description: 'Bases de datos SQL/NoSQL, contenedores Docker e IA local/cloud.' },
  { id: 'assets', name: 'Assets 3D, Fuentes & FX', color: '#f97316', description: 'Modelado 3D, tipografías de estudio, iconos y compresión.' },
  { id: 'inspiration', name: 'Inspiración & Deploy', color: '#6366f1', description: 'Galerías premiadas, demos con código y hosting gratuito.' }
];

// CATÁLOGO BASE VERIFICADO DE 48 TECNOLOGÍAS
const INITIAL_TOOLS = [
  // 1. Lenguajes
  { id: 'lang-js', name: 'JavaScript (ES2026)', category: 'languages', badge: 'Frontend & Web Core', url: 'https://developer.mozilla.org/es/docs/Web/JavaScript', summary: 'El lenguaje nativo del navegador. Controla el DOM, animaciones con GSAP, escenas 3D en WebGL y lógica cliente-servidor.', useCase: 'Webs interactivas, PWAs y experiencias animadas a medida.', synergy: 'HTML + CSS + GSAP + Three.js', keywords: 'javascript js web frontend dom animaciones interactivo navegador pwa', snippet: `const data = await (await fetch("/api/items")).json();` },
  { id: 'lang-ts', name: 'TypeScript', category: 'languages', badge: 'Tipado Estático Pro', url: 'https://www.typescriptlang.org/', summary: 'Superconjunto de JavaScript con tipos estáticos e interfaces que detecta errores al instante y mejora el autocompletado en VS Code.', useCase: 'Proyectos escalables con Astro, Next.js, React o arquitecturas en equipo.', synergy: 'Next.js + Astro + Supabase', keywords: 'typescript ts tipado escalable react nextjs astro empresas fullstack', snippet: `interface Proyecto { id: string; nombre: string; stack: string[]; }` },
  { id: 'lang-python', name: 'Python', category: 'languages', badge: 'IA, Backend & Automatización', url: 'https://www.python.org/', summary: 'El lenguaje de referencia para inteligencia artificial, lectura de documentos PDF, scripts automáticos y APIs rápidas.', useCase: 'Conectar modelos locales en Ollama, la API de Gemini o bots diarios.', synergy: 'FastAPI + Ollama + Docker', keywords: 'python ia inteligencia artificial backend api datos pdf scripts', snippet: `@app.get("/analizar")\ndef run(q: str): return {"resultado": q}` },
  { id: 'lang-java', name: 'Java', category: 'languages', badge: 'Multiplataforma & Android', url: 'https://dev.java/', summary: 'Lenguaje robusto orientado a objetos, pilar del desarrollo multiplataforma (DAM), apps nativas Android y servidores empresariales.', useCase: 'Aplicaciones Android en Android Studio, software de escritorio y backends.', synergy: 'Android Studio + Firebase + PostgreSQL', keywords: 'java android movil multiplataforma dam escritorio backend', snippet: `public record Herramienta(String nombre, String categoria) {}` },
  { id: 'lang-kotlin', name: 'Kotlin', category: 'languages', badge: 'Android & Multiplatform', url: 'https://kotlinlang.org/', summary: 'Lenguaje moderno y conciso 100% interoperable con Java, estándar oficial para Android y Kotlin Multiplatform.', useCase: 'Aplicaciones móviles modernas con menos código y seguridad frente a nulos.', synergy: 'Android Studio + Jetpack Compose + Firebase', keywords: 'kotlin android movil multiplataforma apps interfaz', snippet: `val destacadas = lista.filter { it.esRecomendada }` },
  { id: 'lang-sql-glsl', name: 'SQL & GLSL', category: 'languages', badge: 'Datos Relacionales & Shaders GPU', url: 'https://www.postgresql.org/', summary: 'SQL estructura bases de datos relacionales (PostgreSQL/MySQL) y GLSL programa efectos visuales directamente en la tarjeta gráfica.', useCase: 'SQL para usuarios y cuentas; GLSL para fondos líquidos y ondas 3D.', synergy: 'PostgreSQL + Supabase + Three.js', keywords: 'sql base de datos postgres mysql glsl shaders gpu 3d', snippet: `SELECT nombre, categoria FROM tools WHERE activa = true;` },

  // 2. Animación & Scroll
  { id: 'gsap', name: 'GSAP 3.13+ (Gratis)', category: 'motion', badge: 'Timelines Profesionales', url: 'https://gsap.com/', summary: 'El motor estándar de la industria para animación web avanzada. Ahora 100% gratuito incluyendo SplitText, MorphSVG y ScrollTrigger.', useCase: 'Coreografías de carga, textos animados letra a letra y físicas de interfaz.', synergy: 'Lenis + ScrollTrigger + Three.js', keywords: 'gsap animacion timelines texto fluido awwwards portfolio landing', snippet: `gsap.to(".rama", { x: 20, duration: 0.4, ease: "power3.out" });` },
  { id: 'scrolltrigger', name: 'ScrollTrigger', category: 'motion', badge: 'Scrollytelling', url: 'https://gsap.com/docs/v3/Plugins/ScrollTrigger/', summary: 'Sincroniza cualquier línea de tiempo de GSAP con la rueda del ratón y permite fijar secciones en pantalla mientras avanzan.', useCase: 'Galerías de proyectos que se desplazan en horizontal al bajar por la web.', synergy: 'GSAP + Lenis Smooth Scroll', keywords: 'scrolltrigger scroll horizontal pin narrativo portfolio animacion', snippet: `ScrollTrigger.create({ trigger: ".panel", pin: true, scrub: 1 });` },
  { id: 'lenis', name: 'Lenis Smooth Scroll', category: 'motion', badge: 'Scroll Inercial Ligero', url: 'https://lenis.darkroom.engineering/', summary: 'Suaviza el desplazamiento de la página aportando peso e inercia orgánica sin romper elementos sticky ni el scroll nativo.', useCase: 'Dar sensación de fluidez de estudio a cualquier portfolio o landing page.', synergy: 'GSAP + Astro + Next.js', keywords: 'lenis smooth scroll suave fluido inercia awwwards', snippet: `const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });` },
  { id: 'motion-dev', name: 'Motion (Framer)', category: 'motion', badge: 'Físicas de Muelles & Layout', url: 'https://motion.dev/', summary: 'Motor declarativo para React y JS con físicas de muelles reales, gestos táctiles y transiciones automáticas de layout.', useCase: 'Rejillas Bento y paneles que se reordenan suavemente al filtrar.', synergy: 'React + Next.js + Tailwind CSS', keywords: 'motion framer react fisicas muelles layout tarjetas bento', snippet: `<motion.div layout whileHover={{ scale: 1.03 }} />` },
  { id: 'animejs', name: 'Anime.js v4', category: 'motion', badge: 'Trazos SVG & Cuadrículas', url: 'https://animejs.com/', summary: 'Librería modular ultraligera ideal para animar rutas vectoriales SVG, partículas y efectos escalonados en cuadrícula.', useCase: 'Animar grafos conectados, iconos técnicos y contadores numéricos.', synergy: 'Vanilla JS + SVG + Vite', keywords: 'animejs svg ligero animacion nodos', snippet: `anime({ targets: "path", strokeDashoffset: [anime.setDashoffset, 0] });` },
  { id: 'barba-vt', name: 'Barba.js & View Transitions', category: 'motion', badge: 'Transiciones entre Páginas', url: 'https://barba.js.org/', summary: 'Transforma la navegación entre páginas en transiciones continuas y morfismos visuales sin recargas en blanco.', useCase: 'Hacer que la miniatura de un proyecto crezca hasta convertirse en su cabecera.', synergy: 'Astro + GSAP + CSS Moderno', keywords: 'transiciones pagina barba view transitions spa navegacion', snippet: `document.startViewTransition(() => cambiarContenido());` },

  // 3. 3D, WebGL & Shaders
  { id: 'threejs', name: 'Three.js', category: 'webgl', badge: 'Motor 3D WebGL / WebGPU', url: 'https://threejs.org/', summary: 'La librería principal para renderizar escenarios 3D, modelos GLB, luces realistas y shaders personalizados en el navegador.', useCase: 'Fondos 3D interactivos y objetos que reaccionan al movimiento del cursor.', synergy: 'Blender + GSAP + Vite', keywords: 'threejs 3d webgl webgpu modelos escena interactivo particulas', snippet: `const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });` },
  { id: 'r3f', name: 'React Three Fiber', category: 'webgl', badge: 'Ecosistema 3D en React', url: 'https://r3f.docs.pmnd.rs/', summary: 'Conecta Three.js con React mediante componentes declarativos y utilidades listas para reflejos, cámaras y controles (Drei).', useCase: 'Vincular escenas 3D directamente con el estado de tu interfaz.', synergy: 'React + Three.js + Motion', keywords: 'r3f react three fiber drei 3d componentes', snippet: `<Canvas><Float><mesh><torusKnotGeometry /></mesh></Float></Canvas>` },
  { id: 'spline', name: 'Spline 3D', category: 'webgl', badge: 'Diseño 3D Visual', url: 'https://spline.design/', summary: 'Editor visual en el navegador para diseñar escenas 3D interactivas con materiales cristal o neón e incrustarlas al instante.', useCase: 'Añadir un elemento 3D interactivo en tu portada en cuestión de minutos.', synergy: 'Astro + HTML + React', keywords: 'spline 3d visual rapido interactivo diseño portada', snippet: `<spline-viewer url="https://prod.spline.design/escena/scene.splinecode"></spline-viewer>` },
  { id: 'theatrejs', name: 'Theatre.js', category: 'webgl', badge: 'Timeline estilo After Effects', url: 'https://www.theatrejs.com/', summary: 'Estudio visual de curvas de animación para coreografiar vuelos de cámara 3D, luces y secuencias con precisión cinematográfica.', useCase: 'Recorridos de cámara guiados por el scroll o timelines de preproducción.', synergy: 'Three.js + ScrollTrigger', keywords: 'theatrejs camara cine after effects timeline 3d animacion', snippet: `const sheet = core.getProject("Escena").sheet("Camara");` },
  { id: 'curtains-ogl', name: 'OGL & Curtains.js', category: 'webgl', badge: 'Distorsión WebGL Ligera', url: 'https://www.curtainsjs.com/', summary: 'Convierte imágenes y vídeos del DOM en planos WebGL que se ondulan como tela o líquido al hacer scroll o pasar el ratón.', useCase: 'Galerías de proyectos con distorsión fluida a 60 FPS.', synergy: 'Lenis + GLSL Shaders', keywords: 'ogl curtains webgl imagenes liquido distorsion shaders ligero', snippet: `const curtains = new Curtains({ container: "canvas" });` },
  { id: 'shadertoy-p5', name: 'Shadertoy & p5.js', category: 'webgl', badge: 'Arte Generativo & GPU', url: 'https://www.shadertoy.com/', summary: 'Plataformas para programar fondos matemáticos generativos, sistemas de partículas y shaders GLSL en tiempo real.', useCase: 'Fondos procedurales únicos y geometrías reactivas al ratón.', synergy: 'JavaScript + GLSL + Canvas 2D', keywords: 'shadertoy p5js generativo particulas visualizador shaders', snippet: `function draw() { circle(mouseX, mouseY, 28); }` },

  // 4. UI Creativa & Físicas
  { id: 'tailwind', name: 'Tailwind CSS v4', category: 'vector', badge: 'Sistema CSS Utility-First', url: 'https://tailwindcss.com/', summary: 'Permite maquetar interfaces oscuras, rejillas Bento simétricas, bordes iluminados y efectos glassmorphism a gran velocidad.', useCase: 'Diseñar toda la estructura visual de tus webs manteniendo simetría.', synergy: 'Astro + Next.js + Shadcn UI', keywords: 'tailwind css estilos bento oscuro diseño interfaz responsive', snippet: `<div class="grid grid-cols-3 gap-4 rounded-2xl bg-slate-900/80 p-5"></div>` },
  { id: 'shadcn-radix', name: 'Shadcn UI & Radix', category: 'vector', badge: 'Componentes Pro Accesibles', url: 'https://ui.shadcn.com/', summary: 'Componentes de código abierto (modales, pestañas, paletas de comando Cmd+K) que copias y personalizas dentro de tu proyecto.', useCase: 'Paneles de control, aplicaciones de gestión y menús interactivos.', synergy: 'Tailwind CSS + React + Next.js', keywords: 'shadcn radix ui componentes dashboard modales accesible', snippet: `npx shadcn@latest add dialog command tabs` },
  { id: 'rive', name: 'Rive', category: 'vector', badge: 'Vectores con Máquina de Estados', url: 'https://rive.app/', summary: 'Animaciones vectoriales interactivas en tiempo real que miran al cursor o reaccionan a los clics pesando pocos kilobytes.', useCase: 'Iconos vivos, botones ilustrados y mascotas interactivas.', synergy: 'Web Canvas + React + Android', keywords: 'rive vectorial 2d iconos interactivo estados animacion', snippet: `new Rive({ src: "avatar.riv", canvas, autoplay: true });` },
  { id: 'lottie', name: 'dotLottie / LottieFiles', category: 'vector', badge: 'Vectores Animados Ultraligeros', url: 'https://lottiefiles.com/', summary: 'Reproduce composiciones vectoriales exportadas en JSON o .lottie pudiendo avanzarlas frame a frame con la rueda del ratón.', useCase: 'Micro-animaciones de interfaz e iconos técnicos animados.', synergy: 'GSAP ScrollTrigger + Web', keywords: 'lottie dotlottie vectores iconos animacion ligero', snippet: `new DotLottie({ canvas, src: "icono.lottie", autoplay: true });` },
  { id: 'matterjs', name: 'Matter.js', category: 'vector', badge: 'Motor de Físicas 2D', url: 'https://brm.io/matter-js/', summary: 'Simula gravedad, rebotes y colisiones 2D en el navegador permitiendo que el usuario arrastre y lance elementos con el ratón.', useCase: 'Sección creativa donde las etiquetas de tus skills caen y chocan.', synergy: 'HTML5 Canvas + Vanilla JS', keywords: 'matterjs fisicas 2d gravedad colisiones interactivo', snippet: `const engine = Matter.Engine.create();` },
  { id: 'uiverse-aceternity', name: 'Uiverse & Aceternity UI', category: 'vector', badge: 'Catálogo de Efectos UI', url: 'https://uiverse.io/', summary: 'Bibliotecas gratuitas con cientos de tarjetas con luz dinámica, botones magnéticos y efectos en CSS y Tailwind listos para usar.', useCase: 'Dar un acabado visual impactante a botones y tarjetas en minutos.', synergy: 'Tailwind CSS + Motion + CSS', keywords: 'uiverse aceternity botones efectos tarjetas iluminacion css', snippet: `/* Copia el componente directamente desde su galería abierta */` },

  // 5. Frameworks & Base
  { id: 'astro', name: 'Astro', category: 'frameworks', badge: 'Arquitectura de Islas', url: 'https://astro.build/', summary: 'Genera HTML ultrarrápido sin JavaScript innecesario e hidrata únicamente los componentes interactivos 3D o animados que elijas.', useCase: 'Base ideal para portfolios creativos y webs de clientes con carga instantánea.', synergy: 'Lenis + GSAP + Tailwind CSS', keywords: 'astro portfolio landing rapido seo islas estatico', snippet: `npm create astro@latest mi-portfolio` },
  { id: 'nextjs', name: 'Next.js (React)', category: 'frameworks', badge: 'Framework Full-Stack React', url: 'https://nextjs.org/', summary: 'El estándar de producción para aplicaciones React con servidor integrado, rutas API, optimización multimedia y soporte PWA.', useCase: 'Aplicaciones completas con login de usuarios, paneles y base de datos.', synergy: 'TypeScript + Tailwind + Supabase', keywords: 'nextjs react fullstack pwa saas dashboard aplicacion web', snippet: `npx create-next-app@latest mi-app --typescript` },
  { id: 'vite', name: 'Vite', category: 'frameworks', badge: 'Entorno de Desarrollo Rápido', url: 'https://vite.dev/', summary: 'Arranca proyectos en Vanilla JS, TypeScript, React o Three.js al instante con recarga en caliente en milisegundos.', useCase: 'Prototipos creativos, aplicaciones web ligeras y laboratorios WebGL.', synergy: 'JavaScript + Three.js + GSAP', keywords: 'vite bundler rapido vanilla js prototipo webgl', snippet: `npm create vite@latest mi-proyecto` },
  { id: 'sveltekit', name: 'SvelteKit', category: 'frameworks', badge: 'Reactividad Compilada', url: 'https://kit.svelte.dev/', summary: 'Compila el código a JavaScript puro sin Virtual DOM, logrando una fluidez sobresaliente en interfaces con muchos cambios de estado.', useCase: 'Editores visuales con líneas de tiempo y herramientas interactivas.', synergy: 'GSAP + Tailwind CSS', keywords: 'svelte sveltekit ligero reactivo editor interactivo', snippet: `npx sv create mi-app` },
  { id: 'android-pwa', name: 'Android Studio & PWA', category: 'frameworks', badge: 'Móvil Nativo & Web Instalable', url: 'https://developer.android.com/studio', summary: 'Entorno oficial para crear aplicaciones Android en Java/Kotlin, junto al estándar PWA para instalar aplicaciones web en el móvil.', useCase: 'Reproductores de música en streaming y apps de gestión compartida.', synergy: 'Java + Kotlin + Firebase', keywords: 'android studio movil app pwa capacitor java kotlin', snippet: `navigator.serviceWorker?.register("/sw.js");` },
  { id: 'tanstack-zustand', name: 'Zustand & TanStack', category: 'frameworks', badge: 'Estado Global Ultraligero', url: 'https://zustand-demo.pmnd.rs/', summary: 'Gestiona y sincroniza el estado compartido de la aplicación (usuario, cámara 3D, filtros) de forma limpia en apenas 1KB.', useCase: 'Conectar los controles de la interfaz con escenas 3D o datos.', synergy: 'React + React Three Fiber', keywords: 'zustand tanstack estado global datos react', snippet: `const useStore = create((set) => ({ activo: false }));` },

  // 6. Backend, Datos & IA
  { id: 'supabase', name: 'Supabase (PostgreSQL)', category: 'backend', badge: 'Base de Datos SQL & Realtime', url: 'https://supabase.com/', summary: 'Alternativa open-source a Firebase basada en PostgreSQL con autenticación de usuarios, API automática y sincronización en vivo.', useCase: 'Guardar gastos compartidos, proyectos, cuentas y registros relacionales.', synergy: 'SQL + Next.js + Astro', keywords: 'supabase postgresql sql base de datos login usuarios tiempo real gastos', snippet: `const { data } = await supabase.from("proyectos").select("*");` },
  { id: 'firebase', name: 'Firebase', category: 'backend', badge: 'Cloud NoSQL & SDK Android', url: 'https://firebase.google.com/', summary: 'Plataforma de Google con integración directa en Android Studio y Web para login con Google, base de datos Firestore y nube.', useCase: 'Conectar aplicaciones Android y webs en tiempo real en pocos minutos.', synergy: 'Android Studio + Java + Kotlin', keywords: 'firebase nosql auth google android movil nube tiempo real', snippet: `const snap = await getDocs(collection(db, "tracks"));` },
  { id: 'docker', name: 'Docker & Compose', category: 'backend', badge: 'Contenedores Reproducibles', url: 'https://www.docker.com/', summary: 'Empaqueta bases de datos PostgreSQL/MySQL, APIs en Python y servicios web en contenedores aislados listos para arrancar.', useCase: 'Levantar todo tu entorno de base de datos e IA local con un comando.', synergy: 'PostgreSQL + Python + Ollama', keywords: 'docker contenedores servidor base de datos despliegue local', snippet: `docker compose up -d` },
  { id: 'ollama-ai', name: 'Ollama & Gemini API', category: 'backend', badge: 'IA Local & Modelos en Nube', url: 'https://ollama.com/', summary: 'Ejecuta modelos de lenguaje en local con tu propia GPU sin coste o conéctate a la API de Gemini para funciones inteligentes.', useCase: 'Generadores automáticos de tests desde PDF, asistentes y clasificadores.', synergy: 'Python + JavaScript + FastAPI', keywords: 'ollama gemini ia inteligencia artificial local llm asistente generador', snippet: `fetch("http://localhost:11434/api/generate", { method: "POST" });` },
  { id: 'prisma-drizzle', name: 'Drizzle / Prisma ORM', category: 'backend', badge: 'Consultas SQL con Tipado', url: 'https://orm.drizzle.team/', summary: 'Traduce tus tablas SQL (PostgreSQL, MySQL, SQLite) a objetos TypeScript con autocompletado seguro y migraciones.', useCase: 'Consultar bases de datos relacionales sin escribir SQL manual propenso a fallos.', synergy: 'PostgreSQL + TypeScript + Next.js', keywords: 'prisma drizzle orm sql base de datos typescript', snippet: `await db.insert(tareas).values({ titulo: "Nueva" });` },
  { id: 'pocketbase', name: 'PocketBase', category: 'backend', badge: 'Backend en 1 Ejecutable', url: 'https://pocketbase.io/', summary: 'Backend open-source autoalojable en un solo archivo que incluye base de datos SQLite en tiempo real, usuarios y panel visual.', useCase: 'Crear prototipos full-stack y PWAs autoalojadas sin depender de terceros.', synergy: 'Docker + Vite + Astro', keywords: 'pocketbase backend ligero sqlite autoalojado open source', snippet: `./pocketbase serve` },

  // 7. Assets 3D, Fuentes & FX
  { id: 'blender', name: 'Blender 3D', category: 'assets', badge: 'Modelado 3D Open Source', url: 'https://www.blender.org/', summary: 'Suite gratuita completa para modelar, texturizar, animar y exportar objetos 3D en formato .glb comprimidos para la web.', useCase: 'Crear modelos 3D a medida para integrarlos con Three.js.', synergy: 'Three.js + Poly Haven', keywords: 'blender 3d modelado glb animacion texturas', snippet: `# Exporta en glTF 2.0 (.glb) activando compresión Draco` },
  { id: 'fontshare', name: 'Fontshare & Google Fonts', category: 'assets', badge: 'Tipografías de Estudio Gratis', url: 'https://www.fontshare.com/', summary: 'Colecciones gratuitas de fuentes modernas (Clash Display, Satoshi, Space Grotesk) que elevan la personalidad visual al instante.', useCase: 'Titulares potentes con estética de agencia digital.', synergy: 'Tailwind CSS + GSAP SplitText', keywords: 'fontshare fuentes tipografia diseño titulares', snippet: `font-family: 'Clash Display', sans-serif;` },
  { id: 'lucide-phosphor', name: 'Lucide & Phosphor Icons', category: 'assets', badge: 'Iconografía Vectorial SVG', url: 'https://lucide.dev/', summary: 'Miles de iconos vectoriales minimalistas y coherentes cuyos trazos SVG pueden colorearse y animarse por código.', useCase: 'Barras de navegación, botones de acción y tarjetas técnicas.', synergy: 'Tailwind CSS + HTML + React', keywords: 'lucide phosphor iconos svg interfaz botones', snippet: `lucide.createIcons();` },
  { id: 'howlerjs', name: 'Howler.js & Web Audio', category: 'assets', badge: 'Streaming de Audio Web', url: 'https://howlerjs.com/', summary: 'Librería especializada para reproductores de música en streaming, listas de reproducción y control de pistas en proyectos multimedia.', useCase: 'Aplicaciones de música en streaming como FriendFy o podcasts interactivos.', synergy: 'JavaScript + Android + Firebase', keywords: 'howler audio musica streaming reproductor', snippet: `const player = new Howl({ src: ["cancion.mp3"], html5: true });` },
  { id: 'squoosh-gltf', name: 'Squoosh & gltf-transform', category: 'assets', badge: 'Compresión Multimedia', url: 'https://squoosh.app/', summary: 'Optimiza imágenes a formato AVIF/WebP y reduce hasta un 85% el peso de modelos 3D para lograr tiempos de carga instantáneos.', useCase: 'Aligerar todas las capturas y modelos antes de subirlos a GitHub.', synergy: 'Astro + Three.js + Vercel', keywords: 'squoosh avif webp optimizacion rendimiento velocidad', snippet: `npx @gltf-transform/cli optimize in.glb out.glb --compress draco` },
  { id: 'polyhaven-sketchfab', name: 'Poly Haven & Sketchfab', category: 'assets', badge: 'Modelos 3D & Luces HDRI CC0', url: 'https://polyhaven.com/', summary: 'Bibliotecas gratuitas de mapas de iluminación HDRI de estudio, texturas PBR y modelos 3D descargables listos para WebGL.', useCase: 'Iluminar objetos 3D en Three.js con reflejos realistas sin coste.', synergy: 'Blender + Three.js + React Three Fiber', keywords: 'polyhaven sketchfab 3d modelos texturas hdri iluminacion gratis', snippet: `new RGBELoader().load("studio.hdr", (tex) => scene.environment = tex);` },

  // 8. Inspiración & Deploy
  { id: 'awwwards', name: 'Awwwards', category: 'inspiration', badge: 'Webs Premiadas a Diario', url: 'https://www.awwwards.com/', summary: 'El certamen de referencia mundial donde se premian cada día las webs más innovadoras en diseño, creatividad y fluidez.', useCase: 'Tomar referencias de primer nivel para tus propios proyectos.', synergy: 'Chrome DevTools + GSAP', keywords: 'awwwards inspiracion diseño portfolio premios tendencias', snippet: `// Filtra por "Site of the Day" y categoría "Portfolio"` },
  { id: 'codrops', name: 'Codrops (Tympanus)', category: 'inspiration', badge: 'Tutoriales + Demos GitHub', url: 'https://tympanus.net/codrops/', summary: 'Publica tutoriales gratuitos con el código fuente completo en GitHub sobre efectos avanzados de scroll, shaders y WebGL.', useCase: 'Aprender efectos concretos viendo cómo están programados paso a paso.', synergy: 'GSAP + Three.js + Lenis', keywords: 'codrops tutoriales efectos codigo github demos webgl', snippet: `# Clona cualquiera de sus demos gratuitos desde GitHub` },
  { id: 'godly-dark', name: 'Godly.website', category: 'inspiration', badge: 'Galería Interactiva en Vídeo', url: 'https://godly.website/', summary: 'Directorio curado con previsualizaciones en vídeo de las mejores interfaces oscuras, portfolios de ingenieros y rejillas Bento.', useCase: 'Inspirarte en microinteracciones y distribución visual antes de diseñar.', synergy: 'Figma + Tailwind CSS', keywords: 'godly dark design galeria inspiracion bento modo oscuro', snippet: `/* Explora las etiquetas Developer, Motion y Dark */` },
  { id: 'figma', name: 'Figma', category: 'inspiration', badge: 'Diseño UI & Vectores SVG', url: 'https://www.figma.com/', summary: 'El estándar para bocetar pantallas simétricas, probar paletas de color y exportar gráficos SVG limpios hacia VS Code.', useCase: 'Definir la estética de tu aplicación antes de empezar a picar código.', synergy: 'Tailwind CSS + Rive + SVG', keywords: 'figma diseño ui ux boceto prototipo svg simetria', snippet: `# Clic derecho sobre cualquier icono o trazado -> Copy as SVG` },
  { id: 'vercel', name: 'Vercel', category: 'inspiration', badge: 'Deploy Automático Gratis', url: 'https://vercel.com/', summary: 'Publica tus proyectos en internet gratis conectando tu repositorio de GitHub; se actualiza sola en cada git push.', useCase: 'Tener online tus aplicaciones y tu portfolio con certificado HTTPS.', synergy: 'GitHub + Astro + Next.js + Vite', keywords: 'vercel hosting deploy gratis github url produccion', snippet: `vercel --prod` },
  { id: 'cloudflare-github', name: 'Cloudflare Pages & GitHub', category: 'inspiration', badge: 'Hosting Ilimitado & Actions', url: 'https://pages.cloudflare.com/', summary: 'Alojamiento gratuito con ancho de banda ilimitado más GitHub Actions para ejecutar bots diarios en tu repositorio.', useCase: 'Alojar proyectos con carga multimedia y automatizar actualizaciones.', synergy: 'Git + GitHub Actions + Python', keywords: 'cloudflare github pages hosting gratis cdn rapido', snippet: `git push origin main` }
];

const INITIAL_IDS = new Set(INITIAL_TOOLS.map(t => t.id));

// CLAVES LOCALSTORAGE
const KEY_PROGRESS = 'devtree_v8_progress';
const KEY_CUSTOM_TOOLS = 'devtree_v8_custom_tools';
const KEY_SAVED_PROJECTS = 'devtree_v8_saved_projects';
const KEY_ACTIVE_PROJECT = 'devtree_v8_active_project';
const KEY_SEEN_TOOLS = 'devtree_v8_seen_tools';
const KEY_DAILY_AUTO_CACHE = 'devtree_v8_daily_auto_cache';
const KEY_SUPA_CONFIG = 'devtree_v8_supa_config';

// ESTADO GLOBAL
const state = {
  view: 'tree',
  layout: 'matrix',
  isMorphingView: false,
  expandedCategories: new Set(),
  stackFocusMode: false,
  matterActive: false,
  ollamaOnline: false,
  ollamaModelName: 'qwen2.5-coder:7b',
  search: '',
  activeToolId: null,
  isCardPinned: false,
  isCardVisible: false,
  recommendedIds: [],
  recommendedReasons: {},
  tools: [...INITIAL_TOOLS],
  seenToolIds: new Set(INITIAL_IDS),
  userProgress: {},
  currentProject: {
    id: null,
    name: '',
    description: '',
    stackIds: []
  },
  savedProjects: [],
  categoryCoords: new Map(),
  camera: {
    currentX: 0,
    currentY: 0,
    currentScale: 0.75,
    targetX: 0,
    targetY: 0,
    targetScale: 0.75,
    isDragging: false,
    pointerId: null,
    startMouseX: 0,
    startMouseY: 0,
    startCamX: 0,
    startCamY: 0
  },
  threeCore: null,
  matterInstance: null,
  lenisBento: null
};

let hoverOpenTimer = null;
let hoverCloseTimer = null;
let resetBranchesTimer = null;

function on(id, eventName, handler, options) {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener(eventName, handler, options);
  }
}

// ARRANQUE SÍNCRONO INMEDIATO
document.addEventListener('DOMContentLoaded', () => {
  try {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  } catch (e) {}

  loadLocalDataSync();
  populateModalCategories();
  bindEvents();
  centerCamera(true);
  startSmoothCameraLoop();
  renderAll();

  initLenisSmoothScroll();
  initBackgroundParticles();
  loadDailyAdditionsAsync();
  checkOllamaStatus();
});

// ==================== ADAPTACIÓN REACTIVA DEL PASILLO CENTRAL ====================
function syncWorkspaceCorridor() {
  const ws = document.getElementById('mainWorkspace');
  const studioPanel = document.getElementById('studioPanel');
  if (!ws) return;

  const isLeftOpen = studioPanel ? studioPanel.classList.contains('open') : false;
  const isRightOpen = state.view === 'tree' && state.isCardVisible;

  ws.classList.toggle('left-open', isLeftOpen);
  ws.classList.toggle('right-open', isRightOpen);

  if (state.view === 'bento' && state.lenisBento && typeof state.lenisBento.resize === 'function') {
    setTimeout(() => state.lenisBento.resize(), 360);
  }
}

// ==================== CARGA SÍNCRONA INMEDIATA DESDE LOCALSTORAGE ====================
function loadLocalDataSync() {
  try {
    const prog = localStorage.getItem(KEY_PROGRESS);
    if (prog) state.userProgress = JSON.parse(prog);

    const seenRaw = localStorage.getItem(KEY_SEEN_TOOLS);
    if (seenRaw) {
      state.seenToolIds = new Set(JSON.parse(seenRaw));
    } else {
      state.seenToolIds = new Set(INITIAL_IDS);
      persistSeenTools();
    }

    const supaRaw = localStorage.getItem(KEY_SUPA_CONFIG);
    if (supaRaw) {
      const supa = JSON.parse(supaRaw);
      const urlIn = document.getElementById('supaUrlInput');
      const keyIn = document.getElementById('supaKeyInput');
      if (urlIn) urlIn.value = supa.url || '';
      if (keyIn) keyIn.value = supa.key || '';
    }

    const custom = localStorage.getItem(KEY_CUSTOM_TOOLS);
    const customList = custom ? JSON.parse(custom) : [];

    let cachedDaily = [];
    try {
      const cachedRaw = localStorage.getItem(KEY_DAILY_AUTO_CACHE);
      if (cachedRaw) {
        const parsedCache = JSON.parse(cachedRaw);
        if (Array.isArray(parsedCache.items)) cachedDaily = parsedCache.items;
      }
    } catch (e) {}

    mergeToolsIntoState(cachedDaily, customList);

    const savedProjs = localStorage.getItem(KEY_SAVED_PROJECTS);
    if (savedProjs) state.savedProjects = JSON.parse(savedProjs);

    const activeProj = localStorage.getItem(KEY_ACTIVE_PROJECT);
    if (activeProj) {
      state.currentProject = JSON.parse(activeProj);
      const pName = document.getElementById('projectNameInput');
      const aInput = document.getElementById('advisorInput');
      if (pName) pName.value = state.currentProject.name || '';
      if (aInput) aInput.value = state.currentProject.description || '';
    }
  } catch (e) {
    state.tools = [...INITIAL_TOOLS];
  }
}

function mergeToolsIntoState(dailyList = [], customList = []) {
  const merged = [...INITIAL_TOOLS, ...dailyList, ...customList];
  const uniqueMap = new Map();
  merged.forEach(item => {
    if (!item || !item.id) return;
    if (!INITIAL_IDS.has(item.id)) {
      item.isNewAddition = true;
    }
    uniqueMap.set(item.id, item);
  });
  state.tools = Array.from(uniqueMap.values());
}

async function loadDailyAdditionsAsync() {
  try {
    let dailyList = [];
    try {
      const res = await fetch('./daily_tools.json', { cache: 'no-store' });
      if (res.ok) {
        const parsed = await res.json();
        if (Array.isArray(parsed)) dailyList = parsed;
      }
    } catch (e) {
      dailyList = [];
    }

    const liveDailyTools = await fetchLiveDailyToolsFromGitHub(dailyList.length === 0);
    const custom = localStorage.getItem(KEY_CUSTOM_TOOLS);
    const customList = custom ? JSON.parse(custom) : [];

    mergeToolsIntoState([...dailyList, ...liveDailyTools], customList);
    renderAll();
  } catch (e) {}
}

async function fetchLiveDailyToolsFromGitHub(forceIfEmpty = false) {
  const todayKey = new Date().toISOString().slice(0, 10);
  try {
    const cachedRaw = localStorage.getItem(KEY_DAILY_AUTO_CACHE);
    if (cachedRaw) {
      const cached = JSON.parse(cachedRaw);
      if (cached.date === todayKey && Array.isArray(cached.items) && cached.items.length > 0) {
        return cached.items;
      }
    }
  } catch (e) {}

  try {
    const d = new Date();
    d.setDate(d.getDate() - 30);
    const sinceDate = d.toISOString().slice(0, 10);
    const query = encodeURIComponent(`(topic:webgl OR topic:threejs OR topic:astro OR topic:tailwindcss) pushed:>=${sinceDate} stars:>=120`);
    const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&per_page=8`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);
    const res = await fetch(url, {
      headers: { 'Accept': 'application/vnd.github+json' },
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!res.ok) throw new Error('GitHub API limit');
    const data = await res.json();
    const items = data.items || [];

    const existingUrls = new Set(INITIAL_TOOLS.map(t => t.url.toLowerCase()));
    const discovered = [];

    for (const repo of items) {
      if (!repo.html_url || existingUrls.has(repo.html_url.toLowerCase())) continue;

      const topicsStr = `${repo.description || ''} ${(repo.topics || []).join(' ')}`.toLowerCase();
      let category = 'frameworks';
      if (topicsStr.includes('webgl') || topicsStr.includes('three') || topicsStr.includes('3d') || topicsStr.includes('shader')) {
        category = 'webgl';
      } else if (topicsStr.includes('animat') || topicsStr.includes('motion') || topicsStr.includes('scroll')) {
        category = 'motion';
      } else if (topicsStr.includes('tailwind') || topicsStr.includes('ui') || topicsStr.includes('component')) {
        category = 'vector';
      } else if (topicsStr.includes('ai') || topicsStr.includes('database') || topicsStr.includes('sql')) {
        category = 'backend';
      }

      const cleanName = repo.name.replace(/[-_]/g, ' ');
      discovered.push({
        id: `daily_${repo.id}`,
        name: cleanName.charAt(0).toUpperCase() + cleanName.slice(1),
        category,
        badge: `Tendencia · ★ ${repo.stargazers_count}`,
        url: repo.html_url,
        summary: repo.description || 'Tecnología emergente en tendencia dentro de la comunidad de desarrollo web y multiplataforma.',
        useCase: `Explorar nuevas capacidades de ${category === 'webgl' ? 'gráficos 3D interactivos' : 'desarrollo moderno'} en tus próximos proyectos.`,
        synergy: `${repo.language || 'TypeScript'} + Vite + Git`,
        keywords: `nuevo tendencia ${repo.name.toLowerCase()} ${(repo.topics || []).join(' ')}`,
        snippet: `git clone ${repo.html_url}.git`,
        isNewAddition: true
      });

      if (discovered.length >= 4) break;
    }

    if (discovered.length > 0) {
      localStorage.setItem(KEY_DAILY_AUTO_CACHE, JSON.stringify({ date: todayKey, items: discovered }));
      return discovered;
    }
  } catch (err) {}

  if (forceIfEmpty) {
    return [
      {
        id: 'daily_tresjs',
        name: 'TresJS',
        category: 'webgl',
        badge: 'Tendencia · Escenas 3D',
        url: 'https://tresjs.org/',
        summary: 'Crea escenas 3D declarativas con Three.js usando componentes reactivos de forma limpia y rápida.',
        useCase: 'Integrar mundos 3D interactivos en aplicaciones web modernas sin código imperativo complejo.',
        synergy: 'Three.js + Vite + TypeScript',
        keywords: 'nuevo tendencia tresjs 3d webgl componentes',
        snippet: `npm install @tresjs/core three`,
        isNewAddition: true
      },
      {
        id: 'daily_million',
        name: 'Million.js',
        category: 'frameworks',
        badge: 'Tendencia · Optimizador UI',
        url: 'https://million.dev/',
        summary: 'Compilador y optimizador automático que acelera el renderizado de componentes web hasta un 70%.',
        useCase: 'Asegurar 60 FPS constantes en aplicaciones con muchas tarjetas o nodos interactivos.',
        synergy: 'React + Next.js + Vite',
        keywords: 'nuevo tendencia million rendimiento velocidad',
        snippet: `npx million@latest`,
        isNewAddition: true
      },
      {
        id: 'daily_lenis_snap',
        name: 'Lenis Snap',
        category: 'motion',
        badge: 'Tendencia · Scroll Magnético',
        url: 'https://github.com/darkroomengineering/lenis',
        summary: 'Extensión oficial de Lenis para acoplar magnéticamente secciones de la página durante el scroll inercial.',
        useCase: 'Portfolios donde cada proyecto encaja suavemente a pantalla completa al hacer scroll.',
        synergy: 'Lenis + GSAP + Astro',
        keywords: 'nuevo tendencia lenis snap scroll magnetico',
        snippet: `import Snap from "lenis/snap";`,
        isNewAddition: true
      }
    ];
  }
  return [];
}

// ==================== CONMUTADOR PRINCIPAL CON AGUJERO NEGRO TECNOLÓGICO SIN LETRAS ====================
function switchMainView(targetView) {
  if (state.view === targetView || state.isMorphingView) return;

  const btnTree = document.getElementById('btnViewTree');
  const btnBento = document.getElementById('btnViewBento');
  const treeVp = document.getElementById('treeViewport');
  const bentoVp = document.getElementById('bentoViewport');
  const overlay = document.getElementById('singularityOverlay');

  if (!treeVp || !bentoVp || !overlay || !window.gsap) {
    state.view = targetView;
    btnTree?.classList.toggle('active', targetView === 'tree');
    btnBento?.classList.toggle('active', targetView === 'bento');
    treeVp?.classList.toggle('active', targetView === 'tree');
    bentoVp?.classList.toggle('active', targetView === 'bento');
    renderAll();
    return;
  }

  state.isMorphingView = true;
  state.camera.isDragging = false;
  closeTechCard();

  btnTree?.classList.toggle('active', targetView === 'tree');
  btnBento?.classList.toggle('active', targetView === 'bento');

  resetBranchesWithGSAP(true);
  syncWorkspaceCorridor();

  if (targetView === 'bento') {
    animateTreeToBento(treeVp, bentoVp, overlay);
  } else {
    animateBentoToTree(treeVp, bentoVp, overlay);
  }
}

// Crea el Agujero Negro Tecnológico SIN letras en su interior
function createFloatingCoreActor(rect) {
  const actor = document.createElement('div');
  actor.className = 'singularity-core-actor';
  actor.style.width = `${rect.width}px`;
  actor.style.height = `${rect.height}px`;
  actor.style.left = `${rect.left}px`;
  actor.style.top = `${rect.top}px`;

  actor.innerHTML = `<div class="singularity-core-horizon"></div>`;

  if (state.threeCore && state.threeCore.renderer) {
    actor.prepend(state.threeCore.renderer.domElement);
  }

  return actor;
}

// 1. TRANSICIÓN DE ÁRBOL -> BENTO
function animateTreeToBento(treeVp, bentoVp, overlay) {
  renderBento();
  bentoVp.scrollTop = 0;

  const treeRootEl = treeVp.querySelector('.node-root');
  const bentoDockEl = document.getElementById('bentoCoreDock');
  const bentoCoreNode = bentoDockEl ? bentoDockEl.querySelector('.node-root') : null;
  const hudEl = document.getElementById('canvasHud');
  const svgEl = document.getElementById('treeSvg');

  if (!treeRootEl || !bentoDockEl) {
    state.view = 'bento';
    treeVp.classList.remove('active');
    bentoVp.classList.add('active');
    state.isMorphingView = false;
    renderAll();
    return;
  }

  const rootRect = treeRootEl.getBoundingClientRect();
  // Medimos exactamente el rectángulo del nodo cuadrado (156x156) dentro del dock centrado de Bento
  const targetDockRect = (bentoCoreNode || bentoDockEl).getBoundingClientRect();
  const dockSize = 156;
  const dockLeft = Math.round(targetDockRect.left + (targetDockRect.width - dockSize) / 2);
  const dockTop = Math.round(targetDockRect.top + (targetDockRect.height - dockSize) / 2);
  const dockCenterX = dockLeft + dockSize / 2;
  const dockCenterY = dockTop + dockSize / 2;

  overlay.innerHTML = '';
  const coreActor = createFloatingCoreActor(rootRect);
  overlay.appendChild(coreActor);
  treeRootEl.style.opacity = '0';

  const centerXStage = 1800;
  const rootYStage = state.layout === 'matrix' ? 420 : 1300;

  const allToolNodes = Array.from(treeVp.querySelectorAll('.node-tool'));
  const allCatNodes = Array.from(treeVp.querySelectorAll('.node-category'));
  const toolEdges = Array.from(svgEl.querySelectorAll('[data-edge^="tool-"]'));
  const catEdges = Array.from(svgEl.querySelectorAll('[data-edge^="cat-"]'));

  const tl = gsap.timeline({
    onComplete: () => {
      state.view = 'bento';
      treeVp.classList.remove('active');
      bentoVp.classList.add('active');
      overlay.innerHTML = '';
      state.isMorphingView = false;
      renderAll();

      const finalDockedNode = document.querySelector('#bentoCoreDock .node-root');
      if (finalDockedNode) {
        gsap.fromTo(
          finalDockedNode.querySelectorAll('.node-root-tag, .node-root-title, .node-root-sub'),
          { opacity: 0, y: 4 },
          { opacity: 1, y: 0, duration: 0.28, stagger: 0.04, ease: 'power2.out' }
        );
      }

      if (state.lenisBento && typeof state.lenisBento.resize === 'function') {
        state.lenisBento.resize();
      }
    }
  });

  if (hudEl) {
    tl.to(hudEl, { opacity: 0, duration: 0.25 }, 0);
  }

  if (state.threeCore) {
    state.threeCore.speedMultiplier = 6;
  }

  // PASO 1: Las tecnologías desplegadas son absorbidas hacia sus categorías
  if (allToolNodes.length > 0) {
    tl.to(toolEdges, { opacity: 0, duration: 0.3, ease: 'power2.in' }, 0);
    allToolNodes.forEach(toolEl => {
      const catId = toolEl.closest('.branch-node-group')?.dataset.catId;
      const catCoords = state.categoryCoords.get(catId);
      if (catCoords) {
        tl.to(
          toolEl,
          {
            left: catCoords.x,
            top: catCoords.y,
            scale: 0.2,
            opacity: 0,
            duration: 0.42,
            ease: 'back.in(1.2)'
          },
          0
        );
      }
    });
  }

  const step2Start = allToolNodes.length > 0 ? 0.34 : 0.02;

  // PASO 2: Las categorías son absorbidas hacia el agujero negro central
  tl.to(catEdges, { opacity: 0, duration: 0.38, ease: 'power2.in' }, step2Start);
  allCatNodes.forEach((catEl, idx) => {
    tl.to(
      catEl,
      {
        left: centerXStage,
        top: rootYStage,
        scale: 0.15,
        opacity: 0,
        duration: 0.46,
        ease: 'power3.in'
      },
      step2Start + idx * 0.015
    );
  });

  tl.fromTo(
    coreActor,
    { scale: 1 },
    { scale: 1.15, duration: 0.2, yoyo: true, repeat: 1, ease: 'power2.out' },
    step2Start + 0.32
  );

  // PASO 3: El agujero negro tecnológico (sin letras) sube girando hasta su sitio centrado
  const step3Start = step2Start + 0.46;
  tl.to(
    coreActor,
    {
      left: dockLeft,
      top: dockTop,
      width: dockSize,
      height: dockSize,
      rotation: 540,
      duration: 0.54,
      ease: 'power3.inOut',
      onComplete: () => {
        if (state.threeCore) {
          state.threeCore.speedMultiplier = 1;
        }
      }
    },
    step3Start
  );

  // PASO 4: El núcleo deja de girar y escupe las tarjetas completas en 3 columnas
  const step4Start = step3Start + 0.54;
  const bentoCards = Array.from(bentoVp.querySelectorAll('.bento-card'));

  tl.call(() => {
    bentoCards.forEach(c => { c.style.opacity = '0'; });
    if (bentoCoreNode) bentoCoreNode.style.opacity = '0';
    treeVp.classList.remove('active');
    bentoVp.classList.add('active');
  }, null, step4Start);

  bentoCards.forEach((cardEl, idx) => {
    const targetRect = cardEl.getBoundingClientRect();
    const flyer = document.createElement('div');
    flyer.className = 'singularity-flying-item';
    flyer.style.setProperty('--cat-color', cardEl.style.getPropertyValue('--cat-color') || '#38bdf8');
    flyer.innerHTML = cardEl.innerHTML;

    const startW = 84;
    const startH = 56;
    flyer.style.width = `${startW}px`;
    flyer.style.height = `${startH}px`;
    flyer.style.left = `${dockCenterX - startW / 2}px`;
    flyer.style.top = `${dockCenterY - startH / 2}px`;
    flyer.style.opacity = '0';
    flyer.style.transform = 'scale(0.22)';

    overlay.appendChild(flyer);

    const delay = Math.min(0.24, idx * 0.012);
    tl.to(
      flyer,
      {
        left: targetRect.left,
        top: targetRect.top,
        width: targetRect.width,
        height: targetRect.height,
        opacity: 1,
        scale: 1,
        duration: 0.48,
        ease: 'back.out(1.06)'
      },
      step4Start + delay
    );
  });
}

// 2. TRANSICIÓN DE BENTO -> ÁRBOL
function animateBentoToTree(treeVp, bentoVp, overlay) {
  renderTree();

  const bentoDockEl = document.getElementById('bentoCoreDock');
  const bentoCoreNode = bentoDockEl ? bentoDockEl.querySelector('.node-root') : null;
  const treeRootEl = treeVp.querySelector('.node-root');
  const hudEl = document.getElementById('canvasHud');
  const svgEl = document.getElementById('treeSvg');

  if (!bentoDockEl || !treeRootEl) {
    state.view = 'tree';
    bentoVp.classList.remove('active');
    treeVp.classList.add('active');
    state.isMorphingView = false;
    renderAll();
    return;
  }

  const dockRect = (bentoCoreNode || bentoDockEl).getBoundingClientRect();
  const dockCenterX = dockRect.left + dockRect.width / 2;
  const dockCenterY = dockRect.top + dockRect.height / 2;

  const treeRootRect = treeRootEl.getBoundingClientRect();

  overlay.innerHTML = '';
  const coreActor = createFloatingCoreActor(dockRect);
  overlay.appendChild(coreActor);

  if (bentoCoreNode) bentoCoreNode.style.opacity = '0';

  const bentoCards = Array.from(bentoVp.querySelectorAll('.bento-card'));
  const flyers = [];

  bentoCards.forEach(cardEl => {
    const r = cardEl.getBoundingClientRect();
    if (r.bottom < -250 || r.top > window.innerHeight + 250) {
      cardEl.style.opacity = '0';
      return;
    }

    const flyer = document.createElement('div');
    flyer.className = 'singularity-flying-item';
    flyer.style.setProperty('--cat-color', cardEl.style.getPropertyValue('--cat-color') || '#38bdf8');
    flyer.innerHTML = cardEl.innerHTML;
    flyer.style.left = `${r.left}px`;
    flyer.style.top = `${r.top}px`;
    flyer.style.width = `${r.width}px`;
    flyer.style.height = `${r.height}px`;

    overlay.appendChild(flyer);
    cardEl.style.opacity = '0';
    flyers.push(flyer);
  });

  if (state.threeCore) {
    state.threeCore.speedMultiplier = 7;
  }

  const tl = gsap.timeline({
    onComplete: () => {
      if (state.threeCore) state.threeCore.speedMultiplier = 1;
      state.view = 'tree';
      bentoVp.classList.remove('active');
      treeVp.classList.add('active');
      overlay.innerHTML = '';
      state.isMorphingView = false;
      renderAll();

      const finalTreeRoot = document.querySelector('#treeNodes .node-root');
      if (finalTreeRoot) {
        gsap.fromTo(
          finalTreeRoot.querySelectorAll('.node-root-tag, .node-root-title, .node-root-sub'),
          { opacity: 0, y: 4 },
          { opacity: 1, y: 0, duration: 0.28, stagger: 0.04, ease: 'power2.out' }
        );
      }
    }
  });

  // PASO 1: El agujero negro tecnológico absorbe todas las tarjetas
  tl.fromTo(
    coreActor,
    { scale: 1 },
    { scale: 1.18, duration: 0.26, ease: 'power2.out' },
    0
  );

  flyers.forEach((flyer, idx) => {
    const delay = Math.min(0.18, idx * 0.008);
    tl.to(
      flyer,
      {
        left: dockCenterX - 35,
        top: dockCenterY - 25,
        width: 70,
        height: 50,
        scale: 0.08,
        rotation: (idx % 2 === 0 ? 1 : -1) * 35,
        opacity: 0,
        duration: 0.46,
        ease: 'power3.in'
      },
      delay
    );
  });

  // PASO 2: El agujero negro desciende a su posición original en el árbol
  const step2Start = 0.5;
  tl.to(
    coreActor,
    {
      left: treeRootRect.left,
      top: treeRootRect.top,
      width: treeRootRect.width,
      height: treeRootRect.height,
      scale: 1,
      rotation: -540,
      duration: 0.52,
      ease: 'power3.inOut',
      onStart: () => {
        bentoVp.classList.remove('active');
      }
    },
    step2Start
  );

  // PASO 3: El núcleo expulsa primero las categorías y de ellas nacen las tecnologías
  const step3Start = step2Start + 0.52;

  const centerXStage = 1800;
  const rootYStage = state.layout === 'matrix' ? 420 : 1300;
  const allCatNodes = Array.from(treeVp.querySelectorAll('.node-category'));
  const allToolNodes = Array.from(treeVp.querySelectorAll('.node-tool'));
  const catEdges = Array.from(svgEl.querySelectorAll('[data-edge^="cat-"]'));
  const toolEdges = Array.from(svgEl.querySelectorAll('[data-edge^="tool-"]'));

  tl.call(() => {
    treeRootEl.style.opacity = '0';
    catEdges.forEach(e => { e.style.opacity = '0'; });
    toolEdges.forEach(e => { e.style.opacity = '0'; });
    treeVp.classList.add('active');
  }, null, step3Start);

  allCatNodes.forEach((catEl, idx) => {
    const finalX = parseFloat(catEl.style.left);
    const finalY = parseFloat(catEl.style.top);
    tl.fromTo(
      catEl,
      {
        left: centerXStage,
        top: rootYStage,
        scale: 0.2,
        opacity: 0
      },
      {
        left: finalX,
        top: finalY,
        scale: 1,
        opacity: 1,
        duration: 0.44,
        ease: 'back.out(1.25)'
      },
      step3Start + idx * 0.015
    );
  });

  tl.to(catEdges, { opacity: 0.25, duration: 0.35 }, step3Start + 0.15);

  if (allToolNodes.length > 0) {
    const toolsEmergeStart = step3Start + 0.32;
    allToolNodes.forEach((toolEl, idx) => {
      const catId = toolEl.closest('.branch-node-group')?.dataset.catId;
      const catCoords = state.categoryCoords.get(catId) || { x: centerXStage, y: rootYStage };
      const finalX = parseFloat(toolEl.style.left);
      const finalY = parseFloat(toolEl.style.top);

      tl.fromTo(
        toolEl,
        {
          left: catCoords.x,
          top: catCoords.y,
          scale: 0.25,
          opacity: 0
        },
        {
          left: finalX,
          top: finalY,
          scale: 1,
          opacity: 1,
          duration: 0.38,
          ease: 'back.out(1.2)'
        },
        toolsEmergeStart + (idx % 6) * 0.025
      );
    });

    tl.to(toolEdges, { opacity: 0.25, duration: 0.3 }, toolsEmergeStart + 0.12);
  }

  if (hudEl) {
    tl.to(hudEl, { opacity: 1, duration: 0.3 }, step3Start + 0.25);
  }
}

// ==================== VERIFICADOR DE CONEXIÓN REAL CON OLLAMA LOCAL ====================
async function checkOllamaStatus() {
  const led = document.getElementById('ollamaLed');
  const label = document.getElementById('ollamaStatusLabel');
  if (!led || !label) return false;

  label.textContent = 'Comprobando localhost:11434...';

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1800);
    const res = await fetch('http://localhost:11434/api/tags', { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!res.ok) throw new Error('Status not OK');
    const data = await res.json();
    const models = data.models || [];

    const preferred =
      models.find(m => m.name.toLowerCase().includes('qwen2.5-coder')) ||
      models.find(m => m.name.toLowerCase().includes('qwen')) ||
      models[0];

    if (preferred && preferred.name) {
      state.ollamaModelName = preferred.name;
    }

    state.ollamaOnline = true;
    led.className = 'status-led online';
    label.textContent = `Ollama Activo (${state.ollamaModelName})`;
    return true;
  } catch (err) {
    state.ollamaOnline = false;
    led.className = 'status-led offline';
    label.textContent = 'Motor Local (Ollama desconectado)';
    return false;
  }
}

// ==================== LENIS SMOOTH SCROLL SOBRE LA VISTA BENTO ====================
function initLenisSmoothScroll() {
  try {
    if (!window.Lenis) return;
    const bentoVp = document.getElementById('bentoViewport');
    const bentoStage = document.getElementById('bentoStage');
    if (!bentoVp || !bentoStage) return;

    state.lenisBento = new Lenis({
      wrapper: bentoVp,
      content: bentoStage,
      lerp: 0.09,
      smoothWheel: true
    });

    function raf(time) {
      if (state.view === 'bento' && !state.isMorphingView && state.lenisBento) {
        state.lenisBento.raf(time);
      }
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  } catch (e) {}
}

function runWithViewTransition(fn) {
  if (document.startViewTransition) {
    try {
      document.startViewTransition(() => fn());
    } catch (e) {
      fn();
    }
  } else {
    fn();
  }
}

// ==================== CONSTELACIÓN REACTIVA EN CANVAS 2D ====================
function initBackgroundParticles() {
  const canvas = document.getElementById('particlesCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);
  let mouseX = width / 2;
  let mouseY = height / 2;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const particles = Array.from({ length: 42 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    r: Math.random() * 1.6 + 0.8
  }));

  function animateParticles() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(56, 189, 248, 0.55)';

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      const dMouse = Math.hypot(p.x - mouseX, p.y - mouseY);
      if (dMouse < 150) {
        ctx.strokeStyle = `rgba(56, 189, 248, ${(1 - dMouse / 150) * 0.25})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
      }
    }
    requestAnimationFrame(animateParticles);
  }
  requestAnimationFrame(animateParticles);
}

// ==================== NÚCLEO 3D WEBGL CON THREE.JS ====================
function mountThreeRootCore(containerEl) {
  try {
    if (!window.THREE || !containerEl) return;

    if (state.threeCore && state.threeCore.renderer) {
      containerEl.prepend(state.threeCore.renderer.domElement);
      return;
    }

    const width = 196;
    const height = 196;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 3.1;

    // El false final en setSize evita que Three.js imponga 196px inline en el style y permite que CSS lo escale al 100% del círculo
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height, false);
    renderer.domElement.className = 'root-webgl-canvas';
    containerEl.prepend(renderer.domElement);

    const outerGeo = new THREE.IcosahedronGeometry(1.08, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    scene.add(outerMesh);

    const innerGeo = new THREE.OctahedronGeometry(0.62, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.55
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerMesh);

    state.threeCore = {
      renderer,
      outerMesh,
      innerMesh,
      outerMat,
      innerMat,
      speedMultiplier: 1
    };

    function animateThree() {
      requestAnimationFrame(animateThree);
      const mult = state.threeCore.speedMultiplier;
      outerMesh.rotation.y += 0.005 * mult;
      outerMesh.rotation.x += 0.003 * mult;
      innerMesh.rotation.y -= 0.008 * mult;
      innerMesh.rotation.z += 0.004 * mult;
      renderer.render(scene, camera);
    }
    animateThree();
  } catch (err) {}
}

function setThreeCoreColor(hexColorStr) {
  try {
    if (!state.threeCore || !window.THREE) return;
    state.threeCore.outerMat.color.set(hexColorStr);
  } catch (e) {}
}

// ==================== SANDBOX DE FÍSICAS 2D CON MATTER.JS ====================
function updateMatterPhysicsSandbox() {
  const wrap = document.getElementById('matterSandboxWrap');
  const canvas = document.getElementById('matterCanvas');
  if (!wrap || !canvas) return;

  if (!state.matterActive || !window.Matter) {
    wrap.style.display = 'none';
    if (state.matterInstance) {
      Matter.Render.stop(state.matterInstance.render);
      Matter.Runner.stop(state.matterInstance.runner);
      state.matterInstance = null;
    }
    return;
  }

  wrap.style.display = 'block';

  if (state.matterInstance) {
    Matter.Render.stop(state.matterInstance.render);
    Matter.Runner.stop(state.matterInstance.runner);
    state.matterInstance = null;
  }

  const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint } = Matter;
  const engine = Engine.create();
  const width = 384;
  const height = 135;

  const render = Render.create({
    canvas,
    engine,
    options: {
      width,
      height,
      wireframes: false,
      background: 'transparent',
      pixelRatio: Math.min(window.devicePixelRatio || 1, 2)
    }
  });

  const ground = Bodies.rectangle(width / 2, height + 12, width, 24, { isStatic: true });
  const leftWall = Bodies.rectangle(-12, height / 2, 24, height, { isStatic: true });
  const rightWall = Bodies.rectangle(width + 12, height / 2, 24, height, { isStatic: true });
  const ceiling = Bodies.rectangle(width / 2, -20, width, 24, { isStatic: true });

  const pillBodies = [];
  const ids = state.currentProject.stackIds.length > 0
    ? state.currentProject.stackIds
    : ['gsap', 'lenis', 'threejs', 'astro', 'tailwind'];

  ids.forEach((id, i) => {
    const tool = state.tools.find(t => t.id === id);
    if (!tool) return;
    const cat = CATEGORIES.find(c => c.id === tool.category);
    const color = cat ? cat.color : '#38bdf8';
    const label = tool.name.replace(' [NUEVO]', '').slice(0, 14);
    const pillW = Math.max(68, label.length * 7 + 18);

    const body = Bodies.rectangle(
      50 + ((i * 65) % (width - 100)),
      15 + (i * 12) % 45,
      pillW,
      24,
      {
        chamfer: { radius: 10 },
        restitution: 0.65,
        friction: 0.08,
        render: {
          fillStyle: 'rgba(18, 26, 42, 0.95)',
          strokeStyle: color,
          lineWidth: 2
        },
        plugin: { label, color }
      }
    );
    pillBodies.push(body);
  });

  Composite.add(engine.world, [ground, leftWall, rightWall, ceiling, ...pillBodies]);

  const mouse = Mouse.create(render.canvas);
  const mouseConstraint = MouseConstraint.create(engine, {
    mouse,
    constraint: { stiffness: 0.2, render: { visible: false } }
  });
  Composite.add(engine.world, mouseConstraint);

  Matter.Events.on(render, 'afterRender', () => {
    const ctx = render.context;
    ctx.font = '600 10px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    pillBodies.forEach(b => {
      ctx.save();
      ctx.translate(b.position.x, b.position.y);
      ctx.rotate(b.angle);
      ctx.fillStyle = '#f8fafc';
      ctx.fillText(b.plugin.label, 0, 1);
      ctx.restore();
    });
  });

  Render.run(render);
  const runner = Runner.create();
  Runner.run(runner, engine);

  state.matterInstance = { engine, render, runner };
}

function persistSeenTools() {
  localStorage.setItem(KEY_SEEN_TOOLS, JSON.stringify(Array.from(state.seenToolIds)));
}

function isToolUnreadNew(tool) {
  const cleanName = tool.name.includes('[NUEVO]');
  return (tool.isNewAddition || cleanName || !INITIAL_IDS.has(tool.id)) && !state.seenToolIds.has(tool.id);
}

function markToolAsSeen(toolId) {
  if (state.seenToolIds.has(toolId)) return;
  state.seenToolIds.add(toolId);
  persistSeenTools();

  document.querySelectorAll(`[data-tool-id="${toolId}"]`).forEach(nodeEl => {
    nodeEl.classList.remove('unread-new-node');
    const badge = nodeEl.querySelector('.new-badge');
    if (badge) {
      if (window.gsap) {
        gsap.to(badge, {
          scale: 0,
          opacity: 0,
          duration: 0.25,
          onComplete: () => badge.remove()
        });
      } else {
        badge.remove();
      }
    }
  });

  updateCategoryAndTopNewBadges();
}

function updateCategoryAndTopNewBadges() {
  let totalUnread = 0;

  CATEGORIES.forEach(cat => {
    const unreadInCat = state.tools.filter(t => t.category === cat.id && isToolUnreadNew(t)).length;
    totalUnread += unreadInCat;

    const catNode = document.querySelector(`.node-category[data-cat-id="${cat.id}"]`);
    if (catNode) {
      let pill = catNode.querySelector('.cat-new-pill');
      if (unreadInCat > 0) {
        if (!pill) {
          pill = document.createElement('span');
          pill.className = 'cat-new-pill';
          catNode.appendChild(pill);
        }
        pill.textContent = `✨ ${unreadInCat} NEW`;
      } else if (pill) {
        pill.remove();
      }
    }
  });

  const topPill = document.getElementById('unreadCounterPill');
  const topText = document.getElementById('unreadCountText');
  if (topPill && topText) {
    if (totalUnread > 0) {
      topPill.style.display = 'inline-flex';
      topText.textContent = `${totalUnread} ${totalUnread === 1 ? 'nueva sin leer' : 'nuevas sin leer'}`;
    } else {
      topPill.style.display = 'none';
    }
  }
}

function persistActiveProject() {
  localStorage.setItem(KEY_ACTIVE_PROJECT, JSON.stringify(state.currentProject));
  updateHeaderProjectLabel();
}

function persistSavedProjects() {
  localStorage.setItem(KEY_SAVED_PROJECTS, JSON.stringify(state.savedProjects));
  const badge = document.getElementById('projectsCountBadge');
  if (badge) badge.textContent = state.savedProjects.length;
}

function updateHeaderProjectLabel() {
  const label = document.getElementById('activeProjectHeader');
  if (!label) return;
  const name = (state.currentProject.name || '').trim();
  const count = state.currentProject.stackIds.length;
  label.textContent = name
    ? `Proyecto activo: ${name} (${count} en Stack)`
    : `Proyecto en curso (${count} en Stack)`;
}

function getToolProgress(toolId) {
  return state.userProgress[toolId] || { status: 'none', notes: '' };
}

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

// LIMPIAR TODOS LOS FILTROS Y DEJAR EN BLANCO EL NOMBRE Y DESCRIPCIÓN DEL PROYECTO
function clearAllGlobalFilters() {
  state.search = '';
  state.stackFocusMode = false;
  state.recommendedIds = [];
  state.recommendedReasons = {};
  state.currentProject.name = '';
  state.currentProject.description = '';

  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';

  const projectNameInput = document.getElementById('projectNameInput');
  if (projectNameInput) projectNameInput.value = '';

  const advisorInput = document.getElementById('advisorInput');
  if (advisorInput) advisorInput.value = '';

  const reasoningBox = document.getElementById('aiReasoningBox');
  if (reasoningBox) reasoningBox.style.display = 'none';

  const btnPassAll = document.getElementById('btnPassAllToStack');
  if (btnPassAll) btnPassAll.style.display = 'none';

  const resultsBox = document.getElementById('advisorResultsContainer');
  if (resultsBox) {
    resultsBox.innerHTML = `<p class="empty-hint">Describe tu proyecto arriba y pulsa <strong>Analizar y Recomendar</strong>. Solo se seleccionarán tecnologías reales de tu catálogo.</p>`;
  }

  persistActiveProject();
  resetBranchesWithGSAP(true);
  renderAll();
}

function updateClearFilterButtonState() {
  const btn = document.getElementById('btnClearGlobalFilter');
  if (!btn) return;
  const hasActiveFilter =
    state.search.trim() !== '' ||
    state.stackFocusMode ||
    state.recommendedIds.length > 0 ||
    (state.currentProject.name || '').trim() !== '';
  btn.classList.toggle('active', hasActiveFilter);
}

// ==================== MOTOR DE CÁMARA ESTABLE (SIN SALTOS AL ARRASTRAR) ====================
function startSmoothCameraLoop() {
  const stage = document.getElementById('treeStage');
  if (!stage) return;

  function step() {
    if (state.view === 'tree' && !state.isMorphingView) {
      const cam = state.camera;

      if (cam.isDragging) {
        // Durante el arrastre con el ratón, el movimiento es 1:1 directo para evitar cualquier rebote o locura de interpolación
        cam.currentX = cam.targetX;
        cam.currentY = cam.targetY;
        stage.style.transform = `translate(${Math.round(cam.currentX)}px, ${Math.round(cam.currentY)}px) scale(${cam.currentScale})`;
      } else {
        const dx = cam.targetX - cam.currentX;
        const dy = cam.targetY - cam.currentY;
        const ds = cam.targetScale - cam.currentScale;

        if (Math.abs(dx) > 0.2 || Math.abs(dy) > 0.2 || Math.abs(ds) > 0.0005) {
          cam.currentX += dx * 0.22;
          cam.currentY += dy * 0.22;
          cam.currentScale += ds * 0.22;

          stage.style.transform = `translate(${cam.currentX.toFixed(1)}px, ${cam.currentY.toFixed(1)}px) scale(${cam.currentScale.toFixed(4)})`;
        } else {
          cam.targetX = Math.round(cam.targetX);
          cam.targetY = Math.round(cam.targetY);
          cam.targetScale = Number(cam.targetScale.toFixed(3));
          cam.currentX = cam.targetX;
          cam.currentY = cam.targetY;
          cam.currentScale = cam.targetScale;

          stage.style.transform = `translate(${cam.currentX}px, ${cam.currentY}px) scale(${cam.currentScale})`;
        }
      }
    }

    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

function centerCamera(instant = false) {
  const viewport = document.getElementById('treeViewport');
  const vw = (viewport && viewport.clientWidth) ? viewport.clientWidth : window.innerWidth;
  const vh = (viewport && viewport.clientHeight) ? viewport.clientHeight : (window.innerHeight - 60);

  const targetScale = vw < 1200 ? 0.62 : 0.76;
  const anchorY = state.layout === 'matrix' ? 780 : 1300;

  state.camera.targetScale = Number(targetScale.toFixed(3));
  state.camera.targetX = Math.round(vw / 2 - 1800 * state.camera.targetScale);
  state.camera.targetY = Math.round(vh / 2 - anchorY * state.camera.targetScale);

  if (instant) {
    state.camera.currentScale = state.camera.targetScale;
    state.camera.currentX = state.camera.targetX;
    state.camera.currentY = state.camera.targetY;
    const stage = document.getElementById('treeStage');
    if (stage) {
      stage.style.transform = `translate(${state.camera.currentX}px, ${state.camera.currentY}px) scale(${state.camera.currentScale})`;
    }
  }
}

function applyZoomAtPoint(newScale, mouseX, mouseY) {
  const clamped = Number(Math.min(2.8, Math.max(0.32, newScale)).toFixed(3));
  const ratio = clamped / state.camera.targetScale;
  state.camera.targetX = Math.round(mouseX - (mouseX - state.camera.targetX) * ratio);
  state.camera.targetY = Math.round(mouseY - (mouseY - state.camera.targetY) * ratio);
  state.camera.targetScale = clamped;
}

// MOTOR GSAP ESTABILIZADO (Bloqueado mientras arrastras el árbol para no pelear con el ratón)
function focusBranchWithGSAP(activeCatId, specificToolId = null) {
  if (state.view !== 'tree' || state.isMorphingView || state.camera.isDragging) return;
  clearTimeout(resetBranchesTimer);
  const svg = document.getElementById('treeSvg');
  if (!svg) return;
  const activeCoords = state.categoryCoords.get(activeCatId);
  if (!activeCoords) return;

  const activeCatObj = CATEGORIES.find(c => c.id === activeCatId);
  if (activeCatObj) setThreeCoreColor(activeCatObj.color);

  CATEGORIES.forEach(cat => {
    const nodeGroup = document.querySelector(`.branch-node-group[data-cat-id="${cat.id}"]`);
    const svgGroup = svg.querySelector(`.branch-svg-group[data-cat-id="${cat.id}"]`);
    const catCoords = state.categoryCoords.get(cat.id);
    if (!nodeGroup || !svgGroup || !catCoords) return;

    if (cat.id === activeCatId) {
      if (window.gsap) {
        gsap.to([nodeGroup, svgGroup], {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 0.38,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      }

      svgGroup.querySelectorAll('path').forEach(p => {
        const edgeName = p.getAttribute('data-edge');
        const shouldGlow = !specificToolId || edgeName === `cat-${cat.id}` || edgeName === `tool-${specificToolId}`;
        if (shouldGlow) {
          p.classList.add(p.classList.contains('edge-base') ? 'edge-active-base' : 'edge-active-pulse');
          p.classList.remove('edge-dimmed');
        } else {
          p.classList.remove('edge-active-base', 'edge-active-pulse');
        }
      });
    } else {
      const dx = catCoords.x - activeCoords.x;
      const dy = catCoords.y - activeCoords.y;
      const dist = Math.hypot(dx, dy) || 1;

      const pushStrength = Math.max(10, Math.min(20, 8000 / dist));
      const offsetX = Math.round((dx / dist) * pushStrength);
      const offsetY = state.layout === 'matrix' ? 0 : Math.round((dy / dist) * pushStrength);

      if (window.gsap) {
        gsap.to([nodeGroup, svgGroup], {
          x: offsetX,
          y: offsetY,
          opacity: 0.36,
          duration: 0.42,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      }

      svgGroup.querySelectorAll('path').forEach(p => {
        p.classList.remove('edge-active-base', 'edge-active-pulse');
        p.classList.add('edge-dimmed');
      });
    }
  });
}

function resetBranchesWithGSAP(immediate = false) {
  clearTimeout(resetBranchesTimer);
  const executeReset = () => {
    const svg = document.getElementById('treeSvg');
    if (!svg) return;
    const allNodeGroups = document.querySelectorAll('.branch-node-group');
    const allSvgGroups = svg.querySelectorAll('.branch-svg-group');

    setThreeCoreColor('#38bdf8');

    if (window.gsap) {
      gsap.to([...allNodeGroups, ...allSvgGroups], {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    }

    svg.querySelectorAll('path').forEach(p => {
      p.classList.remove('edge-active-base', 'edge-active-pulse', 'edge-dimmed');
    });
  };

  if (immediate) {
    executeReset();
  } else {
    resetBranchesTimer = setTimeout(executeReset, 55);
  }
}

// TARJETA DERECHA DE VISTA RÁPIDA (EXCLUSIVA PARA EL MODO ÁRBOL)
function scheduleShowTechCard(toolId) {
  if (state.view !== 'tree' || state.isMorphingView || state.camera.isDragging) return;
  clearTimeout(hoverCloseTimer);
  if (state.isCardPinned && state.activeToolId !== toolId) return;

  clearTimeout(hoverOpenTimer);
  hoverOpenTimer = setTimeout(() => {
    openTechCard(toolId, state.isCardPinned);
  }, 45);
}

function scheduleHideTechCard() {
  clearTimeout(hoverOpenTimer);
  if (state.isCardPinned) return;

  hoverCloseTimer = setTimeout(() => {
    closeTechCard();
  }, 260);
}

function openTechCard(toolId, pinIt = false) {
  if (state.view !== 'tree') return;
  const tool = state.tools.find(t => t.id === toolId);
  if (!tool) return;

  markToolAsSeen(toolId);

  const card = document.getElementById('techCard');
  if (!card) return;
  const isSwitchingContent = state.isCardVisible && state.activeToolId !== toolId;
  const isAlreadyShowingSame = state.isCardVisible && state.activeToolId === toolId;

  state.activeToolId = toolId;
  state.isCardPinned = pinIt;
  state.isCardVisible = true;

  card.classList.add('visible');
  card.classList.toggle('pinned', state.isCardPinned);
  card.setAttribute('aria-hidden', 'false');

  syncWorkspaceCorridor();

  document.querySelectorAll('.node-tool').forEach(el => {
    el.classList.toggle('selected', el.dataset.toolId === toolId);
  });

  populateTechCardDOM(tool);

  if (!window.gsap) {
    card.style.opacity = '1';
    card.style.transform = 'translate(0,0)';
    return;
  }

  if (!isSwitchingContent && !isAlreadyShowingSame) {
    gsap.killTweensOf(card);
    gsap.fromTo(
      card,
      { opacity: 0, x: 32, scale: 0.97 },
      { opacity: 1, x: 0, scale: 1, duration: 0.34, ease: 'power3.out' }
    );
    gsap.fromTo(
      card.querySelectorAll('.tc-anim-item'),
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.28, stagger: 0.03, ease: 'power2.out' }
    );
  } else if (isSwitchingContent) {
    gsap.killTweensOf(card.querySelectorAll('.tc-anim-item'));
    gsap.fromTo(
      card.querySelectorAll('.tc-anim-item'),
      { opacity: 0.25, y: 5 },
      { opacity: 1, y: 0, duration: 0.22, stagger: 0.02, ease: 'power2.out' }
    );
  }
}

function populateTechCardDOM(tool) {
  const cat = CATEGORIES.find(c => c.id === tool.category);
  const color = cat ? cat.color : '#38bdf8';
  const prog = getToolProgress(tool.id);
  const card = document.getElementById('techCard');
  if (!card) return;

  card.style.setProperty('--tc-color', color);
  document.getElementById('tcCategory').textContent = cat ? cat.name : 'TECNOLOGÍA';
  document.getElementById('tcTitle').textContent = tool.name.replace(' [NUEVO]', '');
  document.getElementById('tcBadge').textContent = tool.badge;
  document.getElementById('tcUrl').href = tool.url;
  document.getElementById('tcSummary').textContent = tool.summary;

  const aiReason = state.recommendedReasons[tool.id];
  const useCaseEl = document.getElementById('tcUseCase');
  if (useCaseEl) {
    if (aiReason) {
      useCaseEl.innerHTML = `<strong style="color:#fbbf24;">★ Por qué en tu proyecto:</strong> ${aiReason}<br/><span style="color:#94a3b8; font-size:0.77rem;">Uso general: ${tool.useCase}</span>`;
    } else {
      useCaseEl.textContent = tool.useCase;
    }
  }

  document.getElementById('tcSnippet').textContent = tool.snippet || `// Ver documentación en ${tool.url}`;
  document.getElementById('tcNotes').value = prog.notes || '';

  const chipsContainer = document.getElementById('tcSynergyChips');
  if (chipsContainer) {
    const rawSynergies = (tool.synergy || 'HTML + CSS + JS').split(/[+,/]/).map(s => s.trim()).filter(Boolean);
    chipsContainer.innerHTML = rawSynergies
      .map(s => `<span class="tc-syn-chip">${s}</span>`)
      .join('');
  }

  document.querySelectorAll('#tcStatusGroup .tc-status-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.status === prog.status);
  });

  updateCardStackPill(tool.id);
}

function updateCardStackPill(toolId) {
  const pill = document.getElementById('btnToggleStackFromCard');
  if (!pill) return;
  const inStack = state.currentProject.stackIds.includes(toolId);
  pill.classList.toggle('in-stack', inStack);
  pill.textContent = inStack ? '✓ En Stack' : '+ Stack';
}

function closeTechCard() {
  const card = document.getElementById('techCard');
  if (!card) return;
  state.isCardPinned = false;
  state.isCardVisible = false;
  state.activeToolId = null;

  card.classList.remove('visible', 'pinned');
  card.setAttribute('aria-hidden', 'true');

  syncWorkspaceCorridor();

  document.querySelectorAll('.node-tool.selected').forEach(el => el.classList.remove('selected'));

  if (window.gsap) {
    gsap.to(card, {
      opacity: 0,
      x: 24,
      scale: 0.98,
      duration: 0.22,
      ease: 'power2.in'
    });
  } else {
    card.style.opacity = '0';
  }
}

// RENDERIZADO GENERAL
function renderAll() {
  updateHeaderProjectLabel();
  updateClearFilterButtonState();
  syncWorkspaceCorridor();
  renderTree();
  renderBento();
  renderStackDock();
  renderSavedProjectsList();
  updateCategoryAndTopNewBadges();
  if (state.matterActive) updateMatterPhysicsSandbox();
}

// RENDERIZADO DEL ÁRBOL
function renderTree() {
  const svg = document.getElementById('treeSvg');
  const nodesLayer = document.getElementById('treeNodes');
  if (!svg || !nodesLayer) return;

  svg.innerHTML = '';
  nodesLayer.innerHTML = '';
  state.categoryCoords.clear();

  const centerX = 1800;
  const rootY = state.layout === 'matrix' ? 420 : 1300;

  // 1. ESFERA CENTRAL CON NÚCLEO 3D THREE.JS
  const rootEl = document.createElement('div');
  rootEl.className = 'node node-root';
  rootEl.style.left = `${centerX}px`;
  rootEl.style.top = `${rootY}px`;
  const allExpanded = state.expandedCategories.size === CATEGORIES.length;
  rootEl.innerHTML = `
    <span class="node-root-tag">THREE.JS CORE</span>
    <div class="node-root-title">${state.currentProject.name ? state.currentProject.name.toUpperCase() : 'STACK PRO'}</div>
    <span class="node-root-sub">${allExpanded ? 'Clic para plegar ramas' : 'Clic para desplegar todas'}</span>
  `;

  if (state.view === 'tree' && !state.isMorphingView) {
    mountThreeRootCore(rootEl);
  }

  rootEl.addEventListener('mouseenter', () => {
    if (state.camera.isDragging) return;
    clearTimeout(resetBranchesTimer);
    if (state.threeCore) state.threeCore.speedMultiplier = 3.2;
    svg.querySelectorAll('[data-edge^="cat-"]').forEach(p => {
      p.classList.add(p.classList.contains('edge-base') ? 'edge-active-base' : 'edge-active-pulse');
    });
  });
  rootEl.addEventListener('mouseleave', () => {
    if (state.threeCore) state.threeCore.speedMultiplier = 1;
    resetBranchesWithGSAP();
  });

  rootEl.addEventListener('click', (e) => {
    e.stopPropagation();
    if (state.expandedCategories.size === CATEGORIES.length) {
      state.expandedCategories.clear();
    } else {
      CATEGORIES.forEach(c => state.expandedCategories.add(c.id));
    }
    renderTree();
    updateCategoryAndTopNewBadges();
  });
  nodesLayer.appendChild(rootEl);

  // 2. CREACIÓN DE LAS 8 RAMAS
  CATEGORIES.forEach((cat, catIdx) => {
    const allCatTools = state.tools.filter(t => t.category === cat.id);
    const visibleCatTools = allCatTools.filter(t => isToolVisibleByFilter(t));

    const isExpanded =
      state.expandedCategories.has(cat.id) ||
      state.stackFocusMode ||
      state.search.trim() !== '';

    const hasVisibleItems = visibleCatTools.length > 0;

    let catX = centerX;
    let catY = rootY;
    const isLeftSide = catIdx < 4;

    if (state.layout === 'matrix') {
      const colOffset = Math.round((catIdx - 3.5) * 244);
      catX = centerX + colOffset;
      catY = 740;
    } else if (state.layout === 'wing') {
      const sideSign = isLeftSide ? -1 : 1;
      const rowIdx = catIdx % 4;
      const rowOffsets = [-690, -230, 230, 690];
      catX = centerX + sideSign * 420;
      catY = rootY + rowOffsets[rowIdx];
    } else if (state.layout === 'orbital') {
      const angle = (catIdx / CATEGORIES.length) * Math.PI * 2 - Math.PI / 2;
      const radiusCat = 420;
      catX = Math.round(centerX + Math.cos(angle) * radiusCat);
      catY = Math.round(rootY + Math.sin(angle) * radiusCat);
    }

    state.categoryCoords.set(cat.id, { x: catX, y: catY });

    const branchSvgGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    branchSvgGroup.setAttribute('class', 'branch-svg-group');
    branchSvgGroup.setAttribute('data-cat-id', cat.id);
    svg.appendChild(branchSvgGroup);

    const branchNodeGroup = document.createElement('div');
    branchNodeGroup.className = 'branch-node-group';
    branchNodeGroup.dataset.catId = cat.id;
    nodesLayer.appendChild(branchNodeGroup);

    drawConnection(
      branchSvgGroup,
      centerX,
      rootY,
      catX,
      catY,
      cat.color,
      !hasVisibleItems,
      `cat-${cat.id}`,
      state.layout === 'matrix',
      catIdx * 0.45
    );

    const unreadCountInCat = allCatTools.filter(t => isToolUnreadNew(t)).length;

    const catEl = document.createElement('div');
    catEl.className = `node node-category ${!hasVisibleItems ? 'dimmed' : ''}`;
    catEl.dataset.catId = cat.id;
    catEl.style.left = `${catX}px`;
    catEl.style.top = `${catY}px`;
    catEl.style.setProperty('--cat-color', cat.color);
    catEl.innerHTML = `
      ${unreadCountInCat > 0 ? `<span class="cat-new-pill">✨ ${unreadCountInCat} NEW</span>` : ''}
      <div class="node-category-top">
        <span class="node-category-title">${cat.name}</span>
        <span class="cat-chevron">${isExpanded ? '▾' : '▸'}</span>
      </div>
      <div class="node-category-count">${visibleCatTools.length} tecnologías · ${isExpanded ? 'Ocultar' : 'Ver'}</div>
    `;

    catEl.addEventListener('mouseenter', () => focusBranchWithGSAP(cat.id));
    catEl.addEventListener('mouseleave', () => resetBranchesWithGSAP());

    catEl.addEventListener('click', (e) => {
      e.stopPropagation();
      if (state.expandedCategories.has(cat.id)) {
        state.expandedCategories.delete(cat.id);
      } else {
        state.expandedCategories.add(cat.id);
      }
      renderTree();
      updateCategoryAndTopNewBadges();
    });

    branchNodeGroup.appendChild(catEl);

    if (!isExpanded) return;

    // 3. NODOS DE TECNOLOGÍA DE ESTA RAMA
    const sortedTools = [...visibleCatTools].sort((a, b) => {
      const aRec = state.recommendedIds.includes(a.id) ? 1 : 0;
      const bRec = state.recommendedIds.includes(b.id) ? 1 : 0;
      if (bRec !== aRec) return bRec - aRec;
      const aNew = isToolUnreadNew(a) ? 1 : 0;
      const bNew = isToolUnreadNew(b) ? 1 : 0;
      return bNew - aNew;
    });

    sortedTools.forEach((tool, toolIdx) => {
      let toolX = catX;
      let toolY = catY;

      if (state.layout === 'matrix') {
        toolX = catX;
        toolY = Math.round(catY + 116 + toolIdx * 76);
      } else if (state.layout === 'wing') {
        const sideSign = isLeftSide ? -1 : 1;
        const spreadY = Math.round((toolIdx - (sortedTools.length - 1) / 2) * 70);
        toolX = catX + sideSign * 410;
        toolY = catY + spreadY;
      } else if (state.layout === 'orbital') {
        const baseAngle = (catIdx / CATEGORIES.length) * Math.PI * 2 - Math.PI / 2;
        const spread = 0.55;
        const offset = sortedTools.length > 1
          ? ((toolIdx / (sortedTools.length - 1)) - 0.5) * spread
          : 0;
        const angle = baseAngle + offset;
        const radiusTool = 840;
        toolX = Math.round(centerX + Math.cos(angle) * radiusTool);
        toolY = Math.round(rootY + Math.sin(angle) * radiusTool);
      }

      const isUnreadNew = isToolUnreadNew(tool);
      const isRecommended = state.recommendedIds.includes(tool.id);
      const inStack = state.currentProject.stackIds.includes(tool.id);
      const edgeColor = inStack ? '#10b981' : (isUnreadNew ? '#f43f5e' : (isRecommended ? '#fbbf24' : cat.color));

      drawConnection(
        branchSvgGroup,
        catX,
        catY,
        toolX,
        toolY,
        edgeColor,
        false,
        `tool-${tool.id}`,
        state.layout === 'matrix',
        (catIdx * 0.3) + (toolIdx * 0.35)
      );

      const prog = getToolProgress(tool.id);
      const toolEl = document.createElement('div');
      toolEl.className = [
        'node node-tool',
        state.activeToolId === tool.id ? 'selected' : '',
        isUnreadNew ? 'unread-new-node' : '',
        isRecommended ? 'recommended' : '',
        inStack ? 'in-stack-node' : ''
      ].join(' ').trim();

      toolEl.dataset.toolId = tool.id;
      toolEl.style.left = `${toolX}px`;
      toolEl.style.top = `${toolY}px`;
      toolEl.style.setProperty('--cat-color', cat.color);

      const newHtml = isUnreadNew ? `<span class="new-badge">✨ NEW</span>` : '';
      const dotHtml = prog.status !== 'none' ? `<span class="status-dot ${prog.status}"></span>` : '';
      const recHtml = isRecommended ? `<span class="rec-star">★</span>` : '';
      const displayName = tool.name.replace(' [NUEVO]', '');

      toolEl.innerHTML = `
        <div class="node-tool-top">
          <span class="node-tool-name">${displayName}</span>
          <div class="node-tool-actions">
            ${newHtml}
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
        if (state.camera.isDragging) return;
        focusBranchWithGSAP(cat.id, tool.id);
        catEl.classList.add('cat-highlighted');
        scheduleShowTechCard(tool.id);
      });

      toolEl.addEventListener('mouseleave', () => {
        if (state.camera.isDragging) return;
        resetBranchesWithGSAP();
        catEl.classList.remove('cat-highlighted');
        scheduleHideTechCard();
      });

      toolEl.querySelector('.node-stack-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleToolInStack(tool.id);
      });

      toolEl.addEventListener('click', (e) => {
        e.stopPropagation();
        if (state.activeToolId === tool.id && state.isCardPinned) {
          state.isCardPinned = false;
          document.getElementById('techCard')?.classList.remove('pinned');
        } else {
          openTechCard(tool.id, true);
        }
      });

      branchNodeGroup.appendChild(toolEl);

      if (window.gsap && !state.isMorphingView) {
        gsap.fromTo(
          toolEl,
          { opacity: 0, scale: 0.88 },
          { opacity: 1, scale: 1, duration: 0.26, delay: toolIdx * 0.02, ease: 'power2.out' }
        );
      }
    });
  });
}

function drawConnection(svgGroup, x1, y1, x2, y2, color, isDimmed, edgeKey, isVerticalFlow, pulseDelaySec = 0) {
  const dx = (x2 - x1) * 0.5;
  const dy = (y2 - y1) * 0.5;

  const d = isVerticalFlow
    ? `M ${x1} ${y1} C ${x1} ${y1 + dy}, ${x2} ${y2 - dy}, ${x2} ${y2}`
    : `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;

  const basePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  basePath.setAttribute('d', d);
  basePath.setAttribute('stroke', color);
  basePath.setAttribute('class', 'edge-base');
  basePath.setAttribute('data-edge', edgeKey);
  if (isDimmed) basePath.style.opacity = '0.05';
  svgGroup.appendChild(basePath);

  if (!isDimmed) {
    const pulsePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pulsePath.setAttribute('d', d);
    pulsePath.setAttribute('stroke', color);
    pulsePath.style.color = color;
    pulsePath.style.setProperty('--pulse-delay', `-${pulseDelaySec.toFixed(2)}s`);
    pulsePath.setAttribute('class', 'edge-pulse');
    pulsePath.setAttribute('data-edge', edgeKey);
    svgGroup.appendChild(pulsePath);
  }
}

// ==================== RENDERIZADO DE LA CUADRÍCULA BENTO DE 3 COLUMNAS CON NODO PERFECTAMENTE CUADRADO ====================
function renderBento() {
  const coreDock = document.getElementById('bentoCoreDock');
  const grid = document.getElementById('bentoUnifiedGrid');
  if (!coreDock || !grid) return;

  coreDock.innerHTML = '';
  grid.innerHTML = '';

  // 1. El Nodo Central 100% cuadrado y centrado sobre las 3 columnas
  const dockedRoot = document.createElement('div');
  dockedRoot.className = 'node node-root';
  const projTitle = state.currentProject.name ? state.currentProject.name.toUpperCase() : 'STACK PRO';
  dockedRoot.innerHTML = `
    <span class="node-root-tag">CORE ACTIVO</span>
    <div class="node-root-title">${projTitle}</div>
    <span class="node-root-sub">Clic para volver al Árbol</span>
  `;

  if (state.view === 'bento' && !state.isMorphingView) {
    mountThreeRootCore(dockedRoot);
  }

  dockedRoot.addEventListener('click', () => {
    switchMainView('tree');
  });
  coreDock.appendChild(dockedRoot);

  // 2. Cuadrícula de 3 columnas con todas las fichas completas abiertas
  const visibleTools = state.tools.filter(t => isToolVisibleByFilter(t));

  visibleTools.forEach(tool => {
    const cat = CATEGORIES.find(c => c.id === tool.category);
    const catColor = cat ? cat.color : '#38bdf8';
    const catName = cat ? cat.name : 'Tecnología';
    const inStack = state.currentProject.stackIds.includes(tool.id);
    const isRec = state.recommendedIds.includes(tool.id);
    const isUnread = isToolUnreadNew(tool);
    const displayName = tool.name.replace(' [NUEVO]', '');
    const prog = getToolProgress(tool.id);

    const aiReason = state.recommendedReasons[tool.id];
    const useCaseHtml = aiReason
      ? `<strong style="color:#fbbf24;">★ Por qué en tu proyecto:</strong> ${aiReason}<br/><span style="color:#94a3b8; font-size:0.74rem;">Uso general: ${tool.useCase}</span>`
      : `<strong>Ideal para:</strong> ${tool.useCase}`;

    const rawSynergies = (tool.synergy || 'HTML + CSS + JS').split(/[+,/]/).map(s => s.trim()).filter(Boolean);
    const synergiesHtml = rawSynergies.map(s => `<span class="tc-syn-chip">${s}</span>`).join('');

    const card = document.createElement('article');
    card.className = 'bento-card';
    card.dataset.toolId = tool.id;
    card.style.setProperty('--cat-color', catColor);

    card.innerHTML = `
      <div class="bento-card-top">
        <div class="bento-card-cat-row">
          <span class="bento-cat-pill">
            <span class="bento-cat-dot"></span>
            ${catName}
          </span>
          <div class="bento-card-actions-right">
            ${isUnread ? '<span class="new-badge">✨ NEW</span>' : ''}
            <button type="button" class="node-stack-btn ${inStack ? 'in-stack' : ''}">
              ${inStack ? '✓ En Stack' : '+ Stack'}
            </button>
            <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="tc-web-pill">Web ↗</a>
          </div>
        </div>

        <div class="bento-card-title-row">
          <h3 class="bento-card-title">${isRec ? '★ ' : ''}${displayName}</h3>
          <span class="bento-card-badge">${tool.badge}</span>
        </div>
      </div>

      <p class="bento-card-summary">${tool.summary}</p>

      <div class="bento-usecase-box">
        <span class="bento-usecase-icon">✦</span>
        <div>${useCaseHtml}</div>
      </div>

      <div class="bento-synergy-wrap">
        <span class="tc-micro-label">Combina genial con</span>
        <div class="tc-synergy-chips">${synergiesHtml}</div>
      </div>

      <div class="bento-code-wrap">
        <div class="tc-code-bar">
          <span class="tc-micro-label">Inicio rápido</span>
          <button type="button" class="tc-copy-btn btn-copy-bento-code">Copiar</button>
        </div>
        <pre class="bento-code-pre"><code>${tool.snippet || `// Documentación en ${tool.url}`}</code></pre>
      </div>

      <div class="bento-card-footer">
        <div class="tc-status-bar bento-status-group">
          <button type="button" class="tc-status-btn ${prog.status === 'none' ? 'active' : ''}" data-status="none">Sin marcar</button>
          <button type="button" class="tc-status-btn ${prog.status === 'radar' ? 'active' : ''}" data-status="radar">En radar</button>
          <button type="button" class="tc-status-btn ${prog.status === 'practicing' ? 'active' : ''}" data-status="practicing">Practicando</button>
          <button type="button" class="tc-status-btn ${prog.status === 'mastered' ? 'active' : ''}" data-status="mastered">Dominada</button>
        </div>
        <input
          type="text"
          class="tc-note-input bento-note-input"
          placeholder="Añadir nota rápida sobre esta tecnología..."
          value="${(prog.notes || '').replace(/"/g, '&quot;')}"
          autocomplete="off"
        />
      </div>
    `;

    card.addEventListener('mouseenter', () => {
      setThreeCoreColor(catColor);
      markToolAsSeen(tool.id);
    });

    card.addEventListener('mouseleave', () => {
      setThreeCoreColor('#38bdf8');
    });

    card.querySelector('.node-stack-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleToolInStack(tool.id);
    });

    card.querySelector('.btn-copy-bento-code').addEventListener('click', (e) => {
      e.stopPropagation();
      navigator.clipboard.writeText(tool.snippet || tool.url);
      const btn = e.currentTarget;
      btn.textContent = '¡Copiado!';
      setTimeout(() => { btn.textContent = 'Copiar'; }, 1400);
    });

    card.querySelectorAll('.bento-status-group .tc-status-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const cur = getToolProgress(tool.id);
        state.userProgress[tool.id] = { ...cur, status: btn.dataset.status };
        localStorage.setItem(KEY_PROGRESS, JSON.stringify(state.userProgress));
        card.querySelectorAll('.bento-status-group .tc-status-btn').forEach(b => {
          b.classList.toggle('active', b.dataset.status === btn.dataset.status);
        });
        renderTree();
      });
    });

    card.querySelector('.bento-note-input').addEventListener('input', (e) => {
      const cur = getToolProgress(tool.id);
      state.userProgress[tool.id] = { ...cur, notes: e.target.value };
      localStorage.setItem(KEY_PROGRESS, JSON.stringify(state.userProgress));
    });

    grid.appendChild(card);
  });
}

// ==================== ASESOR DE ARQUITECTURA: OLLAMA PROFUNDO ====================
async function runProjectAdvisor(rawText) {
  const cleanPrompt = (rawText || '').trim();
  state.currentProject.description = cleanPrompt;
  persistActiveProject();

  const container = document.getElementById('advisorResultsContainer');
  const btnPassAll = document.getElementById('btnPassAllToStack');
  const reasoningBox = document.getElementById('aiReasoningBox');
  const runBtn = document.getElementById('btnRunAdvisor');

  if (!cleanPrompt) {
    state.recommendedIds = [];
    state.recommendedReasons = {};
    if (btnPassAll) btnPassAll.style.display = 'none';
    if (reasoningBox) reasoningBox.style.display = 'none';
    if (container) {
      container.innerHTML = `<p class="empty-hint">Describe tu proyecto arriba y pulsa <strong>Analizar y Recomendar</strong>.</p>`;
    }
    renderAll();
    return;
  }

  const isOnline = await checkOllamaStatus();

  if (isOnline) {
    if (runBtn) {
      runBtn.disabled = true;
      runBtn.textContent = 'Razonando con IA...';
    }
    if (btnPassAll) btnPassAll.style.display = 'none';
    if (reasoningBox) {
      reasoningBox.style.display = 'block';
      reasoningBox.innerHTML = `🟢 <strong>Analizando con ${state.ollamaModelName}:</strong> Leyendo las descripciones completas de las ${state.tools.length} tecnologías del catálogo para diseñar tu stack a medida...`;
    }
    if (container) {
      container.innerHTML = `<p class="empty-hint">⏳ Evaluando compatibilidad de lenguajes, frameworks, bases de datos y librerías para tu proyecto...</p>`;
    }

    try {
      const fullCatalogContext = state.tools.map(t => {
        const cleanName = t.name.replace(' [NUEVO]', '');
        return `- ID: "${t.id}" | Nombre: ${cleanName} | Rama: ${t.category} | Descripción: ${t.summary} | Ideal para: ${t.useCase}`;
      }).join('\n');

      const deepArchitectPrompt = `Eres un Arquitecto de Software Senior. El usuario quiere desarrollar el siguiente proyecto:
"${cleanPrompt}"

A continuación tienes el catálogo completo de tecnologías disponibles con sus descripciones:
${fullCatalogContext}

INSTRUCCIONES ESTRICTAS DE SELECCIÓN:
1. Analiza qué necesita realmente el proyecto del usuario (lenguaje principal, framework, base de datos, librerías de animación/3D o despliegue) leyendo las descripciones del catálogo.
2. Selecciona únicamente entre 4 y 8 tecnologías que formen un stack coherente y necesario.
3. NO elijas tecnologías redundantes que compitan por el mismo puesto (por ejemplo: no elijas Astro y Next.js a la vez; no elijas Supabase y Firebase a la vez; no elijas Java/Android si el usuario pide solo una web estática).
4. PROHIBIDO inventar IDs fuera de la lista proporcionada.
5. Para cada tecnología seleccionada, escribe en "razon" una frase clara y directa en español explicando exactamente POR QUÉ es necesaria en este proyecto concreto del usuario.

Responde ÚNICAMENTE con un objeto JSON válido con esta estructura exacta:
{
  "arquitectura": "Resumen técnico en español (2 frases) de cómo se conectan las tecnologías elegidas para este proyecto.",
  "seleccion": [
    {
      "id": "id_exacto_del_catalogo",
      "razon": "Por qué esta tecnología es necesaria específicamente para lo que pide el usuario."
    }
  ]
}`;

      const res = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: state.ollamaModelName,
          prompt: deepArchitectPrompt,
          format: 'json',
          options: {
            temperature: 0.1,
            num_ctx: 8192
          },
          stream: false
        })
      });

      if (!res.ok) {
        throw new Error(`Error HTTP ${res.status} en Ollama`);
      }

      const data = await res.json();
      const parsed = JSON.parse(data.response);

      const rawSelection = Array.isArray(parsed.seleccion) ? parsed.seleccion : [];
      const verifiedTools = [];
      const newReasons = {};

      rawSelection.forEach(item => {
        if (!item || !item.id) return;
        const foundTool = state.tools.find(t => t.id === item.id);
        if (foundTool && !verifiedTools.some(vt => vt.id === foundTool.id)) {
          verifiedTools.push(foundTool);
          newReasons[foundTool.id] = item.razon || foundTool.useCase;
        }
      });

      if (verifiedTools.length === 0) {
        throw new Error('El modelo no devolvió IDs válidos del catálogo.');
      }

      state.recommendedIds = verifiedTools.map(t => t.id);
      state.recommendedReasons = newReasons;

      state.expandedCategories.clear();
      verifiedTools.forEach(t => state.expandedCategories.add(t.category));

      if (reasoningBox) {
        reasoningBox.innerHTML = `🟢 <strong>Arquitectura diseñada por ${state.ollamaModelName}:</strong><br/>${parsed.arquitectura || 'Stack seleccionado analizando las descripciones completas de tu catálogo.'}`;
      }
      if (btnPassAll) btnPassAll.style.display = 'inline-flex';
      renderAdvisorList(verifiedTools, cleanPrompt);
      renderAll();
    } catch (err) {
      runDeterministicFallbackAdvisor(cleanPrompt, `⚠️ Aviso de Ollama (${err.message}). Se muestra selección técnica de respaldo:`);
    } finally {
      if (runBtn) {
        runBtn.disabled = false;
        runBtn.textContent = 'Analizar y Recomendar';
      }
    }
  } else {
    runDeterministicFallbackAdvisor(
      cleanPrompt,
      `⚪ <strong>Ollama está desconectado:</strong> Usando análisis local de respaldo. Abre Ollama con <code>OLLAMA_ORIGINS="*"</code> y pulsa el botón de estado superior para activar el razonamiento profundo con IA.`
    );
  }
}

function runDeterministicFallbackAdvisor(rawText, bannerHtml) {
  const text = rawText.toLowerCase();
  const btnPassAll = document.getElementById('btnPassAllToStack');
  const reasoningBox = document.getElementById('aiReasoningBox');

  const intentRules = [
    {
      match: ['portfolio', 'awwwards', 'landing', 'fluida', 'animada', 'animaciones', 'creativa', 'scroll', 'estudio'],
      boostIds: ['lang-ts', 'gsap', 'scrolltrigger', 'lenis', 'astro', 'tailwind', 'fontshare', 'vercel'],
      reasonPrefix: 'Esencial para lograr fluidez, animaciones a 60 FPS y carga instantánea en tu web:'
    },
    {
      match: ['3d', 'webgl', 'modelo', 'modelos', 'shaders', 'particulas', 'blender', 'spline', 'inmersiva'],
      boostIds: ['lang-js', 'threejs', 'spline', 'blender', 'polyhaven-sketchfab', 'squoosh-gltf'],
      reasonPrefix: 'Necesaria para el pipeline de modelado, compresión y renderizado 3D en el navegador:'
    },
    {
      match: ['app', 'pwa', 'aplicacion', 'gastos', 'piso', 'tareas', 'usuarios', 'login', 'sql', 'base de datos', 'fullstack'],
      boostIds: ['lang-ts', 'nextjs', 'tailwind', 'shadcn-radix', 'supabase', 'prisma-drizzle'],
      reasonPrefix: 'Pieza clave para gestionar usuarios, estado full-stack y persistencia relacional SQL:'
    },
    {
      match: ['movil', 'android', 'java', 'kotlin', 'musica', 'streaming', 'reproductor', 'audio'],
      boostIds: ['lang-java', 'lang-kotlin', 'android-pwa', 'firebase', 'howlerjs', 'rive'],
      reasonPrefix: 'Requerida para el desarrollo móvil, sincronización cloud y reproducción multimedia:'
    },
    {
      match: ['ia', 'inteligencia artificial', 'local', 'ollama', 'pdf', 'test', 'cine', 'video', 'timeline', 'python', 'docker'],
      boostIds: ['lang-python', 'ollama-ai', 'docker', 'supabase', 'sveltekit', 'theatrejs'],
      reasonPrefix: 'Fundamental para procesar modelos de IA, contenedores y lógica de backend:'
    }
  ];

  const scores = new Map();
  const customReasons = {};
  state.tools.forEach(t => scores.set(t.id, 0));

  intentRules.forEach(rule => {
    const hits = rule.match.filter(w => text.includes(w)).length;
    if (hits > 0) {
      rule.boostIds.forEach(id => {
        scores.set(id, (scores.get(id) || 0) + hits * 4);
        const toolObj = state.tools.find(t => t.id === id);
        if (toolObj) {
          customReasons[id] = `${rule.reasonPrefix} ${toolObj.useCase}`;
        }
      });
    }
  });

  const words = text.split(/\s+/).filter(w => w.length > 2);
  state.tools.forEach(tool => {
    const hay = `${tool.name} ${tool.badge} ${tool.summary} ${tool.useCase} ${tool.keywords || ''}`.toLowerCase();
    words.forEach(w => {
      if (hay.includes(w)) {
        scores.set(tool.id, (scores.get(tool.id) || 0) + 3);
        if (!customReasons[tool.id]) {
          customReasons[tool.id] = `Encaja directamente con tu requisito ("${w}"): ${tool.useCase}`;
        }
      }
    });
  });

  let ranked = state.tools
    .map(t => ({ tool: t, score: scores.get(t.id) || 0 }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score);

  if (ranked.length === 0) {
    const def = ['lang-ts', 'gsap', 'lenis', 'astro', 'tailwind', 'supabase', 'vercel'];
    ranked = state.tools.filter(t => def.includes(t.id)).map(t => ({ tool: t, score: 5 }));
    ranked.forEach(({ tool }) => {
      customReasons[tool.id] = `Base recomendada para arquitectura moderna: ${tool.useCase}`;
    });
  }

  const topTools = ranked.slice(0, 7).map(r => r.tool);
  state.recommendedIds = topTools.map(t => t.id);
  state.recommendedReasons = customReasons;

  state.expandedCategories.clear();
  topTools.forEach(t => state.expandedCategories.add(t.category));

  if (reasoningBox) {
    reasoningBox.style.display = 'block';
    reasoningBox.innerHTML = bannerHtml;
  }
  if (btnPassAll) btnPassAll.style.display = 'inline-flex';

  renderAdvisorList(topTools, rawText);
  renderAll();
}

function renderAdvisorList(topTools, rawText) {
  const container = document.getElementById('advisorResultsContainer');
  if (!container) return;
  container.innerHTML = '';

  topTools.forEach(tool => {
    const inStack = state.currentProject.stackIds.includes(tool.id);
    const reasonText = state.recommendedReasons[tool.id] || tool.useCase;

    const row = document.createElement('div');
    row.className = 'rec-item';
    row.style.alignItems = 'flex-start';
    row.style.gap = '10px';

    row.innerHTML = `
      <div class="rec-item-info" style="flex:1; gap:3px;">
        <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
          <span class="rec-item-name">★ ${tool.name.replace(' [NUEVO]', '')}</span>
          <span class="rec-item-sub" style="font-family:var(--font-mono); color:var(--accent-primary);">(${tool.badge})</span>
        </div>
        <p style="font-size:0.74rem; color:#dbe4f3; line-height:1.42; margin-top:2px;">
          ${reasonText}
        </p>
      </div>
      <button type="button" class="node-stack-btn ${inStack ? 'in-stack' : ''}" style="margin-top:2px; flex-shrink:0;">
        ${inStack ? '✓ En Stack' : '+ Stack'}
      </button>
    `;

    row.addEventListener('mouseenter', () => scheduleShowTechCard(tool.id));
    row.addEventListener('mouseleave', () => scheduleHideTechCard());

    row.querySelector('.node-stack-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleToolInStack(tool.id);
      renderAdvisorList(topTools, rawText);
    });

    row.addEventListener('click', () => openTechCard(tool.id, true));
    container.appendChild(row);
  });
}

// ==================== GENERADOR DE STARTER KIT MULTI-FRAMEWORK ====================
function generateStarterKitBlueprint() {
  const ids = state.currentProject.stackIds;
  const selected = ids.map(id => state.tools.find(t => t.id === id)).filter(Boolean);
  const projName = (state.currentProject.name || '').trim() || 'mi-proyecto-pro';
  const slug = projName.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  const npmPackages = [];
  if (ids.includes('gsap') || ids.includes('scrolltrigger')) npmPackages.push('gsap');
  if (ids.includes('lenis')) npmPackages.push('lenis');
  if (ids.includes('threejs') || ids.includes('r3f')) npmPackages.push('three');
  if (ids.includes('motion-dev')) npmPackages.push('motion');
  if (ids.includes('animejs')) npmPackages.push('animejs');
  if (ids.includes('matterjs')) npmPackages.push('matter-js');
  if (ids.includes('rive')) npmPackages.push('@rive-app/canvas');
  if (ids.includes('lottie')) npmPackages.push('@lottiefiles/dotlottie-web');
  if (ids.includes('supabase')) npmPackages.push('@supabase/supabase-js');
  if (ids.includes('firebase')) npmPackages.push('firebase');
  if (ids.includes('howlerjs')) npmPackages.push('howler');
  if (ids.includes('lucide-phosphor')) npmPackages.push('lucide');

  let baseInitCmd = `npm create vite@latest ${slug}`;
  if (ids.includes('astro')) baseInitCmd = `npm create astro@latest ${slug}`;
  else if (ids.includes('nextjs')) baseInitCmd = `npx create-next-app@latest ${slug} --typescript --tailwind`;
  else if (ids.includes('sveltekit')) baseInitCmd = `npx sv create ${slug}`;

  const installCmd = npmPackages.length > 0 ? `npm install ${npmPackages.join(' ')}` : `# Sin paquetes NPM adicionales seleccionados`;

  return `# 🚀 ${projName.toUpperCase()} — Starter Kit Blueprint
Generado automáticamente por DevTree Studio OS

## 1. Tecnologías en tu Stack (${selected.length})
${selected.map(t => {
  const why = state.recommendedReasons[t.id] ? ` — *${state.recommendedReasons[t.id]}*` : '';
  return `- **${t.name.replace(' [NUEVO]', '')}** (${t.badge}): ${t.url}${why}`;
}).join('\n') || '- Ninguna seleccionada aún'}

## 2. Comandos de Inicialización Rápida
\`\`\`bash
${baseInitCmd}
cd ${slug}
${installCmd}
\`\`\`

## 3. Estructura de Proyecto Recomendada
\`\`\`text
${slug}/
├── src/
│   ├── components/      # Bloques UI reutilizables y tarjetas Bento
│   ├── core/            # Inicialización de Lenis, GSAP y Three.js
│   ├── services/        # Cliente de base de datos (Supabase / Firebase / API)
│   └── styles/          # Tokens de diseño y utilidades CSS
├── scripts/             # Automatizaciones en Python / CI-CD
├── docker-compose.yml   # Contenedores locales (PostgreSQL / Ollama)
└── README.md
\`\`\`
`;
}

// ==================== SINCRONIZACIÓN SQL CON SUPABASE ====================
async function syncWithSupabase(direction = 'push') {
  const urlIn = document.getElementById('supaUrlInput');
  const keyIn = document.getElementById('supaKeyInput');
  const statusEl = document.getElementById('supaStatusText');
  if (!urlIn || !keyIn || !statusEl) return;

  const url = urlIn.value.trim().replace(/\/$/, '');
  const key = keyIn.value.trim();

  if (!url || !key) {
    statusEl.textContent = '⚠️ Introduce tu Supabase URL y Anon Key primero.';
    return;
  }

  localStorage.setItem(KEY_SUPA_CONFIG, JSON.stringify({ url, key }));
  statusEl.textContent = direction === 'push' ? 'Subiendo proyectos a PostgreSQL...' : 'Descargando desde PostgreSQL...';

  try {
    if (direction === 'push') {
      const res = await fetch(`${url}/rest/v1/devtree_backups`, {
        method: 'POST',
        headers: {
          'apikey': key,
          'Authorization': `Bearer ${key}`,
          'Content-Type': 'application/json',
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify({
          id: 'main_profile',
          saved_projects: state.savedProjects,
          updated_at: new Date().toISOString()
        })
      });
      if (!res.ok) throw new Error('Verifica que creaste la tabla con el botón Copiar SQL');
      statusEl.textContent = '✓ Proyectos sincronizados en Supabase PostgreSQL';
    } else {
      const res = await fetch(`${url}/rest/v1/devtree_backups?id=eq.main_profile&select=*`, {
        headers: {
          'apikey': key,
          'Authorization': `Bearer ${key}`
        }
      });
      if (!res.ok) throw new Error('Error al leer tabla');
      const rows = await res.json();
      if (rows.length > 0 && Array.isArray(rows[0].saved_projects)) {
        state.savedProjects = rows[0].saved_projects;
        persistSavedProjects();
        renderAll();
        statusEl.textContent = `✓ ${state.savedProjects.length} proyectos recuperados de la nube`;
      } else {
        statusEl.textContent = 'No había backups previos en la tabla.';
      }
    }
  } catch (err) {
    statusEl.textContent = `Aviso: ${err.message}`;
  }
}

// STACK LAB INTEGRADO EN EL ASISTENTE
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
  if (state.activeToolId === toolId) updateCardStackPill(toolId);
  renderAll();
}

function renderStackDock() {
  const chipsContainer = document.getElementById('stackDockChips');
  const countBadge = document.getElementById('stackCountBadge');
  const focusBtn = document.getElementById('btnToggleStackFocus');
  const matterBtn = document.getElementById('btnToggleMatter');
  if (!chipsContainer) return;

  const ids = state.currentProject.stackIds;
  if (countBadge) countBadge.textContent = `${ids.length} en el proyecto`;
  if (focusBtn) {
    focusBtn.classList.toggle('active', state.stackFocusMode);
    focusBtn.textContent = state.stackFocusMode ? '🎯 Viendo mi Stack' : '🎯 Solo mi Stack';
  }
  if (matterBtn) matterBtn.classList.toggle('active', state.matterActive);

  if (ids.length === 0) {
    chipsContainer.innerHTML = `<span class="stack-dock-empty">Usa el Asesor o pulsa "+S" en cualquier nodo para armar el Stack de tu proyecto.</span>`;
    return;
  }

  chipsContainer.innerHTML = '';
  ids.forEach(id => {
    const tool = state.tools.find(t => t.id === id);
    if (!tool) return;
    const chip = document.createElement('span');
    chip.className = 'stack-chip';
    chip.innerHTML = `${tool.name.replace(' [NUEVO]', '')} <button type="button">✕</button>`;
    chip.querySelector('button').addEventListener('click', () => toggleToolInStack(id));
    chipsContainer.appendChild(chip);
  });
}

// GESTIÓN DE PROYECTOS GUARDADOS
function saveCurrentProjectToLibrary() {
  const nameInput = document.getElementById('projectNameInput');
  const descInput = document.getElementById('advisorInput');

  let name = nameInput ? nameInput.value.trim() : '';
  if (!name) {
    name = `Proyecto #${state.savedProjects.length + 1}`;
    if (nameInput) nameInput.value = name;
  }

  state.currentProject.name = name;
  state.currentProject.description = descInput ? descInput.value.trim() : '';

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
  switchStudioTab('projects');
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

  const nameIn = document.getElementById('projectNameInput');
  const advIn = document.getElementById('advisorInput');
  if (nameIn) nameIn.value = found.name;
  if (advIn) advIn.value = found.description;

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
  state.recommendedReasons = {};
  state.stackFocusMode = false;
  state.expandedCategories.clear();

  const nameIn = document.getElementById('projectNameInput');
  const advIn = document.getElementById('advisorInput');
  const resBox = document.getElementById('advisorResultsContainer');
  const passBtn = document.getElementById('btnPassAllToStack');
  const aiBox = document.getElementById('aiReasoningBox');

  if (nameIn) nameIn.value = '';
  if (advIn) advIn.value = '';
  if (resBox) resBox.innerHTML = `<p class="empty-hint">Describe tu nuevo proyecto arriba.</p>`;
  if (passBtn) passBtn.style.display = 'none';
  if (aiBox) aiBox.style.display = 'none';

  persistActiveProject();
  renderAll();
  switchStudioTab('advisor');
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
  const badge = document.getElementById('projectsCountBadge');
  if (badge) badge.textContent = state.savedProjects.length;
  if (!listEl) return;

  if (state.savedProjects.length === 0) {
    listEl.innerHTML = `<p class="empty-hint">Aún no has guardado ningún proyecto. Arma un Stack con el Asesor y pulsa Guardar.</p>`;
    return;
  }

  listEl.innerHTML = '';
  state.savedProjects.forEach(proj => {
    const isCurrent = state.currentProject.id === proj.id;
    const toolNames = proj.stackIds
      .map(id => state.tools.find(t => t.id === id)?.name.replace(' [NUEVO]', ''))
      .filter(Boolean)
      .join(', ');

    const card = document.createElement('div');
    card.className = `saved-project-card ${isCurrent ? 'active-proj' : ''}`;
    card.innerHTML = `
      <div class="sp-card-head">
        <span class="sp-card-title">${proj.name}</span>
        <span class="sp-card-date">${proj.updatedAt}</span>
      </div>
      <p class="sp-card-desc">${proj.description || 'Sin descripción'}</p>
      <p class="sp-card-desc"><strong>Stack (${proj.stackIds.length}):</strong> ${toolNames || 'Ninguna seleccionada'}</p>
      <div class="sp-card-actions">
        <button type="button" class="btn-primary btn-xs btn-load-proj">${isCurrent ? '✓ Activo' : 'Cargar'}</button>
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

function switchStudioTab(tabName) {
  document.querySelectorAll('.sp-tab').forEach(b => b.classList.toggle('active', b.dataset.tab === tabName));
  const pAdv = document.getElementById('paneAdvisor');
  const pProj = document.getElementById('paneProjects');
  if (pAdv) pAdv.classList.toggle('active', tabName === 'advisor');
  if (pProj) pProj.classList.toggle('active', tabName === 'projects');
}

function populateModalCategories() {
  const select = document.getElementById('toolCategory');
  if (!select) return;
  select.innerHTML = CATEGORIES.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
}

// ENLACE DE EVENTOS BLINDADO CON POINTER CAPTURE PARA ARRASTRE PERFECTO
function bindEvents() {
  on('btnViewTree', 'click', () => switchMainView('tree'));
  on('btnViewBento', 'click', () => switchMainView('bento'));

  on('btnClearGlobalFilter', 'click', () => clearAllGlobalFilters());

  on('btnCheckOllama', 'click', () => checkOllamaStatus());

  on('unreadCounterPill', 'click', () => {
    state.tools.forEach(t => {
      if (isToolUnreadNew(t)) state.expandedCategories.add(t.category);
    });
    renderAll();
  });

  const studioPanel = document.getElementById('studioPanel');
  const launcherBtn = document.getElementById('btnToggleStudio');

  on('btnToggleStudio', 'click', () => {
    if (!studioPanel || !launcherBtn) return;
    const isOpen = studioPanel.classList.toggle('open');
    launcherBtn.classList.toggle('active', isOpen);
    studioPanel.setAttribute('aria-hidden', String(!isOpen));
    syncWorkspaceCorridor();
    if (isOpen) checkOllamaStatus();
  });

  on('btnCloseStudio', 'click', () => {
    if (!studioPanel || !launcherBtn) return;
    studioPanel.classList.remove('open');
    launcherBtn.classList.remove('active');
    studioPanel.setAttribute('aria-hidden', 'true');
    syncWorkspaceCorridor();
  });

  document.querySelectorAll('.sp-tab').forEach(tabBtn => {
    tabBtn.addEventListener('click', () => switchStudioTab(tabBtn.dataset.tab));
  });

  const techCard = document.getElementById('techCard');
  if (techCard) {
    techCard.addEventListener('mouseenter', () => clearTimeout(hoverCloseTimer));
    techCard.addEventListener('mouseleave', () => scheduleHideTechCard());
  }

  on('btnCloseTechCard', 'click', () => closeTechCard());

  on('tcPinBadge', 'click', () => {
    state.isCardPinned = false;
    if (techCard) techCard.classList.remove('pinned');
  });

  on('btnToggleStackFromCard', 'click', () => {
    if (state.activeToolId) toggleToolInStack(state.activeToolId);
  });

  document.querySelectorAll('#tcStatusGroup .tc-status-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!state.activeToolId) return;
      const cur = getToolProgress(state.activeToolId);
      state.userProgress[state.activeToolId] = { ...cur, status: btn.dataset.status };
      localStorage.setItem(KEY_PROGRESS, JSON.stringify(state.userProgress));
      document.querySelectorAll('#tcStatusGroup .tc-status-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.status === btn.dataset.status);
      });
      renderAll();
    });
  });

  on('tcNotes', 'input', (e) => {
    if (!state.activeToolId) return;
    const cur = getToolProgress(state.activeToolId);
    state.userProgress[state.activeToolId] = { ...cur, notes: e.target.value };
    localStorage.setItem(KEY_PROGRESS, JSON.stringify(state.userProgress));
  });

  on('btnCopyCode', 'click', () => {
    const snippetEl = document.getElementById('tcSnippet');
    if (snippetEl) navigator.clipboard.writeText(snippetEl.textContent);
    const btn = document.getElementById('btnCopyCode');
    if (btn) {
      btn.textContent = '¡Copiado!';
      setTimeout(() => { btn.textContent = 'Copiar'; }, 1400);
    }
  });

  const setLayout = (mode) => {
    runWithViewTransition(() => {
      state.layout = mode;
      document.getElementById('btnLayoutMatrix')?.classList.toggle('active', mode === 'matrix');
      document.getElementById('btnLayoutWing')?.classList.toggle('active', mode === 'wing');
      document.getElementById('btnLayoutOrbital')?.classList.toggle('active', mode === 'orbital');
      renderTree();
      centerCamera(false);
    });
  };

  on('btnLayoutMatrix', 'click', () => setLayout('matrix'));
  on('btnLayoutWing', 'click', () => setLayout('wing'));
  on('btnLayoutOrbital', 'click', () => setLayout('orbital'));

  on('searchInput', 'input', (e) => {
    state.search = e.target.value;
    renderAll();
  });

  // ARRASTRE DEL ÁRBOL BLINDADO CON POINTER EVENTS (Evita saltos al usar el Asistente)
  const treeViewport = document.getElementById('treeViewport');
  if (treeViewport) {
    treeViewport.addEventListener('pointerdown', (e) => {
      if (state.view !== 'tree' || state.isMorphingView || e.button !== 0) return;
      if (e.target.closest('.canvas-hud') || e.target.closest('.node')) return;

      e.preventDefault();
      resetBranchesWithGSAP(true);

      state.camera.isDragging = true;
      state.camera.pointerId = e.pointerId;
      state.camera.startMouseX = e.clientX;
      state.camera.startMouseY = e.clientY;
      state.camera.startCamX = state.camera.currentX;
      state.camera.startCamY = state.camera.currentY;

      treeViewport.classList.add('dragging');
      try {
        treeViewport.setPointerCapture(e.pointerId);
      } catch (err) {}
    });

    treeViewport.addEventListener('pointermove', (e) => {
      if (!state.camera.isDragging || state.camera.pointerId !== e.pointerId) return;
      const dx = e.clientX - state.camera.startMouseX;
      const dy = e.clientY - state.camera.startMouseY;

      state.camera.targetX = state.camera.startCamX + dx;
      state.camera.targetY = state.camera.startCamY + dy;
      state.camera.currentX = state.camera.targetX;
      state.camera.currentY = state.camera.targetY;
    });

    const endDrag = (e) => {
      if (!state.camera.isDragging) return;
      if (e && state.camera.pointerId !== null && e.pointerId !== state.camera.pointerId) return;

      state.camera.isDragging = false;
      try {
        if (state.camera.pointerId !== null) {
          treeViewport.releasePointerCapture(state.camera.pointerId);
        }
      } catch (err) {}
      state.camera.pointerId = null;
      treeViewport.classList.remove('dragging');
    };

    treeViewport.addEventListener('pointerup', endDrag);
    treeViewport.addEventListener('pointercancel', endDrag);

    treeViewport.addEventListener('dblclick', (e) => {
      if (state.view !== 'tree') return;
      if (e.target.closest('.canvas-hud') || e.target.closest('.node')) return;
      centerCamera(false);
    });

    treeViewport.addEventListener('wheel', (e) => {
      if (state.view !== 'tree') return;
      e.preventDefault();
      const rect = treeViewport.getBoundingClientRect();
      const factor = e.deltaY < 0 ? 1.12 : 0.89;
      applyZoomAtPoint(state.camera.targetScale * factor, e.clientX - rect.left, e.clientY - rect.top);
    }, { passive: false });
  }

  // Eventos del Asesor y Proyectos
  on('projectNameInput', 'input', (e) => {
    state.currentProject.name = e.target.value;
    persistActiveProject();
    updateClearFilterButtonState();
    const rootTitle = document.querySelector('#treeNodes .node-root .node-root-title');
    if (rootTitle) {
      rootTitle.textContent = state.currentProject.name ? state.currentProject.name.toUpperCase() : 'STACK PRO';
    }
    const bentoRootTitle = document.querySelector('#bentoCoreDock .node-root .node-root-title');
    if (bentoRootTitle) {
      bentoRootTitle.textContent = state.currentProject.name ? state.currentProject.name.toUpperCase() : 'STACK PRO';
    }
  });

  on('btnRunAdvisor', 'click', () => {
    const advIn = document.getElementById('advisorInput');
    runProjectAdvisor(advIn ? advIn.value : '');
  });

  on('btnClearAdvisor', 'click', () => {
    clearAllGlobalFilters();
  });

  document.querySelectorAll('.preset-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const nameIn = document.getElementById('projectNameInput');
      const advIn = document.getElementById('advisorInput');
      if (nameIn) nameIn.value = chip.dataset.name;
      if (advIn) advIn.value = chip.dataset.prompt;
      state.currentProject.name = chip.dataset.name;
      runProjectAdvisor(chip.dataset.prompt);
    });
  });

  on('btnPassAllToStack', 'click', () => {
    state.recommendedIds.forEach(id => {
      if (!state.currentProject.stackIds.includes(id)) {
        state.currentProject.stackIds.push(id);
      }
    });
    persistActiveProject();
    renderAll();
  });

  on('btnSaveProjectQuick', 'click', saveCurrentProjectToLibrary);
  on('btnSaveCurrentProjectFull', 'click', saveCurrentProjectToLibrary);
  on('btnSaveStackAsProject', 'click', saveCurrentProjectToLibrary);
  on('btnNewBlankProject', 'click', startNewBlankProject);

  // Sincronización SQL con Supabase
  on('btnSyncSupaPush', 'click', () => syncWithSupabase('push'));
  on('btnSyncSupaPull', 'click', () => syncWithSupabase('pull'));
  on('btnCopySqlSchema', 'click', (e) => {
    const sql = `CREATE TABLE IF NOT EXISTS devtree_backups (\n  id TEXT PRIMARY KEY,\n  saved_projects JSONB,\n  updated_at TIMESTAMPTZ DEFAULT NOW()\n);`;
    navigator.clipboard.writeText(sql);
    const btn = e.currentTarget;
    btn.textContent = '¡SQL Copiado!';
    setTimeout(() => { btn.textContent = 'Copiar SQL'; }, 1500);
  });

  // Stack Lab + Matter.js + Starter Kit
  on('btnToggleMatter', 'click', () => {
    state.matterActive = !state.matterActive;
    renderStackDock();
    updateMatterPhysicsSandbox();
  });

  on('btnToggleStackFocus', 'click', () => {
    if (state.currentProject.stackIds.length === 0 && !state.stackFocusMode) {
      alert('Añade primero al menos una tecnología a tu Stack Lab (o usa el Asesor) para activar el Modo Enfoque.');
      return;
    }
    runWithViewTransition(() => {
      state.stackFocusMode = !state.stackFocusMode;
      renderAll();
    });
  });

  on('btnCopyStackCmd', 'click', () => {
    const tools = state.currentProject.stackIds.map(id => state.tools.find(t => t.id === id)).filter(Boolean);
    const title = state.currentProject.name || 'Mi Proyecto';
    const text = `# ${title}\n` + tools.map(t => `- ${t.name} (${t.badge}): ${t.url}`).join('\n');
    navigator.clipboard.writeText(text);
    const btn = document.getElementById('btnCopyStackCmd');
    if (btn) {
      btn.textContent = '¡Copiado!';
      setTimeout(() => { btn.textContent = 'Copiar'; }, 1400);
    }
  });

  on('btnClearStack', 'click', () => {
    state.currentProject.stackIds = [];
    state.stackFocusMode = false;
    persistActiveProject();
    renderAll();
  });

  const skModal = document.getElementById('starterKitModal');
  on('btnOpenStarterKit', 'click', () => {
    const out = document.getElementById('starterKitOutput');
    if (out) out.textContent = generateStarterKitBlueprint();
    if (skModal) skModal.classList.add('open');
  });
  on('btnCloseStarterKit', 'click', () => skModal?.classList.remove('open'));
  on('btnCopyStarterKit', 'click', (e) => {
    const out = document.getElementById('starterKitOutput');
    if (out) navigator.clipboard.writeText(out.textContent);
    const btn = e.currentTarget;
    btn.textContent = '¡Copiado!';
    setTimeout(() => { btn.textContent = 'Copiar Blueprint'; }, 1400);
  });
  on('btnDownloadStarterKit', 'click', () => {
    const out = document.getElementById('starterKitOutput');
    const content = out ? out.textContent : '';
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'STARTER_KIT.md';
    a.click();
    URL.revokeObjectURL(url);
  });

  const modal = document.getElementById('modalBackdrop');
  on('btnOpenModal', 'click', () => modal?.classList.add('open'));
  on('btnCloseModal', 'click', () => modal?.classList.remove('open'));
  on('btnCancelModal', 'click', () => modal?.classList.remove('open'));

  on('addToolForm', 'submit', (e) => {
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
      snippet: document.getElementById('toolSnippet').value.trim(),
      isNewAddition: true
    };

    state.tools.push(newTool);
    const savedCustom = localStorage.getItem(KEY_CUSTOM_TOOLS);
    const list = savedCustom ? JSON.parse(savedCustom) : [];
    list.push(newTool);
    localStorage.setItem(KEY_CUSTOM_TOOLS, JSON.stringify(list));

    state.expandedCategories.add(newTool.category);
    e.target.reset();
    if (modal) modal.classList.remove('open');
    renderAll();
  });

  on('btnExportJson', 'click', () => {
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