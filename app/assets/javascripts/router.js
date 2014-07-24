// For more information see: http://emberjs.com/guides/routing/

App.Router.reopen({
  location: 'auto',
  rootURL: '/'
});

App.Router.map(function() {
  this.resource('posts', { path: '/posts'});
  this.route('about');
});

App.Router.map(function() {
  this.resource('leads', { path: '/' }, function(){
    this.resource('lead', { path: '/leads/:id'}, function(){
      this.route('edit');
    });
  });
});
