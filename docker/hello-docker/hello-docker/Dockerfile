FROM node:alpine
# (node image)

COPY . /app
# (copy application files)
# Copy . (all files from this directory) into /app (directory of file system)
# copia o app.js para um novo diretorio chamado "app"

WORKDIR /app
# diretorio definido acima
CMD node app.js
# when we use this instuction all the following instructions assume that we are 
# inside the app directory

# these instructions clearly document our deployment process



# now, got to the terminal to package the application

#   4.2) Package the application

#                1.1) in the terminal
       
#             docker build -t (tag to identify) image-name .(where docker can find a dockerfile(directory))

#              1.2) to see all images in this computer

#              docker image ls

#       (the image is built and can run in any machine running docker)

