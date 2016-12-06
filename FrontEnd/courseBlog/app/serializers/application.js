import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: 'studentNo',

  actions: {
    loadTest() {
      window.alert();
      window.location = "http://localhost:4200/posts/58471fa6108ef720d01d3881";
    }
  }
});
