import swaggerJSDoc from 'swagger-jsdoc'

import envVariables from '@/schemas/env-variables.schema'

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API NMovies',
      version: '1.0.0',
      description: 'API for NMovies, a platform to search for movies and series.',
    },
    servers: [
      {
        url: envVariables.SERVER_URL,
      },
    ],
    tags: [
      {
        name: 'auth',
        description: 'Operations about authentication',
      },
      {
        name: 'profile',
        description: 'Operations about profile',
      },
      {
        name: 'tmdb',
        description: 'Operations about The Movie Database (TMDB)',
      },
      {
        name: 'favorites',
        description: 'Operations about favorites',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./src/routes/*.routes.ts', './src/schemas/swagger.schema.ts'],
}

export const openapiSpecification = swaggerJSDoc(options)
