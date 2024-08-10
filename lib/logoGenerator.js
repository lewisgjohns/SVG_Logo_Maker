const fs = require('fs');
const Inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./shapes');

//this function will prompt the user for input
async function promptUser() {
    const answers = await Inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to 3 characters for the text:',
            validate: input => input.length <= 3 || 'Text must be 3 characters or less.'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (name or hex):'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (name or hex):'
        }
    ]);

    return answers;
}

//this function will create the SVG file
function createSVG(answers) {
    let shape;

    switch (answers.shape) {
        case 'Circle':
            shape = new Circle();
            break;
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Square':
            shape = new Square();
            break;
    }

    shape.setColor(answers.shapeColor);

    const svg = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="150" y="100" font-size="24" text-anchor="middle" fill="${answers.textColor}">
            ${answers.text}
        </text>
    </svg>
    `;

    fs.writeFileSync('logo.svg', svg);
    console.log('Generated logo.svg');
}

//this function will initialize the application
async function init() {
    const answers = await promptUser();
    createSVG(answers);
}

module.exports = init;