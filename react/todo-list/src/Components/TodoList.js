import React from "react";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.addNewTask = this.addNewTask.bind(this);

    this.props.tasksService.getTasks().subscribe((results) => {
      this.state = {
        tasks: results,
      };
    });
  }

  addNewTask() {
    const newTask = {
      id: this.state.tasks.length + 1,
      label: "New task",
      complete: false,
    };

    // this.tasksService.addTask(newTask);

    this.state.tasks.push(newTask);
    this.setState({ tasks: this.state.tasks });
  }

  handleChange(e, id) {
    const task = this.state.tasks.find((task) => {
      return task.id === id;
    });
    task.complete = e.target.checked;
    this.setState({ tasks: this.state.tasks });
  }

  render() {
    const tasksList = this.state.tasks.map((task) => (
      <li key={task.id}>
        {task.label}
        <span>
          <input
            type="checkbox"
            value=""
            onChange={(e) => this.handleChange(e, task.id)}
          />
        </span>
      </li>
    ));

    return (
      <div>
        <button onClick={this.addNewTask}>New task</button>

        <ul>{tasksList}</ul>

        <pre>{JSON.stringify(this.state.tasks, null, 2)}</pre>
      </div>
    );
  }
}
