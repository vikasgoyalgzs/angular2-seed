import {Component, Input, AfterViewChecked} from '@angular/core';
import {TodoStore, Todo as TodoModel} from './../todo-store';

@Component({
  selector: 'todo',
  templateUrl: './todo.html',
  styleUrls: ['./todo.css'],
  providers: [TodoStore]
})
export class Todo implements AfterViewChecked {
  editing: Boolean;
  @Input() todo: TodoModel;

  constructor() {

  }

  toggleCompletion(todo: Todo) {
    this.todo.completed = !this.todo.completed;
  }

  editTodo() {
    this.editing = true;
  }

  stopEditing() {
    this.editing = false;
  }

  updateEditingTodo(newTitle) {
    this.editing = false;
    this.todo.title = newTitle;

    if (newTitle.length === 0) {
      //return this.todoStore.remove(todo);
    }
  }

  ngAfterViewChecked () {
    console.log('todos checked');
  }
}
