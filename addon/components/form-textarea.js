import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/form-textarea';

export default Component.extend({
  layout,
  classNames: ['form-group', 'form-for-textarea'],
  classNameBindings: ['propName'],
  placeholder: null,
  disabled: false,
  prop: null,
  label: null,
  propName: computed(function(){
    return `model-${this.get('prop')}`;
  }),
});
