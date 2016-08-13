new Vue({
    el: '#helloWorld',
    data: {
        msg: 'Hello World VueJS!!',
        a: 1
    },
    computed: {
        b: function () {
            return +this.a + 1;
        }
    },
    methods: {
        dizerOi: function (event) {
            console.log('event', event);
            alert('Olá');
        }
    }
});
//define o component
var myComponent = Vue.extend({
    template: '<div>Meu Componente</div>'
});

new Vue({
    el: '#form1',
    data: {
        nome: 'paulo barros',
        options: [
            {
                color: 'Azul',
                checked: true
            },
            {
                color: 'Amarelo',
                checked: false
            },
            {
                color: 'Verde',
                checked: true
            },
            {
                color: 'Vermelho',
                checked: false
            }
        ],
        exibirForm: true,
        user: {
            name: 'Maria',
            age: 10
        }
    },
    computed: {
        textButton: function() {
            return this.exibirForm ? 'Esconder' : 'Exibir';
        }
    },
    methods: {
        selecionarCor: function (option, event) {
            console.log('Você selecionou a cor: ' + option.color);
            console.log(option);
        },
        esconderForm: function(){
            this.exibirForm = !this.exibirForm;
        },
        abrirGoogle: function(){
            console.log('google');
        }
    },
    created: function () {
        console.log('Created!');
    }
});



var child = Vue.extend({
    template: '<div> Componente Local</div>'
})

//registra globalmente 
Vue.component('my-component', myComponent);

new Vue({
    el: "#components",
    components: {
        'child-component': child
    }
});