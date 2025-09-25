const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());

// Compression middleware
app.use(compression());

// Basic static file serving
app.use(express.static('public'));

// Static files with custom path
app.use('/assets', express.static('assets'));

// Static files with options
app.use('/files', express.static('uploads', {
  dotfiles: 'ignore',
  etag: true,
  extensions: ['html', 'css', 'js'],
  index: false,
  maxAge: '1h',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  }
}));

// Virtual path for static files
app.use('/virtual', express.static(path.join(__dirname, 'public')));

// Multiple directories for static files
app.use('/docs', [
  express.static(path.join(__dirname, 'docs')),
  express.static(path.join(__dirname, 'fallback-docs'))
]);

// Custom middleware for specific file types
app.use('/images', (req, res, next) => {
  // Add custom headers for images
  res.setHeader('Cache-Control', 'public, max-age=86400'); // 24 hours
  next();
}, express.static('images'));

// Route handlers
app.get('/', (req, res) => {
  res.send(`
    <h1>Express Static File Serving Examples</h1>
    <p>Try these paths:</p>
    <ul>
      <li><a href="/index.html">Static HTML file</a></li>
      <li><a href="/css/styles.css">CSS file</a></li>
      <li><a href="/js/script.js">JavaScript file</a></li>
      <li><a href="/assets/logo.png">Asset from /assets path</a></li>
      <li><a href="/files/sample.txt">File from uploads directory</a></li>
      <li><a href="/virtual/styles.css">Virtual path example</a></li>
      <li><a href="/images/sample.jpg">Image with custom headers</a></li>
    </ul>
  `);
});

// Error handling for static files
app.use((req, res) => {
  res.status(404).send('File not found!');
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Static file serving examples available!');
});