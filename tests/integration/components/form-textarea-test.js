import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | form textarea', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    let label = 'name';
    let placeholder = 'A Name';
    let model = EmberObject.create({
      name: 'foo',
    });
    this.set('model', model);
    this.set('label', label);
    this.set('placeholder', placeholder);

    await render(hbs`{{form-textarea
                      model=model
                      prop="name"
                      placeholder=placeholder
                      label=label}}`);

    assert.equal(this.$('label').attr('for'), 'name');
    assert.equal(this.$('label').text().trim(), label);
    assert.equal(this.$('textarea').attr('placeholder'), placeholder);
    assert.equal(this.$('textarea').val(), 'foo');
    assert.ok(this.$('.form-for-textarea').hasClass('model-name'));
  });

  test('it renders without label', async function(assert) {
    let model = EmberObject.create({
      name: 'foo',
    });
    this.set('model', model);

    await render(hbs`{{form-textarea
                      model=model
                      prop="name"}}`);

    assert.equal(this.$('label').length, 0);
    assert.equal(this.$('textarea').val(), 'foo');
    assert.ok(this.$('.form-for-textarea').hasClass('model-name'));
  });

  test('it renders errors', async function(assert) {
    let model = EmberObject.create({
      name: 'foo',
      errors: {
        name: [{ message: 'Not present' }]
      }
    });
    this.set('model', model);

    await render(hbs`{{form-textarea model=model prop="name"}}`);

    assert.equal(this.$('.errors:first').text().trim(), 'Not present');
  });
});