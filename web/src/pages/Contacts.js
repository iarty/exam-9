import React from "react";
import ContactItem from "../components/ContactItem";

const Contacts = () => {
  return (
    <div>
      <h1>Contacts</h1>
      <hr />
      <div className="d-flex flex-wrap">
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
      </div>
    </div>
  );
};

export default Contacts;
