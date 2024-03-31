const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8083; // 默认端口为8080

// 提供静态文件
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});
