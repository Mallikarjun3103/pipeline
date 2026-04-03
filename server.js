const app = require('./src/app');
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Mini app running at http://localhost:${PORT}`);
});
