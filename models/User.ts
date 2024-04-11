import { User } from '../repositories/UserRepository';

export class UserModel {
    private userRepository: User[];

    constructor() {
        this.userRepository = [];
    }

    createUser(user: User): void {
        this.userRepository.push(user);
    }

    getUserById(id: number): User | undefined {
        return this.userRepository.find(user => user.id === id);
    }

    getAllUsers(): User[] {
        return this.userRepository;
    }
}
