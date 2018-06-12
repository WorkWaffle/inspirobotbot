const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');
const config = require('./config.json')

client.on('ready', () => {
  console.log('Logged in!');
});

client.on('message', msg => {
  {if (msg.content === 'i+') {
    request('http://inspirobot.me/api?generate=true', function (error, response, body) {
        msg.channel.send(body); 
    });
  }else if (msg.content === 'ix+'){
    request('http://inspirobot.me/api?generate=true&season=xmas', function (error, response, body) {
      msg.channel.send(body); 
    });
  }}});


client.login(config.token);
