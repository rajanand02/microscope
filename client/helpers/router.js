Router.map(function(){
  this.route('postsList',{path: '/'});

  this.route('postPage', {
    path: '/posts/:_id',
    data: function() { return Posts.findOne(this.params._id);}
  });
  this.route('postSubmit', {
    path: '/submit'
  });
});

var requireLogin = function() {
  if (! Meteor.user()){
    this.render('accessDenied');
    this.stop();
  }
}
Router.before(requireLogin, {only: 'postSubmit'})
