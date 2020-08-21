import mail from '../lib/mail'

export default{
    key: 'registrationMail',
    options: {
        delay: 5000,
        priority:3
    },
    async handle({ data }){
        const { user } = data;

        await mail.sendMail({
            from: 'DIO <contato@dio.com.br',
            to: '${user.name} <${user.email}>',
            subject: 'Cadastro de usuario',
            html: ' Olá, ${user.name}, bem-vindo a Proffy'
        })
    }
}