Vue.component('saludo', {
    template://html
    `
    <div>
        <h1>{{saludo}}</h1>
        <h3>Ingrese aqui lo que desee</h3>
    </div>`,
    data(){
        return{
            saludo:"Hola Vue Vixens"
        }
    }
});