
# Use official nginx image as the base image
 FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf

COPY /dist/travelagencyfold /usr/share/nginx/html


# Expose port 80
EXPOSE 80