import { Injectable, NotFoundException } from "@nestjs/common";
import { v4 as uuidv4 } from "uuid";
import { CreateTaskDto, Task, UpdateTaskDto } from "../types";

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: "task-1",
      title: "Quarterly Tax Preparation",
      description: "Prepare Q3 tax documents for client XYZ Corp",
      status: "pending",
      priority: "high",
      assignedTo: "user-1",
      estimatedHours: 4,
      deadline: 5,
      dependencies: [],
      category: "tax_filing",
    },
    {
      id: "task-2",
      title: "Financial Statement Review",
      description: "Review financial statements for ABC Inc",
      status: "pending",
      priority: "medium",
      assignedTo: "user-2",
      estimatedHours: 3,
      deadline: 4,
      dependencies: [],
      category: "reporting",
    },
    {
      id: "task-3",
      title: "Payroll Processing",
      description: "Process monthly payroll for client XYZ Corp",
      status: "pending",
      priority: "urgent",
      assignedTo: "user-3",
      estimatedHours: 2,
      deadline: 3,
      dependencies: [],
      category: "payroll",
    },
    {
      id: "task-4",
      title: "Tax Filing",
      description: "File taxes for client XYZ Corp",
      status: "pending",
      priority: "high",
      assignedTo: "user-1",
      estimatedHours: 5,
      deadline: 5,
      dependencies: ["task-1"],
      category: "tax_filing",
    },
    {
      id: "task-5",
      title: "Annual Audit Preparation",
      description: "Prepare audit documents for ABC Inc",
      status: "pending",
      priority: "medium",
      assignedTo: "user-2",
      estimatedHours: 6,
      deadline: 6,
      dependencies: ["task-2"],
      category: "audit",
    },
  ];

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: string): Task {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    return task;
  }

  create(createTaskDto: CreateTaskDto): Task {
    const task: Task = {
      id: uuidv4(),
      ...createTaskDto,
    };
    this.tasks.push(task);
    return task;
  }

  update(id: string, updateTaskDto: UpdateTaskDto): Task {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index === -1) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }

    this.tasks[index] = {
      ...this.tasks[index],
      ...updateTaskDto,
    };

    return this.tasks[index];
  }

  remove(id: string): void {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index === -1) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    this.tasks.splice(index, 1);
  }
}
