module.exports = function(app) {

  app.get('/api/github/repos/:username', function(req, res) {
    var GitHubApi = require('github');

    var parseJson = function(json) {
      if (!json) {
        return {};
      } else {
        var response = [];
        for (var i = 0; i < json.length; i++) {
          response.push({
            name: json[i].name
          });
        }
        return response;
      }
    };

    var github = new GitHubApi({
      version: '3.0.0'
    });
    github.authenticate({
      type: 'oauth',
      key: process.env.GITHUB_CLIENT_ID,
      secret: process.env.GITHUB_CLIENT_SECRET
    });
    github.repos.getFromUser({
      per_page: 10,
      type: 'owner',
      user: req.params.username
    }, function(err, res2) {
      var parsed = parseJson(res2);
      res.json(parsed);
    });
  });

};
