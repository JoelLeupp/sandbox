import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiLibraryAngularModule } from '@six-group/ui-library-angular';
import { HeaderComponent } from './components/header/header.component';
import { LeftSidebarComponent } from "./components/left-sidebar/left-sidebar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, UiLibraryAngularModule, HeaderComponent, LeftSidebarComponent]
})
export class AppComponent {
  title = 'developer-portal';
  leftSidebarOpen = true;
  rightSidebarOpen = false;
}
