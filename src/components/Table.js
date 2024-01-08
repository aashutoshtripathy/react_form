import React from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";


const Table = () => {
  return (
    <div>
      <div className="mt-5">
        <div className="container">
          <div className="add_btn mt-2 mb-2">
            <Link to="/Register" className="btn btn-primary">Add Data</Link>
          </div>

          <table class="table">
            <thead>
              <tr className="table-dark">
                <th scope="col">Id</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Job Role</th>
                <th scope="col">Number</th>
                <th scope="col">Operations</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>12345</td>
                <td>
                    <button className="btn btn-success"><RemoveRedEyeIcon /></button>
                    <button className="btn btn-warning ms-2"><EditIcon /></button>
                    <button className="btn btn-danger ms-2"><DeleteIcon /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
