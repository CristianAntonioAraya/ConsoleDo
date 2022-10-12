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

export { inquirerMenu, PauseMenu, readInput };
