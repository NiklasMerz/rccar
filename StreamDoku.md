# Stream auf anderen Raspberry Pi oder Rechner

## Vorbereitung des Servers
Mithilfe dem Tool Netcat kann man den von raspivid erzeugten Stream direkt an einen anderen Rechner oder Raspberry Pi schicken. Dazu muss man lediglich die IP-Adresse des Empfängers (Client) wissen. Diese zeigt man unter Unix mit ifconfig und bei Windowsrechnern mit ipconfig an.
Im folgendem Beipiel wird der Stream an einen anderen Raspberry Pi mit der IP-Adresse 192.168.178.20 auf den Port 5001 geschickt:

  pi@raspberrypi ~ $ sudo apt-get install netcat 
  pi@raspberrypi ~ $ raspivid -t 0 -o - | nc 192.168.178.20 5001

## Vorbereitung des des Clients - Linux
Auf dem Raspberry Pi / Linux Client wird zusätzlich zu Netcat der Videoplayer MPlayer nachinstalliert um den Stream direkt auf der grafischen Oberfläche anzuzeigen.

  pi@raspberrypi ~ $ sudo apt-get install mplayer netcat

  pi@raspberrypi ~ $ nc -l -p 5001 | mplayer -fps 31 -cache 1024 -

## Vorbereitung des des Clients - Windows
Falls noch nicht vorhanden müssen die Tools Externer Link Netcat und Externer Link MPlayer installiert werden.
Der Stream wird mit folgendem Befehl in der Eingabeaufforderung gestartet.

  [Pfad zur nc.exe]\nc.exe -L -p 5001 | [Pfad zur mplayer.exe]\mplayer.exe -fps 31 -cache 1024 -
