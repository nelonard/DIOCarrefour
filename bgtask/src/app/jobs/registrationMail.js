import mail from '../lib/mail'

export default{
    key: 'registrationMail',
    options: {
        
    },
    async handle({ data }){
        const { user } = data;

        await mail.sendMail({
            from: 'DIO <contato@dio.com.br',
            to: '${name} <${email}>',
            subject: 'Cadastro de usuario',
            html: ' Olá, ${name}, bem-vindo a Proffy'
        })
    }
}