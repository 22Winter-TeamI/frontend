import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Gallery from "./pages/Gallery";
import Developers from "./pages/Developers";
import Login from "./pages/Login";

function App() {
  return (
    <div
      style={{ backgroundColor: "#FFFEFE", overflow: "auto", height: "100vh" }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/main" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
