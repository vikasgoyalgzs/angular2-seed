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
  newTodo: Todo;
  todos: Array<Todo>;

  constructor(todoStore: TodoStore) {
    this.todoStore = todoStore;
    this.newTodo = new Todo('');
    this.todos = this.todoStore.todos;
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
    if (this.newTodo.title.trim().length) {
      this.todoStore.add(this.newTodo);
      this.newTodo = new Todo('');
    }
  }

  markAllCompleted () {
    this.todos.forEach(todo => {
      if (todo.author === "Vikas Goyal") {
        todo.completed = true;
      }
    });

  }
}
