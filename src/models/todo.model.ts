import { Ref, ref } from 'vue';

export class Todo {
  title = '';
  complete = false;
}

export class TodoListModel {
  todoList: Ref<Todo[]> = ref([
    { title: 'Task1', complete: false },
    { title: 'Task2', complete: true },
  ]);

  getTodoList(): Ref<Todo[]> {
    return this.todoList;
  }

  addTodo(todo: Todo) {
    this.todoList.value.push(todo);
  }

  removeTodo(todo: Todo) {
    this.todoList.value = this.todoList.value.filter((x: Todo) => x !== todo);
  }
}
