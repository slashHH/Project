/**
 * HomeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


    home: async function (req, res) {

        var models = await Event.find();
        return res.view('pages/home', { events: models });

    },
    detail: async function (req, res) {

        var message = Event.getInvalidIdMsg(req.params);

        if (message) return res.badRequest(message);

        var model = await Event.findOne(req.params.id);

        if (!model) return res.notFound();

        return res.view('pages/detail', { event: model });

    },
}