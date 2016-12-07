import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('iterate-records', 'Integration | Component | iterate records', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{iterate-records}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#iterate-records}}
      template block text
    {{/iterate-records}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
