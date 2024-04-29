import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SixTabShowPayload } from '@six-group/ui-library';
import { UiLibraryAngularModule } from '@six-group/ui-library-angular';
import { StateComponentComponent } from './state-component/state-component.component';
import { StateServiceComponent } from './state-service/state-service.component';
import { StateNgrxComponent } from './state-ngrx/state-ngrx.component';

@Component({
  selector: 'app-state',
  standalone: true,
  templateUrl: './state.component.html',
  styleUrl: './state.component.scss',
  imports: [
    UiLibraryAngularModule,
    RouterModule,
    StateComponentComponent,
    StateServiceComponent,
    StateNgrxComponent,
  ],
})
export class StateComponent implements OnInit{

  tabName: string = 'component';

  constructor(private route: ActivatedRoute, private _router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.tabName = String(paramMap.get('method'));
      const tab = document.querySelector('six-tab-group')
      tab?.show(this.tabName);
      console.log(this.tabName)
    });
  }

  navigateToTab(event: CustomEvent<SixTabShowPayload>): void {
    console.log(event);
    const tabName = event.detail.name;
    this._router.navigateByUrl(`/state/${tabName}`);
  }
}
