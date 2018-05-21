import Controller from '@ember/controller';
import moment from 'moment';
import EmberObject, {computed} from '@ember/object';

const Event = EmberObject.extend({
  start: moment().add(6,'M'), //moment or string
  end: moment().add(6,'M').add(4, 'hours'),
  title: 'Meeting with Tomster',
  description: 'Coffee to discuss Tomster and Zoey\'s upcoming raise',
  location: '1234 North Port, Nowhere USA'
})

export default Controller.extend({
  event: computed(function() {
    return Event.create()
  }),
  pojoEvent: {
    start: moment().add(6,'M'), //moment or string
    end: moment().add(6,'M').add(4, 'hours'),
    title: 'Meeting with Tomster',
    description: 'Coffee to discuss Tomster and Zoey\'s upcoming raise',
    location: '1234 North Port, Nowhere USA'
  }
});
