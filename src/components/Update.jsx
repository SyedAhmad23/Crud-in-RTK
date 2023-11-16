import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { BsSendCheck } from "react-icons/bs";
import { updateUser } from "../features/userdetailSlice";

const Update = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateData, setUpdateData] = useState();

  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    if (id) {
      const singleUser = users.filter((ele) => ele.id === id);
      setUpdateData(singleUser[0]);
    }
  }, []);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  console.log("UpdateetData", updateData);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/read");
  };

  return (
    <div>
      <h2 className="my-2 text-center">Edit Post</h2>
      <form
        className="w-50 mx-auto my-5 border p-4 bg-dark text-white"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label className="form-label ">Name</label>
          <input
            type="name"
            name="name"
            className="form-control"
            value={updateData && updateData.name}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={updateData && updateData.email}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            value={updateData && updateData.age}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              name="gender"
              value="male"
              type="radio"
              role="button"
              checked={updateData && updateData.gender === "male"}
              onChange={newData}
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              name="gender"
              value="female"
              type="radio"
              role="button"
              checked={updateData && updateData.gender === "female"}
              onChange={newData}
            />
            <label className="form-check-label">Female</label>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-lg btn-block"
          //   disabled={!isFormValid}
        >
          Submit <BsSendCheck />
        </button>
      </form>
    </div>
  );
};

export default Update;
