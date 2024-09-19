import qr from "qrcode-terminal"
import chalk from "chalk"

async function handle(err, result) {
    if (err) {
        console.log("erro on application")
        return
    }

    const isSmall = result.type == 2
    qr.generate(result.link, {small: isSmall}, (qrcode) => {
        console.log(chalk.green("QRCODE gerado com sucesso:\n"))
        console.log(qrcode)
    })
}

export default handle