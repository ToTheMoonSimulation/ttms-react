FROM node:alpine as builder

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
RUN npm run build 
COPY . .

FROM nginx

COPY --from=builder /usr/src/app/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/build  /usr/share/nginx/html
EXPOSE 80 
CMD ["nginx", "-g", "daemon off;"]