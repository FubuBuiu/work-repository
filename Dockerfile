# Use an official Node.js runtime as the base image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN yarn install

# Copy the project files to the container
COPY . .

# Build the Next.js application
RUN yarn build

# Expose the Next.js application port
EXPOSE 3000

# Start the Next.js application
CMD ["yarn", "start"]