import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser } from "../features/userdetailSlice";

const Navbar = () => {
  const allUsers = useSelector((state) => state.app.users);
  const [searchData, setSearchData] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData, dispatch]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <h4 className="navbar-brand m-1">CRUDKIT</h4>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Create
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/read" className="nav-link active">
                  All post ({allUsers.length})
                </Link>
              </li>
            </ul>
            <input
              className="form-control me-2 w-25"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
