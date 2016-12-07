import Ember from 'ember';

export default Ember.Controller.extend({

  sNumber: null,
  actions: {
    findStudent(){
      var sNumber = this.get('sNumber');
      window.location = "http://localhost:4200/posts/" + sNumber;
    }




  }



});

