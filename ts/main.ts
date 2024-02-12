import { addContact, addGroup, addContactToGroup,
    removeContactFromGroup, displayContacts } from './contactsManager';

// Створення контактів
const contact1 = addContact('John Doe', '123456789');
const contact2 = addContact('Jane Smith', '987654321', 'jane@example.com');

// Створення груп
const group1 = addGroup('Friends');
const group2 = addGroup('Family');

// Додавання контактів до груп
addContactToGroup(contact1, group1);
addContactToGroup(contact2, group1);
addContactToGroup(contact2, group2);

// Видалення контакту з групи
removeContactFromGroup(contact1, group1);

// Відображення контактів в групі
displayContacts(group1);
displayContacts(group2);