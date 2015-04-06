(function() {
  var DraggableView = Marionette.ItemView.extend({
    el: '.drag-me',
    template: _.template('Drag Me'),
    behaviors: {
      draggable: {}
    }
  });

  var draggableView = new DraggableView();
  draggableView.render();
})();