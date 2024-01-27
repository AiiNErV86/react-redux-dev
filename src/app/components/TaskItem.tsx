import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { ITask } from '../../../types/tasks';

interface TaskProps {
    task: ITask;
}

const TaskItem: React.FC<TaskProps> = ({ task }) => {
    return (
        <tr key={task.id}>
            <td className='w-full'>
                {task.name}
                </td>
            <td className='flex gap-5'>
                <FiEdit cursor='pointer' className='text-blue-500'/>
                <FiTrash2 cursor='pointer' className='text-red-500'/>
            </td>
        </tr>
    )
}

export default TaskItem