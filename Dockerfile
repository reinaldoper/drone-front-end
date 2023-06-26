FROM node:16.14-alpine
WORKDIR /drone-frontend
COPY package.json .
#COPY package-lock.json .
RUN npm install
COPY . .
CMD ["npm","run","dev"]