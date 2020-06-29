import React, { useState } from "react";
import axios from "axios";

const API_PATH = "https://mcamca.000webhostapp.com/api/contact/index.php";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [mailSent, setMailSent] = useState(false);
  const [error, setError] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log({ name, surname, email, phone, message, mailSent, error });

    axios({
      method: "post",
      url: `${API_PATH}`,
      header: { "content-type": "application/json" },
      data: { name, surname, email, phone, message, mailSent, error },
    })
      .then((result) => {
        setMailSent(result.data.sent);
      })
      .catch((error) => setError(error.message));
  };

  return (
    <form className="form-container__form" data-aos="fade-left">
      <input
        type="text"
        id="name"
        className="form-input"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ad"
      />
      <input
        type="text"
        id="surname"
        className="form-input"
        name="surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        placeholder="Soyad"
      />
      <input
        type="email"
        id="email"
        className="form-input"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="number"
        id="phone"
        className="form-input"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Telefon"
      />
      <textarea
        name="message"
        id="message"
        className="form-textarea"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Mesaj"
      ></textarea>
      <input
        type="submit"
        id="submit-btn"
        className="form-btn"
        name="submit"
        value="Gönder"
        onClick={(e) => {
          handleFormSubmit(e);
        }}
      />
    </form>
  );
};

export default ContactForm;
