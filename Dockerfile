FROM node

COPY . /app
COPY package*.json /app/

WORKDIR /app

EXPOSE 8081

RUN npm install

CMD ["node","index.js"]