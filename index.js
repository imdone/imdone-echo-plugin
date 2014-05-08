var path = require('path'),
    util = require('util');

module.exports = function(config, repo) {
  return new EchoPlugin(config, repo);
};

function EchoPlugin(config, repo) {
  var self = this;
  this.config = config;
  this.repo = repo;

  var name = this.config.name || "imdone-echo";

  var log = function() {
    var args = Array.prototype.slice.call(arguments);
    args[0] = name + ": " + args[0];
    util.debug(util.format.apply(util, args));
  }

  log("Logging events for: %s", repo.getId());
  
  //task.found, list.found, file.update and file.delete, file.processed
  
  this.repo.on('task.found', function(task) {
    log('%s: %j', 'task.found', task);
  });

  this.repo.on('list.found', function(list) {
    log('%s: %j', 'list.found', list.toConfig());
  });

  this.repo.on('file.update', function(data) {
    log('%s: %j', 'file.update', data);
  });

  this.repo.on('file.delete', function(data) {
    log('%s: %j', 'file.delete', data);
  });

  this.repo.on('file.processed', function(data) {
    log('%s: %j', 'file.processed', data);
  });

  this.repo.on('initialized', function(data) {
    log("repo initialized");
  });

};

