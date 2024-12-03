let mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router();
// ClientsAll Model
let clientsSchema = require('../Models/ClientsAll');
// CREATE Clients
router.route("/create-client").post(async (req, res, next) => {
    await clientsSchema
        .create(req.body)
        .then((result) => {
            res.json({
                data: result,
                message: "Data successfully added!",
                status: 200,
            });
        })
        .catch((err) => {
            return next(err);
        });
});
// READ Clients
router.route("/").get(async (req, res, next) => {
    await clientsSchema
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
// Get Single Clients
router.route("/get-clients/:id").get(async (req, res, next) => {
    await clientsSchema
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
// Update Clients
router.route("/update-clients/:id").put(async (req, res, next) => {
    await clientsSchema
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
// Delete Clients
router.route("/delete-clients/:id").delete(async (req, res, next) => {
    await clientsSchema
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