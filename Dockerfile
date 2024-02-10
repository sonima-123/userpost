FROM node:16.15-alpine as pull   #specify node version

RUN COPY ./apiserver

WORKDIR /usr/src/node-app/client

ENV NODE_OPTIONS=--max_old_space_size=3072

ENV GENERATE_SOURCEMAP="$SOURCE_MAP"

RUN npm run build

WORKDIR /usr/src/node-app/apiserver

FROM node:16.15-alpine

WORKDIR /usr/app/apiserver/

COPY --from=pull /usr/src/node-app/apiserver/ ./

RUN npm install -qy

ENV PORT 8080 

EXPOSE 8080

CMD ENABLE_FRONTEND=true npm start  

