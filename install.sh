#!/bin/sh

RUN apt-get -q update
RUN apt-get install psmisc libraspberrypi-bin build-essential -y
