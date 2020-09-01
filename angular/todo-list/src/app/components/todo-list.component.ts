import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    tasks: Task[] = [];

    constructor(public tasksService: TasksService) {
    }

    ngOnInit() {
        this.tasksService.$data.subscribe(results => this.tasks = results);
    }

    addNewTask() {
        const newTask = {
            id: this.tasks.length,
            label: 'New task',
            complete: false
        };

        this.tasksService.addTask(newTask);
    }
}