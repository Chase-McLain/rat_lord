import { Schema } from "mongoose";




export const MissionSchema = new Schema({

  codename: { type: String, required: true, minLength: 1, maxLength: 50 },
  objective: { type: String, required: true, minLength: 1, maxLength: 50 },
  year: { type: String, required: true, minLenght: 1, maxLength: 50 },
  completed: { type: Boolean, required: true, default: false },
  locationId: { type: Schema.ObjectId, required: true },
  ratId: { type: Schema.ObjectId, required: true }

},

  { versionKey: false, timestamps: true, toJSON: { virtuals: true } }

)

MissionSchema.virtual('rat',
  {
    
    localField:'ratId',
    foreignField: '_id',
    ref:'Rat',
    justOne: true

  })


MissionSchema.virtual('location',
  {

    localField: 'locationId',
    foreignField: '_id',
    ref:'Location',
    justOne: true

})

