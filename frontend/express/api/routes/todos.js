import express from 'express';
import crypto from 'crypto';

export const router = express.Router();

const todos = [
  {
    id: '1',
    title: 'Buy Milk',
    completed: false,
  },
  {
    id: '2',
    title: 'Learn Express',
    completed: true,
  },
];

router.get('/', (req, res) => {
  res.send(todos);
});

router.post('/', (req, res) => {
  const { title } = req.body;
  if (!title) {
    const error = new Error('Title is required');
    error.status = 400;
    throw error;
  }

  const newTodo = {
    id: crypto.randomUUID(),
    title,
    completed: false,
  };

  todos.push(newTodo);
  res.status(201).send(newTodo);
});

router.patch('/:id', (req, res) => {
  const { title, completed } = req.body;
  const { id } = req.params;

  const oldTodo = todos.find((todo) => todo.id === id);
  console.log({ title, completed });
  if (title) {
    oldTodo.title = title;
  }

  if (completed !== undefined) {
    oldTodo.completed = completed;
  }

  res.send(oldTodo);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  todos.splice(
    todos.findIndex((todo) => todo.id === id),
    1
  );
  res.send();
});
