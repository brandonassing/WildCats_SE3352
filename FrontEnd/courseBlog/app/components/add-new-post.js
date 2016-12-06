import Ember from 'ember';

export default Ember.Component.extend({


  isAdding: false,
  store: Ember.inject.service(),

  actions: {
    addNewPost() {
      this.set('studentNo', null);
      this.set('firstName', null);
      this.set('lastName', null);
      this.set('birthDate', null);
      this.set('residency', null);
      this.set('gender', null);
      this.set('isAdding', true);
    },
    savePost() {
      var myStore = this.get('store');
      var newPost = myStore.createRecord('post', {
        studentNo: this.get('studentNo'),
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        birthDate: this.get('birth'),
        residency: this.get('residency'),
        gender: this.get('gender')
      });
      newPost.save();
      this.set('isAdding', false);
    },

    cancelPost() {
      this.set('isAdding', false);
    }
  }


});
