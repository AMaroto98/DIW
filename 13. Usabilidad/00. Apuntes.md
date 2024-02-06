# Usabilidad Web

- Don't make me think (Steve Krug)

**Una propiedad que refleja el fácil funcionamiento de un sistema de información.**

---

## Principios básicos

    - Evitar la navegación líneal, es decir, tenemos que poder navegar siempre por cualquier sitio de la web.
    - El usuario debe saber en todo momento donde está.
    - Se tiene que facilitar la búsqueda de contenido.
    - Lo más importante está arriba a la izquierda y lo menos abajo a la derecha.
    - Anteponer el ancho por delante de la profundidad: First width, then depth.
    - Sólo un H1 por página. Los demás por orden, después de un H1 va un H2.

---

## Navegación

**Capcidad de moverse dentro de la web.**

    - Estructurales: Webs del mismo sitio.
    - Asociativos: Contenidos dentro de la misma página.
    - Embebidos: Enlaces de webs externas.

Estructurales y asociativos -> Sobreescriben la URL (Se carga dentro de la misma página).
Embebidos -> Se cargan en una nueva pestaña.

Diseño de los enlaces:
    - Textuales: Resaltamos el color del texto normal.
    - No textual: Remarcamos que el elemento es un enlace (un gráfico, una foto, vídeo...).

Menú: Máximo con dos subniveles

---

## Páginas

    - Dar más importancia al contenido que a la estética.
    
    - Scroll:
        - Páginas cortas (sin scroll o poco): Página principal, páginas de navegación o acceso inmediato.
        - Página largas: Facilite la lectura ininterrumpida (o se pueda imprimir).
        - ¡Evitar siempre el scroll horizontal!
    
    - Página principal:
        - Función: Indicar al usuario donde está y la función de la web.
        - Información a mostrar: Logo, nombre, sitio, introducción, enlaces a las páginas principales (menú), condiciones acceso (cookies), barra búsqueda.

---

## Texto

    - Minimizar la extensión del texto: 
        - Eliminar introducciones innecesarias.
        - No incluir información superflua.
    
    - Emplear tablas y enumeraciones para organizar la información.
    - No emplear vocabulario informal.
    - Emplear colores de alto contraste con el fondo.
    - Texto debe ser estático (sin movimiento ni parpadeo).
    - Extensión: 60 caracteres por línea.
    
    - Tamaño de la letra:
        - xx-small: 9px
        - x-small: 10-11px
        - small: 13px
        - medium: 16px
        - Large: 18px
        - x-large: 24px
        - xx-large: 32px
    
    - Interlineado: 15-20% del tamaño de la fuente.
    - No emplear textos en mayúsculas.
    - Texto justificado, en su defecto, alíneado a la izquierda.

---

## Contenido

    - Reducir el tiempo de carga al mínimo posible (1-3 segundos aceptable, más de 10 segundos nunca).
    - Evitar el uso de sonidos y locuciones innecesarias.
    - ¡Dar siempre el estado actual en procesos largos (Pagos, compras de billetes de aviones...)!
    - Veracidad de los datos.
    - Locale: Fechas, dias de la semana, unidades de medida... en formato local (idiomas, sistémas métricos)
        - Formato fechas: 
            - 2024-01-26 (ANSI)
            - 26/01/2024 (Para el usuario)
    
---

## Formularios

    - No dejar enviar información con formularios erróneos (validar en cliente).
    - Si hay un error remarcar exactamente el campo que tiene el error.
    - Autorellenado de datos siempre que sea posible.

---

## Mensajes de error

    - Los mensajes de error tienen que ayudar al usuario a detectar y resolver el fallo.
    - Los mensajes de error deben ser: 
        - Específicos
        - Constructivos
        - Positivo

    Ejemplo:

    El campo "nombre" debe estar informado. --> Correcto
    No deje el campo "nombre" vacío. --> Incorrecto
    Corrija los errores --> Incorrecto
    No tiene sentido que el campo nombre esté vacío --> Incorrecto

---

## Pie de página

    - Información legal
    - Información de contacto
    - Mapa del sitio

---

## En contexto de gestión

    - Poder hacer CRUD (Create, Read, Update, Delete).
    - Listado donde cada elemento se pueda actualizar y eliminar. Arriba botón de añadir

---

## Reglas

1. No me hagas pensar
2. ¿Cómo puedo saber si funciona?

---

## Medidas objetivas para medir la usabilidad

    - Mapa de calor (Heat Map)
    Los mapas de calor sobre nuestra web miden la interactivdad de un usuario.
    - Ley de los 3 clicks: Si el usuario no encuentra lo que quiere en 3 clicks se va (incrementa el bounce rate).
    - % Bounce es la tasa de rebotes: Gente que abre la página, no interectua y se va (Google Analytics).
    - % Links rotos (debería ser 0 o próximo).
    - Disponibilidad de la web --> Esté disponible (> 99%).
    - Tiempo de permanencia en la página --> > 30 segundos va bien (Analytics).
    - Número de errores del Frontend (Cuanto más se aproxima a 0 mejor).

---

# Optimización

Mejorar la experiencia de usuario, normalmente a costa de disminuir la calidad (fotos), cantidad de archivos (concatenando archivos) o la omisión de los mismos (borrado parcial de archivos).

