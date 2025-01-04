import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('this is working');
});

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
