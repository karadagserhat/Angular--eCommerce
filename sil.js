// eslint-disable-next-line no-use-before-define
submit(): void {
  this.store.dispatch(
    authActions.updateCurrentUser({
      ...this.currentUser,
      ...this.form.getRawValue(),
    })
  );
}