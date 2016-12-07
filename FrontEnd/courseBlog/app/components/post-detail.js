import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),
  isEditing: false,
  isMale: function() {
  return this.get('selectedPost.gender') === 'Male';
}.property('selectedPost.gender'),

  actions: {
    edit: function () {
      this.set('isEditing', true);
    },

    save: function (id) {
      this.set('isEditing', false);
      var myStore = this.get('store');

      var self = this;
      myStore.findRecord('post', id).then(function (post) {
        post.set('studentNo', self.get('selectedPost.studentNo'));
        post.set('firstName', self.get('selectedPost.firstName'));
        post.set('lastName', self.get('selectedPost.lastName'));
        post.set('birthDate', self.get('selectedPost.birthDate'));
        post.set('residency', self.get('selectedPost.residency'));
        post.set('gender', self.get('selectedPost.gender'));
        post.save(); // => PATCH to /posts/:post_id
      });
      this.set('isEditing', false);
      this.get('routing').transitionTo('posts');
    },

    cancel: function () {
      this.get('routing').transitionTo('posts');
    }
   
  }

});
