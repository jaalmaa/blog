# Personal Blog

## Contributing Changes

### Articles/Posts

Commits pushed to the `main` branch trigger a redeploy in production. Therefore, when adding a new article to the website, commits should be pushed directly to `main`. This will result in the production instance of the blog being rebuilt and including the new article.

### Features

Commits designed to add new features should not be committed directly to `main`. Instead, they should be committed to a separate feature branch.
Once the feature is ready, and tested, then a pull request can be created to merge the new feature into `main`. After the merge, the production app will be rebuilt to include the new feature.