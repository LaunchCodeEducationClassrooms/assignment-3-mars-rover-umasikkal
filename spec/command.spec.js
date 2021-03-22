const Command = require('../command.js');
const Message = require('../message.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function() {

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
   expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  {
    message: 'Command type required.'
}
});
  it("constructor sets command type", function() {
    //let commandType = 'STATUS_CHECK';
    let Command = [new Command('STATUS_CHECK'),new command ('MOVE',20)];
    //assert.strictEqual(commandType, command.commandType);
    expect(command.commandType).toEqual('STATUS_CHECK');
  });

  it("constructor sets a value passed in as the 2nd argument", function() {
    let commandType ='MOVE';

    let Value = 20;

    let command = new Command('MOVE', 20);
    expect(command.value).toEqual(20);
  });
});
