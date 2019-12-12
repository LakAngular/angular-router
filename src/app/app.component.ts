import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
   /* None  - None property apply the styles mentioned in the parent to all the compoment.
   By default it will not apply to all component. it will apply only the style specified component
   Bcoz It generate the unique id to the each element and apply the id
   Shadow - it will copy the parent  style and its own co
*/
   encapsulation: ViewEncapsulation.None,


})
export class AppComponent {
  title = 'router-app';
}
