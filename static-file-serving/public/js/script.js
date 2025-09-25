// Static JavaScript file example
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('testBtn');
    const output = document.getElementById('output');
    
    button.addEventListener('click', function() {
        output.innerHTML = `
            <h3>JavaScript Working!</h3>
            <p>Current time: ${new Date().toLocaleString()}</p>
            <p>This JavaScript file was served statically by Express.js</p>
        `;
    });
    
    // Log that the static file loaded successfully
    console.log('Static JavaScript file loaded successfully!');
});