# Kofi Corletey — Portfolio

My personal site: who I am, where I have worked, and the projects I have built.

Live at **[raedin-24.vercel.app](https://raedin-24.vercel.app)**.

I am a software engineer working across backend development, cloud infrastructure and DevOps, with a background in machine learning. The site has:

- **About:** introduction, work experience, education and certifications, and technical skills.
- **Work:** project case studies, including Ledger (an offline mobile money expense tracker for Android) and ElectionHub (a secure, real-time voting platform).
- **Blog:** write-ups on the technology and security behind my projects.

## Running it locally

You need Node.js 18.17 or newer.

```sh
npm install
npm run dev
```

The site is then at http://localhost:3000.

To check a production build:

```sh
npm run build
npm start
```

## Where things live

| What | Where |
|---|---|
| Profile, role, experience, education and skills | `src/resources/content.tsx` |
| Site settings: base URL, enabled pages, theme | `src/resources/once-ui.config.ts` |
| Project case studies (one `.mdx` file each) | `src/app/work/projects/` |
| Blog posts (one `.mdx` file each) | `src/app/blog/posts/` |
| Images | `public/images/` |

Adding a project or post is a matter of adding an `.mdx` file to the right folder. The front matter at the top of the file sets its title, summary, date and cover images; the site lists it automatically.

## Deployment

The site is deployed on Vercel from the `main` branch.

## Credits and licence

This site is built on [Magic Portfolio](https://github.com/once-ui-system/magic-portfolio) by [Once UI](https://once-ui.com), a Next.js portfolio template. I have changed its content, pages and styling for my own use.

The template is licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/); see [`LICENSE`](LICENSE). That licence applies to this repository too, so it may not be used commercially.
