import { Injectable } from "@nestjs/common";
import { TasksService } from "../tasks/tasks.service";
import { UsersService } from "../users/users.service";

@Injectable()
export class WorkflowService {
  constructor(
    private readonly tasksService: TasksService,
    private readonly usersService: UsersService,
  ) {}

  optimizeWorkflow() {
    return {
      message: "Workflow optimization not implemented yet",
    };
  }
}
