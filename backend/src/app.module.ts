import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { WorkflowModule } from './workflow/workflow.module';

@Module({
  imports: [TasksModule, UsersModule, WorkflowModule],
})
export class AppModule {}
