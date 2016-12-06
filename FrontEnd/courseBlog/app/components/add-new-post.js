import Ember from 'ember';

export default Ember.Component.extend({


  isAdding: false,
  store: Ember.inject.service(),

  actions: {
    addNewPost() {
      this.set('sid', null);
      this.set('fname', null);
      this.set('lname', true);
      this.set('birth', true);
      this.set('residency', true);
      this.set('gender', true);
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
