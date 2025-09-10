import { Schema } from "mongoose";


export const LocationSchema = new Schema({

  country: { type: String, required: true, minLength: 1, maxLength: 50 },
  area: { type: String, required: true, minLength: 1, maxLength: 50 },
  labels: [{ type: String, required: true }]

},

  { versionKey: false, timestamps: true, toJSON: { virtuals: true } }

)


