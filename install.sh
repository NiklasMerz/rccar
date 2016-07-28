#!/bin/sh

#Build dependancys
RUN apt-get -q update
RUN apt-get install psmisc libraspberrypi-bin build-essential -y

git submodule init && git submodule update

#RPI Webinterface
cd /usr/src/app/RPi_Cam_Web_Interface
chmod u+x *.sh
./install.sh q

# Piblaster
sudo apt-get install pi-blaster
