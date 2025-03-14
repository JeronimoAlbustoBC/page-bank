# Banco Comercio

## Prerequisites

This project runs using Node version >= 20.0.0.

## Getting Started

First install al dependencies by running the following command:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Internationalization

This project has setup for internationalization, meaning we could include translations with few simple steps.

## Styling

We are using SASS Modules. Each component and page has its own `[page|main].module.scss` file which will include its own styles.

## Docker

We have included Dockerfile and docker-compose.yml files to enhance deployability and make it faster to test, with no need to install dependencies locally.

You can run:

```bash
docker compose up -d --build
```

Then visit [http://localhost:80/](http://localhost:80/) and you will see the website.

## StoryBook

This project has storybook set up to better know the components developed.

You can run story book by running the following command:

```bash
npm run storybook
```

Then visit [http://localhost:6006/](http://localhost:6006/) and you will see the storybook website.

## Production build

To run a production standalone server you need to run these steps:

### 1. Build the project

```bash
npm run build
```

### 2. Run the node server

```bash
npm start
```
