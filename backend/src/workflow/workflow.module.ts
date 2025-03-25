import { Module } from "@nestjs/common";
import { WorkflowController } from "./workflow.controller";
import { WorkflowService } from "./workflow.service";
import { TasksModule } from "../tasks/tasks.module";
import { UsersModule } from "../users/users.module";

@Module({
  imports: [TasksModule, UsersModule],
  controllers: [WorkflowController],
  providers: [WorkflowService],
})
export class WorkflowModule {}
