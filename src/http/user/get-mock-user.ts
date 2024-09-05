import { User, UserRepository } from "@/types/user";

export class MockUserRepository implements UserRepository {
  async getUsers(): Promise<User[]> {
    return [
      { id: 1, name: "John Doe", email: "cexample@gmail.com" },
      { id: 2, name: "Jane Smith", email: "cexample@gmail.com" },
    ];
  }
}
