# Angular-11
Básico de  Angular 11

## Framework para crear SPA (single page application) y creada por Google.
- Funciona en diferentes dispositivos.
- MVC (Extructura Modelo Vista Controlador).
- PWA (Aplication Web Progressive) con Ionic tambien creado por Google.
- Se puede ponteciar con Electron e Ionic.



## Instalación para crear tu propia app.
- 1º Tener NodeJS Instalado.
- 2º Ejecutar el comnando > npm install -g @angular/cli 
- 3º Ejecutar el comando > ng --version  , para ver la versión.
- 4º Crear proyecto > ng new NombreProyecto
- 5º Ejecutar > ng serve y levantar en el navegador http://localhost:4200, tambien exite la opcion de ejecutar ng serve -o y levantara en navegador por defecto automaticamente. 

## Estructura
(* Accede al archivo para ver los comentarios)
- Como parte importante se encuentra el archivo pakage.json que es donde se encuentra las librerías a utilizar.
- Nuestra app se encuenta dentro de la carpeta /src.
- index.html es el archivo principal, en la estructura del html se encuentra la etiqueta root, en esta etiqueta se inyectara nuestro codigo creado en nuestros componentes.
    En esta etiqueta se pueden modificar los datos generales de nuestra app.
- main.ts es el archivo que se encarga de arrancara la app de Angular.
- Dentro de la carpeta app se encuentra app.module.ts y los componentes que creemos.
- app.module.ts es el archibo donde se crearan nuestros componentes. (accede al archivo para ver los comentarios)

## cli Angular
- ng generate component nombre 
- ng g c 
- ng generate component nombre --skipTests
- interface
- pipe
- ...

## Codigo lleno de comentarios para seguir la estructura
