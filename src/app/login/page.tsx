"use client";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Typography } from "@mui/material";
import axios from "axios";
import axiosClient from "../api-client/axiosClient";
import { login } from "../services/LoginService";
export default function Login() {
  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    // axios
    //   .post("https://admin4x-ies-product.unit.vn/admin-api/api/v1/auth/login", {
    //     username: data.username,
    //     password: data.password,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     alert(error.message);
    //   });
    // axiosClient
    //   .post("https://admin4x-ies-product.unit.vn/admin-api/api/v1/auth/login", {
    //     username: data.username,
    //     password: data.password,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //     const token = res.data.access_token;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    login({ username: data.username, password: data.password });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <br />
      <div style={{ width: "380px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h5" textAlign="center">
            Login Page
          </Typography>
          <br />
          <TextField
            required
            id="outlined-required"
            label="Email"
            variant="outlined"
            {...register("username")}
            fullWidth
          />
          <br /> <br />
          <TextField
            required
            id="outlined-required"
            label="Password"
            variant="outlined"
            type="password"
            {...register("password")}
            fullWidth
          />
          <br /> <br />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            style={{ padding: "12px 20px" }}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
