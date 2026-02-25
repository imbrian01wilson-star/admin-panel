import { Route, Routes } from "react-router-dom";
import "./App.css";
import Gallery from "./Gallery";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Todos from "./Todos";
import Users from "./Users";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import AddUser from "./AddUser";
import axios from "axios";

function App() {
  const [menu, setMenu] = useState(false);
  const [users, setUsers] = useState([]);
  const [mainUsers, setMainUsers] = useState([]);

  const [posts, setPosts] = useState([]);
  const [mainPosts, setMainPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setMainUsers(res.data);
      })
      .catch((err) => console.log(err));

          axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
        setMainPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="main">
        <Sidebar menu={menu}></Sidebar>

        <div className="content" onClick={() => setMenu(false)}>
          <div
            className="menu"
            onClick={(e) => {
              (setMenu(!menu), e.stopPropagation());
            }}
          >
            <Menu size={18}></Menu>
          </div>
          <Routes>
            <Route
              path="/users"
              element={
                <Users
                  users={users}
                  setUsers={setUsers}
                  mainUsers={mainUsers}
                ></Users>
              }
            ></Route>
            <Route
              path="/users/add-user"
              element={<AddUser users={users} setUsers={setUsers}></AddUser>}
            >
              <Route path=":userId"></Route>
            </Route>
            <Route
              path="/posts"
              element={
                <Posts
                  posts={posts}
                  setPosts={setPosts}
                  mainPosts={mainPosts}
                ></Posts>
              }
            ></Route>
            <Route path="/gallery" element={<Gallery></Gallery>}></Route>
            <Route path="/todos" element={<Todos></Todos>}></Route>
            <Route
              path="*"
              element={
                <Users
                  users={users}
                  setUsers={setUsers}
                  mainUsers={mainUsers}
                ></Users>
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
