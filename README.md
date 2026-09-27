# Portafolio personal — Brayan Jaraba

Hoja de vida / portafolio personal desarrollado con **Next.js** y **Tailwind CSS**
como parte del proyecto evaluativo del curso. Reúne en una sola página el perfil,
las habilidades, la formación académica y los proyectos, con un menú lateral fijo
y un diseño responsivo adaptado a móvil, tablet y escritorio.

## Demostración en línea

**Enlace para ver el portafolio:**

<https://portfolio-jarabramas-projects.vercel.app?_vercel_share=2wm0PeINCHVG8EGhhQGdLoEaA5LVROe4>

- URL del proyecto: <https://portfolio-jarabramas-projects.vercel.app>

> **Importante:** el despliegue tiene activada la **autenticación de Vercel**, así
> que la URL del proyecto, por sí sola, redirige a la página de inicio de sesión
> y el portafolio no se ve. El enlace con el parámetro `?_vercel_share=` es el que
> da acceso sin credenciales.
>
> Para que la URL pública funcione directamente hay que desactivar la protección en
> el panel de Vercel: *Project → Settings → Deployment Protection → Authentication*.
>
> Ese parámetro es un token que Vercel genera al compartir el despliegue, por lo
> que puede caducar. Si deja de funcionar, se obtiene uno nuevo desde
> *Deployments → ⋯ → Share* y se actualiza el enlace de este README.

## Funcionalidades

- **Menú lateral fijo** con la foto, el nombre, los datos de contacto y los
  porcentajes de dominio de idiomas y lenguajes de programación.
- **Menú desplegable en pantallas pequeñas:** por debajo de `lg` el menú se
  convierte en un cajón (drawer) que se abre desde una barra superior y se cierra
  con el botón, tocando el fondo o pulsando `Escape`.
- **Sección de perfil** con el nombre, la fotografía y una descripción breve, y un
  botón **"Contratame"** que abre un diálogo de contacto.
- **Tarjetas de conocimiento** con título, descripción e ícono, en una rejilla que
  se reacomoda sola según el ancho disponible.
- **Sección de educación** con institución, título, fechas y descripción.
- **Portafolio** con desplazamiento horizontal y anclaje (*snap*), tal como pide el
  enunciado del proyecto.
- **Scroll vertical independiente:** el contenido central se desplaza mientras el
  menú lateral permanece fijo.

## Stack tecnológico

