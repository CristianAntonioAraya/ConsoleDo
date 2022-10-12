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

    createTask(desc) {
        const task = new Task(desc);

        this._list[task.id] = task;
    }
}

export default Tasks;
