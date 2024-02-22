import { createSlice } from "@reduxjs/toolkit";
import { findAll, findOne, remove } from "../../services/user.service";

const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    userEdit: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(findAll.pending, (state) => {
        state.status = "Pending";
      })
      .addCase(findAll.fulfilled, (state, action) => {
        state.status = "Successfully"; // Trả về trạng thái thành công
        state.data = action.payload; // Gán lại dữ liệu lấy từ API cho giá trị khởi tạo
      })
      .addCase(findAll.rejected, (state, action) => {
        state.status = "Failed";
        state.error = action.error.message; // Lấy ra nội dung lỗi
      })
      .addCase(remove.pending, (state) => {
        state.status = "Pending";
      })
      .addCase(remove.fulfilled, (state, action) => {
        state.status = "Successfully";
        // Cập nhật lại dữ liệu mới nhất cho giao diện
        state.data = state.data.filter(
          (user) => user.id !== action.payload.data.id
        );
      })
      .addCase(remove.rejected, (state, action) => {
        state.status = "Failed";
        state.error = action.error.message; // Lấy ra nội dung lỗi
      })
      .addCase(findOne.pending, (state) => {
        state.status = "Pending";
      })
      .addCase(findOne.fulfilled, (state, action) => {
        state.status = "Successfully";
        state.userEdit = action.payload;
      })
      .addCase(findOne.rejected, (state, action) => {
        state.status = "Failed";
        state.error = action.error.message; // Lấy ra nội dung lỗi
      });
  },
});

export default userSlice.reducer;
