<template>
  <q-page class="row items-center justify-evenly">
    <pre>
    {{ newTodoComplete }}
    {{ newTodoTitle }}
    </pre>
    <div class="colums text-center">
      <div>
        <div>
          <QInput v-model="newTodoTitle"></QInput>
          <QToggle v-model="newTodoComplete"></QToggle>
        </div>

        <div>
          <QBtn>ADD</QBtn>
        </div>
      </div>

      <div>
        <QList>
          <q-item clickable v-ripple v-for="todo in todoListModel.todoList.value" :key="todo.title">
            <q-item-section>
              <q-item-label>{{ todo.title }}</q-item-label>
              <q-item-label caption>{{ todo.complete }}</q-item-label>
            </q-item-section>
          </q-item>
        </QList>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { QToggle, QInput, QBtn } from 'quasar';
import { Ref, ref } from 'vue';
import { TodoListModel } from 'src/models/todo.model';

const newTodoTitle: Ref<string> = ref('');
const newTodoComplete: Ref<boolean> = ref(false);

const todoListModel = new TodoListModel();
</script>
