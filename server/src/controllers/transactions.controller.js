const Transactions = require('../models/Transactions');

// Get transactions
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transactions.findAll();
    res.json({
      data: transactions
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {}
    });
  }
}

// Create transactions
exports.createTransactions = async (req, res) => {
  const {
    id_user,
    amount,
    id_type,
    id_voucher,
    status,
    description
  } = req.body;

  try {
    //check and handle null
    if (amount === "" || amount === null || amount <= 0) {
      return res.json({
        status: "error",
        message: "Amount cant bellow zero or null!"
      });
    }

    if (status === "" || status === null) {
      return res.json({
        status: "error",
        message: "Status must be filled!"
      });
    }

    let newTransactions = await Transactions.create({
      id_user,
      amount,
      id_type,
      id_voucher,
      status,
      description
    }, {
      fields: ['id_user', 'amount', 'id_type', 'id_voucher', 'status', 'description']
    });
    if (newTransactions) {
      return res.json({
        message: 'News was created succesfully',
        data: newTransactions
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {}
    });
  }
};

// Get one transactions
exports.getOneTransactions = async (req, res) => {
  const { id } = req.params;
  const transactions = await Transactions.findOne({
    where: {
      id
    }
  });
  if (transactions) {
    res.json({
      data: transactions
    });
  } else {
    res.json({
      message: "Transactions id not found"
    });
  }
}

// Delete transactions
exports.deleteTransactions = async (req, res) => {
  const { id } = req.params;
  const deleteRowCount = await Transactions.destroy({
    where: {
      id
    }
  });
  if (deleteRowCount) {
    res.json({
      message: 'Transaction deleted succesully',
      count: deleteRowCount
    });
  } else {
    res.json({
      message: "Transactions id not found"
    });
  }
}