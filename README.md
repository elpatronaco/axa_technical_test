# Prueba técnica AXA

Este proyecto ha sido creado con [Create React App](https://github.com/facebook/create-react-app).

## Cómo arrancarlo

Sitúate en una consola en la carpeta del proyecto y usando el instalador de paquetes [Yarn](https://yarnpkg.com/).

### `yarn`

Instala los paquetes necesarios para que la aplicación funcione.

### `yarn start`

Lanzará la aplicación en modo desarrollo en en enlace [http://localhost:3000](http://localhost:3000).
También podrás ver errores en la consola.

### `yarn test`

Esto correrá todos los tests y te indicará si son correctos.

### `yarn build`

Construye la aplicación optimizada para su uso en producción.
En la sección [deployment](https://facebook.github.io/create-react-app/docs/deployment) hay más información sobre deploy de una app creada con CRA.

## Librerías usadas:

- `react-router`, `react-router-dom`\
  Gestión de enrutamiento en una aplicación SPA.
- `redux`, `redux-saga`, `reselect`, `@reduxjs/toolkit`\
  Gestión de estado.
- `react-toastify`\
  Notificaciones pop-up.

## Estructura del proyecto

He separado la aplicación en distintas carpetas dentro de **src**.

`app` se encuentra el componente principal de la aplicación y las dos rutas
`components` para los componentes reutilizables
`helpers` para las funciones y la lista de rutas
`models` para los tipos de Typescript
`service` para los helpers para las llamadas a la API
`store` para la store de redux y su reducer

## Problemas

No he podido conseguir todo el coverage que quería por falta de tiempo (motivos personales).