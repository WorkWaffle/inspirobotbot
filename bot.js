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
client.on('message', msg =>{
  {if (msg.content === 'info+'){
    msg.channel.send("Hi there! I'm Inspirobotbot (not actually licensed). Just type i+ for a regular example or if you're feeling festive just type ix+ !")
  }}
}
    );

client.login(config.token);
