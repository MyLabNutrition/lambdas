exports.handler = function(event, context, callback) {
    console.log("received event:", JSON.stringify(event, null, 2));
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: event.to,
        from: event.from,
        subject: event.subject,
        text: event.text,
        html: event.html,
        templateId: event.templateId,
        substitutions: event.substitutions
    };
    sgMail.send(msg).then(s => {
        console.log("succesfully sent email", s);
        callback(null, JSON.stringify(s));
    }, e => {
        console.log("error sending email", e);
        callback(JSON.stringify(e));
    });
};

