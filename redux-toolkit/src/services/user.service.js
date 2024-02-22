import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../api/axios";

// Hàm lấy tất cả user
export const findAll = createAsyncThunk("user/findAll", async () => {
  try {
    // Gọi API lấy dữ liệu
    const response = await baseUrl.get("users");
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

// Hàm xóa một bản ghi theo id
export const remove = createAsyncThunk("user/remove", async (id) => {
  try {
    let response = await baseUrl.delete(`users/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
});

// Hàm tìm kiếm thông tin một bản ghi theo id
export const findOne = createAsyncThunk("user/findOne", async (id) => {
  try {
    let response = await baseUrl.get(`users/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
