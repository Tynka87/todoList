import {Component, Input, OnInit} from '@angular/core';
import{Task} from '../../models/task';
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.component.html',
  styleUrls: ['./detail-task.component.css']
})
export class DetailTaskComponent implements OnInit {

  @Input() task: Task;
  update: boolean = false;

  onDelete(task: Task): void {
    this.tasksService.deleteTask(task.id).subscribe(() => {
    });
  }

  onUpdate(task: Task): void {
    this.update = true;
  }

  constructor(private tasksService: TasksService) {
  }

  ngOnInit() {
  }

}

