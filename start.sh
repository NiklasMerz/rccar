# Check if camer is activated
if [ "$CAMERA_ENABLED" = "true" ]
  echo "Starting apache"
  service apache2 start

  echo "Starting camera"
  cd RPi_Cam_Web_Interface && ./start.sh
fi

echo "Starting NodeJS"
cd .. && npm start
