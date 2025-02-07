import { Schema, model } from "mongoose";

const listItemSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    likeCount: {
      type: Number,
      default: 0,
    },

    imageUrl: {
      type: String,
      default: "",
    },

    // postByUserId: {
    //   type: mongoose.Schema.ObjectId,
    //   ref: "User",
    // },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ListItemModel = model("List", listItemSchema);

module.exports = ListItemModel;
