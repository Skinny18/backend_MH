export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export class UserRepository {
  static create(username: string, email: string, password: string): User {
      return { id: Date.now(), username, email, password };
  }
}
