import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getAllData } from "./features/gitUserSlice";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";
function App() {
  const dispatch = useDispatch();

  // const bnde = useSelector((state) => {
  //   console.log("state...", state.app);
  //   return state.app;
  // });
  // if (bnde.loading) {
  //   return <h2>Loading...</h2>;
  // }
  // if (bnde.error != null) {
  //   return <h2>{bnde.error}</h2>;
  // }
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="App">
            <Routes>
              <Route path="/" element={<Create />} />
              <Route path="/read" element={<Read />} />
              <Route path="/edit/:id" element={<Update />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
