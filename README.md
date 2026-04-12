# Brave New Net starter site

This folder is a static GitHub Pages version of your old WordPress site.

## Included
- Home page
- Blog index
- About page
- Contact page
- 4 published posts
- `CNAME` file already set to `bravenewnet.com`

## Publish with GitHub Pages

1. Create a public GitHub repository.
2. Upload every file in this folder to the repo root.
3. In GitHub:
   - Settings
   - Pages
   - Build and deployment
   - Source: `Deploy from a branch`
   - Branch: `main` and `/ (root)`
4. Wait for the first deployment.
5. In Pages settings, set the custom domain to `bravenewnet.com` if GitHub has not already picked it up from the `CNAME` file.
6. In Namecheap DNS, set:
   - `A` `@` -> `185.199.108.153`
   - `A` `@` -> `185.199.109.153`
   - `A` `@` -> `185.199.110.153`
   - `A` `@` -> `185.199.111.153`
   - `CNAME` `www` -> `YOUR_GITHUB_USERNAME.github.io`
7. In GitHub Pages settings, enable HTTPS when it becomes available.

## Optional: restore old images
This starter kit intentionally removes old WordPress images so the site can go live fast without broken assets.
If you want the old visuals back later, copy images from your WordPress backup:
`public_html/wp-content/uploads/`
