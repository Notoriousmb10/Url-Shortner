import shortid from "shortid";
import URL from "../models/schema.js";

export async function generateShortURL(req, res) {
  try {
    const { url } = req.body;

    if (!url ) {
      // Added check for body
      return res.status(400).json({ error: "URL is required :(" });
    }

    const smallId = shortid.generate();
    console.log(smallId);

    await URL.create({
      shortid: smallId,
      redirectURL: url,
      visitHistory: [],
    });
    // const allData = await URL.find({});
    // console.log(allData);

    const fullShortURL = `http://localhost:8001/${smallId}`;
    console.log('Generated short URL:', fullShortURL);
    return res.status(201).render('homepage', { shortURL : fullShortURL });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}

export async function showHomePage(req, res) {
  return res.status(200).render("homepage");
}

export async function redirectToURL(req, res) {
  const shortid = req.params.shortid;
  const entry = await URL.findOneAndUpdate(
    {
      shortid,
    },
    {
      $push: {
        visitHistory: {
          timestamps: Date.now(),
        },
      },
    },
    { new: true }
  );

  if (!entry) {
    return res.status(404).json({ error: "Short URL not found :(" });
  }

  res.status(200).redirect(entry.redirectURL);
}

export async function getAnalyticsOfURL(req, res) {
  try {
    const shortid = req.params.shortid;

    const dataentry = await URL.findOne({
      shortid,
    });
    if (!dataentry) {
      return res.status(404).json({ error: "URL not found :(" });
    }
    const numberofvisits = dataentry.visitHistory.length;

    res.status(200).render("analytics", { numberofvisits });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}
