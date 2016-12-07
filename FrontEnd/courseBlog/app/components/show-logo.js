import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    genderChoice: false,
    checkGender: function (id) {
      var myStore = this.get('store');
      var self = this;
      myStore.findRecord('post', id).then(function() {
        var gender = self.get('selectedPost.gender');
        if (gender === "Male")
        {
            this.set('genderChoice', true);
        }
        else
        {
            this.set('genderChoice', false);
        }
      });
    }
});
