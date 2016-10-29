'use strict';
const Messenger = require('modules/messenger');
const telegram = new Messenger();

telegram.listen().then(() => { console.log('Listening'); });