# Use the official Node.js image as the base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

#create the react native app with expo installed
# RUN npx create-expo-app .

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that the Metro bundler will use
EXPOSE 3000

# Start the Metro bundler
CMD ["npm","run","dev"]
