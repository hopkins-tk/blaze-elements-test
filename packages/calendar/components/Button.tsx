import { define } from 'skatejs';
// @FIXME this needs to be imoprted from 'bl-button' package, not relatively
import { Button } from '@blaze-elements/button';

export class CalendarButton extends Button {
  static get is() { return 'bl-calendar-button'; }
  block = true;
}
define( CalendarButton );
