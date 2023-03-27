import axiosClient from "../api-client/axiosClient";

export const login = (requestBody: any) => {
  return axiosClient.post(
    "https://admin4x-ies-product.unit.vn/admin-api/api/v1/auth/login",
    requestBody
  );
};
