import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "./Backdrop/Backdrop";
import { MDBBtn, MDBCloseIcon } from "mdbreact";
import { useSelector } from "react-redux";

const Modal = () => {
  const { loading } = useSelector(state => state);
  return (
    <>
      <Backdrop show={true} onClick={""} />
      <div
        className={classes.Modal}
        // style={{
        //   transform: modal ? "translateY(0)" : "translateY(-100vh)",
        //   opacity: modal ? "1" : "0"
        // }}
      >
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <div className={classes.ModalTitleWrap}>
              <MDBCloseIcon />
            </div>

            <div className="d-flex">
              <div>
                <img src={""} alt={""} style={{ width: 100, height: 100 }} />
              </div>
              <div className="ml-5">
                <h3>{"Name"}</h3>
                <p>
                  <i className="fas fa-phone-alt" /> {"number"}
                </p>
                <p>
                  <i className="fas fa-envelope" /> <a href={`mailto:`}>{"email"}</a>
                </p>
              </div>
            </div>
            <hr />
            <div className="text-right">
              <MDBBtn size="sm">
                Edit <i className="fas fa-edit" />
              </MDBBtn>
              <MDBBtn color="danger" size="sm">
                Delete <i className="fas fa-trash-alt" />
              </MDBBtn>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Modal;
