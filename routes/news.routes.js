let mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router();
// ClientsAll Model
let newsSchema = require('../Models/News.js');
// CREATE Clients
router.route("/create-news").post(async (req, res, next) => {
    await newsSchema
        .create(req.body)
        .then((result) => {
            res.json({
                data: result,
                message: "News successfully added!",
                status: 200,
            });
        })
        .catch((err) => {
            return next(err); 
        });
});
// READ News
router.route("/").get(async (req, res, next) => {
    await newsSchema
        .find()
        .sort({ _id: -1 })
        .then((result) => {
            res.json({
                data: result,
                message: "All news successfully fetched.",
                status: 200,
            });
        })
        .catch((err) => {
            return next(err);
        });
});
router.route("/get-active-data").get(async (req, res, next) => {
    await newsSchema
        .find({ status: 1 })  // Add filter for active status
        .sort({ _id: -1 })
        .then((result) => {
            res.json({
                data: result,
                message: "Active news successfully fetched.",
                status: 200,
            });
        })
        .catch((err) => {
            return next(err);
        });
});
// Get Single news
router.route("/get-news/:id").get(async (req, res, next) => {
    await newsSchema
        .findById(req.params.id)
        .then((result) => {
            res.json({
                data: result,
                message: "Data successfully fetched.",
                status: 200,
            });
        })
        .catch((err) => {
            return next(err);
        });
});
// Update News
router.route("/update-news/:id").put(async (req, res, next) => {
    await newsSchema
        .findByIdAndUpdate(req.params.id, {
            $set: req.body,
        })
        .then((result) => {
            console.log(result);
            res.json({
                data: result,
                msg: "Data successfully updated.",
            });
        })
        .catch((err) => {
            console.log(err);
        });
});
// Delete News
router.route("/delete-news/:id").delete(async (req, res, next) => {
    await newsSchema
        .findByIdAndDelete(req.params.id)
        .then(() => {
            res.json({
                msg: "Data successfully deleted.",
            });
        })
        .catch((err) => {
            console.log(err);
        });
});
module.exports = router;