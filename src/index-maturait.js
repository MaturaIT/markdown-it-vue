import MarkdownItVueMaturait from './markdown-it-vue-maturait'

const install = function (Vue) {
  Vue.component(MarkdownItVueMaturait.name, MarkdownItVueMaturait)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

MarkdownItVueMaturait.install = install
export default MarkdownItVueMaturait
