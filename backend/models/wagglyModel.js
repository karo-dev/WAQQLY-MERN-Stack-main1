import mongoose from 'mongoose';

const WagglySchema = mongoose.Schema(
  {
    WalkerName: {
      type: String,
      required: true,
    },
    DogName: {
      type: String,
      required: true,
    },
    DogAge: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Dog = mongoose.model('Dog', WagglySchema);
