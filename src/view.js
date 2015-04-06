(function() {
  var MyView = Marionette.ItemView.extend({
    el: '.drag-me',
    template: _.template('<span>hi</span>'),
    behaviors: {
      draggable: {}
    }
  });


  var myView = new MyView();
  myView.render();
})();