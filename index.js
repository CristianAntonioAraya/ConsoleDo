import { inquirerMenu, PauseMenu, readInput } from './src/inquirer.js';
import Tasks from './src/models/tasks.js';

console.clear();

const main = async () => {
    let opt = '';
    const taskList = new Tasks();

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const description = await readInput('Descripcion: ');
                taskList.createTask(description);

                break;
            case '2':
                console.log(taskList.arrayList);
                break;
        }

        await PauseMenu();
    } while (opt !== '0');
};
main();
