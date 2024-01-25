import { Injectable, OnInit, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../store/reducers';

@Injectable({
  providedIn: 'root',
})
class PermissionsService {
  currentUser: any;

  constructor(private router: Router, private store: Store) {
    this.currentUser$.subscribe((res) => (this.currentUser = res));
  }

  currentUser$ = this.store.select(selectCurrentUser);

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.currentUser?.role === 'user') return true;

    this.router.navigateByUrl('/');
    return false;
  }
}

export const UserGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  return inject(PermissionsService).canActivate(next, state);
};
