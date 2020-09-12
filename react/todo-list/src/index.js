import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoList from "./Components/TodoList";
import TasksService from "./Services/TasksService";

var tasksService = new TasksService();

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route path="/">
          <TodoList tasksService={tasksService} />
        </Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
