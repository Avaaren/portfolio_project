FROM node

WORKDIR /app/frontend/portfolio
COPY package.json /app/frontend/portfolio

RUN npm install

COPY . /app/frontend/portfolio

EXPOSE 3000
CMD ["npm", "start"]