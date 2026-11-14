# Brother's Store — Shopify Theme

A custom Shopify Online Store 2.0 theme for Brother's Store.

## Brand palette

| Color | Hex |
|---|---|
| Deep brown | `#4B3027` |
| Warm cream | `#F4EBDD` |
| Baby blue | `#A9D6F2` |
| Dark text | `#30231D` |

## Features

- Homepage hero with an editable image picker
- Header with an editable store-logo picker
- Featured collection populated from Shopify products
- Lifestyle image and product showcase sections with image pickers
- Product, collection, page and cart templates
- Custom 404 page with homepage and collection links
- Responsive mobile and desktop styling
- GitHub Actions workflow to validate JSON files

## Theme structure

- `assets/` — CSS and JavaScript
- `config/` — Theme settings
- `layout/` — Main Shopify layout
- `sections/` — Editable Shopify sections
- `templates/` — JSON templates

## Add your supplied images

The theme code uses Shopify image-picker settings rather than hard-coded external image URLs. In the Shopify theme editor:

1. Open **Customize** for the uploaded draft theme.
2. Select **Header** and choose your Brother's Store logo.
3. Select **Homepage hero** and choose your wide cover image.
4. Select **Image story** and choose your lifestyle image.
5. Select **Category showcase** and choose your product showcase image.
6. Save and preview desktop and mobile.

The image files themselves are not currently committed in this repository. Upload them via the image picker in the theme editor.

## Preview locally

Install Shopify CLI and authenticate, then run:

```bash
shopify theme dev --store ferpmv-za.myshopify.com
```

This creates a development preview; it does not publish the theme.

## Upload to Shopify

1. Download the repository as a ZIP, or clone it locally.
2. Ensure the theme folders (`assets`, `config`, `layout`, `sections`, and `templates`) are at the ZIP root.
3. Go to Shopify Admin → Online Store → Themes.
4. Choose **Add theme → Upload ZIP file**.
5. Preview before publishing.

## Before launch

Verify inventory, variant availability, advertised product price, payment methods, shipping rates, delivery estimates, contact details and policy pages. This theme does not modify inventory, payment settings, shipping rates or checkout configuration.
