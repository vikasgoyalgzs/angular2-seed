import {Component, Input} from '@angular/core';
import {TodoStore} from './../todo-store';

@Component({
  selector: 'todo',
  templateUrl: './todo.html',
  styleUrls: ['./todo.css'],
  providers: [TodoStore]
})
export class Todo {
  completed: Boolean;
  editing: Boolean;
  @Input() title: string;

  constructor() {

  }

  toggleCompletion(todo: Todo) {
    this.completed = !this.completed;
  }

  editTodo() {
    this.editing = true;
  }

  stopEditing() {
    this.editing = false;
  }

  updateEditingTodo() {
    this.title = this.title.trim();
    this.editing = false;

    if (this.title.length === 0) {
      //return this.todoStore.remove(todo);
    }
  }
}
