import { Link, useParams } from "react-router-dom";
import "./AddUser.css";

function AddUser() {
  const { userId } = useParams();
  return (
    <>
      <div className="container">
        <h2>{userId ? "ویرایش کاربر" : "افزودن کاربر"}</h2>
        <form className="form">
          <label htmlFor="name">نام و نام خانوادگی</label>
          <input type="text" id="name" />
          <label htmlFor="user-name">نام کاربری</label>
          <input type="text" id="user-name" />
          <label htmlFor="email">ایمیل</label>
          <input type="text" id="email" />
          <label>آدرس</label>
          <div className="form-address">
            <input type="text" placeholder="شهر" />
            <input type="text" placeholder="خیابان" />
            <input type="text" placeholder="ادامه آدرس" />
            <input type="text" placeholder="کدپستی" />
          </div>
          <div className="form-btn">
            <Link to={-1}><button className="btns back-btn">بازگشت</button></Link>
            <button className="btns save-btn">
              {userId ? "ویرایش" : "ذخیره"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddUser;
