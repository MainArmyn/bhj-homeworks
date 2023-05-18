class TodoList {
    constructor(taskListClass,inputClass,buttonClass) {
        this.container = document.querySelector(taskListClass);
        this.input = document.querySelector(inputClass);
        this.button = document.querySelector(buttonClass);
        this.button.type = "button";
        this.Storage = window.localStorage;
        this.key;
        this.InputText();
        this.ButtonInput();
    }


    

ClearInput() {
    this.input.value = '';
}

InitialTask(task) {
    let aTask = task.querySelector(".task__remove");
    aTask.onclick = () => {
        this.removeTask(task);
        return false;
    } 
}

    InputText() {
        this.input.addEventListener("keydown", function(e){
            if (e.key==="Enter") {
                this.addTask();
            }
        });
    }

    ButtonInput() {
        this.button.addEventListener("click",e => {
            this.addTask();
        })
    }

    removeTask(el) {
        this.container.removeChild(el);
    }


    addTask() {
        let messageText = this.input.value;
        let message = document.createElement("div");
        message.className = "task";
        message.innerHTML = `<div class="task__title">${messageText}
      </div>
      <a href="#" class="task__remove">&times;</a>`;
      this.InitialTask(message);
      this.container.appendChild(message);
      this.ClearInput();
    }

}
new TodoList(".tasks__list",".tasks__input",".tasks__add");