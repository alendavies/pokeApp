# Proyecto pokémon web ⚡

### Materia: Análisis de la información - 2C2023

Integrantes:
- Mateo Riat
- Martin Reimundo
- Alen Davies
- Luca Lazcano
- Martin Scazzola

Profesores:
- Manuel Camejo
- Nicolas Riedel
- Gonzalo Martinez Sastre


## Motivación

Se desarrolla el proyecto con la finalidad de poner en práctica las metodologías adquiridas en el transcurso del cuatrimestre además de incorporarar y profundizar conocimientos sobre nuevas tecnologías simulando un ambiente laboral, mediante la autogestión del equipo.

## Descripción
El proyecto consta de un sitio web para jugar Pokémon, en donde el usuario se ve representado como un entrenador, pudiendo ver en su pokédex los Pokémones capturados junto a sus estadísticas y descripciones. Además podrá visualizar un mapa donde puede pelear contra Pokémones de diferentes ubicaciones para capturarlos y añadirlos a su colección.

## Cómo correr el proyecto

Es necesario contar con [Node](https://nodejs.org/en/) (v^18) y [npm](https://www.npmjs.com/)

1. Clonar el repositorio
```
git clone https://github.com/mreimundo/aninfo-pokemon.git
```

2. En la terminal local del proyecto, ejecutar:
```
npm install
```

para instalar las dependencias.

3. Correr
```
npm run dev
```
para iniciar el servidor local de desarrollo.

4. Abrir el puerto indicado para visualizar la aplicación (`http://localhost:5173/`) por defecto.

## Guía de usuario

Aquí se detallarán las instrucciones del juego.

## Tecnologías utilizadas

El proyecto está creado con [Vite](https://vitejs.dev/), para un desarrollo rápido y eficiente.

Se utiliza como librería de componentes [React](https://react.dev/), en conjunto con [TypeScript](https://www.typescriptlang.org/) para seguridadd de tipos.

Para estilizar el proyecto se utiliza [Tailwind](https://tailwindcss.com/), una abstracción muy útil sobre CSS.

Para componentes más complejos se utilizan las primitivas de [Radix UI](https://www.radix-ui.com/), con configuración y componentes de [shadcn/ui](https://ui.shadcn.com/).

Se utiliza la [Pokéapi](https://pokeapi.co/) para la consulta de estadísticas, imágenes y demás datos relativos al universo Pokémon. Se utiliza específicamente [pokenode-ts](https://github.com/Gabb-c/pokenode-ts), un wrapper liviano de la Pokéapi con todos los tipos definidos.


## Como colaborar con el proyecto
   - Clonar el repositorio con el siguiente comando
   
```
git clone https://github.com/mreimundo/aninfo-pokemon.git
```
   - Crear una branch desde master con el nombre de la feature que desea implementar. Ej: feature-diseniar-layout-general

   - Luego de desarrollarla crear un pull request para mergear la rama con master
   
   - Esperar a que el pull request sea aprobado por un colaborador del equipo

## Créditos

- pokenode-ts: https://github.com/Gabb-c/pokenode-ts

## Problemas conocidos

A medida que se encuentren, aquí se detallarán problemas y bugs conocidos.
