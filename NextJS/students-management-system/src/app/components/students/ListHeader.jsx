import React from "react";
import AppButton from "../common/AppButton";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { TbLogout2 } from "react-icons/tb";

export const ListHeader = ({ onAddClick }) => {
  const router = useRouter();
  const logout = () => {
    deleteCookie("mern-stack-user");
    router.push("/");
  };

  return (
    <div className="flex justify-between flex-wrap gap-3 items-center pb-3 border-b border-gray-200">
      <h4 className="text-[22px] font-bold text-black">Students List</h4>
      <AppButton
        title={"Add new student"}
        className={"max-w-[200px] uppercase ml-auto"}
        onClick={onAddClick}
      />
      <button className="text-2xl text-red-500" onClick={logout}>
        <TbLogout2 />
      </button>
    </div>
  );
};
