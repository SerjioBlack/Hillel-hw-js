class TaskManager {
  constructor() {
    this.tasks = new Map();
  }

  addTask(id, description) {
    if (this.tasks.has(id)) {
      console.log('Помилка: Завдання з таким ID вже існує.');
    } else {
      this.tasks.set(id, description);
      console.log('Завдання успішно додано.');
    }
  }

  removeTask(id) {
    if (this.tasks.has(id)) {
      this.tasks.delete(id);
      console.log('Завдання успішно видалено.');
    } else {
      console.log('Помилка: Завдання з таким ID не існує.');
    }
  }

  findTask(id) {
    if (this.tasks.has(id)) {
      return this.tasks.get(id);
    }
    return 'Помилка: Завдання не знайдено.';
  }

  displayTasks() {
    console.log('Список завдань:');
    this.tasks.forEach((description, id) => {
      console.log(`ID: ${id}, Опис: ${description}`);
    });
  }

  updateTaskDescription(id, newDescription) {
    if (this.tasks.has(id)) {
      this.tasks.set(id, newDescription);
      console.log('Опис завдання успішно оновлено.');
    } else {
      console.log('Помилка: Завдання з таким ID не існує.');
    }
  }
}

const manager = new TaskManager();

manager.addTask(1, 'Зробити покупки');
manager.addTask(2, 'Відправити листа');
console.log(manager.findTask(1));

manager.updateTaskDescription(1, 'Зробити покупки в супермаркеті');
manager.displayTasks();
manager.removeTask(2);
manager.displayTasks();
