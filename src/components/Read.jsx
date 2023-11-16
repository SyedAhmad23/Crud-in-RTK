import { useEffect, useState } from "react";
import { showUser, deleteUser } from "../features/userdetailSlice";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import { AiFillEye, AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import "../app.css";
const Read = () => {
  const dispatch = useDispatch();

  const { users, loading, searchData } = useSelector((state) => state.app);
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState();
  const [radioData, setRadioData] = useState("");

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {openModal && (
        <Modal id={id} setOpenModal={setOpenModal} openModal={openModal} />
      )}
      <h2>All Post</h2>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input pointer-event"
          name="gender"
          checked={radioData === ""}
          type="radio"
          role="button"
          onChange={(e) => setRadioData("")}
        />
        <label className="form-check-label">All</label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          name="gender"
          value="male"
          checked={radioData === "male"}
          type="radio"
          role="button"
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="form-check-label">Male</label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          name="gender"
          value="female"
          checked={radioData === "female"}
          type="radio"
          role="button"
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="form-check-label">Female</label>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {users &&
          users
            .filter((ele) => {
              if (searchData.length === 0) {
                return ele;
              } else {
                return (
                  ele.name.toLowerCase().includes(searchData.toLowerCase()) ||
                  ele.email.toLowerCase().includes(searchData.toLowerCase())
                );
              }
            })
            .filter((ele) => {
              if (radioData === "male") {
                return ele.gender === radioData;
              } else if (radioData === "female") {
                return ele.gender === radioData;
              } else {
                return ele;
              }
            })

            .map((ele) => (
              <div
                key={ele.id}
                className="card mx-3 my-2"
                style={{ width: "20rem" }}
              >
                <div className="card-body text-white">
                  <h5 className="card-title">{ele.name}</h5>
                  <h6 className="card-subtitle mb-2">{ele.email}</h6>
                  <p className="card-text">{ele.gender}</p>
                  <button
                    type="button"
                    className="btn green card-link"
                    onClick={() => [setId(ele.id), setOpenModal(true)]}
                  >
                    View <AiFillEye />
                  </button>
                  <Link to={`/edit/${ele.id}`}>
                    <button type="button" className="btn grey card-link ">
                      Edit <AiOutlineEdit />
                    </button>
                  </Link>
                  <button
                    type="button"
                    className="btn red card-link "
                    onClick={() => dispatch(deleteUser(ele.id))}
                  >
                    Delete <MdDelete />
                  </button>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Read;
