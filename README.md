# Social Card Preview

Adds a "Social Card Preview" option to the WordPress editor Preview dropdown, showing how a post will look when shared on X. As example plugin for a WordPress develop blog post. 

This plugin is part of the article [How to add custom entries to the editor Preview dropdown](https://developer.wordpress.org/news/2026/02/how-to-add-custom-entries-to-the-editor-preview-dropdown/) on the WordPress developer blog 

_It is only for educational purposes and not meant to be used in production._

## Features

- Mock X card preview with featured image, title, excerpt, and domain
- Live updates as you edit — reads directly from the editor store

## Requirements

- WordPress 6.7+
- PHP 7.4+

## Development

```bash
npm install
npm run build
```

For development with auto-rebuild:

```bash
npm run start
```

## Testing

You can test locally with WordPress Playground:

```bash
npx @wp-playground/cli@latest server --auto-mount
```

## License

GPL-2.0-or-later
