const router = require('express').Router();
const { Books } = require('../../models');

// GET all books
router.get('/', async (req, res) => {
  try {
    const booksData = await Books.findAll({
      include: [{ model: Books }],
    });
    res.status(200).json(booksData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single book by ID
router.get('/:id', async (req, res) => {
    try {
      const booksData = await booksData.findByPk(req.params.id, {
        include: [{ model: Books }],
      });
  
      if (!booksData) {
        res.status(404).json({ message: 'No book found with that id!' });
        return;
      }
  
      res.status(200).json(booksData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET a single book by Title
router.get('/:title', async (req, res) => {
    try {
      const booksData = await Books.findByFk(req.params.title, {
        include: [{ model: Books, through: Title, as: 'books_title' }]
      });
  
      if (!titleData) {
        res.status(404).json({ message: 'No book found with that title!' });
        return;
      }
  
      res.status(200).json(booksData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  




// SAVE a book
router.post('/', async (req, res) => {
  try {
    const bookData = await Books.create({
      reader_id: req.body.reader_id,
    });
    res.status(200).json(bookData);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;