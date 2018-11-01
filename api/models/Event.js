/**
 * Event.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  name: {
    type: "string"
  },

  short_description: {
    type: "string"
  },

  full_description: {
    type: "string"
  },

  image_url: {
    type: "string"
  },

  organizer: {
    type: "string"
  },

  event_date: {
    type: "string"
  },

  time: {
    type: "string"
  },

  venue: {
    type: "string"
  },

  quota: {
    type: "number"
  },

  highlighted_event: {
    type: "string"
  },
  getInvalidIdMsg: function (opts) {

    if (typeof opts.id == "undefined")
      return "Event id not specified";

    if (isNaN(parseInt(opts.id)))
      return "Event id with incorrect type"

    return null;        // falsy

  },

};

