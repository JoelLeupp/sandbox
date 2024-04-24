import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiLibraryAngularModule } from '@six-group/ui-library-angular';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [UiLibraryAngularModule, RouterModule ],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss'
})
export class LeftSidebarComponent {
  @Input() open = true;
}
