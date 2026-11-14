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

- Homepage hero using the supplied Brother's Store cover artwork
- Store logo bundled locally in `assets/`
- Featured collection populated from Shopify products
- Lifestyle image and product showcase sections
- Product, collection, page and cart templates
- Custom 404 page with homepage and collection links
- Responsive mobile and desktop styling

## Theme structure

- `assets/` — CSS, JavaScript and store artwork
- `config/` — Theme settings
- `layout/` — Main Shopify layout
- `sections/` — Editable Shopify sections
- `templates/` — JSON templates

## Preview locally

Install Shopify CLI and authenticate, then run:

```bash
shopify theme dev --store ferpmv-za.myshopify.com
```

This creates a development preview; it does not publish the theme.

## Upload to Shopify

1. Zip the theme folders at the theme root.
2. Go to Shopify Admin → Online Store → Themes.
3. Choose Add theme → Upload ZIP file.
4. Preview before publishing.

## Before launch

Verify inventory, variant availability, advertised product price, payment methods, shipping rates, delivery estimates, contact details and policy pages. This theme does not modify inventory, payment settings, shipping rates or checkout configuration.
