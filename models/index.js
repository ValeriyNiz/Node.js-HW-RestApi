const path = require("path");
const fs = require("fs").promises;
const { nanoid } = require("nanoid");

const contactsPath = path.resolve("models", "contacts.json");

async function updateContacts(contacts) {
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

async function listContacts() {
    const contacts = JSON.parse(await fs.readFile(contactsPath, "utf-8"));
    return contacts;
}

async function getById(id) {
    const contact = JSON.parse(await fs.readFile(contactsPath, "utf-8")).find(
      (contact) => contact.id === id
    );
    if (!contact) {
      return null;
    }
    return contact;
}

async function addContact(name, email, phone) {
    const contacts = await listContacts();
    const newContact = { id: nanoid(), name, email, phone };
    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
}

async function updateContact(id, name, email, phone) {
    const contacts = await listContacts();
    const contact = contacts.find((contact) => contact.id === id);
    if (!contact) {
      return null;
    }
    contact.name = name;
    contact.email = email;
    contact.phone = phone;
    await updateContacts(contacts);
    return contact;
}

async function removeContact(id) {
    const contacts = await listContacts();
    const index = contacts.findIndex((contact) => contact.id === id);
    if (index === -1) {
      return null;
    }
    const [removedContact] = contacts.splice(index, 1);
    await updateContacts(contacts);
    return removedContact;
}

module.exports = {
  listContacts,
  getById,
  removeContact,
  addContact,
  updateContact,
};