require("dotenv").config()
const express = require("express")
const cors = require("cors")
const fs = require("fs")
const path = require("path")
const nodemailer = require("nodemailer");
const app = express()

app.use(cors({
    origin: 'https://stellular-khapse-37223b.netlify.app/'
}));
app.use(express.json())




const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.USER_Email,  
        pass: process.env.USER_Pass,
    },
});

const userFile = path.join(__dirname, "message.json")
if (!fs.existsSync(userFile)) { fs.writeFileSync(userFile, JSON.stringify({ contact: [], subscribe: [] },null ,2), "utf-8") }
///------Register-----///
app.post("/message", (req, res) => {
    const { Name, Email, Message, Subject } = req.body
    const userData = JSON.parse(fs.readFileSync(userFile, "utf-8"))
    userData.contact.push({ Name, Email, Message, Subject, date: new Date().toISOString() })
    fs.writeFileSync(userFile, JSON.stringify(userData, null, 2), "utf-8")
    res.json({ message: "tvyalnere barehajox poxancvelken json" })

    const mailOption = {
        from: "razo1992gevorgyan@gmail.com", 
        to: "razo0088@mail.ru", 
        subject: "You have been contacted",
        text: `🙌 new appeal: \n  👱🏾 Name: ${Name} \n 📫Email :${Email} \n 📎Subject :${Subject} \n 💬Message:${Message}`,
    };

    const mailOption1 = {
        from: "razo1992gevorgyan@gmail.com", 
        to: Email,
        subject: "Request",
        text: ` 🙌 Your request \n  👱🏾 Anun: ${Name} \n 📫Email :${Email} \n 📎Npatak :${Subject} \n 💬Namak:${Message}`,
    }; 
    transporter.sendMail(mailOption, (error, info) => {
        if (error) {
            console.log("namake kayqi tere  chstacav");
        } else {
            console.log("namake barehajox uxarkvec kaiqi tiroje", info.response);
        }
    });
    transporter.sendMail(mailOption1, (error, info) => {
        if (error) {
            console.log("namake ogtatere   chstacav", error);
        } else {
            console.log("namake barehajox uxarkvec oktatiroje", info.response);
        }
    });
});

//-------Subscribe--------//
app.post("/subscribe", (req, res) => {
    const {Email} = req.body;
    const userData = JSON.parse(fs.readFileSync(userFile, "utf-8"));
    userData.subscribe.push({ type: "subscribe", Email, date: new Date().toISOString() });
    fs.writeFileSync(userFile, JSON.stringify(userData, null, 2), "utf-8");
    res.json({ message: "Subscriber saved!" });
   
    const mailOption = {
    from: "razo1992gevorgyan@gmail.com",
    to: "razo0088@mail.ru",
        subject: " You have a new subscriber",
        text: `🙌 New Subscriber: \n   📫Email :${Email} \n `,
  };

  const mailOption1 = {
    from: "razo1992gevorgyan@gmail.com", 
    to: Email,
    subject: "hajoxucyamb uxarkvec",
    text: `🙌 duq gracvelek ays Maylov\n  📫Email :${Email} \n `,
  };
  transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      console.log("namake kayqi tere  chstacav");
    } else {
      console.log("namake barehajox uxarkvec kaiqi tiroje", info.response);
    }
  });
  transporter.sendMail(mailOption1, (error, info) => {
    if (error) {
      console.log("namake ogtatere   chstacav",error);
    } else {
      console.log("namake barehajox uxarkvec oktatiroje", info.response);
    }
  });
});


app.get("/message", (req, res) => {
    const userData = JSON.parse(fs.readFileSync(userFile, "utf-8"))
    res.json(userData)
})


// app.listen(5000, () => {
//     console.log("hastatvec kape serveri");

// })
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
