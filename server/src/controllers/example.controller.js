import Examples from '../models/Examples';

// Get all example
export const getExample = async (req, res) => {
  try {
    const examples = await Examples.findAll();
    res.json({
      data: examples
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {}
    })
  }
};

// Create example
export const createExample = async (req, res) => {
  const {
    name,
    description,
    deliverydate
  } = req.body;

  try {
    let newExamples = await Examples.create({
      name,
      description,
      deliverydate
    }, {
      fields: ['name', 'description', 'deliverydate']
    });
    if (newExamples) {
      return res.json({
        message: 'Examples was created successfully',
        data: newExamples
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {}
    })
  }
};

// Get one example
export const getOneExample = async (req, res) => {
  const {
    id
  } = req.params;
  const examples = await Examples.findOne({
    where: {
      id
    }
  });
  res.json({
    data: examples
  });
};

// Delete example
export const deleteExample = async (req, res) => {
  const {
    id
  } = req.params;
  const deleteRowCount = await Examples.destroy({
    where: {
      id
    }
  });
  res.json({
    message: 'Example deleted succesfully',
    count: deleteRowCount
  });
};

// Update example
export const updateExample = async (req, res) => {
  const {
    id
  } = req.params;
  const {
    name,
    description,
    deliverydate
  } = req.body;

  const examples = await Examples.findAll({
    attributes: ['id', 'name', 'description', 'deliverydate'],
    where: {
      id
    }
  });

  if (examples.length > 0) {
    examples.forEach(async example => {
      await example.update({
        name,
        description,
        deliverydate
      });
    });
  }

  return res.json({
    message: 'Example updated succesfully',
    data: examples
  });
};