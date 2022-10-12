import { v4 as uuid } from 'uuid';
class Task {
    id = '';
    desc = '';
    completedIn = null;

    constructor(desc) {
        this.id = uuid();
        this.desc = desc;
        this.completedIn = null;
    }
}

export default Task;
