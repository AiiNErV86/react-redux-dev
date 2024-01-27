import React from 'react'
import { ITask } from '../../../types/tasks'
import TaskItem from './TaskItem';

interface TodoListProps {
    tasks: ITask[];
}

const ToDoLists: React.FC<TodoListProps> = ({ tasks }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => <TaskItem key={task.id} task={task} />)}
                </tbody>
            </table>
        </div>
    )
}

export default ToDoLists