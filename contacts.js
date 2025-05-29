const fs = require("fs");
const validator = require("validator");

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const loadContact = () => {
  const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(fileBuffer);
  return contacts;
};

const saveContact = (name, email, phoneNumber) => {
  const contact = { name, email, phoneNumber };

  const contacts = loadContact();

  const duplicate = contacts.find(
    (contact) => contact.phoneNumber === phoneNumber
  );

  if (duplicate) {
    console.log("kontak sudah terdaftar");
    return false;
  }

  if (email) {
    if (!validator.isEmail(email)) {
      console.log("email tidak valid");
      return false;
    }
  }

  if (!validator.isMobilePhone(phoneNumber, "id-ID")) {
    console.log("nomor hp tidak valid");
    return false;
  }

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

  console.log("Terima kasih sudah memasukkan data.");
};

const listContact = () => {
  const contacts = loadContact();
  console.log("daftar kontak:");
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.name} - ${contact.phoneNumber}`);
  });
};

const detailContact = (name) => {
  const contacts = loadContact();

  const contact = contacts.find(
    (contact) => contact.name.toLowerCase() === name.toLowerCase()
  );

  if (!contact) {
    console.log(`${name} tidak ditemukan`);
    return false;
  }

  console.log(contact.name);
  console.log(contact.phoneNumber);
  if (contact.email) {
    console.log(contact.email);
  }
};

const deleteContact = (name) => {
  const contacts = loadContact();
  const newContacts = contacts.filter(
    (contact) => contact.name.toLowerCase() !== name.toLowerCase()
  );

  if (contacts.length === newContacts.length) {
    console.log(`${name} tidak ditemukan`);
    return false;
  }

  fs.writeFileSync("data/contacts.json", JSON.stringify(newContacts));

  console.log(`${name} berhasil dihapus`);
};

module.exports = { saveContact, listContact, detailContact, deleteContact };
