//this file is used to test the shapes.js file
const { Triangle, Circle, Square } = require('./shapes');

test('Triangle should render correctly', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('Circle should render correctly', () => {
    const shape = new Circle();
    shape.setColor('red');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
});

test('Square should render correctly', () => {
    const shape = new Square();
    shape.setColor('green');
    expect(shape.render()).toEqual('<rect x="50" y="50" width="150" height="150" fill="green" />');
});