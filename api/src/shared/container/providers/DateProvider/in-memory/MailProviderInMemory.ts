import {IMailProvider} from "../../MailProvider/IMailProvider";
import {IMailProviderSendMailDTO} from "../../MailProvider/IMailProviderSendMailDTO";

class MailProviderInMemory implements IMailProvider{
    private message: any[] = [];
    async sendMail({to, variables, subject, path}: IMailProviderSendMailDTO): Promise<void> {
        this.message.push({
            to, variables, subject, path
        });
    }

}

export { MailProviderInMemory };