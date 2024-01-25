import { Routes } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { provideState } from '@ngrx/store';
import { settingsFeatureKey, settingsReducer } from './store/reducers';

export const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
    title: 'User - Profile | E-Commerce',
    providers: [provideState(settingsFeatureKey, settingsReducer)],
  },
];
