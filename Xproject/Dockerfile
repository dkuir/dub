FROM fusuf/whatsasena:latest

RUN git clone https://github.com/dkuir/dub /root/dub
WORKDIR /root/dub/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
