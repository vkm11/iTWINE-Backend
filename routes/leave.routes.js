let mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router();
// Leave Model
let leaveSchema = require('../Models/Leave');

// CREATE Leave
router.route("/create-leave").post(async (req, res, next) => {
    await leaveSchema
        .create(req.body)
        .then((result) => {
            res.json({
                data: result,
                message: "Leave successfully submited!",
                status: 200,
            });
        })
        .catch((err) => {
            return next(err);
        });
});
router.route("/").get(async (req, res, next) => {
    await leaveSchema
        .find()
        .sort({ _id: -1 })
        .then((result) => {
            res.json({
                data: result,
                message: "All items successfully fetched.",
                status: 200,
            });
        })
        .catch((err) => {
            return next(err);
        });
});
// Update Leave Status
router.route("/update-status/:id").put(async (req, res, next) => {
    const leaveId = req.params.id;
    const { status } = req.body;

    try {
        const updatedLeave = await leaveSchema.findByIdAndUpdate(
            leaveId,
            { status: status },
            { new: true }
        );

        if (!updatedLeave) {
            return res.status(404).json({
                message: "Leave not found",
                status: 404,
            });
        }

        res.json({
            data: updatedLeave,
            message: "Leave status successfully updated",
            status: 200,
        });
    } catch (err) {
        return next(err);
    }
});


// I want matching userid data only
// I want matching userid data only
router.route("/user-leaves/:userId").get(async (req, res, next) => {
    const userId = req.params.userId; // Extract userId from the URL
    console.log('User ID received in the request:', userId);

    await leaveSchema
        .find({ userId: userId })  // Use the userId to filter leaves
        .sort({ _id: -1 })
        .then((result) => {
            console.log('Database result:', result);  // Check the result
            res.json({
                data: result,
                message: "User leaves successfully fetched.",
                status: 200,
            });
        })
        .catch((err) => {
            return next(err);
        });
});

module.exports = router;