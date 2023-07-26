const db = require('../models');

exports.showPolls = async (req, res, next) => {
  try {
    const polls = await db.Poll.find();
    if (polls) {
      res.status(200).json(polls);
    } else {
      throw new Error('No polls found');
    }
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

exports.createPoll = async (req, res, next) => {
  try {
    const { question, options } = req.body;

    const poll = await db.Poll.create({
      question,
      options: options.map(option => ({
        option,
        votes: 0,
      })),
    });

    res.status(201).json(poll);
  } catch (err) {
    err.status = 400;
    next(err);
  }
};
