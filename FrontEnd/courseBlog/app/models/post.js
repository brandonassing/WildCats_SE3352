import DS from 'ember-data';

export default DS.Model.extend({
    studentNo: DS.attr(),
    firstName: DS.attr(),
    lastName: DS.attr(),
    gender: DS.attr(),
    birthDate: DS.attr(),
    residency: DS.attr(),

});
