import {IMailProvider} from "../IMailProvider";
import {IMailProviderSendMailDTO} from "../IMailProviderSendMailDTO";
import {injectable} from "tsyringe";
import nodemailer, {Transporter} from "nodemailer";
import * as fs from "fs";
import handlebars from "handlebars";

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

    async sendMail({to, variables, subject, path}: IMailProviderSendMailDTO): Promise<void> {
        const templateFileContent = fs.readFileSync(path).toString("utf-8");
        const templateParse = handlebars.compile(templateFileContent);
        const templateHtml = templateParse(variables);
        const message = await this.client.sendMail({
            to, from: "CrisLaços <noreplay@crislacos.com.br",
            subject, html: templateHtml,
        });
        console.log("Message sent: %s", message.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(message));
    }

}

export { EtherealMailProvider };