const mode = process.env.NODE_ENV === 'production' ? 'live' : 'sandbox';
const sandbox = process.env.NODE_ENV !== 'production';
let sandbox_email = process.env.NODE_ENV === 'production' ? null : 'c43452522542774085026@sandbox.pagseguro.com.br';
const email = process.env.EMAIL_SANDBOX;
const token = process.env.TOKEN_SANDBOX;
const notificationURL = process.env.NOTIFICATION_URL;

export { mode, sandbox, sandbox_email, email, token, notificationURL };