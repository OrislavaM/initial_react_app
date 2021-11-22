import React, { useState } from "react";
import ReactDOM from "react-dom";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

// const todos = [
//     { title: "Learn React", date: "01-01-2022", id: 1 },
//     { title: "Learn Redux", date: "01-01-2022", id: 2 },
//     { title: "Learn Angular", date: "01-01-2022", id: 3 },
// ];

const App = () => {
    const [todos, setTodos] = useState([]);
    const saveTodo = (todo) => {
        // todos.push(todo);
        setTodos([...todos, todo]);
    };

    return (
        <>
            <TodoForm saveTodo={saveTodo} />
            <div>Your todos</div>
            {/* <Todo title="Learn React" date="01-01-2022" />
            <Todo title="Learn Redux" date="01-02-2022" />
            <Todo title="Learn Angular" date="01-05-2023" /> */}
            {todos.map(({ title, description, priority }, index) => (
                <Todo
                    title={title}
                    description={description}
                    priority={priority}
                    key={index}
                />
            ))}
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
