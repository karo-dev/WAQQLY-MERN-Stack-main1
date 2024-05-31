import express from 'express';
import { Dog } from '../models/wagglyModel.js';

const router = express.Router();

// Route for Saving a new Dog
router.post('/', async (request, response) => {
  try {
    if (
      !request.body.WalkerName ||
      !request.body.DogName ||
      !request.body.DogAge
    ) {
      return response.status(400).send({
        message: 'Send all required fields: WalkerName, DogName, DogAge',
      });
    }
    const newDog = {
      WalkerName: request.body.WalkerName,
      DogName: request.body.DogName,
      DogAge: request.body.DogAge,
    };

    const dog = await Dog.create(newDog);

    return response.status(201).send(dog);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Getting All Dogs from database
router.get('/', async (request, response) => {
  try {
    const dogs = await Dog.find({});

    return response.status(200).json({
      count: dogs.length,
      data: dogs,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Getting One Dog from database by id
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const dog = await Dog.findById(id);

    return response.status(200).json(Dog);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Updating a Dog
router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.WalkerName ||
      !request.body.DogName ||
      !request.body.DogAge
    ) {
      return response.status(400).send({
        message: 'Send all required fields: WalkerName, DogName, DogAge',
      });
    }

    const { id } = request.params;

    const result = await Dog.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Dog not found' });
    }

    return response.status(200).send({ message: 'Dog updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Deleting a Dog
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Dog.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Dog not found' });
    }

    return response.status(200).send({ message: 'Dog deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
