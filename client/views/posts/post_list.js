var postsData = [
  {
  title: 'Introducing Telescope',
  author: 'Sacha Greif',
  url: 'http://sachagreif.com/introducing-telescope/'
},
{
  title: 'Meteor',
  author: 'Tom Coleman',
  url: 'http://meteor.com'
},
{
  title: 'Rails Tutorial',
  author: 'Micheal hartl',
  url: 'ruby.railstutorial.org'
}
];

Template.postsList.helpers({
  posts: postsData
});
