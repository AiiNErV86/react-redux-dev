'use client';

import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { ITask } from '../../../types/tasks';
import Modals from './Modals';
import { FormEventHandler, useState } from 'react';
import { useRouter } from 'next/navigation';
import { deleteTodo, editTodo } from '../../../api';

interface TaskProps {
    task: ITask;
}

const TaskItem: React.FC<TaskProps> = ({ task }) => {

    const route = useRouter();

    const [modalEditStaus, setModalEditStatus] = useState<boolean>(false);

    const [modalDeletedStaus, setModalDeletedStatus] = useState<boolean>(false);

    const [taskEdit, setTaskToEdit] = useState<String>(task.name);

    const handleSubmitEditTask: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        await editTodo({
            id: task.id,
            name: taskEdit.toString(),
            completed: false
        });

        setTaskToEdit("");

        setModalEditStatus(false);

        route.refresh();
    }

    const handleDeleteTask = async (id: string) => {

        await deleteTodo(id);

        setModalDeletedStatus(false);

        route.refresh();
    }

    return (
        <tr key={task.id}>
            <td className='w-full'>
                {task.name}
            </td>
            <td className='flex gap-5'>
                <FiEdit onClick={() => setModalEditStatus(true)} cursor='pointer' className='text-blue-500' />
                <Modals modalOpen={modalEditStaus} setModalStatus={setModalEditStatus}>
                    <form onSubmit={handleSubmitEditTask}>
                        <h3 className='font-bold text-lg'>Edit Task</h3>
                        <div className='modal-action'>
                            <input
                                type='text'
                                placeholder='Type here'
                                className='input input-bordered w-full'
                                value={taskEdit}
                                onChange={(e) => setTaskToEdit(e.target.value)}
                            />

                            <button type='submit' className='btn'>
                                submit
                            </button>
                        </div>
                    </form>
                </Modals>
                <FiTrash2 onClick={() => setModalDeletedStatus(true)} cursor='pointer' className='text-red-500' />
                <Modals modalOpen={modalDeletedStaus} setModalStatus={setModalDeletedStatus}>
                    <h3 className='text-lg'>Are you sure, you want to delete this task?</h3>
                    <div className='modal-action'>
                        <button onClick={() => handleDeleteTask(task.id)} className='btn btn-error'>Yes</button>
                            
                    </div>
                </Modals>
            </td>
        </tr>
    )
}

export default TaskItem