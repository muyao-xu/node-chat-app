var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
  	var from = 'Andrew';
  	var text = 'How are you';
  	var message = generateMessage(from, text);

  	expect(typeof message.createdAt).toBe('number');
  	expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		var from = 'Andrew';
		var latitude = 15;
		var longitude = 35;
		var url = 'https://www.google.com/maps?q=15,35';
		var message = generateLocationMessage(from, latitude, longitude);

		expect(typeof message.createdAt).toBe('number');
		expect(message).toInclude({from, url});

	})
})