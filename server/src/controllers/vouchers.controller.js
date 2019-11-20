const Vouchers = require('../models/Vouchers');

// Get all vouchers
exports.getVouchers = async (req, res) => {
  try {
    const vouchers = await Vouchers.findAll();
    res.json({
      data: vouchers
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {}
    });
  }
};

// Create vouchers
exports.createVouchers = async (req, res) => {
  const {
    name,
    amount,
    expired_at
  } = req.body;

  const image = req.file ?
    "images/uploads/" + req.file.filename :
    "/images/image.png";

  try {
    if (name === "" || name === null) {
      return res.json({
        status: "error",
        message: "Name cant be empty"
      });
    }

    if (amount === "" || amount === null) {
      return res.json({
        status: "error",
        message: "Amount cant be empty"
      });
    }

    if (expired_at === "" || expired_at === null) {
      return res.json({
        status: "error",
        message: "Expired cant be empty"
      });
    }

    let newVouchers = await Vouchers.create({
      name,
      amount,
      expired_at,
      image
    }, {
      fields: ['name', 'amount', 'expired_at', 'image']
    });

    if (newVouchers) {
      return res.json({
        message: 'Vouchers was created succesfully',
        data: newVouchers
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {}
    });
  }
};

// Get one vouchers
exports.getOneVouchers = async (req, res) => {
  const {
    id
  } = req.params;
  const vouchers = await Vouchers.findOne({
    where: {
      id
    }
  });
  if (vouchers) {
    res.json({
      data: vouchers
    });
  } else {
    res.json({
      message: "Vouchers id not found"
    });
  }
};

// Delete voucher
exports.deleteVouchers = async (req, res) => {
  const {
    id
  } = req.params;
  const deleteRowCount = await Vouchers.destroy({
    where: {
      id
    }
  });
  if (deleteRowCount) {
    res.json({
      message: 'Vouchers deleted succesully',
      count: deleteRowCount
    });
  } else {
    res.json({
      message: "Vouchers id not found"
    });
  }
};

// Update voucher
exports.updateVouchers = async (req, res) => {
  const {
    id
  } = req.params;
  const {
    name,
    amount,
    expired_at
  } = req.body;

  const image = req.file ?
    "images/uploads/" + req.file.filename :
    "/images/image.png";

  if (name === "" || name === null) {
    return res.json({
      status: "error",
      message: "Name cant be empty"
    });
  }

  const vouchers = await Vouchers.findAll({
    attributes: ['id', 'name', 'amount', 'created_at', 'expired_at', 'image'],
    where: {
      id
    }
  });

  if (vouchers.length > 0) {
    vouchers.forEach(async voucher => {
      await voucher.update({
        name,
        amount,
        expired_at,
        image
      });
    });
  }

  return res.json({
    message: 'Vouchers updated succesfully',
    data: vouchers
  });
};