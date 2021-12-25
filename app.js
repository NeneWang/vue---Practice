let app = new Vue({
    el: '#app',
    data: {
        name: 'Easy Learning',
        message: 'I am '
    },
    methods: {
        MyName(){
            return 'easy learning methods'
        },
        MyAge(age){
            return `${this.message} ${age} years old`;
        }
    }
})