import passwordGenerator from 'password-generator';
import mail from '../lib/mail';

export default {
    async store(req, res){
        const {name, email } = req.body;
    

        const user = {
            name,
            email,
            password:passwordGenerator(15,false)
        };

        await mail.sendMail({
            from: 'DIO<contato@proffy.com.br>',
            to: '${name} <${email}>',
            subject: ' Cadastro de usuario',
            html: `'Olá, ${name}, Bem-vindo a Proffy`
        })

        return res.json(user);

    }
}