| Herramienta | Versión | Uso |
| --- | --- | --- |
| [Next.js](https://nextjs.org) | 16.3.5 | Framework (App Router) |
| [React](https://react.dev) | 19.2.8 | Interfaz de usuario |
| [TypeScript](https://www.typescriptlang.org) | 5.9.3 | Tipado estático |
| [Tailwind CSS](https://tailwindcss.com) | 4.3.3 | Estilos |
| [@iconify/react](https://iconify.design) | 6.0.2 | Íconos |
| [ESLint](https://eslint.org) | 9 | Linter |

## Requisitos previos

- **Node.js 20.9.0 o superior** (lo exige Next.js 16).
- Un gestor de paquetes: **pnpm** (el proyecto usa `pnpm@10.33.2`), o `npm`.

## Instalación y ejecución local

Clonar el repositorio y entrar en la carpeta del proyecto:

```bash
git clone <url-del-repositorio>
cd portfolio
```

Instalar las dependencias:

```bash
pnpm install
```

Si prefieres npm:

```bash
npm install
```

Levantar el servidor de desarrollo en [http://localhost:3000](http://localhost:3000):

```bash
pnpm dev
```

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `pnpm dev` | Servidor de desarrollo con recarga en caliente |
| `pnpm build` | Compila la versión de producción |
| `pnpm start` | Sirve la versión de producción ya compilada |
| `pnpm lint` | Ejecuta ESLint sobre el proyecto |

> Si usas npm o yarn, reemplaza `pnpm` por el comando correspondiente.

## Estructura del proyecto

```
app/
├── components/
│   ├── athoms/                 # Componentes de interfaz reutilizables
│   │   ├── Button.tsx          # Botón con variantes primary/secondary
│   │   ├── EducationCard.tsx   # Tarjeta de formación académica
│   │   ├── Footer.tsx          # Pie de página
│   │   ├── HeroDescription.tsx # Descripción del perfil
│   │   ├── HeroImage.tsx       # Fotografía principal
│   │   ├── HeroTitle.tsx       # Titular del perfil
│   │   ├── Modal.tsx           # Diálogo modal reutilizable
│   │   ├── PercentageChip.tsx  # Barra de porcentaje de un idioma/lenguaje
│   │   ├── PersonalInformation.tsx  # Datos de contacto
│   │   ├── PortfolioCard.tsx   # Tarjeta de proyecto
│   │   ├── ProfileCard.tsx     # Foto, nombre y título
│   │   ├── SeccionTitle.tsx    # Encabezado de sección
│   │   └── SkillCard.tsx       # Tarjeta de habilidad
│   └── molecules/              # Composiciones de varios átomos
│       ├── ContactDialog.tsx   # Botón "Contratame" + formulario
│       ├── ProfileAside.tsx    # Menú lateral fijo / cajón móvil
│       ├── ProfileDetails.tsx  # Contenido del perfil (reutilizado)
│       ├── SkillsGrid.tsx      # Rejilla de habilidades
│       └── sections/           # Secciones de la página
│           ├── EducationSection.tsx
│           ├── HeroSection.tsx
│           ├── MainSecction.tsx
│           ├── PercentageChipsSection.tsx
│           ├── PortfolioSection.tsx
│           └── SkillSection.tsx
├── data/                       # Contenido (habilidades, idiomas, proyectos…)
├── globals.css                 # Estilos globales y utilidades propias
├── layout.tsx                  # Layout raíz, fuentes y metadatos
└── page.tsx                    # Estructura de dos columnas de la página
public/
└── profile-image.png           # Fotografía del estudiante
```

## Arquitectura de componentes

El proyecto sigue **Atomic Design**, dividiendo los componentes en dos niveles:

- **Átomos** (`app/components/athoms/`): piezas pequeñas y reutilizables, como el
  botón, la tarjeta de proyecto o el diálogo modal.
- **Moléculas** (`app/components/molecules/`): agrupación de átomos que forman
  secciones completas, como el menú lateral o la sección de portafolio.

Los datos de contenido están separados de los componentes en `app/data/`, de modo
que modificar textos, porcentajes o proyectos no obliga a tocar la interfaz.

## Diseño responsivo

Los estilos de Tailwind se aplican con los puntos de ruptura de la versión 4
(`sm`, `lg`, etc.). Decisiones principales:

- **Un solo contenedor con scroll.** `<main>` es el contenedor con
  `overflow-y-auto` dentro de un shell de `h-dvh`; el menú lateral queda fijo
  porque es una columna independiente de la rejilla. Se usa `h-dvh` en lugar de
  `h-screen` porque en móviles `100vh` no equivale a la altura visible real.
- **Anchos fluidos en lugar de `100vw`.** Usar `w-screen` (que incluye el ancho
  de la barra de desplazamiento) generaba scroll horizontal; por eso todas las
  secciones usan `w-full` y `min-w-0`.
- **Rejillas con auto-llenado.** La clase `.responsive-grid` de `globals.css`
  calcula el número de columnas a partir del espacio disponible, con el límite
  `minmax(min(300px, 100%), 1fr)` para que la pista pueda encogerse en pantallas
  estrechas.
- **Tipografía y espaciado escalables.** Los títulos y los paddings cambian por
  punto de ruptura en lugar de tener valores fijos.
- **`overflow-x: clip`** como red de seguridad en `html`, que a diferencia de
  `hidden` no rompe `position: sticky` del menú lateral.

## Notas sobre la implementación

- **El formulario de contacto es una maqueta.** Al enviarlo se muestra una
  confirmación, pero no se envía ningún correo: es el único punto a cambiar
  (`preventDefault`) si se quiere conectar a un servicio de email.
- **Los diálogos usan el elemento nativo `<dialog>`** con `showModal()`, lo que
  aporta foco inicial, bloqueo de foco, cierre con `Escape` y fondo atenuado sin
  código adicional.
- **Los diálogos de detalle de proyecto y de la sección de Perfil** que menciona
  el enunciado aún no están implementados; el componente `Modal` ya está listo
  para reutilizarse en ambos.

## Despliegue

El proyecto está desplegado en **Vercel**:

1. Se importa el repositorio en Vercel (o con `vercel deploy`).
2. Vercel detecta Next.js automáticamente; no hace falta configurar nada.
3. Las imágenes se optimizan con `next/image` usando el optimizador integrado.

Cada `push` a la rama `main` genera un despliegue nuevo de forma automática.

## Autor

**Brayan Jaraba** — Estudiante de Ingeniería de Sistemas, Universidad de
Antioquia (Colombia).
