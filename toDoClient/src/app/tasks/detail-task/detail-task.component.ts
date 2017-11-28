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

  constructor() { }

  ngOnInit() {
  }

}

