"use client";

import React, { useEffect, useState } from "react";
import {
  AddStudent,
  ListHeader,
  StudentsList,
} from "@/app/components/students";
import { axiosInstance } from "@/app/utils/axios";
import { toast } from "react-toastify";

const StudentsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);

  const getData = () => {
    axiosInstance
      .get("/students/list")
      .then(({ data }) => setData(data?.data))
      .catch((err) => {
        console.log(err);
        if (err?.response?.data?.error) {
          toast.error(err?.response?.data?.error);
        }
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ListHeader
        onAddClick={() => {
          setIsOpen(true);
          setSelected(null);
        }}
      />
      <StudentsList
        data={data}
        callback={() => getData()}
        OnEditClick={(data) => {
          setIsOpen(true);
          setSelected(data);
        }}
      />
      <AddStudent
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        callback={() => getData()}
        selected={selected}
      />
    </>
  );
};

export default StudentsPage;
