# language: es

Característica: Hoja de vida / Portafolio personal en NextJS
  Como estudiante de Ingeniería Web
  Quiero implementar mi hoja de vida personal siguiendo un diseño de Figma
  Para cumplir con los requisitos del Proyecto Evaluativo 1 (25%)

# ============================================================

# MENÚ IZQUIERDO (fijo)

# ============================================================

  Escenario: El menú lateral izquierdo permanece fijo al hacer scroll
    Dado que el usuario está viendo la página del portafolio
    Cuando el usuario hace scroll en el contenido central
    Entonces el menú lateral izquierdo se mantiene visible y fijo en su posición

  Escenario: Mostrar información personal en el menú izquierdo
    Dado que el usuario está viendo el menú lateral izquierdo
    Entonces se muestra la foto del estudiante
    Y se muestra el nombre del estudiante
    Y se muestra un título personal (por ejemplo "Ingeniero de sistemas" o "Estudiante")

  Escenario: Mostrar datos de contacto en el menú izquierdo
    Dado que el usuario está viendo el menú lateral izquierdo
    Entonces se muestran los datos de contacto seleccionados por el estudiante
    Y estos datos pueden incluir ciudad de residencia, teléfono y correo electrónico

  Esquema del escenario: Mostrar idiomas con porcentaje de dominio
    Dado que el usuario está viendo la sección de idiomas del menú izquierdo
    Cuando la página renderiza el idioma "<idioma>"
    Entonces se muestra el nombre del idioma "<idioma>"
    Y se muestra su porcentaje de dominio "<porcentaje>"

    Ejemplos:
      | idioma  | porcentaje |
      | Español | 100%       |
      | Inglés  | 80%        |

  Esquema del escenario: Mostrar lenguajes de programación con porcentaje de dominio
    Dado que el usuario está viendo la sección de lenguajes de programación del menú izquierdo
    Cuando la página renderiza el lenguaje "<lenguaje>"
    Entonces se muestra el nombre del lenguaje "<lenguaje>"
    Y se muestra su porcentaje de dominio "<porcentaje>"

    Ejemplos:
      | lenguaje   | porcentaje |
      | Java       | 90%        |
      | TypeScript | 75%        |

  Escenario: Mostrar habilidades extra en el menú izquierdo
    Dado que el usuario está viendo el menú lateral izquierdo
    Entonces se muestra un listado de habilidades extra
    Y las habilidades pueden ser blandas o duras

# ============================================================

# CONTENIDO CENTRAL (con scroll vertical)

# ============================================================

  Escenario: El contenido central tiene scroll vertical independiente
    Dado que el usuario está viendo la página del portafolio
    Cuando el contenido central excede el alto de la pantalla
    Entonces el contenido central permite scroll vertical
    Y el menú izquierdo y el menú derecho permanecen fijos durante ese scroll

  Escenario: Mostrar la sección de Perfil
    Dado que el usuario llega a la sección de Perfil
    Entonces se muestra el nombre del estudiante
    Y se muestra su foto sobre fondo blanco
    Y se muestra una descripción corta de su perfil profesional

  Escenario: Abrir el diálogo de la sección de Perfil
    Dado que el usuario está en la sección de Perfil
    Cuando el usuario hace clic en el botón de la sección de Perfil
    Entonces se muestra un diálogo con contenido de diseño libre
    Y el usuario puede cerrar el diálogo

  Esquema del escenario: Mostrar tarjetas de Conocimientos
    Dado que el usuario llega a la sección de Conocimientos
    Cuando la página renderiza el conocimiento "<titulo>"
    Entonces la tarjeta muestra el título "<titulo>"
    Y la tarjeta muestra una descripción
    Y la tarjeta muestra un ícono
    Y la tarjeta respeta el diseño definido en Figma

    Ejemplos:
      | titulo             |
      | Desarrollo backend |
      | Bases de datos     |
      | React              |

  Esquema del escenario: Mostrar tarjetas de Educación
    Dado que el usuario llega a la sección de Educación
    Cuando la página renderiza el registro educativo de "<institucion>"
    Entonces la tarjeta muestra el nombre de la institución "<institucion>"
    Y la tarjeta muestra las fechas de inicio y fin
    Y la tarjeta muestra el título obtenido o en curso
    Y la tarjeta muestra una descripción breve
    Y la tarjeta respeta el diseño definido en Figma

    Ejemplos:
      | institucion              |
      | Universidad de Antioquia |

  Escenario: La sección de Portafolio tiene scroll horizontal
    Dado que el usuario llega a la sección de Portafolio
    Entonces se muestra una descripción corta de los proyectos
    Y las tarjetas de proyectos se pueden desplazar horizontalmente

  Escenario: Cada tarjeta de proyecto muestra su información básica
    Dado que el usuario está viendo una tarjeta de proyecto en el Portafolio
    Entonces la tarjeta muestra una imagen del proyecto
    Y la tarjeta muestra un título
    Y la tarjeta muestra una descripción corta
    Y la tarjeta muestra un botón "Saber más"
    Y la tarjeta respeta el diseño definido en Figma

  Escenario: Abrir el diálogo de detalle de un proyecto
    Dado que el usuario está viendo una tarjeta de proyecto en el Portafolio
    Cuando el usuario hace clic en el botón "Saber más"
    Entonces se muestra un diálogo con información detallada del proyecto
    Y el diálogo puede incluir enlaces a GitHub o a la plataforma desplegada
    Y el usuario puede cerrar el diálogo

  Escenario: Mostrar el footer
    Dado que el usuario llega al final del contenido central
    Entonces se muestra un footer con diseño libre del estudiante

