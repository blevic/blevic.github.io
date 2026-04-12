# Brave New Net

Static site hosted on GitHub Pages.

## Structure

- `index.html` = homepage
- `blog/index.html` = blog index
- `about/index.html` = about page
- `contact/index.html` = contact page
- each post lives in its own folder:
  - `why-this-blog-6g-for-humans-for-machines-and-for-you/`
  - `the-road-to-6g-how-we-got-here-and-what-comes-next/`
  - `visions-of-6g-highlights-from-the-3gpp-6g-workshop/`
  - `esim-alert-gsma-shuts-down-all-ts-48-test-profiles/`

## How to add a new post

1. Duplicate one existing post folder
2. Rename the folder with the new slug
3. Edit `index.html` inside that folder
4. Update:
   - page title
   - date
   - category
   - h1
   - post content
5. Add the new post link manually to:
   - `blog/index.html`
   - `index.html` if you want it featured on the home page

## Images

Preferred location:
- `assets/images/`

Alternative:
- preserve WordPress-style paths under `wp-content/uploads/...`

## Deployment

The site deploys automatically with GitHub Pages from the `main` branch.
Custom domain:
- `bravenewnet.com`
