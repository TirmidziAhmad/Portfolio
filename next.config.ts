const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, '') || 'default-repo';
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports = {
  output: 'export',
  assetPrefix,
  basePath,
  images: {
    unoptimized: true,
  },
};
