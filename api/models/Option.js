import mongoose from 'mongoose';

const Schema = mongoose.Schema;

/**
 * Post schema that has references to User, Like and Comment schemas
 */
const optionSchema = Schema(
  {
    title: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    Score: {
      type: Number,
      default: 0,
    },
    isEnabled: {
      type: Boolean,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Option', optionSchema);
