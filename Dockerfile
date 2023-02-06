FROM node:12.18-alpine
WORKDIR /usr/src/app
COPY ["package.json",  "./"]
RUN npm install -g @nestjs/cli
RUN npm install && mv node_modules ../
COPY ./dist/ ./dist
COPY ./constant/private.key ./dist/constant
COPY ./upload/ ./dist/upload
COPY tsconfig.build.json .
EXPOSE 3105
CMD ["npm", "run", "start:staging"]
