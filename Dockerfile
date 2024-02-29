FROM node:14-alpine AS production
ENV NODE_ENV production

# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY app/package.json .
COPY app/package-lock.json .
RUN npm install

# Copy app files
COPY app/. .
# Expose port
EXPOSE 3000
# Start the app
CMD [ "npm", "start" ]
RUN npm run build