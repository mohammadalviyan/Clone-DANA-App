const News = require('../models/News');

// Get all news
exports.getNews = async (req, res) => {
  try {
    const news = await News.findAll();
    res.json({
      data: news
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {}
    });
  }
};

// Create news
exports.createNews = async (req, res) => {
  const {
    title,
    name,
    description
  } = req.body;

  const icon = req.file ?
    "/images/uploads/" + req.file.filename :
    "/images/icon.png";
  const image = req.file ?
    "images/uploads/" + req.file.filename :
    "/images/image.png";

  try {
    //check and handle null
    if (title === "" || title === null) {
      return res.json({
        status: "error",
        message: "Title cant be empty!"
      });
    }

    if (name === "" || name === null) {
      return res.json({
        status: "error",
        message: "Name cant be empty!"
      });
    }

    let newNews = await News.create({
      icon,
      title,
      name,
      image,
      description
    }, {
      fields: ['icon', 'title', 'name', 'image', 'description']
    });
    if (newNews) {
      return res.json({
        message: 'News was created succesfully',
        data: newNews
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {}
    });
  }
};

// Get one news
exports.getOneNews = async (req, res) => {
  const {
    id
  } = req.params;
  const news = await News.findOne({
    where: {
      id
    }
  });
  res.json({
    data: news
  });
};

// Delete news
exports.deleteNews = async (req, res) => {
  const {
    id
  } = req.params;
  const deleteRowCount = await News.destroy({
    where: {
      id
    }
  });
  res.json({
    message: 'News deleted succesully',
    count: deleteRowCount
  });
};

// Update news
exports.updateNews = async (req, res) => {
  const {
    id
  } = req.params;
  const {
    title,
    name,
    description
  } = req.body;

  const icon = req.file ?
    "/images/uploads/" + req.file.filename :
    "/images/icon.png";
  const image = req.file ?
    "/images/uploads" + req.file.filename :
    "/images/image.png"

  //check and handle null
  if (title === "" || title === null) {
    return res.json({
      status: "error",
      message: "Title cant be empty!"
    });
  }

  if (name === "" || name === null) {
    return res.json({
      status: "error",
      message: "Name cant be empty!"
    });
  }

  const news = await News.findAll({
    attributes: ['id', 'icon', 'title', 'name', 'image', 'description'],
    where: {
      id
    }
  });

  if (news.length > 0) {
    news.forEach(async news => {
      await news.update({
        icon,
        title,
        name,
        image,
        description
      });
    });
  }

  return res.json({
    message: 'News updated succesfully',
    data: news
  });
};