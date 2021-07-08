import React from "react";
import "./SendEmail.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { send } from "emailjs-com";
import { useState } from "react";

function SendMail() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_hjcet8r",
      "template_p3feh6m",
      toSend,
      "user_cM3My3riCVigG0U8Ms5w4"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact">
      <Popup
        trigger={<button className="contactButton">Contact</button>}
        position="right center"
      >
        <div>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="from_name"
              placeholder="from name"
              value={toSend.from_name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="to_name"
              placeholder="to name"
              value={toSend.to_name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="message"
              placeholder="Your message"
              value={toSend.message}
              onChange={handleChange}
            />
            <input
              type="text"
              name="reply_to"
              placeholder="Your email"
              value={toSend.reply_to}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </Popup>
    </div>
  );
}
export default SendMail;
