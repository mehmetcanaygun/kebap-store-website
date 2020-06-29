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
  const [feedbackToggled, setFeedbackToggled] = useState(false);
  const [feedback, setFeedBack] = useState(
    "Bizimle iletişime geçtiğiniz için teşekkür ederiz."
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log({ name, surname, email, phone, message, mailSent, error });

    if (
      name !== "" &&
      surname !== "" &&
      email !== "" &&
      phone !== "" &&
      message !== ""
    ) {
      // Send POST request to PHP file
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

      if (error === null) {
        // Clear inputs & toggle feedback(success)
        setName("");
        setSurname("");
        setEmail("");
        setPhone("");
        setMessage("");
        setFeedbackToggled(true);

        setTimeout(() => {
          setFeedbackToggled(false);
        }, 3000);
      } else {
        // Toggle feedback(fail)
        setFeedBack("Bir hata oluştu. Lütfen tekrar deneyin.");
        setFeedbackToggled(true);

        setTimeout(() => {
          setFeedbackToggled(false);
        }, 3000);
      }
    } else {
      alert("Lütfen tüm alanları doldurduğunuzdan emin olun.");
    }
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
      <div
        className={
          feedbackToggled
            ? error === null
              ? "submit-feedback show success"
              : "submit-feedback show"
            : "submit-feedback"
        }
      >
        {feedback}
      </div>
    </form>
  );
};

export default ContactForm;
