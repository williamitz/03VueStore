Vue.component('v-header', {
    template: `
        <strong>{{title}}</strong>
    `,
    data() {
        return {
            title: 'Barra de navegación'
        }
    }
});

Vue.component('v-hijo', {
    template: `
        <strong>{{title}}</strong>
    `,
    data() {
        return {
            title: 'Barra de navegación'
        }
    }
});


const store = new Vuex.Store({
    state: {
        role: 'WEBMASTER',
        user: 'William',
        cursos: []
    },
    // funciones o métodos en mi tienda
    mutations: {
        onChangeRole( state, role ) {
            state.role = role
        },
        onLoadCursos( state, arrCursos ) {
            state.cursos = arrCursos;
        }
    },
    // funciones para interacción con backend
    actions: { 
        onGetCursos: async function( {commit} ) {
            // const data = await fetch('cursos.json');
            const cursos = [
                {
                    "name": "Angular Js",
                    "language": "Javascript"
                },
                {
                    "name": "Node Js",
                    "language": "Javascript"
                },
                {
                    "name": "Sockets IO",
                    "language": "Javascript"
                },
                {
                    "name": "Vue Js",
                    "language": "Javascript"
                }
            ];
            console.log(cursos);
            commit('onLoadCursos', cursos);
        }
    }
});

const app = new Vue({
    el: "#app",
    data: {

    },
    store,
    // propiedades computadas, siempre retornan algo
    computed: {
        
        ...Vuex.mapState(['role','user','cursos'])
    },
    methods: {
        ...Vuex.mapMutations(['onChangeRole']),
        ...Vuex.mapActions(['onGetCursos'])
    }
})