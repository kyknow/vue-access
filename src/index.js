import { pathHasAccess} from './util'
export default {
  install(Vue, opts = {}) {
    Vue.$access = Vue.prototype.$access = {
      get() {
        if(opts.get) {
          return opts.get()
        }
        return this._accessArr ? this._accessArr : [];
      },
      set(val) {
        if(opts.set) {
          return opts.set(val)
        }
        this._accessArr = val
      },
      hasAccess(path) {
        const accesses = this.get();
        return pathHasAccess(accesses, path);
      }
    };

    Vue.directive('access', {
      bind: (el, binding) => {
        const path = binding.value;
        const accesses = Vue.$access.get();
        if (!pathHasAccess(accesses, path)) {
          el.parentNode.removeChild(el);
        }
      }
    })
  },
};

