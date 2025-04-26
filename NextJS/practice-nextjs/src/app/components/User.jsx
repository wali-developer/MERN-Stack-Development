import Image from "next/image";
import React from "react";

const User = ({ user }) => {
  return (
    <div className="flex flex-col gap-2 bg-white rounded-lg p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
      <Image
        src="/image.jpeg"
        alt=""
        width={110}
        height={130}
        className="rounded-lg"
      />
      <div className="space-y-2 text-center sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg font-semibold text-black">{user?.name}</p>
          <p className="font-medium text-gray-500">{user?.email}</p>
          <p className="font-medium text-gray-500">{`${user?.address?.city}, ${user?.address?.street}, ${user?.address?.zipcode}`}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
