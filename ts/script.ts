const humanName: string = 'John';
const greet:string = `Hello, ${humanName}`;

const humanAge: number = 35;

let isAdult: boolean = true;

const humanErrors: null = null;

const humanHobbies: undefined = undefined;

let humanHabits: Array<any> = ['swimming', 350, true];

const askHuman = ():void => {
    console.log('How old are you?')
}

const humanInfo:[number, string, boolean] = [35, 'New York', false];

const test = 'Error 404'
const error = (test:string):never => {
    throw new Error (test)
}

function isError(value: unknown): boolean {
    return value instanceof Error;
}

function humanSummary(human: {name:string, age:number}) {
    return `My name is ${human.name}, I am ${human.age} years old`
}

interface Person {
    name: string;
    age: number;
    hobbies: Array<string>;
}

const person: Person = {
    name: 'Jack',
    age: 24,
    hobbies: ['swim', 'run', 'eat']
}

const sumNumbers = (a: number, b: number): number => {
    return a + b;
}


enum DaysOfWeek {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

const currentDay: DaysOfWeek = DaysOfWeek.Saturday;