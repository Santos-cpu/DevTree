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

// CATÁLOGO BASE DE 48 TECNOLOGÍAS (6 por rama)
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
  { id: 'animejs', name: 'Anime.js v4', category: 'motion', badge: 'Trazos SVG & Cuadrículas', url: 'https://animejs.com/', summary: 'Librería modular ultraligera ideal para animar rutas vectoriales SVG, partículas y efectos escalonados en cuadrícula.', useCase: 'Animar grafos conectados, iconos técnicos y contadores numéricos.', synergy: 'Vanilla JS + SVG + Vite', keywords: 'animejs svg ligero animacion nodos', snippet: `animate("path", { strokeDashoffset: [120, 0], duration: 800 });` },
  { id: 'barba-vt', name: 'Barba.js & View Transitions', category: 'motion', badge: 'Transiciones entre Páginas', url: 'https://barba.js.org/', summary: 'Transforma la navegación entre páginas en transiciones continuas y morfismos visuales sin recargas en blanco.', useCase: 'Hacer que la miniatura de un proyecto crezca hasta convertirse en su cabecera.', synergy: 'Astro + GSAP + CSS Moderno', keywords: 'transiciones pagina barba view transitions spa navegacion', snippet: `document.startViewTransition(() => cambiarContenido());` },

  // 3. 3D, WebGL & Shaders
  { id: 'threejs', name: 'Three.js', category: 'webgl', badge: 'Motor 3D WebGL / WebGPU', url: 'https://threejs.org/', summary: 'La librería principal para renderizar escenarios 3D, modelos GLB, luces realistas y shaders personalizados en el navegador.', useCase: 'Fondos 3D interactivos y objetos que reaccionan al movimiento del cursor.', synergy: 'Blender + GSAP + Vite', keywords: 'threejs 3d webgl webgpu modelos escena interactivo particulas', snippet: `const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });` },
  { id: 'r3f', name: 'React Three Fiber', category: 'webgl', badge: 'Ecosistema 3D en React', url: 'https://r3f.docs.pmnd.rs/', summary: 'Conecta Three.js con React mediante componentes declarativos y utilidades listas para reflejos, cámaras y controles (Drei).', useCase: 'Vincular escenas 3D directamente con el estado de tu interfaz.', synergy: 'React + Three.js + Motion', keywords: 'r3f react three fiber drei 3d componentes', snippet: `<Canvas><Float><mesh><torusKnotGeometry /></mesh></Float></Canvas>` },
  { id: 'spline', name: 'Spline 3D', category: 'webgl', badge: 'Diseño 3D Visual', url: 'https://spline.design/', summary: 'Editor visual en el navegador para diseñar escenas 3D interactivas con materiales cristal o neón e incrustarlas al instante.', useCase: 'Añadir un elemento 3D interactivo en tu portada en cuestión de minutos.', synergy: 'Astro + HTML + React', keywords: 'spline 3d visual rapido interactivo diseño portada', snippet: `<spline-viewer url="https://prod.spline.design/escena/scene.splinecode"></spline-viewer>` },
  { id: 'theatrejs', name: 'Theatre.js', category: 'webgl', badge: 'Timeline estilo After Effects', url: 'https://www.theatrejs.com/', summary: 'Estudio visual de curvas de animación para coreografiar vuelos de cámara 3D, luces y secuencias con precisión cinematográfica.', useCase: 'Recorridos de cámara guiados por el scroll o timelines de preproducción.', synergy: 'Three.js + ScrollTrigger', keywords: 'theatrejs camara cine after effects timeline 3d animacion', snippet: `const sheet = core.getProject("Escena").sheet("Camara");` },
  { id: 'curtains-ogl', name: 'OGL & Curtains.js', category: 'webgl', badge: 'Distorsión WebGL Ligera', url: 'https://www.curtainsjs.com/', summary: 'Convierte imágenes y vídeos del DOM en planos WebGL que se ondulan como tela o líquido al hacer scroll o pasar el ratón.', useCase: 'Galerías de proyectos con distorsión fluida a 60 FPS.', synergy: 'Lenis + GLSL Shaders', keywords: 'ogl curtains webgl imagenes liquido distorsion shaders ligero', snippet: `const curtains = new Curtains({ container: "canvas" });` },
  { id: 'shadertoy-p5', name: 'Shadertoy & p5.js', category: 'webgl', badge: 'Arte Generativo & Audio FX', url: 'https://www.shadertoy.com/', summary: 'Plataformas para programar fondos matemáticos generativos, sistemas de partículas y visualizadores reactivos a la música.', useCase: 'Fondos procedurales únicos y visualizadores de frecuencias de audio.', synergy: 'JavaScript + Web Audio API + GLSL', keywords: 'shadertoy p5js generativo particulas audio musica visualizador', snippet: `function draw() { circle(mouseX, mouseY, 28); }` },

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
  { id: 'tanstack-zustand', name: 'Zustand & TanStack', category: 'frameworks', badge: 'Estado Global Ultraligero', url: 'https://zustand-demo.pmnd.rs/', summary: 'Gestiona y sincroniza el estado compartido de la aplicación (audio, usuario, cámara 3D) de forma limpia en apenas 1KB.', useCase: 'Conectar los controles de la interfaz con escenas 3D o reproductores.', synergy: 'React + React Three Fiber', keywords: 'zustand tanstack estado global datos react', snippet: `const useStore = create((set) => ({ activo: false }));` },

  // 6. Backend, Datos & IA
  { id: 'supabase', name: 'Supabase (PostgreSQL)', category: 'backend', badge: 'Base de Datos SQL & Realtime', url: 'https://supabase.com/', summary: 'Alternativa open-source a Firebase basada en PostgreSQL con autenticación de usuarios, API automática y sincronización en vivo.', useCase: 'Guardar gastos compartidos, proyectos, cuentas y registros relacionales.', synergy: 'SQL + Next.js + Astro', keywords: 'supabase postgresql sql base de datos login usuarios tiempo real gastos', snippet: `const { data } = await supabase.from("proyectos").select("*");` },
  { id: 'firebase', name: 'Firebase', category: 'backend', badge: 'Cloud NoSQL & SDK Android', url: 'https://firebase.google.com/', summary: 'Plataforma de Google con integración directa en Android Studio y Web para login con Google, base de datos Firestore y nube.', useCase: 'Conectar aplicaciones Android y webs en tiempo real en pocos minutos.', synergy: 'Android Studio + Java + Kotlin', keywords: 'firebase nosql auth google android movil nube tiempo real', snippet: `const snap = await getDocs(collection(db, "tracks"));` },
  { id: 'docker', name: 'Docker & Compose', category: 'backend', badge: 'Contenedores Reproducibles', url: 'https://www.docker.com/', summary: 'Empaqueta bases de datos PostgreSQL/MySQL, APIs en Python y servicios web en contenedores aislados listos para arrancar.', useCase: 'Levantar todo tu entorno de base de datos e IA local con un comando.', synergy: 'PostgreSQL + Python + Ollama', keywords: 'docker contenedores servidor base de datos despliegue local', snippet: `docker compose up -d` },
  { id: 'ollama-ai', name: 'Ollama & Gemini API', category: 'backend', badge: 'IA Local & Modelos en Nube', url: 'https://ollama.com/', summary: 'Ejecuta modelos de lenguaje en local con tu propia GPU sin coste o conéctate a la API de Gemini para funciones inteligentes.', useCase: 'Generadores automáticos de tests desde PDF, asistentes y clasificadores.', synergy: 'Python + JavaScript + FastAPI', keywords: 'ollama gemini ia inteligencia artificial local llm asistente generador', snippet: `fetch("http://localhost:11434/api/generate", { method: "POST" });` },
  { id: 'prisma-drizzle', name: 'Drizzle / Prisma ORM', category: 'backend', badge: 'Consultas SQL con Tipado', url: 'https://orm.drizzle.team/', summary: 'Traduce tus tablas SQL (PostgreSQL, MySQL, SQLite) a objetos TypeScript con autocompletado seguro y migraciones.', useCase: 'Consultar bases de datos relacionales sin escribir SQL manual propenso a fallos.', synergy: 'PostgreSQL + TypeScript + Next.js', keywords: 'prisma drizzle orm sql base de datos typescript', snippet: `await db.insert(tareas).values({ titulo: "Nueva" });` },
  { id: 'pocketbase', name: 'PocketBase', category: 'backend', badge: 'Backend en 1 Ejecutable', url: 'https://pocketbase.io/', summary: 'Backend open-source autoalojable en un solo archivo que incluye base de datos SQLite en tiempo real, usuarios y panel visual.', useCase: 'Crear prototipos full-stack y PWAs autoalojadas sin depender de terceros.', synergy: 'Docker + Vite + Astro', keywords: 'pocketbase backend ligero sqlite autoalojado open source', snippet: `./pocketbase serve` },

  // 7. Assets 3D, Fuentes & FX
  { id: 'blender', name: 'Blender 3D', category: 'assets', badge: 'Modelado 3D Open Source', url: 'https://www.blender.org/', summary: 'Suite gratuita completa para modelar, texturizar, animar y exportar objetos 3D en formato .glb comprimidos para la web.', useCase: 'Crear modelos 3D a medida para integrarlos con Three.js.', synergy: 'Three.js + Poly Haven', keywords: 'blender 3d modelado glb animacion texturas', snippet: `# Exporta en glTF 2.0 (.glb) activando compresión Draco` },
  { id: 'fontshare', name: 'Fontshare & Google Fonts', category: 'assets', badge: 'Tipografías de Estudio Gratis', url: 'https://www.fontshare.com/', summary: 'Colecciones gratuitas de fuentes modernas (Clash Display, Satoshi, Space Grotesk) que elevan la personalidad visual al instante.', useCase: 'Titulares potentes con estética de agencia digital.', synergy: 'Tailwind CSS + GSAP SplitText', keywords: 'fontshare fuentes tipografia diseño titulares', snippet: `font-family: 'Space Grotesk', sans-serif;` },
  { id: 'lucide-phosphor', name: 'Lucide & Phosphor Icons', category: 'assets', badge: 'Iconografía Vectorial SVG', url: 'https://lucide.dev/', summary: 'Miles de iconos vectoriales minimalistas y coherentes cuyos trazos SVG pueden colorearse y animarse por código.', useCase: 'Barras de navegación, botones de acción y tarjetas técnicas.', synergy: 'Tailwind CSS + HTML + React', keywords: 'lucide phosphor iconos svg interfaz botones', snippet: `npm install lucide` },
  { id: 'howlerjs', name: 'Howler.js & Web Audio', category: 'assets', badge: 'Motor de Audio & FX Web', url: 'https://howlerjs.com/', summary: 'Simplifica el manejo de sonido en el navegador: listas de reproducción en streaming, fundidos y micro-efectos sonoros al hacer clic.', useCase: 'Reproductores musicales y feedback acústico sutil en interfaces.', synergy: 'JavaScript + Three.js + GSAP', keywords: 'howler audio sonido musica streaming reproductor efectos', snippet: `const sfx = new Howl({ src: ["hover.mp3"], volume: 0.2 });` },
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

