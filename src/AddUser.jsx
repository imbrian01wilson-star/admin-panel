import { Link, useParams } from "react-router-dom";
import "./AddUser.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function AddUser() {
  const { userId } = useParams();

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    address: {
      city: "",
      street: "",
      suite: "",
      zipcode: "",
    },
  });

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!userId) {
      if (data.name !== "") {
        axios
          .post("https://jsonplaceholder.typicode.com/users", data)
          .then((res) => console.log(res));
        Swal.fire({
          title: `کاربر ${data.name} اضافه شد`,
          icon: "success",
          draggable: false,
        });
      } else {
        alert("نام نمیتواند خالی باشد!");
      }
    } else {
      axios
        .put(`https://jsonplaceholder.typicode.com/users/${userId}`, data)
        .then((res) => console.log(res));

      Swal.fire({
        title: `کاربر ${data.name} ویرایش شد`,
        icon: "success",
        draggable: false,
      });
    }
  };

  useEffect(() => {
    if (userId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res) =>
          setData({
            name: res.data.name,
            username: res.data.username,
            email: res.data.email,
            address: {
              city: res.data.address.city,
              street: res.data.address.street,
              suite: res.data.address.suite,
              zipcode: res.data.address.zipcode,
            },
          }),
        );
    }
  }, []);
  return (
    <>
      <div className="container">
        <h2>{userId ? "ویرایش کاربر" : "افزودن کاربر"}</h2>
        <form onSubmit={handleAddUser} className="form">
          <label htmlFor="name">نام و نام خانوادگی</label>
          <input
            type="text"
            id="name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <label htmlFor="user-name">نام کاربری</label>
          <input
            type="text"
            id="user-name"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
          <label htmlFor="email">ایمیل</label>
          <input
            type="text"
            id="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <label>آدرس</label>
          <div className="form-address">
            <input
              type="text"
              placeholder="شهر"
              value={data.address.city}
              onChange={(e) =>
                setData({
                  ...data,
                  address: { ...data.address, city: e.target.value },
                })
              }
            />
            <input
              type="text"
              placeholder="خیابان"
              value={data.address.street}
              onChange={(e) =>
                setData({
                  ...data,
                  address: { ...data.address, street: e.target.value },
                })
              }
            />
            <input
              type="text"
              placeholder="ادامه آدرس"
              value={data.address.suite}
              onChange={(e) =>
                setData({
                  ...data,
                  address: { ...data.address, suite: e.target.value },
                })
              }
            />
            <input
              type="text"
              placeholder="کدپستی"
              value={data.address.zipcode}
              onChange={(e) =>
                setData({
                  ...data,
                  address: { ...data.address, zipcode: e.target.value },
                })
              }
            />
          </div>
          <div className="form-btn">
            <Link to={-1}>
              <button className="btns back-btn">بازگشت</button>
            </Link>
            <button type="submit" className="btns save-btn">
              {userId ? "ویرایش" : "ذخیره"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddUser;
