App.LeadEditController = Ember.ObjectController.extend({
  actions: {
    saveChanges: function() {
      var self = this;
      // the .then ensures that the transitionToRoute won't be called since get
      // an OK back from the server that the model was saved.
      this.get('model').save().then(function() {
        self.transitionToRoute('lead');
      });
    },

    cancel: function() {
      this.get('model').rollback();
      this.transitionToRoute('lead');
    }
  }
});
