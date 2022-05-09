FROM nginx
EXPOSE 80 
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./build  /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]