# prueba-genis-ey
Para esta prueba he utilizado vue, scss, flexbox y cypress.
En el componente App hago la petición a la api y se lo paso al componente Home, desde Home emito el evento a App para "eliminar" cada imagen, quería mostrar tanto mi conocimiento de props como de pasar eventos a través de componentes.
El archivo scss se encuentra en src/assets/_shared.scss y lo he configurado para que sea accesible en todos los componentes en el archivo vite.config.js.
En la carpeta cypress hago testing básico a los componentes App y Home,
con el comando npx cypress open --component se pueden arrancar los test.