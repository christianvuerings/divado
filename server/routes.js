module.exports = function(app) {

  var github;

  var initializeGitHub = function() {
    if (github) {
      return;
    }
    var GitHubApi = require('github');
    github = new GitHubApi({
      version: '3.0.0'
    });
    github.authenticate({
      type: 'oauth',
      key: process.env.GITHUB_CLIENT_ID,
      secret: process.env.GITHUB_CLIENT_SECRET
    });
  };
  setTimeout(initializeGitHub, 1);

  app.get('/api/github/mergedbranches/:repo/:username', function(req, res) {
    console.log(req.params.repo,req.params.username);

    var parseJson = function(json) {
      if (!json) {
        return {};
      } else {
        var response = {};
        for (var i = 0; i < json.length; i++) {
          response[json[i].name] = {
            name: json[i].name
          };
        }
        return response;
      }
    };
    github.repos.getFromUser({
      per_page: 100,
      type: 'owner',
      user: req.params.username
    }, function(err, res2) {
      var parsed = parseJson(res2);
      res.json(parsed);
    });

  });

  app.get('/api/github/repos/:username', function(req, res) {

    var parseJson = function(json) {
      if (!json) {
        return {};
      } else {
        var response = {};
        for (var i = 0; i < json.length; i++) {
          response[json[i].name] = {
            name: json[i].name
          };
        }
        return response;
      }
    };
    github.repos.getFromUser({
      per_page: 100,
      type: 'owner',
      user: req.params.username
    }, function(err, res2) {
      var parsed = parseJson(res2);
      res.json(parsed);
    });
  });

  var index = function(req, res) {
    res.sendFile('index.html', {
      root: __dirname + '/../public/'
    });
  };

  app.get('/', index);
  app.get('*', index);

};
