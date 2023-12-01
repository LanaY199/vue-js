const Counter = {
    data() {
        return {
            counter: 0,
            text: 'Тест',
        }
    }
}

Vue.createApp(Counter).mount('#counter');

const NewText = {
    data() {
        return {
            message: 'Я хочу на море'
        }
    },
    methods: {
        reverse() {
            this.message = this.message
            .split('')
            .reverse()
            .join('')
        }
    }
}

Vue.createApp(NewText).mount('#event-reverse');

const Conditional = {
    data() {
        return {
            isSeen: false,
        }
    }
}

Vue.createApp(Conditional).mount('#conditional');

const List ={
    data() {
        return {
            todos: [
                {text: 'Выучить JS'},
                {text: 'Сделать домашнее задание'},
                {text: 'Продолжить изучать React'},
                {text: 'Получить диплом'},            
            ]
        }
    }
}

Vue.createApp(List).mount('#list');


const watchExample = Vue.createApp({
    data() {
        return {
            question: '',
            answer: 'Вопросы обычно заканчиваются вопросительным знаком.'
        }
    },
    watch: {
        question(newQuestion) {
            console.log(newQuestion);
            if (newQuestion.indexOf('?')> -1) {
                this.getAnswer()
            }            
        }
    },
    methods: {
        getAnswer() {
            this.answer = 'Думаю'
            axios
                .get('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => this.answer = response.data.answer)
                .catch(error => {
                this.answer = 'Ошибка! Нет доступа к API.' + error
            })
        }        
    }

}).mount('#example')


const TodoItemNew = {
    propd: ['todo'],
    template: `<li> {{ todo.text }} </li>`
}


const TodoList = {
    data() {
        return {
            groceryList: [
                { id: 0, text: 'Fruits' },
                { id: 1, text: 'Meat' },
                { id: 2, text: 'Whatever else humans are supposed to eat' }
            ]
        }
    },
    components: {
        TodoItemNewTest
    }
}

Vue.createApp(TodoList).mount('#todo-list-app')


