import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, takeUntil} from 'rxjs';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {select, Store} from '@ngrx/store';
import {NavigationActions, selectNavigations} from '../../shared/store/menus';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MenubarModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {

  menus$: Observable<MenuItem[]> = this._store.pipe(select(selectNavigations));
  menus: MenuItem[];
  destroyed$: Subject<void> = new Subject<void>();

  constructor(private _store: Store) {
  }

  ngOnInit() {
    // dispatch navigation menus
    this._store.dispatch(NavigationActions.navigation());

    this.menus$.pipe(
        takeUntil(this.destroyed$))
      .subscribe((result) => {
        this.menus = result;
      });
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
