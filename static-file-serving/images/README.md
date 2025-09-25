# Images Directory

This directory demonstrates serving images with custom headers.

Files placed here will be served at `/images/*` with:
- Custom Cache-Control headers (24 hours)
- Additional processing through custom middleware

Example: Place `sample.jpg` here and access it at `/images/sample.jpg`

## Custom Headers Applied

- `Cache-Control: public, max-age=86400` (24 hours)
- Custom timestamp header
- Standard Express static options

## Supported Formats

All image formats are supported:
- `.jpg`, `.jpeg`
- `.png`
- `.gif`
- `.svg`
- `.webp`
- And more...