import { Schema, model } from "mongoose";

const urlSchema = Schema(
  {
    shortid: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
      unique: true,
    },
    visitHistory: [
      {
        timestamps: { type: Number },
      },
    ],
  },
  { timestamps: true }
);

const URL = model('shorties', urlSchema);

export default URL;
