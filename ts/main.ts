import { Book } from './book.ts';
import { getLastItem } from './generics.ts';
import { processInput } from './union.ts';

const book = new Book('Harry Potter', 'J.K. Rowling', 2001);
book.getInfo();

const array = [1, 2, 3, 4, 5];
const lastItem = getLastItem(array);
console.log(lastItem);

const numResult = processInput(5);
console.log('Processed number:', numResult);

const strResult = processInput('Hello');
console.log('Processed string:', strResult);
