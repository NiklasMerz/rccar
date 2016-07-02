#!/bin/sh

# camera
echo "Camera enabled: " $CAMERA_ENABLED
cd RPi_Cam_Web_Interface
if [ "$CAMERA_ENABLED" = "true" ]
then
  echo "Starting apache"
  service apache2 start

  echo "Starting camera"
  ./start.sh
else
  service apache2 stop
fi

echo "Starting NodeJS"
cd .. && npm start
