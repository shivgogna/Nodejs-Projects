const chalk = require("chalk");
const yargs = require("yargs");

const notes = require("./notes.js");

//Customize yargs verison
yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
    },
    body: {
        describe: "Note Body",
        demandOption: true,
        type: 'string'
    }
},
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

yargs.command({
    command: "remove",
    describe: "Remove a new note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: String
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: String
        }
    },
    handler: (argv) => {
        notes.readNotes(argv.title)
    }
});

yargs.command({
    command: "list",
    describe: "List all notes",
    builder: {
        title: {
            describe: 'Note list',
            type: String
        }
    },
    handler: (argv) => {
        notes.listNote(argv.title, argv.body)
    }
});

yargs.parse();