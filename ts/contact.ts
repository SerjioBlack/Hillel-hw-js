export interface Contact {
    name: string;
    phone: string;
    email?: string;
}

export class ContactImpl implements Contact {
    constructor(public name: string, public phone: string, public email?: string) {}
}