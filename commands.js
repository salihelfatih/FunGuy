// A Discord bot that accepts commands with a specific format

const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({
  intents: [ GatewayIntentBits.Guilds,
		         GatewayIntentBits.GuildMessages,
		         GatewayIntentBits.MessageContent, ],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
});

// the 'messageCreate' event will occur when a message is entered into a channel
client.on('messageCreate', async message => {


  console.log("bla bla bla");

  // only have the bot consider messages that are not sent from a bot (such as
  // itself)
  if (!message.author.bot)
  {
    // split the message into multiple strings based on spaces, see the console
    // for the array of strings we can expect to see stored in command
    command = message.content.split(" ");
    console.log(command);

    // If the first command is 'add', assume two more arguments are provided,
    // perform an addition with these arguments (note the type conversions), and
    // then reply back with the result of the addition.  We could use this
    // command in our channel with: add 5 10
    if (command[0] == "add")
    {
      op1 = parseFloat(command[1]);
      op2 = parseFloat(command[2]);
      result = JSON.stringify(op1 + op2);
      await message.reply(result);
    }
    // A similar command as above, except for multiplication!
    else if (command[0] == "mult")
    {
      op1 = parseFloat(command[1]);
      op2 = parseFloat(command[2]);
      result = JSON.stringify(op1 * op2);
      await message.reply(result);
    }
  }
});

client.login("MTAxMzg4NDQ4NzIyODE5NDkyNg.GVjUPH.k9EMeB5vwdlXmSI5CwNATIn8IISEdmqBHb8_5o");