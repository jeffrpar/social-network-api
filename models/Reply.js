const { Schema, Types } = require("mongoose");

const replySchema = new Schema(
    {
        replyId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        replyBody: {
            type: String,
            required: true,
            maxlength: 1000,
        },
        username: {
            type: String,
            required: true,
        },
        createdOn: {
            type: Date,
            default: Date.now,
        },
    }
);

module.exports = replySchema;