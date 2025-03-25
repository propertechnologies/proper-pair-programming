import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "../types";

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: "user-1",
      name: "Jane Smith",
      role: "accountant",
      skills: ["tax", "bookkeeping"],
      availability: {
        monday: 6,
        tuesday: 8,
        wednesday: 4,
        thursday: 8,
        friday: 6,
      },
    },
    {
      id: "user-2",
      name: "John Doe",
      role: "accountant",
      skills: ["audit", "reporting"],
      availability: {
        monday: 8,
        tuesday: 6,
        wednesday: 8,
        thursday: 4,
        friday: 8,
      },
    },
    {
      id: "user-3",
      name: "Alice Johnson",
      role: "manager",
      skills: ["payroll", "tax", "audit"],
      availability: {
        monday: 4,
        tuesday: 4,
        wednesday: 6,
        thursday: 6,
        friday: 4,
      },
    },
  ];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
    return user;
  }
}
