FROM resin/raspberrypi-node

COPY qemu-arm-static /usr/bin/

# Set our working directory
WORKDIR /usr/src/app

# This will copy all files in our root to the working  directory in the container
COPY . ./

#Install dependancies
CMD ./install.shn
