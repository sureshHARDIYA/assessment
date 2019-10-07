import mongoose from 'mongoose';

const Schema = mongoose.Schema;

/**
 * Post schema that has references to User, Like and Comment schemas
 */
const postSchema = Schema(
  {
    title: String,
    image: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    questions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Question',
      },
    ],
    description: String,
    randomizeOptions: Boolean,
    randomizeQuestion: Boolean,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Quiz', postSchema);
