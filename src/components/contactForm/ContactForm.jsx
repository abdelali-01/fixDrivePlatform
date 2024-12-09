import React, { useState } from "react";
import "./contactform.css";

export default function ContactForm() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [message, setMessage] = useState("");
  const [count, setCount] = useState();
  return (
    <div
      className="ContactFormSection p-5 d-flex align-items-start gap-5 "
      style={{
        backgroundImage: `url(${PF}ContactBackground.png)`,
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
    >
      <iframe
        title="platfomLocation"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51144.64919265495!2d3.450486987297507!3d36.757597297958704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e68dcc89e5b23%3A0x84e914279405eb13!2sBoumerdes!5e0!3m2!1sen!2sdz!4v1733775062432!5m2!1sen!2sdz"
        width="600"
        height="550"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        style={{
          opacity: "0.8",
        }}
      />
      <div className="ContactForm w-50">
        <h4>Contact Us</h4>
        <form action="" className="mt-4">
          <div className="input d-flex flex-column gap-1 ">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="FULL NAME" />
          </div>
          <div className="input d-flex flex-column gap-1 mt-4">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="contact.info@fixdrive.dz"
            />
          </div>
          <div className="input d-flex flex-column gap-1 mt-4">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" placeholder="+000 000 000 000" />
          </div>
          <div className="input d-flex flex-column gap-1 mt-4 position-relative">
            <label htmlFor="comment">Comment</label>
            <textarea
              name="comment"
              id="comment"
              maxLength={"150"}
              placeholder="Leave your message here"
              rows="4"
              style={{
                maxHeight: "150px",
                minHeight: "50px",
              }}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setCount(e.target.value.length)
              }}
            ></textarea>
            <span className="position-absolute TextNumber">
              <span>{count || "0"}</span>/ <span>150</span>
            </span>
          </div>
          <button className="btn btn-primary w-100 mt-5 pt-2 pb-2 fw-semibold">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
