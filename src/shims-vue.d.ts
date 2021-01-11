declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module '*.vue' {
  import { Component } from 'vue'
  const _default: Component
  export default _default
}
