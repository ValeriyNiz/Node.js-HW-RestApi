const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = {
   from: 'nizucer123@gmail.com'
};

(async () => {
  try {
    await sgMail.send(sendMail);
  } catch (error) {
    if (error.response) {
      console.error(error.response.body)
    }
  }
})();



module.exports = sendMail;