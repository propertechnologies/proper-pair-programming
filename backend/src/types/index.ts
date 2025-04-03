export interface Task {
  id: string;
  title: string;
  description: string;
  status: "pending" | "in_progress" | "completed";
  priority: "low" | "medium" | "high" | "urgent";
  assignedTo: string;
  estimatedHours: number;
  deadline: number; // Days from now until the task is due. Value is integer.
  dependencies: string[]; // Array of task IDs this task depends on
  category: "tax_filing" | "audit" | "bookkeeping" | "payroll" | "reporting";
}

export interface User {
  id: string;
  name: string;
  role: "accountant" | "manager" | "admin";
  skills: string[]; // e.g., "tax", "audit", "payroll"
  availability: {
    monday: number;
    tuesday: number;
    wednesday: number;
    thursday: number;
    friday: number;
  };
}

export interface CreateTaskDto extends Omit<Task, "id"> {}
export interface UpdateTaskDto extends Partial<Task> {}
