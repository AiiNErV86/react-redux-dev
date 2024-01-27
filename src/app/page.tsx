import { getAllTodos } from "../../api";
import ToDoForm from "./components/ToDoForm";
import ToDoLists from "./components/ToDoLists";

import '@/app/utils/loginConstant.css'


export default async function Home() {

  const tasks = await getAllTodos();

  
  // console.log(tasks);

  return (
    // <main className={styles.main}>
    <main className='max-w mx-auto'>
      <div className='max-w-3xl mx-auto mt-4 bg-white'>
        <h2>TO DO LISTS</h2>
        <ToDoForm/>
        <ToDoLists tasks={tasks}/>
      </div>
      
    </main>
  );
}
