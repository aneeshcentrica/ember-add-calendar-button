import Base from '../button-base';
import layout from '../../templates/components/types/yahoo-cal';
import {get} from '@ember/object';
import moment from 'moment';

export default Base.extend({
  layout,
  baseUrl: 'http://calendar.yahoo.com/',
  generateHref({startTime = '', endTime = '', duration = '', location = '', title = '', plainDescription = ''}) {
    if (!moment.isMoment(startTime)) {
      startTime = moment(startTime);
    }
    if (!moment.isMoment(endTime)) {
      endTime = moment(endTime);
    }

    duration = duration / (60 * 1000);

    const yahooHourDuration = duration < 600 ? '0' + Math.floor((duration / 60)) : Math.floor((duration / 60)) + '';
    const yahooMinuteDuration = duration % 60 < 10 ? '0' + duration % 60 : duration % 60 + '';
    const yahooEventDuration = yahooHourDuration + yahooMinuteDuration;

    let start = startTime.toISOString().replace(/-|:|\.\d+/g, '');

    let data = {
      v:60,
      view:`d`,
      type:20,
      title: title,
      st: `${start}`,
      dur: `${yahooEventDuration}`,
      desc: plainDescription,
      in_loc: location
    }
    let string = this._toQString(data)
    return encodeURI(`${get(this, 'baseUrl')}?${string}&sf=true&output=xml`)
  }
});
