//vue app
let app = new Vue({
  el:"#app",
  data:{factura},
  methods:{
    subtotal(){
      return this.factura.articles.map(a=>a.import).reduce((p,c)=>(p+c),0);
    },
    iva(){
      return 0.21*this.subtotal();
    },
    irpf(){
      return 0.07*this.subtotal();
    },
    total(){
      return this.subtotal()+this.iva()-this.irpf();
    },
  },
});

//modifica titol web
document.title = `Factura ${factura.num}`;
