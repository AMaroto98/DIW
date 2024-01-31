# Ejercicio Optimization

La página web ARNGREN (http://www.arngren.net/) es una de las peores páginas en cuanto a optimización y accesibilidad. Explica detalladamente 10 optimizaciones que podrían realizarse en la página web.

1. **Minimizar el trabajo del hilo principal**

Se puede reducir el tiempo dedicado a analizar, compilar y ejecutar JavaSript. Se puede lograr a través de plugins dedicados a ello.

2. **Falta de etiqueta <meta name="viewport">**

Una etiqueta <meta name="viewport"> no solo optimiza tu aplicación para los tamaños de pantalla de los móviles, sino que también evita un retraso de 300 milisegundos en la entrada del usuario.

3. **Evitar un tamaño excesivo del DOM**

Un DOM grande aumentará el uso de memoria, causará cálculos más largos y producirá costosos reflujos de diseño. 

4. **Minimizar archivos JavaScript**

Minimizando los archivos JS se podría reducir el tiempo de cargado de éstos y pasar a pesar 7.9 KiB de los 15.1 KiB actuales.

5. **Utilizar formatos de imágenes next-gen**

Los formatos de imagen como WebP y AVIF suelen ofrecer mejor compresión que PNG o JPEG, lo que se traduce en descargas más rápidas y menor consumo de datos.

6. **Garantizar la visibilidad del texto durante la carga de fuentes web**

Aprovechar la función CSS font-display para asegurarse de que el texto permanece visible para el usuario mientras se cargan las fuentes web.

7. **Tamaño adecuado de las imágenes**

Usar imágenes con el tamaño adecuado para ahorrar datos y mejorar el tiempo de carga.

8. **Reducir CSS no utilizado**

Generaría un ahorro potencial de 100 KiB.

9. **Los elementos del formulario no tienen etiquetas asociadas** 

Las etiquetas garantizan que los controles de los formularios sean anunciados correctamente por las tecnologías de asistencia, como los lectores de pantalla.

10. **El elemento <html> no tiene un atributo [lang].**

Si una página no especifica un atributo lang, un lector asume que la página está en el idioma predeterminado que el usuario eligió al configurar el lector de pantalla.