imdone-echo-plugin
==================

Example plugin for iMDone that logs to the console using debug

Getting started with iMDone plugins
----
### Overview
iMDone loads plugins that are mentioned in the `.imdone/config.json` file in your project directory.  It looks for them in your project directory under `node_modules` then in your home directory under `node_modules`, then by name.  So if you include a `plugin.js` that implements the plugin interface in your project, you can load it directly or install one using `npm install -g`.

### Install
1. `npm install -g imdone-echo-plugin`
2. `cd /my/project/folder` One that already has a `.imdone/config` or create it.
3. `export DEBUG=imdone:echo`
4. `imdone -o`

### Plugin interface
All plugins should expect a config and repo.  Take a look at this example config.  The plugins hash contains the plugin package name or path with it's config hash as the value.  Repo is the [Repository](https://github.com/imdone/imdone-core/blob/master/lib/repository.js) object for the project.

```json
{
  "exclude": [
    "^(node_modules|bower_components|\\.imdone|target|build)\\/?|\\.(git|svn)|\\~$|\\.(jpg|png|gif|swp|ttf|otf)$"
  ],
  "watcher": true,
  "lists": [
    {
      "name": "TODO",
      "hidden": false
    },
    {
      "name": "DOING",
      "hidden": false
    },
    {
      "name": "DONE",
      "hidden": false
    }
  ],
  "marked": {
    "gfm": true,
    "tables": true,
    "breaks": false,
    "pedantic": false,
    "sanitize": true,
    "smartLists": true,
    "langPrefix": "language-"
  },
  "plugins": {
    "imdone-echo-plugin": {
      "name": "imdone:echo"
    }
  }
}
```  

After starting iMDone and adding a project, you will find the `.imdone/config.json` in the project directory.