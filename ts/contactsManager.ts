import { Contact, ContactImpl } from './contact';
import { Group, GroupImpl } from './group';

export function addContact(name: string, phone: string, email?:
    string): Contact {
    return new ContactImpl(name, phone, email);
}

export function addGroup(name: string): Group {
    return new GroupImpl(name);
}

export function addContactToGroup(contact: Contact, group: Group): void {
    group.contacts.push(contact);
}

export function removeContactFromGroup(contact: Contact, group: Group): void {
    group.contacts = group.contacts.filter(c => c !== contact);
}

export function displayContacts(group: Group): void {
    console.log(`Contacts in group '${group.name}':`);
    group.contacts.forEach(contact => {
        console.log(`Name: ${contact.name}, Phone: ${contact.phone},
Email: ${contact.email || 'N/A'}`);
    });
}