let app = new Vue({
    el: '#app',
    data: {
        name: 'Easy Learning',
        message: 'I am ',
        website: 'https://evildorm.com/',
        classess1:["hello1","world2"],
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