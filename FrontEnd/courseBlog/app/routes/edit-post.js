import Ember from 'ember';

export default Ember.Route.extend({

  sid: "",
  fname: "",
  lname: "",
  birth: "",
  residency: 0,
  gender: 0,

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
        birthDate: this.get('birthDate'),
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
