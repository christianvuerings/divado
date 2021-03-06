# [Divado](http://divado.herokuapp.com)

List your GitHub merged branches.

* Homepage: [http://divado.herokuapp.com](http://divado.herokuapp.com)
* Source: [https://github.com/christianv/divado](https://github.com/christianv/divado)

## Install & run

```shell
npm install
gulp
```

## Configuration

### Environment variables

1. Copy the template to the global `.env` file.

    ```
    cp .env_template .env
    ```

1. Edit the `.env` file.

1. Execute the environment variables

    ```
    source .env
    ```

## Heroku

### Add Heroku

```
heroku git:remote -a divado
```

### Push to Heroku

```
git push heroku master
```

## Conversation with GitHub

Question about how to see whether a branch is merged in the REST API.
Answer from GitHub:

> Unfortunately, there's no single to get a list merged branches via the API. But its easy to get a list of branches, and it's pretty easy to determine if an individual branch is merged.

> To determine if a branch has been merged, just use the compare endpoint (https://developer.github.com/v3/repos/commits/#compare-two-commits) and check for `ahead_by` and `behind_by`.

> For example, to look at a repo your public profile says you've worked on recenty, you could try:

> `curl https://api.github.com/repos/ets-berkeley-edu/calcentral/compare/master...qa`

> I just checked this and got `ahead_by: 6` and `behind_by: 16`. This means that the qa branch has 6 commits that master does not (the same number as the web view at https://github.com/ets-berkeley-edu/calcentral/compare/qa), and master has 16 new commits that qa does not.

> If `ahead_by` is zero, the qa branch would have no commits that master does not, and you can conclude it's been merged.

> We use this internally *all the time*, and hopefully you can use it to build what you need.
