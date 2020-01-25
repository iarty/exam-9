import React, { useState } from "react";
import { MDBBtn } from "mdbreact";
import { Redirect } from "react-router-dom";

const ContactForm = () => {
  const [contactData, setContactData] = useState({
    name: "",
    number: "",
    email: "",
    avatarUrl: ""
  });
  const [redirect, setRedirect] = useState(false);

  const valueChanger = event => {
    setContactData({ ...contactData, [event.target.name]: event.target.value });
  };

  const postContact = async event => {
    event.preventDefault();
    setRedirect(true);
  };

  const backToContacts = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <form className="ml-auto mr-auto w-50 mt-5 border rounded py-3 px-5">
      <p className="h4 text-center mb-4">{"Name"}</p>
      <div className="text-center">
        <img src="" alt="" style={{ width: 100, height: 100 }} />
      </div>
      <label htmlFor="ContactName" className="grey-text">
        Name
      </label>
      <input
        type="text"
        name="name"
        id="ContactName"
        className="form-control"
        value={contactData.name}
        onChange={valueChanger}
        required
      />
      <br />
      <label htmlFor="ContactPhone" className="grey-text">
        Phone [Format: 0555-123-456]
      </label>
      <input
        type="tel"
        pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
        name="number"
        id="ContactPhone"
        className="form-control"
        value={contactData.number}
        onChange={valueChanger}
        required
      />
      <br />
      <label htmlFor="ContactEmail" className="grey-text">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="ContactEmail"
        className="form-control"
        value={contactData.email}
        onChange={valueChanger}
        required
      />
      <br />
      <label htmlFor="ContactPhoto" className="grey-text">
        Photo
      </label>
      <input
        type="text"
        name="avatarUrl"
        id="ContactPhoto"
        className="form-control"
        value={contactData.avatarUrl}
        onChange={valueChanger}
        required
      />

      <div className="text-center mt-4">
        <MDBBtn
          color="secondary"
          type="button"
          size="sm"
          onClick={backToContacts}
        >
          <i className="fas fa-arrow-left" /> Back to contacts
        </MDBBtn>
        <MDBBtn color="indigo" type="submit" size="sm" onClick={postContact}>
          <i className="fas fa-save" /> <i className="fas fa-edit" /> Save
        </MDBBtn>
      </div>
    </form>
  );
};

export default ContactForm;
