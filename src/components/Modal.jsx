import React from "react";
import { useSelector } from "react-redux";
import {
  AiFillCloseCircle,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineCalendar,
  AiOutlineMan,
} from "react-icons/ai";
import "./Modal.css";

const Modal = ({ id, setOpenModal }) => {
  const allusers = useSelector((state) => state.app.users);
  const singleUser = allusers.filter((ele) => ele.id === id)[0];

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button
          type="button"
          className="closeButton"
          onClick={() => setOpenModal(false)}
        >
          <AiFillCloseCircle />
        </button>
        <h2>User Details </h2>
        <div className="userData">
          <div className="userDetail">
            <AiOutlineUser />
            <p>{singleUser.name}</p>
          </div>
          <div className="userDetail">
            <AiOutlineMail />
            <p>{singleUser.email}</p>
          </div>
          <div className="userDetail">
            <AiOutlineCalendar />
            <p>{singleUser.age}</p>
          </div>
          <div className="userDetail">
            <AiOutlineMan />
            <p>{singleUser.gender}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
