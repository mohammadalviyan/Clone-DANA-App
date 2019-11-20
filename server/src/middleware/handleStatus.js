exports.checkStatus = (req, res, next) => {
  if (req.body.icon === null || req.body.icon === "" || req.body.icon === undefined) {
    return res.json({
      message: "kosong"
    })
  }
  next()
}