FROM node:latest
USER root

# ports 
EXPOSE 3000
EXPOSE 35729

# Set working directory 
WORKDIR /frontend

# Copy working directory
COPY . /frontend

ENV PATH /frontend/node_modules/.bin:$PATH

COPY package.json /frontend/package.json 
COPY package-lock.json /frontend/package-lock.json

ENV REACT_APP_HOST_IP_ADDRESS $API_URL
ENV REACT_APP_BACKEND_URL $REACT_APP_BACKEND_URL

RUN npm install 
RUN npm install react-scripts -g 
RUN npm install react-router-dom 
RUN npm install -g serve
RUN npm install axios 

ADD . /frontend

CMD [ "npm", "start" ]
RUN npm run build