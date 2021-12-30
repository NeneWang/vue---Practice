let app = new Vue({
    el: '#app',
    data: {
        name: 'Easy Learning',
        message: 'I am ',
        website: 'https://evildorm.com/',
        classess1: ["one", "two"],
        names: ['Nelson', 'Lucas', 'Geronimous', 'Alucard'],
        name: 'Nelson Wang',
        dollar: 100,
        age: 11,
        pound: 2,
        log: {
            x: 0,
            y: 0
        },
        fruits: [{
                name: 'Mango',
                color: 'yellow',
                weight: 200
            }, {
                name: 'Tomatoes',
                color: 'red',
                weight: 40
            },
            {
                name: 'Apple',
                color: 'red',
                weight: 50
            }
        ],
        boolvariable: false
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
        over(e) {
            this.log.x = e.offsetX
            this.log.y = e.offsetY
        },
        NameChange(e) {
            console.log(e.target.value)
        },
        Message() {
            console.log('easy learning')
        }
    }
})