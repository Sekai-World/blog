# Sekai World Blog

The official [Sekai World Blog](https://sekai-world-blog.netlify.app). This
repository contains the Next.js Pages Router site built with React, Tailwind
CSS, and MDX.

- **Site:** <https://sekai-world-blog.netlify.app>
- **Source:** <https://github.com/Sekai-World/blog>

## Local setup

The project requires Node.js 24.x and uses npm with the checked-in
`package-lock.json`.

```bash
git clone https://github.com/Sekai-World/blog.git
cd blog
npm ci
cp .env.example .env.local
```

Most local work does not require environment variables. To enable giscus
comments, set the following values in `.env.local` as documented by
`.env.example`:

```text
NEXT_PUBLIC_GISCUS_REPO=
NEXT_PUBLIC_GISCUS_REPOSITORY_ID=
NEXT_PUBLIC_GISCUS_CATEGORY=
NEXT_PUBLIC_GISCUS_CATEGORY_ID=
```

Do not commit `.env.local` or any credentials.

## Development and validation

Run the development server at <http://localhost:3000>:

```bash
npm run dev
```

The available scripts are:

| Command | Description |
| --- | --- |
| `npm run dev` | Start Next.js development mode (`next dev`). |
| `npm start` | Run the remote-watch entrypoint with the data directory watched (`SOCKET=true node scripts/next-remote-watch.js ./data`). |
| `npm run lint` | Run Next.js linting with autofix (`next lint --fix`). |
| `npm run build` | Build the site and generate its sitemap (`next build && node ./scripts/generate-sitemap`). |

Before opening a pull request, run:

```bash
npm run lint
npm run build
```

## Writing posts

Blog content lives in [`data/blog/`](./data/blog/) as `.mdx` files. Add the
post body below YAML frontmatter. The supported frontmatter fields are:

- `title` (required)
- `date` (required)
- `tags` (required; an empty array is allowed)
- `lastmod`
- `draft`
- `summary`
- `images`
- `canonicalUrl`
- `layout`
- `authors`

For example:

```mdx
---
title: 'A Sekai World update'
date: '2026-01-01'
tags: ['news']
lastmod: '2026-01-02'
draft: false
summary: 'A short description for the post.'
images: ['/static/images/example.png']
canonicalUrl: 'https://sekai-world-blog.netlify.app/blog/example'
layout: PostLayout
---

Post content written with Markdown and MDX.
```

Use `draft: true` for a post that should remain unpublished. Keep assets in
the repository's public asset directories and use paths that match the site's
existing content conventions.

## Deployment

The production site is deployed on [Netlify](https://www.netlify.com/). The
Netlify build should use Node.js 24.x and the repository's npm lockfile, with
`npm run build` as the build command.

## Contributing

1. Create a branch from `main`.
2. Make a focused content or code change.
3. Run `npm run lint` and `npm run build` locally.
4. Open a pull request against `main` with a short description of the change.

Please keep local environment files and unrelated changes out of commits.

## License

This repository is a Sekai World fork of the
[Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog),
originally created by [Timothy Lin](https://www.timrlx.com/). It retains the
original template's MIT licensing and attribution; see [`LICENSE`](./LICENSE)
for the full text.
