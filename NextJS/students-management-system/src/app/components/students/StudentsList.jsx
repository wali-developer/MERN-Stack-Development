import React from "react";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { PiUserCircle } from "react-icons/pi";
import { axiosInstance } from "@/app/utils/axios";
import { toast } from "react-toastify";

export const StudentsList = ({ data, callback, OnEditClick }) => {
  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/students/delete/${id}`);
      callback();
      toast.success("Student record deleted successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="min-w-full w-full overflow-x-auto">
      <table className="table-auto w-full border-separate border-spacing-y-3 ">
        <thead className="text-left">
          <th className="text-xs font-semibold text-gray-400 p-5  text-nowrap">
            Enroll number
          </th>
          <th className="text-xs font-semibold text-gray-400 p-5  text-nowrap">
            Name
          </th>
          <th className="text-xs font-semibold text-gray-400 p-5  text-nowrap">
            Email
          </th>
          <th className="text-xs font-semibold text-gray-400 p-5  text-nowrap">
            Phone
          </th>
          <th className="text-xs font-semibold text-gray-400 p-5  text-nowrap">
            Date
          </th>
          <th className="text-xs font-semibold text-gray-400 p-5  text-nowrap">
            Actions
          </th>
        </thead>
        <tbody>
          {Array.isArray(data) &&
            data?.map((student, index) => (
              <tr
                key={index}
                className="text-nowrap bg-white shadow-md shadow-gray-100"
              >
                <td className="text-sm text-black py-6 px-5 mb-4 rounded-tl-lg rounded-bl-lg ">
                  {student?.enrollNumber}
                </td>
                <td className="text-sm text-black py-6 px-5 mb-4">
                  <div className="inline-flex gap-2 items-center">
                    <PiUserCircle className="text-2xl" />
                    {student?.name}
                  </div>
                </td>
                <td className="text-sm text-black py-6 px-5 mb-4">
                  {student?.email}
                </td>
                <td className="text-sm text-black py-6 px-5 mb-4">
                  {student?.contact}
                </td>
                <td className="text-sm text-black py-6 px-5 mb-4">
                  {student?.createdAt}
                </td>
                <td className="py-6 px-5 rounded-tr-lg rounded-br-lg mb-4">
                  <div className="inline-flex gap-3 items-center">
                    <button onClick={() => OnEditClick(student)}>
                      <FiEdit className="text-xl text-green-500" />
                    </button>
                    <button onClick={() => handleDelete(student?._id)}>
                      <AiOutlineDelete className="text-xl text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};
