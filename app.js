let app = new Vue({
    el: '#app',
    data: {
        name: 'Easy Learning',
        message: 'I am ',
        website: 'https://evildorm.com/',
        classess1: ["one", "two"],
        name: 'Nelson Wang',
        dollar: 100,
        pound: 2,
        log: {
            x: 0,
            y: 0
        }
    },
    methods: {
        MyName() {
            return 'easy learning methods'
        },
        MyAge(age) {
            return `${this.message} ${age} years old`;
        },
        Amount(pound) {
            this.dollar += pound
            console.log('amount added');
        },
        EventCall(event) {
            console.log('Event Clicked');
            console.log(event)
        },
        over(e){
            this.log.x = e.offsetX
            this.log.y = e.offsetY
        },
        NameChange(e){
            console.log(e.target.value)
        },
        Message(){
            console.log('easy learning')
        }
    }
})