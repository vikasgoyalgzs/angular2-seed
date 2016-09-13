import {Component} from '@angular/core';
import {TodoStore, Todo} from './../todo-store';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.css'],
  providers: [TodoStore]
})
export class TodoList {
  todoStore: TodoStore;
  newTodoText = '';

  constructor(todoStore: TodoStore) {
    this.todoStore = todoStore;
  }


  cancelEditingTodo(todo: Todo) {
    todo.editing = false;
  }




  removeCompleted() {
    this.todoStore.removeCompleted();
  }



  remove(todo: Todo){
    this.todoStore.remove(todo);
  }

  addTodo() {
    if (this.newTodoText.trim().length) {
      this.todoStore.add(this.newTodoText);
      this.newTodoText = '';
    }
  }
}
