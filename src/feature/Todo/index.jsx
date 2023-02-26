
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";
import React, { useEffect, useState } from "react";

TodoFeture.propTypes = {};

function TodoFeture(props) {
    const initTodoList = [
        {
            id: 1,
            title: "Eat",
            status:"completed"
        },
        {
            id: 2,
            title: "Sleep",
            status:"new"
        },
        {
            id: 3,
            title: "Code",
            status:"completed"
        },
        {
            id: 4,
            title: "Watching Video",
            status:"new"
        },
    ];
    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState('all');

    const handleTodoClick = (todo,index) => {
        // clone current array to the new one
        const newTodoList = [...todoList];

        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new'
        }

        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        setFilterStatus('all');
    }
    const handleShowCompletedClick = () => {
        setFilterStatus('completed');
    }
    const handleShowNewClick = () => {
        setFilterStatus('new');
    }

    const renderedTodoList = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status)

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick}/>

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeture;
