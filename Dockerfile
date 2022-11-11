FROM node:16
WORKDIR /app
COPY package*.json ./
RUN mkdir client
COPY client/package*.json ./client
RUN npm i
RUN ls
RUN cd client
RUN ls
RUN cd ..
RUN npm i --prefix client
COPY . .
ENV NODE_PATH=./dist
RUN npm run build
ENV PORT=3001
EXPOSE 3001
CMD ["npm", "start"]