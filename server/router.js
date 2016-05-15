var queueController = require('./queue/queueController');

module.exports = function (router) {
  router.post('/schedule', queueController.postMessage);
};
