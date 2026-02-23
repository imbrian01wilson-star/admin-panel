import { Route, Routes } from "react-router-dom";
import "./App.css";
import Gallery from "./Gallery";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Todos from "./Todos";
import Users from "./Users";
import { Menu } from "lucide-react";
import { useState } from "react";

function App() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="main">
        <Sidebar menu={menu}></Sidebar>

        <div className="content" onClick={() => setMenu(!menu)}>
          <div className="menu" onClick={() => setMenu(!menu)}>
            <Menu size={18}></Menu>
          </div>
          <Routes>
            <Route path="/users" element={<Users></Users>}></Route>
            <Route path="/posts" element={<Posts></Posts>}></Route>
            <Route path="/gallery" element={<Gallery></Gallery>}></Route>
            <Route path="/todos" element={<Todos></Todos>}></Route>
            <Route path="*" element={<Users></Users>}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
