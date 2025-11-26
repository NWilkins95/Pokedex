// Build login view
async function buildLogin(req, res, next) {
  res.render("login", {
    title: "Login with GitHub",
  })
}

module.exports = { buildLogin };