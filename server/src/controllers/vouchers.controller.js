import Vouchers from '../models/Vouchers';

// Get all vouchers
export const getVouchers = async (req, res) => {
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
export const createVouchers = async (req, res) => {
  const { name, nominal, expired_at, image } = req.body;

  try {
    let newVouchers = await Vouchers.create({
      name,
      nominal,
      expired_at,
      image
    }, {
      fields: ['name', 'nominal', 'expired_at', 'image']
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
export const getOneVouchers = async (req, res) => {
  const { id } = req.params;
  const vouchers = await Vouchers.findOne({
    where: {
      id
    }
  });
  res.json({
    data: vouchers
  });
};

// Delete voucher
export const deleteVouchers = async (req, res) => {
  const { id } = req.params;
  const deleteRowCount = await Vouchers.destroy({
    where: {
      id
    }
  });
  res.json({
    message: 'Vouchers deleted succesfully',
    data: deleteRowCount
  });
};

// Update voucher
export const updateVouchers = async (req, res) => {
  const { id } = req.params;
  const { name, nominal, expired_at, image } = req.body;

  const vouchers = await Vouchers.findAll({
    attributes: ['id', 'name', 'nominal', 'created_at', 'expired_at', 'image'],
    where: {
      id
    }
  });

  if (vouchers.length > 0) {
    vouchers.forEach(async voucher => {
      await voucher.update({
        name, nominal, expired_at, image
      });
    });
  }

  return res.json({
    message: 'Vouchers updated succesfully',
    data: vouchers
  });
};