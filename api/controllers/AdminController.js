/**
 * AdminController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    admin: async function (req, res) {
        var models = await Event.find({ sort: 'id ASC' });
        return res.view('event/admin', { events: models })
    },
};

