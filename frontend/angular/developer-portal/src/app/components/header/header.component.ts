import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UiLibraryAngularModule } from '@six-group/ui-library-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UiLibraryAngularModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() open = false;
  @Output() leftSidebarToggled = new EventEmitter();

}
