"use strict";
(() => {
    ;
    class Reminder {
        constructor(description, date, notifications) {
            this.id = '';
            this.dateCreated = new Date();
            this.dateUpdated = new Date();
            this.description = '';
            this.date = new Date();
            this.notifications = ['EMAIL'];
            this.description = description;
            this.date = date;
            this.notifications = notifications;
        }
        render() {
            return JSON.stringify(this);
        }
    }
    class Todo {
        constructor(description) {
            this.id = '';
            this.dateCreated = new Date();
            this.dateUpdated = new Date();
            this.description = '';
            this.done = false;
            this.description = description;
        }
        render() {
            return JSON.stringify(this);
        }
    }
    const todo = new Todo('Criado com a classe');
    const reminder = new Reminder('Criado com a classe', new Date(), ['EMAIL']);
    const taskView = {
        render(tasks) {
            const tasksList = document.getElementById('tasksList');
            while (tasksList === null || tasksList === void 0 ? void 0 : tasksList.firstChild) {
                tasksList.removeChild(tasksList.firstChild);
            }
            tasks.forEach((task) => {
                const li = document.createElement('LI');
                const textNode = document.createTextNode(task.render());
                li.appendChild(textNode);
                tasksList === null || tasksList === void 0 ? void 0 : tasksList.appendChild(li);
            });
        },
    };
    const TaskController = (view) => {
        var _a;
        const tasks = [todo, reminder];
        const handleEvent = (event) => {
            event.preventDefault();
            view.render(tasks);
        };
        (_a = document.getElementById('taskForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', handleEvent);
    };
    TaskController(taskView);
})();
