export const pathHasAccess = (accesses, path) => {
  for (const a of accesses) {
    const regexp = new RegExp(`^${a}`);
    const res = regexp.test(path);
    if (res) {
      return true;
    }
  }
  return false;
};
