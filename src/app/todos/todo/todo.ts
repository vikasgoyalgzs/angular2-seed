import {Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit} from '@angular/core';
import {TodoStore, Todo as TodoModel} from './../todo-store';

@Component({
  selector: 'todo',
  templateUrl: './todo.html',
  styleUrls: ['./todo.css'],
  providers: [TodoStore],
  changeDetection: ChangeDetectionStrategy.Default
})
export class Todo implements AfterViewInit {
  editing: Boolean;
  @Input() todo: TodoModel;
  cd: ChangeDetectorRef;

  constructor(cd: ChangeDetectorRef) {
    this.cd = cd;
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

  ngAfterViewInit () {
    // this.cd.detach();
    // setInterval(() => {
    //   this.cd.detectChanges();
    // }, 1000);
  }
}
