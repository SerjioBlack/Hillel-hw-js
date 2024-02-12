export class Book {
    constructor(public title: string, public author: string, public publishedYear: number) {}

    getInfo(): void {
        console.log(`Title: ${this.title}, Author: ${this.author},
Published Year: ${this.publishedYear}`);
    }
}