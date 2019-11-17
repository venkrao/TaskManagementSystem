import { Component, OnInit } from '@angular/core';
import { RestRequestService } from '../rest-request.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private restRequestService:RestRequestService) { 
    
  }
  
  inprogress: any;
  total: any;
  tasksAvailable
  allTasks
  deleteTaskPopup
  taskId

  ngOnInit() {
    this.inprogress = true
    this.restRequestService.getRequest(undefined, "tasks", undefined).subscribe(
      tasks => {
        this.total = 0
        if (Object.keys(tasks).length > 0) {
            this.tasksAvailable = true
            this.total = Object.keys(tasks).length
        }
        this.allTasks = tasks
        this.inprogress = false
        console.log(tasks)
      },
      failure => {
        console.log("Failure: "+ JSON.stringify(failure))
        this.inprogress = false
      }
    )
  }

  deleteTask(taskId) {
    this.deleteTaskPopup = confirm("Are you sure you want to delete this listing?")
  
    if (this.deleteTaskPopup) {
      this.taskId = taskId
      this.restRequestService.deleteRequest(undefined, "tasks", this.taskId).subscribe(
          response => {
            console.log(response)
          
            document.getElementById("task_" + this.taskId).remove();
            this.total = this.total - 1
            if (this.total == 0 ) {
              this.tasksAvailable = false
            }
          },
          failure => {
            console.log("Coudn't delete task. Failure: "+ JSON.stringify(failure))
          }
      )
      return false;
    } else {
      console.log("NOT deleting listing")
      return
    }
    }

}
