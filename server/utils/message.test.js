var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
  	var from = 'Andrew';
  	var text = 'How are you';
  	var message = generateMessage(from, text);

  	expect(typeof message.createdAt).toBe('number');
  	expect(message).toInclude({from, text});
  });
});