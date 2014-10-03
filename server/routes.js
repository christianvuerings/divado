module.exports = function(app) {

  app.get('/api/github/repos/:username', function(req, res) {
    var GitHubApi = require('github');

    var github = new GitHubApi({
      version: '3.0.0'
    });
    console.log(github);
    github.repos.getFromUser({
      per_page: 100,
      type: 'owner',
      user: req.params.username
    }, function(err, res2) {
      res.json(res2);
    });
  });

};
