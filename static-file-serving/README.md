# Static File Serving with Node.js Express: Complete Guide

This example demonstrates comprehensive static file serving capabilities using Express.js middleware.

## 🎯 What You'll Learn

- Basic static file serving with `express.static()`
- Custom path mappings for different directories
- Advanced options for caching, security, and performance
- Virtual paths and multiple directory serving
- File type specific handling
- Error handling for missing files

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```
   
   For development with auto-reload:
   ```bash
   npm run dev
   ```

3. **Visit the examples:**
   Open `http://localhost:3000` in your browser

## 📁 File Structure

```
static-file-serving/
├── server.js              # Main Express server
├── package.json           # Project configuration
├── public/                # Root static directory
│   ├── index.html        # Main HTML file
│   ├── css/
│   │   └── styles.css    # Stylesheet
│   └── js/
│       └── script.js     # Client-side JavaScript
├── assets/               # Custom assets directory
│   └── sample-asset.txt
├── uploads/              # Upload directory example
│   └── sample.txt
└── images/               # Images with custom headers
```

## 🔧 Key Features

### 1. Basic Static Serving
```javascript
app.use(express.static('public'));
```
Serves files from the `public` directory at the root path.

### 2. Custom Path Mapping
```javascript
app.use('/assets', express.static('assets'));
```
Maps the `assets` directory to `/assets` URL path.

### 3. Advanced Options
```javascript
app.use('/files', express.static('uploads', {
  dotfiles: 'ignore',
  etag: true,
  extensions: ['html', 'css', 'js'],
  index: false,
  maxAge: '1h',
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  }
}));
```

### 4. Security & Performance
- **Helmet**: Security headers
- **Compression**: Gzip compression
- **Custom headers**: Cache control, timestamps
- **ETags**: Efficient caching

## 🌐 Available Routes

| URL | Description | Source |
|-----|-------------|--------|
| `/` | Home page with links | Route handler |
| `/index.html` | Static HTML page | `public/index.html` |
| `/css/styles.css` | Stylesheet | `public/css/styles.css` |
| `/js/script.js` | JavaScript file | `public/js/script.js` |
| `/assets/*` | Custom assets | `assets/` directory |
| `/files/*` | Upload files with options | `uploads/` directory |
| `/virtual/*` | Virtual path example | `public/` directory |
| `/images/*` | Images with custom headers | `images/` directory |

## 📊 Middleware Options Explained

### Core Options
- `dotfiles`: How to handle dotfiles (`'allow'`, `'deny'`, `'ignore'`)
- `etag`: Enable/disable ETag generation
- `extensions`: File extensions to try when exact match fails
- `index`: Directory index file(s) or false to disable
- `maxAge`: Cache-Control max-age in milliseconds
- `redirect`: Redirect to trailing "/" when pathname is a directory

### Performance Options
- `lastModified`: Set Last-Modified header based on file system's last modified value
- `immutable`: Enable immutable directive in Cache-Control response header
- `cacheControl`: Enable/disable Cache-Control response header

## 🔒 Security Best Practices

1. **Use Helmet**: Adds various HTTP headers for security
2. **Ignore dotfiles**: Prevent serving sensitive configuration files
3. **Validate file paths**: Express.static does this automatically
4. **Set appropriate headers**: Control caching and access

## 📈 Performance Optimization

1. **Compression**: Reduces file sizes
2. **ETags**: Efficient client-side caching
3. **Max-Age headers**: Control browser caching
4. **Immutable files**: For versioned assets

## 🐛 Error Handling

The example includes:
- 404 handler for missing files
- Global error handler for server errors
- Custom error responses

## 🔍 Testing the Examples

1. **Basic files**: Visit `/index.html`, `/css/styles.css`
2. **Custom paths**: Try `/assets/sample-asset.txt`
3. **Advanced options**: Check `/files/sample.txt`
4. **Virtual paths**: Access `/virtual/css/styles.css`
5. **Error handling**: Try a non-existent file

## 📚 Further Reading

- [Express.js Static Files Documentation](https://expressjs.com/en/starter/static-files.html)
- [Express.js Middleware Guide](https://expressjs.com/en/guide/using-middleware.html)
- [Security Best Practices for Express](https://expressjs.com/en/advanced/best-practice-security.html)

## 🤔 Common Issues

**Files not loading?**
- Check file paths are correct
- Ensure files exist in the specified directories
- Verify middleware order in server.js

**Caching issues?**
- Clear browser cache
- Check Cache-Control headers
- Verify ETag configuration

**Security concerns?**
- Review Helmet configuration
- Check dotfiles handling
- Validate file access permissions