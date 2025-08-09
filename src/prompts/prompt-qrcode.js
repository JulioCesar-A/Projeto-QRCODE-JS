import chalk from "chalk";

const QRCodeprompt = [
    {
        name : "link",
        description : chalk.yellow("Digite o link para gerar o QR Code"),
        required : true,
    },
    {
        name : "type",
        description : chalk.yellow("Escolha entre o tipo de QR Code (1- NORMAL ou 2- TERMINAL)"),
        pattern : /^[1-2]+$/,
        message : chalk.red.bold("Escolha apenas entre 1 e 2"),
        required : true,
    }
];

export default QRCodeprompt;