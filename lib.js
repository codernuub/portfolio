const nodeMailer = require('nodemailer');

async function main(clientMail,message){

    let transporter = await nodeMailer.createTransport({
        service :'gmail',
        auth:{
            user:'sardarbhai6@gmail.com',
            password:'modi sarkar'
        }
    })

    let mailOptions = {
        from : clientMail,
        to: "sardarbhai6@gmail.com",
        text : message
    }

    transporter.sendMail(mailOptions , (err , info)=>{
        err?console.log(err):console.log(info);
    })

}