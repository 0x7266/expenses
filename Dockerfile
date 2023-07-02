FROM node:18.16.1
WORKDIR /home/expenses
COPY package*.json .
RUN npm install --quiet --no-fund --loglevel=error
COPY . .
# COPY ./.env.production ./.env
# RUN npm run build
# CMD ["npm", "run", "start:build"]
EXPOSE 3000
CMD ["npm", "run", "start:dev"]