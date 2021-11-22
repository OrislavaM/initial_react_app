import React from "react";
import ReactDOM from "react-dom";
import Todo from "./components/Todo";

const App = () => {
    return (
        <div>
            <div>Your todos</div>
            <Todo title="Learn React" date="01-01-2022" />
            <Todo title="Learn Redux" date="01-02-2022" />
            <Todo title="Learn Angular" date="01-05-2023" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
