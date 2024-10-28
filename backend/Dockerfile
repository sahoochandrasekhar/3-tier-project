# Use official Node.js image as a base
FROM node:14

# Create working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy source files
COPY app.js .

# Expose backend port
EXPOSE 3000

# Run backend server
CMD ["node", "app.js"]

