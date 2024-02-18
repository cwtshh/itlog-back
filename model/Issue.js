const mongoose = require('mongoose');
const { Schema } = mongoose;

const IssueSchema = new Schema(
    {
        title: String,
        description: String,
        solicitor: String,
        status: {
            type: String,
            default: "open",
        },
        date: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

const issue = mongoose.model("Issue", IssueSchema);
module.exports = issue;