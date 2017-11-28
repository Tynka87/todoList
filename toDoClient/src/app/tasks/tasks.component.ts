import {Component, OnInit} from '@angular/core';
import {Task} from "../models/task";
import {TasksService} from "../services/tasks.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  selectedTask: Task;

  test: boolean = false;

  onSelect(task: Task): void {
    this.test = false;
    this.selectedTask = task;
  }
  onAddTask():void{
    this.test = true;
  }

  constructor(private tasksService: TasksService) {
  }

  ngOnInit() {
    this.tasksService.getTasks().subscribe(newTasks => this.tasks = newTasks);
  }

}
