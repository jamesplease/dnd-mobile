(function() {
  var DroppableView = Marionette.ItemView.extend({
    el: '.drop-zone',
    template: _.template('Drop Here'),
    behaviors: {
      droppable: {}
    },

    onDragEnter: function() {
      console.log('A view has entered the drop zone.');
    },

    onDragOver: function() {
      console.log('A view is being dragged across this one...');
    },

    onDragLeave: function() {
      console.log('A view has left the drop zone.');
    },

    onDrop: function() {
      console.log('A view has been dropped onto this view.');
    }
  });

  var droppableView = new DroppableView();
  droppableView.render();
})();