// CLAVES LOCALSTORAGE
const KEY_PROGRESS = 'devtree_v6_progress';
const KEY_CUSTOM_TOOLS = 'devtree_v6_custom_tools';
const KEY_SAVED_PROJECTS = 'devtree_v6_saved_projects';
const KEY_ACTIVE_PROJECT = 'devtree_v6_active_project';

// ESTADO GLOBAL
const state = {
  view: 'tree',
  layout: 'matrix',
  expandedCategories: new Set(),
  stackFocusMode: false,
  search: '',
  // Estado exclusivo de la Tarjeta Derecha de Tecnología
  activeToolId: null,
  isCardPinned: false,
  isCardVisible: false,
  recommendedIds: [],
  tools: [],
  userProgress: {},
  currentProject: {
    id: null,
    name: '',
    description: '',
    stackIds: []
  },
  savedProjects: [],
  // Mapa de posiciones de categorías para calcular repulsión con GSAP
  categoryCoords: new Map(),
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

let hoverOpenTimer = null;
let hoverCloseTimer = null;

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

    let dailyList = [];
    try {
      const res = await fetch('./daily_tools.json', { cache: 'no-store' });
      if (res.ok) dailyList = await res.json();
    } catch (e) {
      dailyList = [];
    }

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

// MOTOR DE CÁMARA FLUIDA LERP A 60 FPS
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

  const targetScale = vw < 1200 ? 0.58 : 0.72;
  const anchorY = state.layout === 'matrix' ? 820 : 1300;

  state.camera.targetScale = targetScale;
  state.camera.targetX = vw / 2 - 1800 * targetScale;
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

// PUNTO 1: MOTOR GSAP PARA ILUMINAR Y APARTAR (REPELER) LAS DEMÁS RAMAS AL PASAR EL CURSOR
function focusBranchWithGSAP(activeCatId, specificToolId = null) {
  const svg = document.getElementById('treeSvg');
  const activeCoords = state.categoryCoords.get(activeCatId);
  if (!activeCoords) return;

  CATEGORIES.forEach(cat => {
    const nodeGroup = document.querySelector(`.branch-node-group[data-cat-id="${cat.id}"]`);
    const svgGroup = svg.querySelector(`.branch-svg-group[data-cat-id="${cat.id}"]`);
    const catCoords = state.categoryCoords.get(cat.id);
    if (!nodeGroup || !svgGroup || !catCoords) return;

    if (cat.id === activeCatId) {
      // Rama activa: posición original centrada y opacidad total
      if (window.gsap) {
        gsap.to([nodeGroup, svgGroup], {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 0.42,
          ease: 'power3.out',
          overwrite: 'auto'
        });
      }

      // Iluminar curvas correspondientes
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
      // Ramas vecinas: se apartan suavemente en dirección opuesta a la rama activa y atenúan su brillo
      let dx = catCoords.x - activeCoords.x;
      let dy = catCoords.y - activeCoords.y;
      const dist = Math.hypot(dx, dy) || 1;

      // Cuanto más cerca esté la rama vecina, más claro es el empuje (entre 14px y 26px)
      const pushStrength = Math.max(12, Math.min(26, 9500 / dist));
      const offsetX = (dx / dist) * pushStrength;
      const offsetY = state.layout === 'matrix' ? 6 : (dy / dist) * pushStrength;

      if (window.gsap) {
        gsap.to([nodeGroup, svgGroup], {
          x: offsetX,
          y: offsetY,
          opacity: 0.34,
          duration: 0.48,
          ease: 'power3.out',
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

function resetBranchesWithGSAP() {
  const svg = document.getElementById('treeSvg');
  const allNodeGroups = document.querySelectorAll('.branch-node-group');
  const allSvgGroups = svg.querySelectorAll('.branch-svg-group');

  if (window.gsap) {
    gsap.to([...allNodeGroups, ...allSvgGroups], {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 0.45,
      ease: 'power3.out',
      overwrite: 'auto'
    });
  }

  svg.querySelectorAll('path').forEach(p => {
    p.classList.remove('edge-active-base', 'edge-active-pulse', 'edge-dimmed');
  });
}

// PUNTOS 2, 3 Y 4: TARJETA DERECHA DE VISTA RÁPIDA CON GSAP TIMELINES Y HOVER SIN CLIC
function scheduleShowTechCard(toolId) {
  clearTimeout(hoverCloseTimer);
  // Si la tarjeta está fijada por clic en otra herramienta, respetamos el bloqueo hasta que haga clic en otra o la desfije
  if (state.isCardPinned && state.activeToolId !== toolId) return;

  clearTimeout(hoverOpenTimer);
  hoverOpenTimer = setTimeout(() => {
    openTechCard(toolId, state.isCardPinned);
  }, 40);
}

function scheduleHideTechCard() {
  clearTimeout(hoverOpenTimer);
  if (state.isCardPinned) return;

  hoverCloseTimer = setTimeout(() => {
    closeTechCard();
  }, 260);
}

function openTechCard(toolId, pinIt = false) {
  const tool = state.tools.find(t => t.id === toolId);
  if (!tool) return;

  const card = document.getElementById('techCard');
  const isSwitchingContent = state.isCardVisible && state.activeToolId !== toolId;
  const isAlreadyShowingSame = state.isCardVisible && state.activeToolId === toolId;

  state.activeToolId = toolId;
  state.isCardPinned = pinIt;
  state.isCardVisible = true;

  card.classList.add('visible');
  card.classList.toggle('pinned', state.isCardPinned);
  card.setAttribute('aria-hidden', 'false');

  // Marcar nodo activo en el lienzo
  document.querySelectorAll('.node-tool').forEach(el => {
    el.classList.toggle('selected', el.dataset.toolId === toolId);
  });

  populateTechCardDOM(tool);

  if (!window.gsap) {
    card.style.opacity = '1';
    card.style.transform = 'translate3d(0,0,0)';
    return;
  }

  if (!isSwitchingContent && !isAlreadyShowingSame) {
    // Entrada limpia desde la derecha con GSAP
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
    // Si ya estaba abierta y pasamos el ratón a otra tecnología: micro-transición fluida del interior
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

  card.style.setProperty('--tc-color', color);
  document.getElementById('tcCategory').textContent = cat ? cat.name : 'TECNOLOGÍA';
  document.getElementById('tcTitle').textContent = tool.name;
  document.getElementById('tcBadge').textContent = tool.badge;
  document.getElementById('tcUrl').href = tool.url;
  document.getElementById('tcSummary').textContent = tool.summary;
  document.getElementById('tcUseCase').textContent = tool.useCase;
  document.getElementById('tcSnippet').textContent = tool.snippet || `// Ver documentación en ${tool.url}`;
  document.getElementById('tcNotes').value = prog.notes || '';

  // Convertir texto de sinergias en píldoras visuales
  const chipsContainer = document.getElementById('tcSynergyChips');
  const rawSynergies = (tool.synergy || 'HTML + CSS + JS').split(/[+,/]/).map(s => s.trim()).filter(Boolean);
  chipsContainer.innerHTML = rawSynergies
    .map(s => `<span class="tc-syn-chip">${s}</span>`)
    .join('');

  // Estado de dominio
  document.querySelectorAll('#tcStatusGroup .tc-status-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.status === prog.status);
  });

  updateCardStackPill(tool.id);
}

function updateCardStackPill(toolId) {
  const pill = document.getElementById('btnToggleStackFromCard');
  const inStack = state.currentProject.stackIds.includes(toolId);
  pill.classList.toggle('in-stack', inStack);
  pill.textContent = inStack ? '✓ En Stack' : '+ Stack';
}

function closeTechCard() {
  const card = document.getElementById('techCard');
  state.isCardPinned = false;
  state.isCardVisible = false;
  state.activeToolId = null;

  card.classList.remove('visible', 'pinned');
  card.setAttribute('aria-hidden', 'true');

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
  renderTree();
  renderBento();
  renderStackDock();
  renderSavedProjectsList();
}

// RENDERIZADO DEL ÁRBOL AGRUPADO POR RAMAS PARA FÍSICAS GSAP
function renderTree() {
  const svg = document.getElementById('treeSvg');
  const nodesLayer = document.getElementById('treeNodes');
  svg.innerHTML = '';
  nodesLayer.innerHTML = '';
  state.categoryCoords.clear();

  const centerX = 1800;
  const rootY = state.layout === 'matrix' ? 420 : 1300;

  // 1. ESFERA CENTRAL
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

  rootEl.addEventListener('mouseenter', () => {
    svg.querySelectorAll('[data-edge^="cat-"]').forEach(p => {
      p.classList.add(p.classList.contains('edge-base') ? 'edge-active-base' : 'edge-active-pulse');
    });
  });
  rootEl.addEventListener('mouseleave', () => resetBranchesWithGSAP());

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

  // 2. CREACIÓN DE LAS 8 RAMAS EN GRUPOS INDEPENDIENTES
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
      const colOffset = (catIdx - 3.5) * 242;
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
      catX = centerX + Math.cos(angle) * radiusCat;
      catY = rootY + Math.sin(angle) * radiusCat;
    }

    state.categoryCoords.set(cat.id, { x: catX, y: catY });

    // Grupo SVG y Grupo HTML exclusivos para esta rama (permite mover la rama entera con GSAP)
    const branchSvgGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    branchSvgGroup.setAttribute('class', 'branch-svg-group');
    branchSvgGroup.setAttribute('data-cat-id', cat.id);
    svg.appendChild(branchSvgGroup);

    const branchNodeGroup = document.createElement('div');
    branchNodeGroup.className = 'branch-node-group';
    branchNodeGroup.dataset.catId = cat.id;
    nodesLayer.appendChild(branchNodeGroup);

    // Curva Esfera Central -> Categoría
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
    });

    branchNodeGroup.appendChild(catEl);

    if (!isExpanded) return;

    // 3. NODOS DE TECNOLOGÍA DE ESTA RAMA
    visibleCatTools.forEach((tool, toolIdx) => {
      let toolX = catX;
      let toolY = catY;

      if (state.layout === 'matrix') {
        toolX = catX;
        toolY = catY + 115 + toolIdx * 76;
      } else if (state.layout === 'wing') {
        const sideSign = isLeftSide ? -1 : 1;
        const spreadY = (toolIdx - (visibleCatTools.length - 1) / 2) * 70;
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
        isRecommended ? 'recommended' : '',
        inStack ? 'in-stack-node' : ''
      ].join(' ').trim();

      toolEl.dataset.toolId = tool.id;
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

      // Hover sin clic: ilumina la rama, aparta las demás y despliega la tarjeta derecha
      toolEl.addEventListener('mouseenter', () => {
        focusBranchWithGSAP(cat.id, tool.id);
        catEl.classList.add('cat-highlighted');
        scheduleShowTechCard(tool.id);
      });

      toolEl.addEventListener('mouseleave', () => {
        resetBranchesWithGSAP();
        catEl.classList.remove('cat-highlighted');
        scheduleHideTechCard();
      });

      toolEl.querySelector('.node-stack-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleToolInStack(tool.id);
      });

      // Clic: fija o desfija la tarjeta derecha para trabajar cómodamente con ella
      toolEl.addEventListener('click', (e) => {
        e.stopPropagation();
        if (state.activeToolId === tool.id && state.isCardPinned) {
          state.isCardPinned = false;
          document.getElementById('techCard').classList.remove('pinned');
        } else {
          openTechCard(tool.id, true);
        }
      });

      branchNodeGroup.appendChild(toolEl);

      // Animación suave de aparición con GSAP al desplegar la rama
      if (window.gsap) {
        gsap.fromTo(
          toolEl,
          { opacity: 0, scale: 0.86 },
          { opacity: 1, scale: 1, duration: 0.3, delay: toolIdx * 0.03, ease: 'back.out(1.4)' }
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

// RENDERIZADO CUADRÍCULA BENTO (También compatible con hover de la tarjeta derecha)
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
          <span>Pasa el ratón para ver ficha</span>
          <button type="button" class="node-stack-btn ${inStack ? 'in-stack' : ''}">
            ${inStack ? '✓ En Stack' : '+ Stack'}
          </button>
        </div>
      `;

      card.addEventListener('mouseenter', () => scheduleShowTechCard(tool.id));
      card.addEventListener('mouseleave', () => scheduleHideTechCard());

      card.querySelector('.node-stack-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleToolInStack(tool.id);
      });
      card.addEventListener('click', () => openTechCard(tool.id, true));
      grid.appendChild(card);
    });

    container.appendChild(group);
  });
}

// MOTOR DEL ASESOR DE PROYECTOS (En la ventana independiente izquierda)
function runProjectAdvisor(rawText) {
  const text = rawText.toLowerCase().trim();
  state.currentProject.description = rawText.trim();
  persistActiveProject();

  const container = document.getElementById('advisorResultsContainer');
  const btnPassAll = document.getElementById('btnPassAllToStack');

  if (!text) {
    state.recommendedIds = [];
    btnPassAll.style.display = 'none';
    container.innerHTML = `<p class="empty-hint">Describe tu proyecto arriba y pulsa <strong>Analizar y Recomendar</strong>.</p>`;
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

    row.addEventListener('mouseenter', () => scheduleShowTechCard(tool.id));
    row.addEventListener('mouseleave', () => scheduleHideTechCard());

    row.querySelector('.node-stack-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleToolInStack(tool.id);
      runProjectAdvisor(rawText);
    });

    row.addEventListener('click', () => openTechCard(tool.id, true));
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
  if (state.activeToolId === toolId) updateCardStackPill(toolId);
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

// GESTIÓN DE PROYECTOS GUARDADOS
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

  document.getElementById('projectNameInput').value = found.name;
  document.getElementById('advisorInput').value = found.description;

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
  document.getElementById('paneAdvisor').classList.toggle('active', tabName === 'advisor');
  document.getElementById('paneProjects').classList.toggle('active', tabName === 'projects');
}

function populateModalCategories() {
  const select = document.getElementById('toolCategory');
  select.innerHTML = CATEGORIES.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
}

// ENLACE DE TODOS LOS EVENTOS
function bindEvents() {
  // Cambio Árbol / Bento
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

  // Panel Izquierdo: Asesor & Proyectos
  const studioPanel = document.getElementById('studioPanel');
  const launcherBtn = document.getElementById('btnToggleStudio');

  launcherBtn.addEventListener('click', () => {
    const isOpen = studioPanel.classList.toggle('open');
    launcherBtn.classList.toggle('active', isOpen);
    studioPanel.setAttribute('aria-hidden', String(!isOpen));
  });

  document.getElementById('btnCloseStudio').addEventListener('click', () => {
    studioPanel.classList.remove('open');
    launcherBtn.classList.remove('active');
    studioPanel.setAttribute('aria-hidden', 'true');
  });

  document.querySelectorAll('.sp-tab').forEach(tabBtn => {
    tabBtn.addEventListener('click', () => switchStudioTab(tabBtn.dataset.tab));
  });

  // Interacción con la Tarjeta Derecha de Tecnología (mantener abierta si el ratón entra en ella)
  const techCard = document.getElementById('techCard');
  techCard.addEventListener('mouseenter', () => {
    clearTimeout(hoverCloseTimer);
  });
  techCard.addEventListener('mouseleave', () => {
    scheduleHideTechCard();
  });

  document.getElementById('btnCloseTechCard').addEventListener('click', () => {
    closeTechCard();
  });

  document.getElementById('tcPinBadge').addEventListener('click', () => {
    state.isCardPinned = false;
    techCard.classList.remove('pinned');
  });

  document.getElementById('btnToggleStackFromCard').addEventListener('click', () => {
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
      renderTree();
    });
  });

  document.getElementById('tcNotes').addEventListener('input', (e) => {
    if (!state.activeToolId) return;
    const cur = getToolProgress(state.activeToolId);
    state.userProgress[state.activeToolId] = { ...cur, notes: e.target.value };
    localStorage.setItem(KEY_PROGRESS, JSON.stringify(state.userProgress));
  });

  document.getElementById('btnCopyCode').addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById('tcSnippet').textContent);
    const btn = document.getElementById('btnCopyCode');
    btn.textContent = '¡Copiado!';
    setTimeout(() => { btn.textContent = 'Copiar'; }, 1400);
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

  document.getElementById('searchInput').addEventListener('input', (e) => {
    state.search = e.target.value;
    renderAll();
  });

  // Pan & Zoom sobre el lienzo
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

  // Eventos del Asesor y Proyectos
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

  document.getElementById('btnSaveProjectQuick').addEventListener('click', saveCurrentProjectToLibrary);
  document.getElementById('btnSaveCurrentProjectFull').addEventListener('click', saveCurrentProjectToLibrary);
  document.getElementById('btnSaveStackAsProject').addEventListener('click', () => {
    studioPanel.classList.add('open');
    launcherBtn.classList.add('active');
    saveCurrentProjectToLibrary();
  });
  document.getElementById('btnNewBlankProject').addEventListener('click', startNewBlankProject);

  // Stack Lab Inferior
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
    openTechCard(newTool.id, true);
  });

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