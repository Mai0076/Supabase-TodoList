import Image from "next/image";
import TodoApp from "../../compoments/TodoApp";
//import TodoList from "../../compoments/TodoList";

export default function Home() {
  return (
    <section className="flex justify-center items-center h-screen">
      <TodoApp />
    </section>
  );
}
