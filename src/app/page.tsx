"use client";

import { ApiUserRepository } from "@/http/user/get-all-user";
import { User } from "@/types/user";
import { useEffect, useState } from "react";
// import { MockUserRepository } from "../services/MockUserRepository"; // Jika ingin menggunakan mock data

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const userRepository = new ApiUserRepository(); // Bisa diganti dengan MockUserRepository
    userRepository.getUsers().then(setUsers);
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
