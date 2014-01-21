(function () {

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/errors/errors.js                                         //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Errors = {                                                           // 1
  //loacal Collection                                                // 2
  collection: new Meteor.Collection(null),                           // 3
                                                                     // 4
  throw: function (message) {                                        // 5
    Errors.collection.insert( {message: message, seen: false})       // 6
  },                                                                 // 7
  clearSeen: function(){                                             // 8
    Errors.collecion.remove({seen: true});                           // 9
  }                                                                  // 10
};                                                                   // 11
                                                                     // 12
///////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/errors/template.errors_list.js                           //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Template.__define__("meteorErrors",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"each"],[0,"errors"]],["\n  ",[">","meteorError"],"\n  "]]]));
Template.__define__("meteorError",Package.handlebars.Handlebars.json_ast_to_func(["<div class=\"alert alert-error\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n    ",["{",[[0,"message"]]],"\n  </div>"]));
                                                                     // 3
///////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/errors/errors_list.js                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Template.meteorErrors.helpers({                                      // 1
  errors: function() {                                               // 2
    return Errors.collection.find();                                 // 3
  }                                                                  // 4
});                                                                  // 5
Template.meteorError.rendered = function() {                         // 6
  var error = this.data;                                             // 7
  Meteor.defer(function() {                                          // 8
    Errors.collection.update(error._id, {$set: {seen: true}});       // 9
  });                                                                // 10
};                                                                   // 11
                                                                     // 12
///////////////////////////////////////////////////////////////////////

}).call(this);
