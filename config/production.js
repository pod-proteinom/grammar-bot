'use strict';

module.exports = {
	host: 'grammar-bot.herokuapp.com',
	port: process.env.PORT || 443,
	externalUrl: process.env.CUSTOM_ENV_VARIABLE || ''
}