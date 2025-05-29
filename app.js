const { type } = require("os");
const yargs = require("yargs");
const {
  saveContact,
  listContact,
  detailContact,
  deleteContact,
} = require("./contacts");

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
yargs.demandCommand();

yargs.command({
  command: "list",
  describe: "menampilkan isi kontak",
  handler() {
    listContact();
  },
});

yargs.command({
  command: "detail",
  describe: "menampilkan detail kontak",
  builder: {
    name: {
      describe: "nama lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    detailContact(argv.name);
  },
});

yargs.command({
  command: "delete",
  describe: "menghapus kontak",
  builder: {
    name: {
      describe: "nama lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    deleteContact(argv.name);
  },
});

yargs.parse();
