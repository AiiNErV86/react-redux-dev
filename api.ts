import { ITask } from "./types/tasks";

const baseURL = "http://localhost:3001";

export const getAllTodos = async (): Promise<ITask> =>{
    const res = await fetch(`${baseURL}/task`, { cache: 'no-store' });
    const todos = await res.json();

    return todos;
}

export const addTodo =async (todo:ITask): Promise<ITask> => {
    const res = await fetch(`${baseURL}/task`, {
        method: 'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(todo)
    });

    const newTodo = await res.json();

    return newTodo;
}

export const editTodo =async (todo:ITask): Promise<ITask> => {
    const res = await fetch(`${baseURL}/task/${todo.id}`, {
        method: 'PUT',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(todo)
    });

    const updateTodo = await res.json();

    return updateTodo;
}

export const deleteTodo = async (id: string): Promise<void> => {
    await fetch(`${baseURL}/tasks/${id}`, {
      method: 'DELETE',
    })
  }