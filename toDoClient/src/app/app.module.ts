import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { DetailTaskComponent } from './tasks/detail-task/detail-task.component';
import { TasksService } from './services/tasks.service';
import {HttpClientModule} from "@angular/common/http";
import { CreateTaskComponent } from './tasks/create-task/create-task.component';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    DetailTaskComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }


