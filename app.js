const {askQuestion, saveContact} = require("./contacts")

const main = async () => {
  const name = await askQuestion("masukkan nama anda: ");
  const email = await askQuestion("masukkan email anda: ");
  const phoneNumber = await askQuestion("masukkan no hp anda: ");

  saveContact(name, email, phoneNumber)
};
main();
