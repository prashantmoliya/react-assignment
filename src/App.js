import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LayOut } from "./Components/Page/LayOut";
import  AddForm  from "./Components/Page/AddForm";
import ViewForm from "./Components/Page/ViewForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<LayOut />}>
          <Route path="/" element={<ViewForm />} />
            <Route path="/AddReview" element={<AddForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
