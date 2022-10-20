import inquirer from 'inquirer';
import 'colors';
import { MenuQuestions, pauseQuestion } from './helpers/questions.js';

const inquirerMenu = async () => {
    console.clear();
    console.log('====================='.magenta);
    console.log('  Select an option'.white);
    console.log('=====================\n'.magenta);

    const { option } = await inquirer.prompt(MenuQuestions);
    return option;
};

const PauseMenu = async () => {
    await inquirer.prompt(pauseQuestion);
};

const readInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'msg',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Enter a valid value';
                }
                return true;
            },
        },
    ];

    const { msg } = await inquirer.prompt(question);
    return msg;
};

const showDeleteMenu = async (tasks) => {
    const choices = tasks.map((task, index) => {
        const id = `${index + 1}.`.green;

        return {
            value: task.id,
            name: `${id} ${task.desc}`,
        };
    });

    choices.unshift({ value: '0', name: '0.'.green + 'Cancel' });

    const question = {
        type: 'list',
        name: 'id',
        message: 'Delete',
        choices,
    };
    const { id } = await inquirer.prompt(question);
    return id;
};

const showChecklist = async (tasks) => {
    const choices = tasks.map((task, index) => {
        const id = `${index + 1}.`.green;

        return {
            value: task.id,
            name: `${id} ${task.desc}`,
            checked: task.completedIn ? true : false,
        };
    });

    const question = {
        type: 'checkbox',
        name: 'ids',
        message: 'Select',
        choices,
    };
    const { ids } = await inquirer.prompt(question);
    return ids;
};

const confirmQuestion = async (message) => {
    const question = {
        type: 'confirm',
        name: 'ok',
        message,
    };
    const { ok } = await inquirer.prompt(question);
    return ok;
};

export {
    inquirerMenu,
    PauseMenu,
    readInput,
    showDeleteMenu,
    confirmQuestion,
    showChecklist,
};
