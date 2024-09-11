"use client";

import { Card, CardHeader } from "@/components/ui/card";
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
    <section className="flex flex-col pad-x">
      <div className="text-left">
        <h1 className="text-xl font-bold mb-4">User List</h1>
        <ul className="gap-4 flex flex-col w-full">
          {users.map((user) => (
            <Card key={user.id}>
              <CardHeader>
                <p>{user.name}</p>
              </CardHeader>
            </Card>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
