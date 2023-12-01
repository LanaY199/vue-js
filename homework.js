const TodoItemNewTest = {
    props: ['todo'],
    template: `<li>{{ todo }}</li>`
}

const watchExample = Vue.createApp ({
    data() {
        return {
            watchInput: '',
            groceryList: [
                'Fruits',
                'Fish',
                'Whatever else humans are supposed to eat'
              ]
        }
    },
    watch: {
        watchInput(inputValue) {
            this.watchInput = inputValue;
        }
    },  
    methods: {

        getAnswer() {
            axios
                .get('https://jsonplaceholder.typicode.com/todos/4')
                .then(response => console.log(response.data))
                .catch(error => error)                
        },
        
        addTodo() {
            this.groceryList.push(this.watchInput)
        },

        deleteItem() {
            this.groceryList.splice(this.groceryList.length - 1 , 1);
        },
        sortList() {
            this.groceryList.sort();
        }
    },
    components: {
        TodoItemNewTest
    }

}).mount('#example')    
    







