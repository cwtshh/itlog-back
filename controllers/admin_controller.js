const Admin = require("../model/Admin.js");
const bcrypt = require("bcryptjs");
const secret = process.env.SECRET;

const registerAdmin = async(req, res) => {
    const { name, email, password } = req.body;

    const adminExists = await Admin.findOne({ email });
    if(adminExists) {
        res.status(402).json(
            {
                error: "User already exists",
            }
        );
        return;
    }

    const salt = await bcrypt.genSalt();
    const pass_hash = await bcrypt.hash(password, salt);

    const newAdmin = await Admin.create({
        name,
        email,
        password: pass_hash,
    });

    if(!newAdmin) {
        res.status(402).json(
            {
                error: "Error creating user",
            }
        );
        return;
    }

    res.status(200).json(
        {
            _id: newAdmin._id,
            email: newAdmin.email,
            name: newAdmin.name,
        }
    );
};

const loginAdmin = async(req, res) => {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });

    if(!admin) {
        res.status(422).json(
            {
                error: "User not found",
            }
        );
        return;
    }

    const validate_pass = await bcrypt.compare(password, admin.password);
    if(!validate_pass) {
        res.status(422).json(
            {
                error: "Invalid password",
            }
        );
        return;
    }

    res.status(200).json(
        {
            _id: admin._id,
            email: admin.email,
            name: admin.name,
        }
    );
};

module.exports = {
    registerAdmin,
    loginAdmin,
}