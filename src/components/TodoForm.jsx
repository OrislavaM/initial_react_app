import { useState } from "react";

const priorities = ["highest", "high", "medium", "low", "lowest"];

const TodoForm = ({ saveTodo }) => {
    const [todoTitle, setTodoTitle] = useState("");

    const [todoPriority, setTodoPriority] = useState("");
    const [todoDescription, setTodoDescription] = useState("");

    const onSubmit = () => {
        const todo = {
            title: todoTitle,
            priority: todoPriority,
            description: todoDescription,
        };
        saveTodo(todo);
        setTodoTitle("");
        setTodoPriority("");
        setTodoDescription("");
    };

    return (
        <form>
            <label htmlFor="todo">
                Todo:
                <input
                    name="todo"
                    type="text"
                    value={todoTitle}
                    onChange={(event) => setTodoTitle(event.target.value)}
                />
            </label>

            <br />

            <label htmlFor="priority">
                Priority:
                <select
                    onChange={(event) => setTodoPriority(event.target.value)}
                    name="priority"
                >
                    <option value=""></option>

                    {priorities.map((priority) => (
                        <option value={priority} key={priority}>
                            {priority}
                        </option>
                    ))}
                </select>
            </label>

            <br />
            <label htmlFor="description">
                <textarea
                    name="description"
                    id="description"
                    cols="20"
                    rows="5"
                    value={todoDescription}
                    onChange={(event) => setTodoDescription(event.target.value)}
                ></textarea>
            </label>
            <br />
            <button type="button" onClick={onSubmit}>
                Add
            </button>
        </form>
    );
};

export default TodoForm;
