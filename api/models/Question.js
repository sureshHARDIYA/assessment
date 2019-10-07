import mongoose from 'mongoose';

const Schema = mongoose.Schema;

/**
 * Post schema that has references to User, Like and Comment schemas
 */
const questionSchema = Schema(
  {
    title: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    options: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Option',
      },
    ],
    description: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Question', questionSchema);
