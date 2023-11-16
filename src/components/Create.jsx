import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../features/userdetailSlice";
import { BsSendCheck } from "react-icons/bs";

const Create = () => {
  const [users, setUsers] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const getUsersData = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate the form
  useEffect(() => {
    const { name, email, age, gender } = formData;
    const isValid = name && email && age && gender;
    setIsFormValid(isValid);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers(formData);
    dispatch(createUser(formData));
    navigate("/read");
  };
  return (
    <div>
      <h2 className="my-2 text-center">Create Post</h2>
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
            onChange={getUsersData}
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={getUsersData}
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            onChange={getUsersData}
            placeholder="Enter your age"
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
              onChange={getUsersData}
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
              onChange={getUsersData}
            />
            <label className="form-check-label">Female</label>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-lg btn-block"
          disabled={!isFormValid}
        >
          Submit <BsSendCheck />
        </button>
      </form>
    </div>
  );
};

export default Create;
