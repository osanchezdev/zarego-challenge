# Zarego challenge :punch:

[Demo](https://main.d1sp03wschf5ek.amplifyapp.com/)

### Tabla de contenido :rocket:

- [Instalación](#instalación-wrench)
- [Librerías principales](#librerías-package)

### Instalación :wrench:

Recomiendo usar [yarn](https://yarnpkg.com/) a la hora de iniciar el proyecto por ser más rápido y seguro que sobre [npm](https://www.npmjs.com/), de igual forma siéntase libre de usar el que guste, para efectos de esta guía estaré usando **yarn**.

#### Scripts disponibles:

Antes de ejecutar cualquier script del proyecto es necesario **instalar las dependencias** del mismo:

```bash
yarn install
```

##### Start

Este script ejecuta la app en modo de desarrollo.
Abre http://localhost:3000 para verla en el navegador.
Recarga automáticamente en cada cambio.

```bash
yarn start
```

##### Build

Este script construye la app lista para producción en el directorio de /build.

```bash
yarn build
```

##### Lint

Se usa para detectar errores de formato con [ESlint](https://eslint.org/).

```bash
yarn lint
```

##### Lint:fix

Se usa para darle el formato correcto al proyecto.

```bash
yarn lint:fix
```

##### Test

Ejecuta el manejador de tareas [(Jest)](https://jestjs.io/) con modo watch para actualizar mientras se editan los test.

```bash
yarn test
```

### Librerías principales :package:

Librerías usadas en el proyecto:

- [React](https://es.reactjs.org/), librería de Javascript para la creación de interfaces de usuario. Se usó para crear los distintos componentes que requería la app.
- [React-hook-form](https://react-hook-form.com/), librería de React para la validación de formularios, en su página oficial muestran su rendimiento frente a otras populares como Formik o Redux-form.

Como dependecias de desarrollo tenemos:

- [Jest](https://jestjs.io/), framework de testing de Javascript enfocado en la simplicidad.
- [ESlint](https://eslint.org/), herramienta de análisis de código estático, ayuda a escribir código consistente a lo largo del proyecto.
- [Prettier](https://prettier.io/), herramienta para formatear el código de forma automática.
