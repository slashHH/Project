/**
 * PersonController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    view: async function (req, res) {
        console.log('---------------------');
        return res.view('pages/detail',{});
    }

};

