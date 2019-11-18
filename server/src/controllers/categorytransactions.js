const Category = require('../models/CategoryTransactions');

// Get category
exports.getCategory = async (req, res) => {
  try {
    const category = await Category.findAll();
    res.json({
      data: category
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {}
    });
  }
};

// Create category
exports.createCategory = async (req, res) => {
  const {
    name,
    address,
    description,
    code,
    latitude,
    longitude
  } = req.body;

  try {
    let newCategory = await Category.create({
      name,
      address,
      description,
      code,
      latitude,
      longitude
    }, {
      fields: ['name', 'address', 'description', 'code', 'latitude', 'longitude']
    });
    if (newCategory) {
      return res.json({
        message: 'Category was created succesfully',
        data: newCategory
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {}
    });
  }
};

// Get one category
exports.getOneCategory = async (req, res) => {
  const {
    id
  } = req.params;
  const category = await Category.findOne({
    where: {
      id
    }
  });
  res.json({
    data: category
  });
};

// Delete category
exports.deleteCategory = async (req, res) => {
  const {
    id
  } = req.params;
  const deleteRowCount = await Category.destroy({
    where: {
      id
    }
  });
  res.json({
    message: 'Category deleted succesully',
    count: deleteRowCount
  });
};

// Update category
exports.updateCategory = async (req, res) => {
  const {
    id
  } = req.params;
  const {
    name,
    address,
    description,
    code,
    latitude,
    longitude
  } = req.body;

  const category = await Category.findAll({
    attributes: ['id', 'name', 'address', 'description', 'code', 'latitude', 'longitude'],
    where: {
      id
    }
  });

  if (category.length > 0) {
    category.forEach(async category => {
      await category.update({
        name,
        address,
        description,
        code,
        latitude,
        longitude
      });
    });
  }

  return res.json({
    message: 'Category updated succesfully',
    data: category
  });
}