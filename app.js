let app = new Vue({
    el: '#app',
    data: {
        name: 'Easy Learning',
        message: 'I am 21 years old'
    },
    methods: {
        MyName(){
            return 'easy learning methods'
        },
        MyAge(){
            return `${this.message}`;
        }
    }
})