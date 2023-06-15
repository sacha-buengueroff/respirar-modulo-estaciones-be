import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
      title: 'RespirAR Módulo EStaciones API',
    },
    host: 'localhost:8080',
    schemes: ['http'],
  };

const outputFile = './swagger_output.json'
const endpointsFiles = ['./server.js']

swaggerAutogen(outputFile, endpointsFiles, doc)