// loacl collection (client-only)

Errors = new Meteor.Collection(null);

throwError = function(message){
  Errors.insert( { message: message })
}
