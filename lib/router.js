Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { 
    return [Meteor.subscribe('posts'), Meteor.subscribe('comments')];
  }
});
Router.map(function() {
  this.route('postsList', {path: '/'});
});
