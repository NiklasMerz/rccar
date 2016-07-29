FROM resin/raspberrypi-node:onbuild
MAINTAINER Niklas Merz <NiklasMerz@gmx.net>

COPY qemu-arm-static /usr/bin/

WORKDIR /usr/src/app

COPY . ./

#Install dependancies
RUN ./install.sh
