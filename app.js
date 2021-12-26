let app = new Vue({
    el: '#app',
    data: {
        name: 'Easy Learning',
        message: 'I am ',
        website: 'https://evildorm.com/',
        classess1:["one","two"],
        name: 'Nelson Wang',
        dollar: 100,
        pound: 2
    },
    methods: {
        MyName(){
            return 'easy learning methods'
        },
        MyAge(age){
            return `${this.message} ${age} years old`;
        },
        Amount(pound){
            this.dollar += pound
        }
    }
})