FROM node:alpine as builder

#작업 디렉토리 변경
WORKDIR /usr/src/app

#package, package-lock 복사
COPY package*.json ./

#package-lock 참조하여 설치
RUN npm ci

#소스 복사
COPY . .

#빌드
RUN npm run build 

FROM nginx

COPY --from=builder /usr/src/app/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/build  /usr/share/nginx/html
EXPOSE 80 
CMD ["nginx", "-g", "daemon off;"]