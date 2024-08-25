const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res, next) {
  const body = req.body;
  if (!body.url) {
    return res.status(404).json({ error: "url is required" });
  }

  const shortID = shortid();
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.status(201).json({ id: shortID });
  next();
}

module.exports = {
  handleGenerateNewShortURL,
};
