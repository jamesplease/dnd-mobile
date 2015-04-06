Marionette.Behaviors.draggable = Marionette.Behavior.extend({
  onRender: function() {
    this.makeDraggable();
  },

  makeDraggable: function() {
    var view = this.view;

    // Set the draggable attribute
    this.$el.attr("draggable", true);
  }
});
