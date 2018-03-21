var request = require('request');

exports.handler = function(event, context, callback) {
    console.log("received event:", JSON.stringify(event, null, 2));
	request(`https://api-ssl.bitly.com/v3/shorten?access_token=${process.env.API_KEY}&longUrl=${event.url}`, (err, res, body) => {
		callback(null, JSON.parse(body).data.url)
	});
};

