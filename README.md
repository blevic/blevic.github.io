# Brave New Net

Jekyll-powered static site hosted on GitHub Pages.

## Structure

- `_config.yml` = site-wide settings such as title, description, footer text, and permalink style
- `_layouts/default.html` = shared HTML shell, stylesheet, header, and footer
- `_layouts/post.html` = shared article layout
- `_includes/` = reusable snippets for the header, footer, and post cards
- `_posts/` = blog post source files
- `index.html` = homepage
- `blog/index.html` = blog index
- `about/index.html` = about page
- `contact/index.html` = contact page
- `assets/` = CSS and images

## How to add a new post

1. Copy the template:

   ```text
   _drafts/post-template.md
   ```

2. Save the copy in `_posts/` with this filename format:

   ```text
   YYYY-MM-DD-your-post-slug.md
   ```

3. Fill in the front matter at the top:

   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: 2026-04-13
   categories: [6G]
   summary: >-
     A short preview that appears on the home and blog pages.
   ---
   ```

4. Write the post below the front matter using Markdown.

The homepage and `/blog/` page update automatically from `_posts/`.

New posts use the site-wide permalink format from `_config.yml`:

```text
/:title/
```

So a post titled `What 6G Should Learn From 5G` becomes:

```text
/what-6g-should-learn-from-5g/
```

Use an explicit `permalink` only when you need a custom or legacy URL:

```yaml
permalink: /your-custom-url/
```

## URLs

Legacy root-level post URLs are preserved through each post's `permalink`, for example:

```text
https://bravenewnet.com/esim-alert-gsma-shuts-down-all-ts-48-test-profiles/
```

## Images

Preferred location:

```text
assets/images/
```

Homepage and blog cards use lightweight thumbnails from:

```text
assets/images/thumbs/
```

When adding a post image, also generate a matching thumbnail with the same filename:

```sh
sips -Z 360 assets/images/example.png --out assets/images/thumbs/example.png
```

The card include automatically looks for the first image in the post and swaps `/assets/images/` for `/assets/images/thumbs/`. If the matching thumbnail is missing, the card skips the preview instead of loading the full-size image.

You can also set an explicit thumbnail in the post front matter when needed:

```yaml
thumbnail: /assets/images/thumbs/example.png
```

For images with captions, use the existing figure pattern and Jekyll's `relative_url` filter:

```html
<img src="{{ '/assets/images/example.png' | relative_url }}" alt="Example">
```

## Local preview

Use Ruby 3 or newer, then install the GitHub Pages/Jekyll gems once:

```sh
bundle install
```

Then run:

```sh
bundle exec jekyll serve
```

Then open:

```text
http://127.0.0.1:4000
```

## Deployment

The site deploys automatically with GitHub Pages from the `main` branch.

Custom domain:

```text
bravenewnet.com
```
