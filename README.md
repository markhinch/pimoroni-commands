# Server for controlling Pi screen sleep / wake state

* `sudo apt install npm`
* `sudo npm install pm2 -g`
* `chmod +x screen.js`
* `pm2 startup`
* `pm2 start npm --name "screen" -- start`
* `pm2 save`
