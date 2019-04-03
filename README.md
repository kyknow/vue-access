
# vue-access

vue权限控制组件


### Installation

**Yarn**
```bash
yarn add vue-access
```

**NPM**
```bash
npm install vue-access --save
```

### Getting Started
不含参数初始化方式
```javascript
import VueAccess from 'vue-access'
import Vue from 'vue'

Vue.use(VueAccess)
```

包含参数初始化方式
```javascript
import VueAccess from 'vue-access'
import Vue from 'vue'

Vue.use(VueAccess, {
  set(val) {
    .....   //自定义实现写入权限列表
  },
  get() {
    .....   //自定义实现获取权限列表
  }
})
```

API

vue-access会在Vue的全局和实列里写入$access对象

可通过Vue.$access 或者 this.$access获取
```javascript
//设置权限列表，默认写入$access._accessArr
set(val: string[]): void

//获取权限列表
get(): string[]

//判断权限是否存在
hasAccess(access: string): boolean
```

自定义指令v-access
```html
<components v-access="权限名称" />
```