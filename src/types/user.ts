export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserRepository {
  getUsers(): Promise<User[]>;
}
