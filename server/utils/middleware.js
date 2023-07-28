
exports.checkCookie = (req, res, next) => {
  // check if the cookie has expired
  if (req.user) {
  // console.log(req.cookies)

    console.log(req.session)
    // console.log(req.signedCookies)
    next()
  } else {
    res.redirect('http://localhost:5173/auth/login')
  }
}

exports.restrictedRole = (req, res, next) => {
  if (req.user.role !== 'admin') {
    // stop the user from accessing this place
    return res.status(401).json({
      message: 'unauthorized access'
    })
  }

  next()
}