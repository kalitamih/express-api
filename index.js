import express from 'express';
import cors from 'cors';

const { default: booksData } = await import("./data/books.json", {
  assert: { type: "json" },
});

const app = express();
app.use(cors());

app.get('/random-book', (req, res) => {
  const randomIndex = Math.floor(Math.random() * booksData.length);
  const randomBook = booksData[randomIndex];
  res.json(randomBook);
});

app.get('/random-book-delay', (req, res) => {
  const randomIndex = Math.floor(Math.random() * booksData.length);
  const randomBook = booksData[randomIndex];
  setTimeout(() => {
    res.json(randomBook);
  }, 4000);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is runnning on port ${port}`);
});
