'use client';
import { useState } from "react";

import { FiPlus } from "react-icons/fi";
import Modals from "./Modals";
import { addTodo } from "../../../api";
import { useRouter } from "next/navigation";

import { v4 as uuidv4 } from 'uuid';

const todoForm = () => {
    const route = useRouter();

    const [value, setInput] = useState<String>("");

    const [modalStaus, setModalStatus] = useState<boolean>(false);

    const handleSubmit = async (e: React.ChangeEvent<any>) => {
        e.preventDefault();

        setModalStatus(true);

        await addTodo({
            id: uuidv4(),
            name: value.toString(),
            completed: false
        });

        route.refresh();
    }
    
    return (
        <form className='ToDoForm'>
            <input type="text" className="todo-input" placeholder='Task...' onChange={(e) => { setInput(e.target.value) }} />
            <button type='submit' className="btn"><FiPlus size={14} onClick={handleSubmit} /></button>

            <Modals modalOpen={modalStaus} setModalStatus={setModalStatus}>Task added</Modals>
        </form>
    )
}

export default todoForm