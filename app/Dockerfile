FROM debian:latest

RUN apt update && \ 
apt install -y curl gnupg gnupg1 gnupg2 && \
curl -sL https://deb.nodesource.com/setup_11.x | bash - && \
apt install -y nodejs && \
mkdir /usr/tp

WORKDIR /usr/tp

COPY package.json package.json
COPY app.js app.js

RUN npm update

EXPOSE 3000

CMD ["node", "app.js"]