const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');
const config = require('./config.json');
const tesseract = require('node-tesseract');
const fs = require('fs')

client.on('ready', () => {
  console.log('Logged in!');
});

client.on('message', msg => {
  if(msg.content === 'i+') {
    request('http://inspirobot.me/api?generate=true', function(error, response, body) {
      msg.channel.send(body);
    }); //regular quotes
  } else if(msg.content === 'ix+') {
    request('http://inspirobot.me/api?generate=true&season=xmas', function(error, response, body) {
      msg.channel.send(body);
    }); //xmas themed quotes
  } else if(msg.content === 'info+') {
    msg.channel.send("Hi there! I'm Inspirobotbot (not actually licensed). Just type i+ for a regular example or if you're feeling festive just type ix+ ! if you want a crappy transcript then just type it+ !")
  } else if(msg.content === 'it+') {
    request('http://inspirobot.me/api?g enerate=true', function(error, response, body) {
      request({
        url: body,
        gzip: false,
        encoding: null
      }, function(error, response, body) {
        fs.writeFile("/tmp/file.jpg", body, function(err) {
          if(err) {
            return console.log(err);
          }
          tesseract.process('/tmp/file.jpg', {
            l: 'eng',
            psm: 11,
            binary: '/usr/bin/tesseract'
          }, function(err, text) {
            if(err) {
              console.error(err);
            } else {
              console.log(text);
              msg.channel.send('```' + text + '```', {
                files: [
                  "/tmp/file.jpg"
                ]
              })
            }
          });
        });
      });
    });
  }
});
client.login(config.token);