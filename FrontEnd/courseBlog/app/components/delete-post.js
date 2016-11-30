import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),

  actions: {
    deletePost (post){
      post.destroyRecord();
    }
  }

});
