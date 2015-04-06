Marionette.Behaviors.droppable = Marionette.Behavior.extend({
  onRender: function() {
    this.makeDroppable();
  },

  dropClass: 'hovered',

  makeDroppable: function() {
    this.$el
      .bind('dragover', _.bind(this._onDragOver, this))
      .bind('dragenter', _.bind(this._onDragEnter, this))
      .bind('dragleave', _.bind(this._onDragLeave, this))
      .bind('drop', _.bind(this._onDrop, this));
  },

  _onDragOver: function(e) {
    e.preventDefault();
    this
      .toggleDropClass(true)
      .view.triggerMethod('drag:over');
  },

  _onDragEnter: function(e) {
    e.preventDefault();
    this
      .toggleDropClass(true)
      .view.triggerMethod('drag:enter');
  },

  _onDragLeave: function(e) {
    this
      .toggleDropClass(false)
      .view.triggerMethod('drag:leave');
  },

  toggleDropClass: function(toggle) {
    this.view.$el.toggleClass(this.dropClass, toggle);
    return this;
  },

  _onDrop: function (e) {
    e.preventDefault();
    this
      .toggleDropClass(false)
      .view.triggerMethod('drop');
  }
});
