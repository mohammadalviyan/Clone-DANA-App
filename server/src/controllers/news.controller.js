import News from '../models/News';

// Get all news
export const getNews = async (req, res) => {
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
export const createNews = async (req, res) => {
  const { icon, title, name, image, description } = req.body;

  try {
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
export const getOneNews = async (req, res) => {
  const { id } = req.params;
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
export const deleteNews = async (req, res) => {
  const { id } = req.params;
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
export const updateNews = async (req, res) => {
  const { id } = req.params;
  const { icon, title, name, image, description } = req.body;

  const news = await News.findAll({
    attributes: ['id', 'icon', 'title', 'name', 'image', 'description'],
    where: {
      id
    }
  });

  if (news.length > 0) {
    news.forEach(async news => {
      await news.update({
        icon, title, name, image, description
      });
    });
  }

  return res.json({
    message: 'News updated succesfully',
    data: news
  });
};