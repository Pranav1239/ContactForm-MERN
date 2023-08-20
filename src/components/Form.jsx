import React, { useState } from "react";
import './form.css';

const Form = () => {

    const [value , setValue] = useState("");

    const HandleValue = (e)=>{
        setValue({
            ...value,
            [e.target.name] : e.target.value
        })
        console.log(value)
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(e)
        const res = await fetch('http://localhost:4040/contact' , {
            method: "POST",
            body: JSON.stringify(value),
            headers: {
              "Content-Type": "application/json",
            },
        })
        const data = res.json()
        console.log(data);
    }

  return (
    <div className="contact-form-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input
              typeof="text"
              id="name"
              name="name"
              value={value.name}
              onChange={HandleValue}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              typeof="email"
              id="email"
              name="email"
              value={value.email}
              onChange={HandleValue}
            />
          </div>
          <div className="input-group">
            <label htmlFor="subject">Subject:</label>
            <input
              typeof="text"
              id="subject"
              name="subject"
              value={value.subject}
              onChange={HandleValue}
            />
          </div>
          <div className="input-group">
            <label htmlFor="reason">Reason:</label>
            <textarea
              typeof="text"
              id="reason"
              name="reason"
              value={value.reason}
              onChange={HandleValue}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
