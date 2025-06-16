import { createAction, props } from "@ngrx/store";
import { Todo } from "./todo.model";

export const addTodo = createAction('[Todo] Add', props<{ id:string, title: string}>());
export const toggleTodo = createAction('[Todo] Toggle', props<{id:string}>());
export const deleteTodo = createAction('[Todo] Delete', props<{id:string}>());