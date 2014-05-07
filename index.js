var winston = require('winston'),
    path    = require('path');

module.exports = function(config, repo) {
  return new EchoPlugin(config, repo);
};

function EchoPlugin(config, repo) {
  var self = this;
  this.config = config;
  this.repo = repo;

  log     = require('debug')(this.config.name || 'imdone-echo-plugin');

  log("Logging events for: %s", repo.getId());
  
  //task.found, list.found, file.update and file.delete, file.processed
  
  this.repo.on('task.found', function(task) {
    log('%s: %j', 'task.found', task, {});
  });

  this.repo.on('list.found', function(list) {
    log('%s: %j', 'list.found', list.toConfig(), {});
  });

  this.repo.on('file.update', function(data) {
    log('%s: %j', 'file.update', data, {});
  });

  this.repo.on('file.delete', function(data) {
    log('%s: %j', 'file.delete', data, {});
  });

  this.repo.on('file.processed', function(data) {
    log('%s: %j', 'file.processed', data, {});
  });

  this.repo.on('initialized', function(data) {
    log("repo initialized");
  });

};

