module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 500) + 100;
    let addMoney = client.eco.daily(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply(`**âï¸You have already claimed your daily credit. Come back after ${addMoney.time.hours} hours, ${addMoney.time.minutes} minutes & ${addMoney.time.seconds} seconds to claim it again. âï¸**`);
    else return message.reply(`You have claimed **${addMoney.amount}** ð¸ as your daily credit & now you have **${addMoney.after}** ð¸.`);
};

module.exports.help = {
    name: "daily",
    aliases: [],
    usage: "daily"
}
