import { Task } from "zone.js/lib/zone-impl";

export interface User {
    id:string;
    fullname:string;
    email: string;
    password: string;
    tasks: Task[];
}