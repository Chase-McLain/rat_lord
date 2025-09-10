import { Schema } from "mongoose";



export const RatSchema = new Schema({

  name: { type: String, required: true, minLength: 1, maxLength: 25 },
  callsign: { type: String, required: true, minLength: 1, maxLength: 50 },
  picture: { type: String, required: true, minLength: 1, maxLength: 500 },
  specialities: [{ type: String, required: true }],

},

  { versionKey: false, timestamps: true, toJSON: { virtuals: true } }

)








