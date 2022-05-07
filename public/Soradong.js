const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('소라고동한데 질문을 해주면 소라고동이 답을 해줘요!')
		.addStringOption(option =>
			option.setName('ask')
				.setDescription('말하고 싶은 말 넣기')),
	async execute(interaction) {
		const string = interaction.options.getString('ask');
		const ask = [
			"안돼",
			"물론",
			"넌 왜그러니 나한데",
			"안되요",
			"그건좀..",
			"stop!",
			"다시 해봐",
			"나도 몰라",
			"그래",
			"되",
			"돌아가"
		];
		const askuNum = Math.floor(Math.random() * 11);
		const result = ask[askuNum];
		console.log("정상적으로 답변을 보냄(소라고동 명렁어 부분)");
		const send = new Discord.MessageEmbed()
			.setColor("#DEB887")
			.setTitle("마법에 소라고동")
			.addFields({ name: '질문 내용', value: string })
			.addFields({ name: '답변 내용', value: result })
			.setTimestamp();
		interaction.reply({ embeds: [send] });
	}
};