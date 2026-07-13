# Hani Ashour Portfolio — V3

## What changed
- Hani Ashour is clearly shown in the header and hero.
- Smaller, calmer typography and reduced motion.
- Responsive desktop, tablet, and mobile layout.
- Separate English and Arabic pages for indexing.
- Dedicated crawlable case-study pages for Famcare, Darent, and KPI automation.
- ProfilePage and Article structured data.
- OAI-SearchBot is explicitly allowed.
- PostHog added to the tools list.

## Publish
Upload all files and folders to the root of the existing GitHub Pages repository.

## Required after the final URL is known
1. Add absolute canonical URLs to every page.
2. Replace the placeholder domain in `sitemap-template.xml` and rename it to `sitemap.xml`.
3. Add `Sitemap: https://YOUR-DOMAIN/sitemap.xml` to `robots.txt`.
4. Add the live URL to the `url` fields in structured data.
5. Submit the sitemap in Google Search Console and Bing Webmaster Tools.

PostHog is listed as a professional tool only. No tracking code is installed because a PostHog project key and consent decision are required.


## V3.1 hotfix applied for the live URL

Live base URL: `https://4haniash.github.io/HaniAshour/`

Changes:
- Fixed duplicate desktop/mobile navigation by hiding `.mobile-nav` by default.
- Reduced the desktop and mobile hero headline size.
- Widened the content area and rebalanced the hero columns.
- Added canonical URLs, `og:url`, absolute social image URLs, and hreflang links.
- Generated a production sitemap for the live GitHub Pages URL.
- Added the sitemap and explicit OAI-SearchBot access to `robots.txt`.

Upload all files in this package over the existing repository files.
