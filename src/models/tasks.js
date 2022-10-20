import Task from './task.js';

class Tasks {
    _list = {};
    constructor() {
        // {
        //     id: { id , desc, date},
        //     id2: { id2 , desc2, date2},
        // }
        this._list = {};
    }

    get arrayList() {
        const arrayOfTasks = [];
        //receive an object and return an array
        Object.keys(this._list).forEach((key) => {
            arrayOfTasks.push(this._list[key]);
        });
        return arrayOfTasks;
    }

    listAllTasks() {
        this.arrayList.map(({ desc, completedIn }, index) => {
            const id = `${index + 1}.`.green;
            const state = `${completedIn ? 'Done'.green : 'Pending'.red}`;

            console.log(id, desc, '::'.yellow, state);
        });
    }

    loadTaskFromArray(tasks) {
        tasks.forEach((task) => {
            this._list[task.id] = task;
        });
    }

    listTasksByState(state) {
        const filteredArray = this.arrayList.filter((task) => {
            if (state) {
                return task.completedIn ? task : null;
            }
            return task.completedIn ? null : task;
        });
        filteredArray.map(({ desc, completedIn }, index) => {
            const id = `${index + 1}.`.green;
            const state = `${completedIn ? completedIn.green : 'Pending'.red}`;

            console.log(id, desc, '::'.yellow, state);
        });
        return filteredArray;
    }

    createTask(desc) {
        const task = new Task(desc);

        this._list[task.id] = task;
    }

    deleteTask(id = '') {
        if (this._list[id]) {
            delete this._list[id];
        }
    }

    toggleCompletedTask(ids = []) {
        console.log('ids enviados:', ids);
        ids.forEach((id) => {
            //find task in task list
            const task = this._list[id];
            if (!task.completedIn) {
                task.completedIn = new Date().toISOString();
            }
        });

        this.arrayList.forEach((task) => {
            console.log('evaluando', task);
            if (!ids.includes(task.id)) {
                console.log('no incluida', task);
                this._list[task.id].completedIn = null;
            }
        });
    }
}

export default Tasks;
