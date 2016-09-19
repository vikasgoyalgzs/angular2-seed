import {Component} from '@angular/core';
import {Http} from '@angular/http';
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
  http: Http;

  constructor(todoStore: TodoStore, http: Http) {
    this.http = http;
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

  import () {
    this.http.get('app/todos/todos.json').subscribe(res => this.todos.push(...res.json()))
  }

  markAllCompleted () {
    var filtedIdx = [];
    this.todos.forEach((todo, i) => {
      if (todo.author === "Vikas Goyal") {
        let todo = this.todos[i];
        let newToDo = new Todo('');
        todo.completed = true;
        this.todos[i] = Object.assign(newToDo, todo);
      }
    });
  }
}
