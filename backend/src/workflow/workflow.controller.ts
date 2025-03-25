import { Controller, Post } from "@nestjs/common";
import { WorkflowService } from "./workflow.service";

@Controller("api")
export class WorkflowController {
  constructor(private readonly workflowService: WorkflowService) {}

  @Post("optimize-workflow")
  optimizeWorkflow() {
    return this.workflowService.optimizeWorkflow();
  }
}
