const Issue = require("../model/Issue.js");

const create_issue = async(req, res) => {
    const { title, description, solicitor, status, date } = req.body;

    const newIssue = await Issue.create({
        title,
        description,
        solicitor,
        status,
        date,
    });

    if(!newIssue) {
        res.status(402).json(
            {
                error: "Error creating issue",
            }
        );
        return;
    }

    res.status(200).json(
        {
            _id: newIssue._id,
            title: newIssue.title,
            description: newIssue.description,
            solicitor: newIssue.solicitor,
            status: newIssue.status,
            date: newIssue.date,
        }
    );
};

module.exports = {
    create_issue,
};