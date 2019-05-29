Vue.component('contador', {
    template://html
    `
    <div>  
        <button @click="numero++">+</button><h3>{{numero}}</h3>
    </div>
    `,
    data(){
        return{
            numero:0
        }
    }
});