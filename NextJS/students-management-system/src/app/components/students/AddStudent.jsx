"use client";

import React, { useEffect, useState } from "react";
import Modal from "../common/Modal";
import { TextField } from "../common";
import AppButton from "../common/AppButton";
import { axiosInstance } from "@/app/utils/axios";
import { toast } from "react-toastify";

export const AddStudent = ({ isOpen, setIsOpen, callback, selected }) => {
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    contact: "",
    enrollNumber: "",
  });

  useEffect(() => {
    setPayload({
      name: selected?.name,
      email: selected?.email,
      contact: selected?.contact,
      enrollNumber: selected?.enrollNumber,
    });
  }, [selected]);

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

      if (selected) {
        const { data } = await axiosInstance.put(
          `/students/update/${selected?._id}`,
          payload
        );
        toast.success(data?.message);
      } else {
        const { data } = await axiosInstance.post("/students/create", payload);
        toast.success(data?.message);
      }

      setIsOpen(false);
      callback();
    } catch (error) {
      console.log("Error in login: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h4 className="text-[22px] uppercase font-semibold text-black text-center">
        {selected ? "Update" : "Add"} Student
      </h4>
      <p className="text-sm text-textgray mt-3 text-center">
        Enter details to {selected ? "Update" : "Add"} student in the list
      </p>
      <form className="mt-7 flex flex-col gap-5" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          placeholder="Enter your name"
          name="name"
          value={payload.name}
          onChange={handleChange}
          required
        />
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
          type={"number"}
          label="Phone"
          placeholder="Enter your phone"
          name="contact"
          value={payload.contact}
          onChange={handleChange}
          required
        />
        <TextField
          type={"number"}
          label="Enroll number"
          placeholder="Enter your enroll number"
          name="enrollNumber"
          value={payload.enrollNumber}
          onChange={handleChange}
          required
        />

        <AppButton
          type={"submit"}
          title={loading ? "Loading" : `${selected ? "Update" : "Add"} Student`}
          className="mt-5"
        />
      </form>
    </Modal>
  );
};
