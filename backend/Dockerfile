FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install app dependencies (only production)
COPY package*.json ./
RUN npm ci --only=production

# Copy source code
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Start the server
CMD ["npm", "start"]
