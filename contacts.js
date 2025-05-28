const fs = require("fs");

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const saveContact = (name, email, phoneNumber) => {
  const contact = { name, email, phoneNumber };
  const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(fileBuffer);

  const duplicate = contacts.find(
    (contact) => contact.phoneNumber === phoneNumber
  );

  if (duplicate) {
    console.log("kontak sudah terdaftar");
    return false;
  }

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

  console.log("Terima kasih sudah memasukkan data.");
};

module.exports = {saveContact };
