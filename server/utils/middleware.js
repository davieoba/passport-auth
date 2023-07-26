
exports.checkCookie = (req, res, next) => {
  // check if the cookie has expired
  if (req.cookies) {
    console.log(req.cookies)

    console.log(req.session)
    // console.log(req.signedCookies)

    if (req.user) {
      next()
    } else {
      res.redirect('/auth/login')
    }
  } else {
    res.redirect('/auth/login')
  }
}