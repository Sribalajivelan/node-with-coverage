# Base image
FROM node:18.15-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the rest of the application code to the working directory
COPY . .
COPY .env.* ./

RUN npm install

EXPOSE 3000

# Set the command to run the app
CMD ["node", "index.js"]
