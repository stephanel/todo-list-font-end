import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
    providedIn: 'root'
})
export class TasksService {

    tasks: Task[] = [
        {
            id: 1,
            label: 'Call bob about his last book',
            complete: false
        },
        {
            id: 2,
            label: 'Watch the new season of my favourite TV series',
            complete: false
        },
        {
            id: 3,
            label: 'Practice the bank kata',
            complete: false
        },
        {
            id: 4,
            label: 'Start learning functional programming',
            complete: false
        },
        {
            id: 5,
            label: 'Go running',
            complete: false
        },
    ];

    private dataSource = new BehaviorSubject<Task[]>(this.tasks);
    $data = this.dataSource.asObservable();

    // get(): Observable<Task[]> {
    //     return of(this.tasks);
    // }

    addTask(task: Task): void {
        this.tasks.push(task);
        this.dataSource.next(this.tasks);
    }
}