import React, { useEffect } from "react";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Title,
  Text
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import ContactItem from "../components/ContactItem";
import { getContacts } from "../store/actions/contactsActions";
import { useDispatch, useSelector } from "react-redux";

const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state);

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return (
    <Container>
      <Header>
        <Title style={{ marginTop: 20 }}>
          Contacts Book{" "}
          <Ionicons name="md-contacts" size={20} style={{ marginRight: 15 }} />
        </Title>
      </Header>
      <Content style={{ backgroundColor: "#f7f7f7" }}>
        {!!contacts.length &&
          contacts.map(contact => (
            <ContactItem
              key={contact.id}
              name={contact.name}
              id={contact.id}
              imageUrl={contact.avatarUrl}
            />
          ))}
      </Content>
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default Contacts;
