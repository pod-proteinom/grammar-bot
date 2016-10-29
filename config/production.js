'use strict';

module.exports = {
	host: '0.0.0.0',
	port: process.env.PORT || 443,
	externalUrl: process.env.CUSTOM_ENV_VARIABLE || ''
}