import { createReducer, on } from "@ngrx/store";
import { addTodo, toggleTodo, deleteTodo } from "./todo.actions";
import { TodoState } from "./todo.model";

const initialState: TodoState = {
    todos:[]
};

export const todoReducer = createReducer(
    initialState,
    on(addTodo, (state, {id, title})=>({
        ...state,
        todos:[...state.todos, {id, title, completed:false}]
    })),
    on(toggleTodo, (state, {id})=>({
        ...state,
        todos: state.todos.map(todo=>
            todo.id===id?{...todo, completed: !todo.completed}:todo
        )
    })),
    on(deleteTodo, (state, {id})=>({
        ...state,
        todos: state.todos.filter(todo=>todo.id!=id)
    }))
);
