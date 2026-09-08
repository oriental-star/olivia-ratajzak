import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserSite = repositoryName.toLowerCase() === 'oriental-star.github.io';
const basePath = isGitHubPages && repositoryName && !isUserSite ? `/${repositoryName}` : '';

const nextConfig: NextConfig = isGitHubPages
  ? {
      output: 'export',
      basePath,
      assetPrefix: basePath,
      images: { unoptimized: true },
      trailingSlash: true,
    }
  : {};

export default nextConfig;
