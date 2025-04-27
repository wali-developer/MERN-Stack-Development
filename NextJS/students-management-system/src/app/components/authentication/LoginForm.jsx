"use client";

import React, { useState } from "react";
import { TextField } from "../common";
import AppButton from "../common/AppButton";
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/app/utils/axios";
import { setCookie } from "cookies-next";
import { toast } from "react-toastify";

export const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  // Input change event handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload((prev) => ({ ...prev, [name]: value }));
  };

  // form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await axiosInstance.post("/users/auth/login", payload);
      toast.success(data?.message);
      setCookie("mern-stack-user", JSON.stringify(data?.user));
      router.push("/students");
    } catch (error) {
      console.log("Error in login: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="mt-12 flex flex-col gap-5" onSubmit={handleSubmit}>
      <TextField
        type={"email"}
        label="Email"
        placeholder="Enter your email"
        name="email"
        value={payload.email}
        onChange={handleChange}
        required
      />
      <TextField
        type={"password"}
        label="Password"
        name="password"
        placeholder="Enter your password"
        value={payload.password}
        onChange={handleChange}
        required
      />
      <AppButton
        type={"submit"}
        title={loading ? "Loading" : "Sign in"}
        className="mt-9"
        disabled={loading}
      />
    </form>
  );
};
