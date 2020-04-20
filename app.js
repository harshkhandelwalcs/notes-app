// const fs = require('fs');

// //fs.writeFileSync('notes.txt','This file was created by node js!');

// fs.appendFileSync('notes.txt',"My name is Harsh khandelwal");


// ----------------------------------------------------------------------------------------

// const validator = require('validator');
const notes = require('./notes.js');
const chalk = require('chalk');
// const msg = getNotes();
// console.log(msg);
// console.log(chalk.bold.inverse.green('Success!'));
// console.log(validator.isURL('https//mead.io'));
const yargs = require('yargs');
//customize yargs version
yargs.version('1.1.0');

// const command = process.argv[2];
// console.log(process.argv);
// if(command === 'add'){
//     console.log('Adding note!');
// }else if(command === 'remove'){
//     console.log('Removing note!');
// }

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        // console.log('Title: ' + argv.title);
        // console.log('Body: ' + argv.body);
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            description: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        // console.log('Removing a new note' + argv.title);
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'List a new note',
    handler: () => {
        // console.log('Listing out all notes');
        notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a new note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        // console.log('Reading a note');
        notes.readNote(argv.title);
    }
})

yargs.parse();


