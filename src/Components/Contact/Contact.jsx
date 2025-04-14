import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // formData.append("access_key", "79a634ff-6a21-4352-b344-32cdaec4324a");

    // const response = await fetch("https://api.web3forms.com/submit", {
    //   method: "POST",
    //   body: formData,
    // });

    // const data = await response.json();

    // if (data.success) {
    //   setResult("Form Submitted Successfully");
    //   event.target.reset();
    // } else {
    //   console.log("Error", data);
    //   setResult(data.message);
    // }

    fetch("https://getform.io/f/bmdkekna", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let us talk</h1>
          <p>
            I am currently available to take on new projects, so feel free to
            send me a message about anything anytime.{" "}
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>kenosssyobasi@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>08140817343</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Lagos, Nigeria.</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          method="POST"
          encType="multiport/form-data"
          className="contact-right"
        >
          <label htmlFor=""> Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
