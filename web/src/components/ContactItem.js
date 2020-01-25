import React from "react";
import { MDBCard, MDBCardTitle } from "mdbreact";

const ContactItem = ({ name, url }) => {
  return (
    <MDBCard
      className="card-body col-5 flex-row align-items-center hoverable"
      style={{ margin: "2rem auto 0 auto", cursor: "pointer" }}
    >
      <div className="mr-3">
        <img alt="" src={url} width="100px" height="100px" />
      </div>
      <div>
        <MDBCardTitle>{name}</MDBCardTitle>
      </div>
    </MDBCard>
  );
};

export default ContactItem;
