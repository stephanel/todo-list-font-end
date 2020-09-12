import { of } from "rxjs";

/*

VOIR ICI https://medium.com/the-guild/injectable-services-in-react-de0136b6d476

*/
export default class TasksService {
  getTasks() {
    return of([
      {
        id: 1,
        label: "Call bob about his last book",
        complete: false,
      },
      {
        id: 2,
        label: "Watch the new season of my favourite TV series",
        complete: false,
      },
      {
        id: 3,
        label: "Practice the bank kata",
        complete: false,
      },
      {
        id: 4,
        label: "Start learning functional programming",
        complete: false,
      },
      {
        id: 5,
        label: "Go running",
        complete: false,
      },
    ]);
  }
}
