const { type } = require("os");
const yargs = require("yargs");
const { saveContact } = require("./contacts");

yargs.command({
  command: "add",
  describe: "menambahkan kontak baru",
  builder: {
    name: {
      describe: "nama lengkap",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "email",
      demandOption: false,
      type: "string",
    },
    phoneNumber: {
      describe: "nomor hp",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    const contact = {
      name: argv.name,
      email: argv.email,
      phoneNumber: argv.phoneNumber,
    };
    saveContact(argv.name, argv.email, argv.phoneNumber);
  },
});

yargs.parse();
