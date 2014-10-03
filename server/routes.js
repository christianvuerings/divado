module.exports = function(app) {

  app.get('/api/github/repos/:username', function(req, res) {
    var GitHubApi = require('github');

    var parseJson = function(json) {
      console.log(json);
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
    github.repos.getFromUser({
      per_page: 100,
      type: 'owner',
      user: req.params.username
    }, function(err, res2) {
      var parsed = parseJson(res2);
      res.json(parsed);
    });
  });

};
