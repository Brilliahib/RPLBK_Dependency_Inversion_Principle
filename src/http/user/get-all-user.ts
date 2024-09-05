import { User, UserRepository } from "@/types/user";

export class ApiUserRepository implements UserRepository {
  async getUsers(): Promise<User[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await response.json();
    return users;
  }
}
