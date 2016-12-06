import Ember from 'ember';

export default Ember.Component.extend({


  isAdding: false,
  store: Ember.inject.service(),

  actions: {
    addNewPost (){
      this.set('title', null);
      this.set('body', null);
      this.set('isAdding', true);
    },
    savePost (){
      var myStore = this.get('store');
      var newPost = myStore.createPost('post',{
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

    cancelPost (){
      this.set('isAdding', false);
    }
  }


});
