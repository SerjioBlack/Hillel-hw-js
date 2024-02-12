import { Contact } from './contact';

export interface Group {
    name: string;
    contacts: Contact[];
}

export class GroupImpl implements Group {
    constructor(public name: string, public contacts: Contact[] = []) {}
}