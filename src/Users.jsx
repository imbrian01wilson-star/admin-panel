import { Edit, Plus, Trash } from "lucide-react"
import './Users.css'

function Users(){
    return(<>
    <div className="container">
        <h4>مدیریت کاربران</h4>
        <div className="add-search-container">
            <input className="search-input" type="text" placeholder="جستجو..."/>
            <button className="add-btn"><Plus size={25}></Plus></button>
        </div>

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
                <tr>
                    <td>1</td>
                    <td>abolfazl</td>
                    <td>bigdeli</td>
                    <td>example@gmail.com</td>
                    <td>
                        <Edit size={18} color="#ffcc00"></Edit>
                        <Trash size={18} color="red"></Trash>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </>)
}

export default Users