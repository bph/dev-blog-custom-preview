# Social Card Preview

Adds a "Social Card Preview" option to the WordPress editor Preview dropdown, showing how a post will look when shared on X. As example plugin for a WordPress develop blog post. 

## Features

- Mock X card preview with featured image, title, excerpt, and domain
- Live updates as you edit — reads directly from the editor store
- "Share on X" button that opens the share dialog with the post URL pre-filled

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
