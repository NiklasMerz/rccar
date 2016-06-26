echo "Starting apache"
service apache2 start

echo "Startng camera"
cd RPi_Cam_Web_Interface && ./start.sh

echo "Starting NodeJS"
cd .. && npm start

