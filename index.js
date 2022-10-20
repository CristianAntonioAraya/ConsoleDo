import { readDataInDB, saveDataInDB } from './src/helpers/dbInteract.js';
import {
    confirmQuestion,
    inquirerMenu,
    PauseMenu,
    readInput,
    showChecklist,
    showDeleteMenu,
} from './src/inquirer.js';
import Tasks from './src/models/tasks.js';

console.clear();

const main = async () => {
    let opt = '';
    const taskList = new Tasks();

    const dbTask = readDataInDB();

    if (dbTask) {
        taskList.loadTaskFromArray(dbTask);
    }

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const description = await readInput('Descripcion: ');
                taskList.createTask(description);

                break;
            case '2':
                taskList.listAllTasks();
                break;
            case '3':
                taskList.listTasksByState(true);
                break;
            case '4':
                taskList.listTasksByState(false);
                break;
            case '5':
                const ids = await showChecklist(taskList.arrayList);
                taskList.toggleCompletedTask(ids);
                break;
            case '6':
                const id = await showDeleteMenu(taskList.arrayList);
                if (id !== '0') {
                    const confirmDelete = await confirmQuestion(
                        'Are you sure you want to delete the task?'
                    );
                    if (confirmDelete) {
                        taskList.deleteTask(id);
                        console.log('Task Deleted');
                    }
                }
                break;
        }

        saveDataInDB(taskList.arrayList);

        await PauseMenu();
    } while (opt !== '0');
};
main();
