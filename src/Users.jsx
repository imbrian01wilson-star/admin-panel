import { Edit, Plus, Trash } from "lucide-react";
import "./Users.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import { useEffect } from "react";
import axios, { Axios } from "axios";

function Users() {
  const handleDelete = (i) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-yes",
        cancelButton: "btn btn-no",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: `آیا از حذف ${i} مطمئن هستید؟`,
        text: "بعذ از حذف دیگر به آن دسترسی نخواهید داشت!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "بله، انجامش بده!",
        cancelButtonText: "نه، لغو کن!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "حذف شد!",
            text: "آیتم شما با موفقیت حذف شد!",
            icon: "success",
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

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="container">
        <h4>مدیریت کاربران</h4>
        <div className="add-search-container">
          <input className="search-input" type="text" placeholder="جستجو..." />
          <Link to="/users/add-user">
            <button onClick={(e) => e.stopPropagation()} className="add-btn">
              <Plus size={25}></Plus>
            </button>
          </Link>
        </div>

        {users.length ? (
          <table className="container-table">
            <thead>
              <tr>
                <th>#</th>
                <th>نام</th>
                <th>کاربری</th>
                <th>ایمیل</th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.username}</td>
                  <td>{u.email}</td>
                  <td className="trash-edit">
                    <Link
                      to="/users/add-user/2"
                      state={{
                        name: "abolfazl",
                        username: "bigdeli",
                        email: "example@gmail.com",
                      }}
                    >
                      {" "}
                      <Edit
                        className="trash-edit-btn"
                        size={18}
                        color="#ffcc00"
                      ></Edit>
                    </Link>
                    <Trash
                      onClick={() => handleDelete(u.name)}
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
