const Services = require('../models/Services');

// Get services
exports.getServices = async (req, res) => {
  try {
    const services = await Services.findAll();
    res.json({
      data: services
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {}
    });
  }
};

// Create services
exports.createServices = async (req, res) => {
  const {
    name,
    address,
    description,
    latitude,
    longitude,
    type
  } = req.body;

  try {
    if (name === "" || name === null) {
      return res.json({
        status: "error",
        message: "Name cant be empty!"
      });
    }
    let newServices = await Services.create({
      name,
      address,
      description,
      latitude,
      longitude,
      type
    }, {
      fields: ['name', 'address', 'description', 'latitude', 'longitude', 'type']
    });
    if (newServices) {
      return res.json({
        message: 'Services was created succesfully',
        data: newServices
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {}
    });
  }
};

// Get one services
exports.getOneServices = async (req, res) => {
  const {
    id
  } = req.params;
  const services = await Services.findOne({
    where: {
      id
    }
  });
  if (services) {
    res.json({
      data: services
    });
  } else {
    res.json({
      message: "Services id not found"
    });
  }
};

// Delete services
exports.deleteServices = async (req, res) => {
  const {
    id
  } = req.params;
  const deleteRowCount = await Services.destroy({
    where: {
      id
    }
  });
  if (deleteRowCount) {
    res.json({
      message: 'Services deleted succesully',
      count: deleteRowCount
    });
  } else {
    res.json({
      message: "Services id not found"
    });
  }
};

// Update services
exports.updateServices = async (req, res) => {
  const {
    id
  } = req.params;
  const {
    name,
    address,
    description,
    latitude,
    longitude,
    type
  } = req.body;

  if (name === "" || name === null) {
    return res.json({
      status: "error",
      message: "Name cant be empty!"
    });
  }

  const services = await Services.findAll({
    attributes: ['id', 'name', 'address', 'description', 'latitude', 'longitude', 'type'],
    where: {
      id
    }
  });

  if (services.length > 0) {
    services.forEach(async services => {
      await services.update({
        name,
        address,
        description,
        latitude,
        longitude,
        type
      });
    });
  }

  return res.json({
    message: 'Services updated succesfully',
    data: services
  });
}