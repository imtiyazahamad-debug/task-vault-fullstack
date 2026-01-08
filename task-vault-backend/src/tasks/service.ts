import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';


@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name)
    private readonly taskModel: Model<TaskDocument>,
  ) {}

async createTask(createTaskDto: CreateTaskDto) {
  const task = new this.taskModel(createTaskDto);
  return task.save();
}

async deleteTask(id: string): Promise<void> {
  await this.taskModel.findByIdAndDelete(id).exec();
}
async getAllTasks() {
    return this.taskModel.find().exec();
  }

}