# ============================================================

# MENÚ DERECHO (fijo)

# ============================================================

  Escenario: El menú lateral derecho permanece fijo al hacer scroll
    Dado que el usuario está viendo la página del portafolio
    Cuando el usuario hace scroll en el contenido central
    Entonces el menú lateral derecho se mantiene visible y fijo en su posición

  Esquema del escenario: Los íconos de redes sociales redirigen al perfil correspondiente
    Dado que el usuario está viendo el menú lateral derecho
    Cuando el usuario hace clic en el ícono de "<red_social>"
    Entonces se abre el perfil del estudiante en "<red_social>" en una nueva pestaña

    Ejemplos:
      | red_social |
      | GitHub     |
      | LinkedIn   |

# ============================================================

# FUNCIONALIDAD Y DESPLIEGUE (40%)

# ============================================================

  Escenario: El proyecto usa componentes reutilizables (atomic design)
    Dado que se revisa el código fuente del proyecto
    Entonces existen al menos 6 componentes reutilizables
    Y cada uno de esos componentes se usa en más de 2 partes distintas del código
    Y los componentes siguen los principios de atomic design

  Escenario: El proyecto utiliza estilos de Tailwind
    Dado que se revisa el código fuente del proyecto
    Entonces los estilos se implementan usando clases de TailwindCSS

  Escenario: El proyecto está desplegado en Vercel
    Dado que el estudiante finalizó el desarrollo
    Cuando se despliega el proyecto en Vercel
    Entonces la aplicación es accesible en la URL "nombre-apellidos.vercel.app"
    Y la aplicación funciona correctamente en producción

  Escenario: El diseño es responsivo
    Dado que el usuario accede a la aplicación desde distintos dispositivos
    Cuando el ancho de pantalla cambia (móvil, tablet, escritorio)
    Entonces el diseño se adapta correctamente a cada tamaño de pantalla

# ============================================================

# ESTRUCTURA DE CÓDIGO Y CLARIDAD (20%)

# ============================================================

  Escenario: El código está organizado y comentado
    Dado que se revisa el código fuente del proyecto
    Entonces el código sigue una estructura clara de carpetas y archivos de NextJS
    Y las secciones importantes del código tienen comentarios explicativos
    Y los identificadores (variables, funciones, componentes) tienen nombres coherentes y descriptivos

# ============================================================

# DISEÑO E INTERFAZ DE USUARIO (20%)

# ============================================================

  Escenario: El estudiante puede personalizar colores y fuente
    Dado que el estudiante está implementando el diseño
    Entonces puede usar colores distintos a los definidos en el Figma original
    Y puede usar una fuente distinta a la definida en el Figma original

  Escenario: El estudiante puede elegir el idioma del contenido
    Dado que el estudiante está implementando el contenido de su hoja de vida
    Entonces puede redactar el contenido en español o en inglés

  Escenario: Penalización por errores de ortografía
    Dado que se revisa el contenido textual del portafolio
    Cuando se detecta un error de ortografía
    Entonces se descuenta 0.05 de la nota por cada error
    Y el descuento total no supera 1 unidad de la nota final

# ============================================================

# INNOVACIÓN Y CREATIVIDAD (10%)

# ============================================================

  Escenario: El proyecto incluye elementos adicionales de creatividad
    Dado que se revisa la experiencia de usuario del portafolio
    Entonces el proyecto puede incluir animaciones, carruseles u otros elementos únicos
    Y estos elementos aportan valor adicional a la funcionalidad o al diseño

# ============================================================

# DOCUMENTACIÓN (10%)

# ============================================================

  Escenario: El repositorio incluye un README completo
    Dado que se revisa el repositorio del proyecto
    Entonces existe un archivo README
    Y el README explica el propósito del proyecto
    Y el README explica cómo ejecutar el proyecto localmente
    Y el README incluye cualquier otra información relevante

  Escenario: El código incluye documentación interna
    Dado que se revisa el código fuente del proyecto
    Entonces existen comentarios que explican la lógica de las secciones clave
    Y existen comentarios que explican decisiones de diseño relevantes

# ============================================================

# ENTREGA

# ============================================================

  Escenario: Entrega del proyecto en el repositorio de la organización
    Dado que el estudiante finalizó el proyecto
    Entonces el repositorio se crea dentro de la organización de la clase
    Y el nombre del repositorio sigue el formato "nombre-apellidos-portafolio"
    Y el profesor Juan Pablo Arango es agregado como colaborador o al equipo
    Y el enlace de Vercel se agrega al repositorio o se envía por correo

  Escenario: Calificación según el último commit antes de la fecha límite
    Dado que la fecha de entrega es el domingo 27 de septiembre de 2026 a las 11:59 PM
    Cuando se evalúa el proyecto
    Entonces se califica el último commit realizado en la rama "main" antes de esa fecha y hora
