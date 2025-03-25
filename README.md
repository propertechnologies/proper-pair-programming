# Accounting Workflow Optimization Challenge

## Challenge Overview

In this 45-minute pair programming session, you'll be enhancing a task management system for an accounting firm by implementing a workflow optimization algorithm.

## The Problem

The accounting team needs to efficiently schedule and assign tasks to maximize productivity while respecting dependencies and deadlines. The current system allows basic CRUD operations on tasks but lacks intelligent scheduling.

## Your Task

Implement a workflow optimization algorithm that:

- Analyzes task dependencies
- Considers team member availability and skills
- Optimizes task scheduling to minimize completion time
- Resolves deadline conflicts

## Project Structure

- **Backend**: NestJS server with TypeScript (port 3000)
- **Frontend**: Vue.js 3 single-page application (port: 5173)
- Data is stored in-memory (no database setup required)

## Starter Code

The challenge code can be found at: `github.com/propertechnologies/pair-programming`

The repository contains:

- A complete backend API with task and user CRUD operations
- A simple frontend to visualize tasks and team members
- Data models and sample data

## Requirements

Your implementation should:

- Create an optimized schedule for completing all tasks
- Handle task dependencies correctly (tasks can only start when dependencies are complete)
- Match tasks to team members based on skills
- Consider team member availability
- Identify and resolve potential deadline conflicts
- Return the optimized schedule via the `/api/optimize-workflow` endpoint

## Getting Started

1. Review the existing code to understand the data structure
2. Focus on implementing the `/api/optimize-workflow` endpoint in the backend
3. The frontend already has a button to call this endpoint and display results

## Evaluation Criteria

- Problem-solving approach
- Code organization and clarity
- Handling of edge cases and constraints
- Ability to deliver a working solution within the time constraint
- Discussion of trade-offs and potential improvements

> Feel free to use any resources, including AI tools, to help with your implementation. We're more interested in your problem-solving approach than memorized algorithms.

### Bonus Points

- Visualizing the optimized schedule on the frontend
- Implementing re-assignment suggestions for deadline conflicts
- Considering task priorities in the optimization algorithm
