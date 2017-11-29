import {Component, OnInit} from '@angular/core';
import {TasksService} from "../../services/tasks.service";
import {Task} from '../../models/task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  newTask: Task = new Task();
  submitted = false;

  constructor(private tasksService: TasksService) {
  }

  onSubmit() {
    //this.submitted = true;
    this.tasksService.addTask(this.newTask).subscribe(() => {
    });
    alert(JSON.stringify(this.newTask));
  }

  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit() {
  }

}
