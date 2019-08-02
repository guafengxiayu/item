import MyContainer from './Container.vue'
const Container={
    install (Vue) { 
        Vue.component('Container',MyContainer)
    }
}
export default Container