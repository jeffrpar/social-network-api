const { Schema, model } = require("mongoose");
const replySchema = require("./Reply");

const thoughtSchema = new Schema(
    {
        thoughtBody: {
            type: String,
            required: true,
            maxlength: 1000,
            minlength: 1,
        },
        username: {
            type: String,
            required: true,
        },
        createdOn: {
            type: Date,
            default: Date.now,
        },
        replies: [replySchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema.virtual("reactionCount").get(function () {
    return this.replies.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;