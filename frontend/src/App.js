import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Selectstyle from "./pages/Selectstyle";
import Login from "./pages/Login";
import ImageUploadA from "./pages/BackgroundPhotoshop";
import ImageUploadB from "./pages/CartoonStyle";
import Gallery from "./pages/Gallery";
import Developers from "./pages/Developers";
import Loading from "./pages/Loading";

function App() {
  return (
    <div
      style={{ backgroundColor: "#F2C9C9", overflow: "auto", height: "100vh" }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/selectpage" element={<Selectstyle />} />
          <Route path="/main" element={<Login />} />
          <Route path="/backgroundphotoshop" element={<ImageUploadA />} />
          <Route path="/cartoonstyle" element={<ImageUploadB />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/developers" element={<Developers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
