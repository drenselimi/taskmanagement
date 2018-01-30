import { TaskStatusEnum } from "../enums/task-status.enum";

export class Task {
    _id: string;
    title: string;
    content: string;
    description: string;
    startDate: Date;
    endDate: Date;
    status: string;

    constructor() {

    }
}