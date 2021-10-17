import {IMailProvider} from "../IMailProvider";
import {IMailProviderSendMailDTO} from "../IMailProviderSendMailDTO";
import {injectable} from "tsyringe";
import nodemailer, {Transporter} from "nodemailer";

@injectable()
class EtherealMailProvider implements IMailProvider {
    private client: Transporter;

    constructor() {
        nodemailer.createTestAccount().then((account) => {
            const transporter = nodemailer.createTransport({
               host: account.smtp.host,
               port: account.smtp.port,
               secure: account.smtp.secure,
               auth: {
                   user: account.user,
                   pass: account.pass,
               },
            });
            this.client = transporter;
        }).catch((err) => console.error(err));
    }

    async sendMail({to, body, subject}: IMailProviderSendMailDTO): Promise<void> {
        const message = await this.client.sendMail({
            to, from: "CrisLaços <noreplay@crislacos.com.br",
            subject, text: body, html: body,
        });
        console.log("Message sent: %s", message.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(message));
    }

}

export { EtherealMailProvider };