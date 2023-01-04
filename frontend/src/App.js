import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Example from "./pages/Example";
import Main from "./pages/Main";
import Gallery from "./pages/Gallery";
import Developers from "./pages/Developers";
import Remove from "./pages/Remove";

function App() {
  return (
    <div
      style={{ backgroundColor: "#E9E9E9", overflow: "auto", height: "100vh" }}
    >
      <BrowserRouter>
        <Routes>
          {/* <Route path="/example" element={<Example />} /> */}
          <Route path="/remove" element={<Remove />} />
          <Route path="/" element={<Main />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/developers" element={<Developers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
