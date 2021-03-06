import React, { Component } from 'react'
import TaskList from './TaskList'

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

interface TaskProps {
  id: number;
  title: string;
  description: string;
  status: string;
}

interface Props {
 readonly tasks: TaskProps[];
}

class TaskPage extends Component<Props> {

  renderTaskLists() {
    const { tasks } = this.props



    return TASK_STATUSES.map((status) => {
      const statusTasks = tasks.filter((task) => {

       return task.status === status});


      return <TaskList key={status} status={status} tasks={statusTasks} />
    })
  }

  render() {
    return (
      <div className="tasks">
        <div className="task-lists">
          {this.renderTaskLists()}
        </div>
      </div>
    )
  }
}

export default TaskPage;
