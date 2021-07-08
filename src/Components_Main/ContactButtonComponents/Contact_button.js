import React from "react";
import "./Contact_button.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

/* Function added for the contact-button. */

function ContactButton() {
  return (
    <div className="contact">
      <Popup
        trigger={<button className="contactButton">Contact</button>}
        position="right center"
      >
        <div>
          <form action="mailto:lnestorson@gmail.com" enctype="text/plain">
            <label for="name">Name:</label>
            <br></br>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            ></input>
            <label for="mail">Mail:</label>
            <br></br>
            <input
              type="text"
              id="mail"
              name="mail"
              placeholder="name@example.com"
            ></input>
            <label for="Message">Message</label>
            <textarea
              id="Message"
              name="Message"
              placeholder="Write something.."
              cols="20"
              rows="5"
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </Popup>
    </div>
  );
}
export default ContactButton;
