import 'colors';

const MenuQuestions = [
    {
        type: 'list',
        name: 'option',
        message: 'What you want to do?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Create Task`,
            },
            {
                value: '2',
                name: `${'2.'.green} List tasks`,
            },
            {
                value: '3',
                name: `${'3.'.green} List completed task(s)`,
            },
            {
                value: '4',
                name: `${'4.'.green} List pending Task(s)`,
            },
            {
                value: '5',
                name: `${'5.'.green} Complete Task(s)`,
            },
            {
                value: '6',
                name: `${'6.'.green} Delete Task(s)`,
            },
            {
                value: '0',
                name: `${'0.'.green} End Program`,
            },
        ],
    },
];

const pauseQuestion = [
    {
        type: 'input',
        name: 'enter',
        message: 'Press enter to continue',
    },
];



export { MenuQuestions, pauseQuestion  };
