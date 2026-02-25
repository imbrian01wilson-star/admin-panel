import { Edit, Plus, Trash } from "lucide-react";
import "./Users.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function Users({ posts, setPosts, mainPosts }) {
  const handleDelete = (name, id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-yes",
        cancelButton: "btn btn-no",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: `آیا از حذف ${name} مطمئن هستید؟`,
        text: "بعذ از حذف دیگر به آن دسترسی نخواهید داشت!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "بله، انجامش بده!",
        cancelButtonText: "نه، لغو کن!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
              if (res.status === 200) {
                setUsers(posts.filter((u) => u.id !== id));
                swalWithBootstrapButtons.fire({
                  title: "حذف شد!",
                  text: "آیتم شما با موفقیت حذف شد!",
                  icon: "success",
                });
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "لغو شد",
            text: "عملیات حذف لغو شد:)",
            icon: "error",
          });
        }
      });
  };

  const handleSearch = (e) => {
    console.log(e);
    
    if (e.target.value > 0) {
      setPosts(mainPosts.filter((u) => u.userId == e.target.value));
    } else {
      setPosts(mainPosts);
    }
  };

  return (
    <>
      <div className="container">
        <h4>پست ها</h4>
        <div className="add-search-container">
          <input
            className="search-input"
            type="number"
            placeholder="جستجو..."
            onChange={handleSearch}
          />
          <Link onClick={(e) => e.stopPropagation()} to="/users/add-user">
            <button className="add-btn">
              <Plus size={25}></Plus>
            </button>
          </Link>
        </div>

        {posts.length ? (
          <table className="container-table">
            <thead>
              <tr>
                <th>#</th>
                <th>آیدی کاربر</th>
                <th>عنوان</th>
                <th>متن</th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.userId}</td>
                  <td>{u.title}</td>
                  <td>{u.body}</td>
                  <td className="trash-edit">
                    <Link to={`/users/add-user/${u.id}`}>
                      <Edit
                        className="trash-edit-btn"
                        size={18}
                        color="#ffcc00"
                      ></Edit>
                    </Link>
                    <Trash
                      onClick={() => handleDelete(u.name, u.id)}
                      className="trash-edit-btn"
                      size={18}
                      color="red"
                    ></Trash>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h4>لطفا صبر کنید...</h4>
        )}
      </div>
    </>
  );
}

export default Users;
