import { User } from "./user.model";

interface Task{
    id: number;
  title: string;
  description: string;
  status: 'Pending' | 'In Progress' | 'Completed'; // Task statuses
  dueDate: Date;
  assignedTo: User;
}