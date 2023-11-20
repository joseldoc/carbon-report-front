import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {appReducer} from './shared/store/app.state';
import {StoreModule} from '@ngrx/store';
import {LayoutComponent} from './layout/layout.component';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // core components
    LayoutComponent,
    // store
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
