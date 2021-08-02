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
      set(val, isAdmin=false) {
        if(opts.set) {
          return opts.set(val, isAdmin)
        }
        this._accessArr = val
        this._isAdmin = isAdmin
      },
      hasAccess(path) {
        const accesses = this.get();
        return this._isAdmin || pathHasAccess(accesses, path);
      }
    };

    Vue.directive('access', {
      bind: (el, binding) => {
        if (!Vue.$access.hasAccess(binding.value)) {
					setTimeout(() => {
						el.parentNode.removeChild(el);
					});
        }
      }
    })
  },
};

