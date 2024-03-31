import express from 'express';

export const router = express.Router();

router.get('/', (req, res) => {
  res.status(400).send({
    error: {
      message: 'This route is not covered by any handlers.',
    },
  });
});
