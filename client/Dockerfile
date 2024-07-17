# Build stage
FROM node:14-alpine as build

WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./
RUN npm install

# Copy the entire client directory into the /app directory
COPY . .

# Run the build command
RUN npx vite build

# Production environment
FROM nginx:alpine

# Copy the built files to the Nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
