export const pathHasAccess = (accesses, path) => {
  for (const r of accesses) {
    let regExp = null;
    if (r.includes(':')) {
      regExp = new RegExp(r.replace(/:\w+/g, '\\w+'));
    } else {
      regExp = new RegExp("^"+r);
    }
    if (regExp.test(path)) {
      return true;
    }
  }
  return false;
};
