function isAdmin(req, res, next) {
    User.findOne({where: {id: req.params.id, isAdmin: true}}
      .then()
      )
  }