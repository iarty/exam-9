import React, { useEffect } from "react";
import ContactItem from "../components/ContactItem";
import { getContacts } from "../store/actions/contactsActions";
import { useDispatch, useSelector } from "react-redux";

const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts, loading } = useSelector(state => state);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  console.log(contacts);
  return (
    <div>
      <h1>Contacts</h1>
      <hr />
      <div className="d-flex flex-wrap">
        {loading && !contacts.length ? (
          <div>Loading...</div>
        ) : (
          contacts.map(contact => (
            <ContactItem
              key={contact.id}
              name={contact.name}
              number={contact.number}
              email={contact.email}
              url={contact.avatarUrl}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Contacts;
