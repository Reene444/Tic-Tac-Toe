# 使用官方Node镜像作为构建环境
FROM node:alpine as build
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent

COPY . ./

EXPOSE 8080
# start app
CMD ["npm", "start"]
