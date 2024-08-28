import shortid from "shortid";
import URL from "../models/schema.js";

export async function generateShortURL(req, res) {
  try {
    console.log("Request Body:", req.body); // Debugging line

    const { body } = req;

    if (!body || !body.url) {
      // Added check for body
      return res.status(400).json({ error: "URL is required :(" });
    }

    const smallId = shortid.generate();
    console.log(smallId);

    await URL.create({
      shortid: smallId,
      redirectURL: body.url,
      visitHistory: [],
    });

    return res.status(201).json({ id: smallId });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}

export async function redirectToURL(req, res) {
  const shortid = req.params.shortid
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
    }
  );
  res.status(200).redirect(entry.redirectURL);
}