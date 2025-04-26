"use client";

import axios from "axios";
import User from "./components/User";
import { useEffect, useState } from "react";

const getUsers = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching users: ", error);
  }
};

export default function Home() {
  // const users = await getUsers();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((response) => setUsers(response))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="p-10 bg-black/90 grid grid-cols-3 gap-6">
      {!loading &&
        users?.map((user, index) => <User key={index} user={user} />)}
      {loading && <h2 className="text-white">Loading...</h2>}
    </main>
  );
}
