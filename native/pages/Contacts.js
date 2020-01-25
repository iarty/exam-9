import React from "react";
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

const Contacts = () => {
  return (
    <Container>
      <Header>
        <Title style={{ marginTop: 20 }}>
          Contacts Book{" "}
          <Ionicons name="md-contacts" size={20} style={{ marginRight: 15 }} />
        </Title>
      </Header>
      <Content style={{ backgroundColor: "#f7f7f7" }}>
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
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
