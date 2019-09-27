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
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

yargs.command({
    command: "remove",
    describe: "Remove a new note",
    handler: function(argv) {
        console.log("Removing note", argv);
    }
});

yargs.command({
    command: "read",
    describe: "Read a note",
    handler: function() {
        console.log("Reading note")
    }
});

yargs.command({
    command: "list",
    describe: "List all notes",
    handler: function() {
        console.log("Listing all notes")
    }
});

yargs.parse();