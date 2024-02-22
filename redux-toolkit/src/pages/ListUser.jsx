import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAll, findOne, remove } from "../services/user.service";

export default function ListUser() {
  const dispatch = useDispatch();

  // Lấy dữ liệu trong kho lưu trữ
  const listUser = useSelector((state) => state.user.data);
  const userEdit = useSelector((state) => state.user.userEdit);
  console.log(userEdit);

  const loadData = () => {
    dispatch(findAll());
  };

  useEffect(() => {
    loadData();
  }, []);

  // Hàm xóa một bản ghi theo id
  const handleDelete = (id) => {
    dispatch(remove(id));
  };

  // Hàm cập nhật một bản ghi theo id
  const handleEdit = (id) => {
    // Gọi API tìm kiếm thông tin một bản ghi theo id
    dispatch(findOne(id));
  };

  return (
    <>
      <div>
        <h3>List user</h3>
        <table border={1}>
          <thead>
            <tr>
              <th>STT</th>
              <th>UserName</th>
              <th>Gender</th>
              <th>DateOfBirth</th>
              <th>Address</th>
              <th>Email</th>
              <th colSpan={2}>Options</th>
            </tr>
          </thead>
          <tbody>
            {listUser.map((user, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{user.userName}</td>
                <td>{user.gender}</td>
                <td>{user.dateOfBirth}</td>
                <td>{user.address}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleEdit(user.id)}>Edit</button>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
