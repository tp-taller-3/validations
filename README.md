# Encuestas de Cursos: validaciones

TP Taller 3, FIUBA, 2022

**Main:** 
  * **Build:** ![Build status](https://github.com/tp-taller-3/validations/workflows/validations-build/badge.svg)  
  * **Coverage:** [![Coverage Status](https://coveralls.io/repos/github/tp-taller-3/validations/badge.svg?branch=main)](https://coveralls.io/github/tp-taller-3/validations?branch=main)

## A tener en cuenta

Al momento de publicar una nueva version de esta librería es necesario modificar
el número de versión en el archivo `package.json` y luego ejecutar `npm install` para
que el número de versión se vea reflejado en el archivo `package-lock.json`.

## Comandos de npm

- `npm install`: Este comando instala las dependencias especificadas en el
  archivo `package.json`.
  
- `npm test`: Este comando ejecuta los tests.

- `npm run lint`: Este comando ejecuta el linter `tslint` sobre los archivos 
de Typescript.

- `npm run lint:src`: Este comando ejecuta el linter `tslint` sobre los archivos 
de Typescript del directorio de `src`.

- `npm run lint:test`: Este comando ejecuta el linter `tslint` sobre los archivos 
de Typescript del directorio de `test`.

- `npm run stash`: Este comando utiliza el stash de git para ocultar los archivos
  que no están agregados para el commit. Se usa al momento de querer realizar un commit cuando
  tenemos archivos nuevos sin agregar.

- `npm run unstash`: Este comando saca de la pila del stash de git los últimos
  archivos del stash.

### Comando útil para desarrollo

Para probar los cambios localmente sin tener que subir una nueva versión 
a npm se le puede indicar a yarn que utilice una carpeta en el disco 
local en reemplazo del repositorio remoto:

Pararse sobre la carpeta raíz de este repositorio y ejecutar:
```bash
    yarn link
```

Luego, ir a la carpeta raíz del repositorio que utiliza y descarga 
esta librería y ejecutar:

```bash
    yarn link "validations-fiuba-course-admin"
```
