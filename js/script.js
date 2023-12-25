'use strict';

(function () {
  const CONSTANTS = Object.freeze({
    todoFormSelector: "#todoForm",
    todoContainerSelector: "#todoItems",
    dataKey: "formData",
  });

  const controller = {
    formHandler(e) {
      e.preventDefault();
      e.stopPropagation();
      const { target } = e;
      const data = Array.from(
          target.querySelectorAll("input, textarea")
      ).reduce((acc, item) => {
        acc[item.name] = item.value;
        return acc;
      }, {});

      const savedData = model.save(data);
      if (savedData) {
        view.renderElement(savedData);
        view.resetForm();
      }
    },

    removeTodoItemHandler(e) {
      e.stopPropagation();
      const { target } = e;
      if (!target.hasAttribute("data-remove-btn")) return;
      const todoId = +target
          .closest("[data-todo-item]")
          .getAttribute("data-todo-item");
      const removedElement = !!model.removeElementById(todoId);

      if (removedElement) {
        view.removeElement(todoId);
        return;
      }
      alert("Cannot remove element" + removedElement.title);
    },

    loadedHandler() {
      model.initId();
      const form = document.querySelector(CONSTANTS.todoFormSelector);
      form.addEventListener("submit", this.formHandler);

      model.get().forEach((item) => {
        view.renderElement(item);
      });

      const todoContainer = document.querySelector(
          CONSTANTS.todoContainerSelector
      );
      todoContainer.addEventListener("click", this.removeTodoItemHandler);
    },

    init() {
      this.formHandler = this.formHandler.bind(this);
      this.loadedHandler = this.loadedHandler.bind(this);
      this.removeTodoItemHandler = this.removeTodoItemHandler.bind(this);

      document.addEventListener("DOMContentLoaded", this.loadedHandler);
    },
  };

  const view = {
    renderElement(data) {
      const template = this.createTemplate(data);
      this.renderTodoItem(template);
    },

    renderTodoItem(elementToRender) {
      const todoContainer = document.querySelector("#todoItems");
      todoContainer.prepend(elementToRender);
      return elementToRender;
    },

    createTemplate(data) {
      const wrapper = document.createElement("div");
      wrapper.className = "col-4";
      wrapper.setAttribute("data-todo-item", data.id);

      const taskWrapper = document.createElement("div");
      taskWrapper.className = "taskWrapper";
      wrapper.appendChild(taskWrapper);

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "btn btn-sm btn-danger";
      deleteBtn.innerText = "X";
      deleteBtn.setAttribute("data-remove-btn", "");
      taskWrapper.appendChild(deleteBtn);

      const taskHeading = document.createElement("div");
      taskHeading.className = "taskHeading";
      taskHeading.innerHTML = data.title;
      taskWrapper.appendChild(taskHeading);

      const taskDescription = document.createElement("div");
      taskDescription.className = "taskDescription";
      taskDescription.innerHTML = data.description;
      taskWrapper.appendChild(taskDescription);

      return wrapper;
    },

    resetForm() {
      document.querySelector(CONSTANTS.todoFormSelector).reset();
    },

    removeElement(todoId) {
      document.querySelector(`[data-todo-item='${todoId}']`).remove();
    },
  };

  const model = {
    _currentId: 0,
    _data: [],

    get currentId() {
      return this._currentId;
    },

    set currentId(value) {
      this._currentId = value;
    },

    get data() {
      return this._data;
    },

    set data(value) {
      this._data = value;
    },

    save(data) {
      this.currentId++;
      const dataCopy = { id: this.currentId, ...data };
      this.data.push(dataCopy);

      try {
        localStorage.setItem(CONSTANTS.dataKey, JSON.stringify(this.data));
        return this.data.at(-1);
      } catch (error) {
        return false;
      }
    },

    get() {
      const savedData = JSON.parse(localStorage.getItem(CONSTANTS.dataKey));
      return savedData ? savedData : [];
    },

    removeElementById(todoId) {
      const index = this.data.findIndex(({ id }) => {
        return todoId === id;
      });
      const [removedElement] = this.data.splice(index, 1);
      try {
        localStorage.setItem(CONSTANTS.dataKey, JSON.stringify(this.data));
        return removedElement;
      } catch (error) {
        console.log("Cannot remove element", removedElement);
        return false;
      }
    },

    initId() {
      const items = this.get();
      if (!items.length) return;
      this.currentId = +items.at(-1).id;
    },
  };

  controller.init();
})();
