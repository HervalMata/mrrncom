import { mode, email, sandbox_email, sandbox, token, notificationURL } from "../config/pagseguro";
import { PagSeguro } from 'node-pagseguro';

const _createPaymentWithBullet = (senderHash, { user, order, delivery, payment}) => {
    return new Promise((resolve, reject) => {
        const pay = new PagSeguro(mode, email, sandbox_email, sandbox, token, notificationURL);
        pay.setSender({
            name: user.name,
            email: user.email,
            cpf_cnpj: user.profile.cpf.replace(/[-\.]/g, ""),
            area_code: user.profile.phone_number.slice(0, 2),
            phone: user.profile.phone_number.slice(2).trim().split(" ").join(""),
            birth_date: user.profile.birth_date
        });

        pay.setShipping({
            street: user.address.street,
            number: user.address.number,
            district: user.address.district,
            city: user.address.city,
            state: user.address.state,
            postal_code: user.address.postal_code.replace(/-/g, ""),
            same_for_billing: user.address.same_for_billing,
        });

        pay.setBilling({
            street: payment.address.street,
            number: payment.address.number,
            district: payment.address.district,
            city: payment.address.city,
            state: payment.address.state,
            postal_code: payment.address.postal_code.replace(/-/g, ""),
            same_for_billing: payment.address.same_for_billing,
        });

        order.forEach(item => {
            pay.addItem({
                qtde: item.quantity,
                value: item.price,
                description: item.product.name,
            });
        });

        pay.addItem({
            qtde: 1,
            value: delivery.cost,
            description: 'Custo de Entrega - Correios',
        });

        pay.sendTransaction({
            method: "boleto",
            value: payment.value,
            installments: 1,
            hash: senderHash,
        }, (err, data) => (err) ? reject(err) : resolve(data));
    });
}

const _createPaymentWithCreditCard = (senderHash, { user, order, delivery, payment}) => {
    return new Promise((resolve, reject) => {
        const pay = new PagSeguro(mode, email, sandbox_email, sandbox, token, notificationURL);
        pay.setSender({
            name: user.name,
            email: user.email,
            cpf_cnpj: user.profile.cpf.replace(/[-\.]/g, ""),
            area_code: user.profile.phone_number.slice(0, 2),
            phone: user.profile.phone_number.slice(2).trim().split(" ").join(""),
            birth_date: user.profile.birth_date
        });

        pay.setShipping({
            street: user.address.street,
            number: user.address.number,
            district: user.address.district,
            city: user.address.city,
            state: user.address.state,
            postal_code: user.address.postal_code.replace(/-/g, ""),
            same_for_billing: user.address.same_for_billing,
        });

        pay.setBilling({
            street: payment.address.street,
            number: payment.address.number,
            district: payment.address.district,
            city: payment.address.city,
            state: payment.address.state,
            postal_code: payment.address.postal_code.replace(/-/g, ""),
            same_for_billing: payment.address.same_for_billing,
        });

        order.forEach(item => {
            pay.addItem({
                qtde: item.quantity,
                value: item.price,
                description: item.product.name,
            });
        });

        pay.addItem({
            qtde: 1,
            value: delivery.cost,
            description: 'Custo de Entrega - Correios',
        });

        pay.setCreditCardHolder({
            name: payment.card.name || user.name,
            area_code: payment.card.area_code.trim() || user.profile.phone_number.slice(0, 2),
            phone: (payment.card.phone_number.trim() || user.profile.phone_number.slice(2)).split(" ").join(""),
            birth_date: payment.card.birth_date || user.birth_date,
            cpf_cnpj: ( payment.card.cpf || user.profile.cpf ).replace(/[-\.]/g, "")
        });

        pay.sendTransaction({
            method: "creditCard",
            value: payment.value % 2 !== 0 && payment.installments !== 1 ? payment.value + 0.01 : payment.value,
            installments: payment.installments,
            hash: senderHash,
            credit_card_holder: payment.card.credit_card_token
        }, (err, data) => (err) ? reject(err) : resolve(data));
    });
}

const createPayment = async (senderHash, data) => {
    try {
        if (data.payment.method === 'boleto') return await _createPaymentWithBullet(senderHash, data);
        else if (data.payment.method === 'creditCard') return await _createPaymentWithCreditCard(senderHash, data);
        else return { errorMessage: "Payment method not found." };
    } catch (e) {
        console.log(e);
        return { errorMessage: "An error has occurred", errors: e };
    }
}

const getSessionId = () => {
    return new Promise((resolve, reject) => {
        const pay = new PagSeguro(mode, email, sandbox_email, sandbox, token, notificationURL);
        pay.sessionId((err, session_id) => (err) ? reject(err) : resolve(session_id));
    })
}

const getTransactionStatus = (code) => {
    return new Promise((resolve, reject) => {
        const pay = new PagSeguro(mode, email, sandbox_email, sandbox, token, notificationURL);
        pay.TransactionStatus(code, (err, result) => (err) ? reject(err) : resolve(result));
    });
}

const getNotification = (code) => {
    return new Promise((resolve, reject) => {
        const pay = new PagSeguro(mode, email, sandbox_email, sandbox, token, notificationURL);
        pay.getNotification(code, (err, result) => (err) ? reject(err) : resolve(result));
    });
}

export { createPayment, getSessionId, getTransactionStatus, getNotification };