FROM nginx:latest

EXPOSE 8081
COPY ./build /usr/share/nginx/html