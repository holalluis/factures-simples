let factura={
  num:"2020-0001", data:"29/02/2020",
  codi_client:1, pagines:1,
  client:{
    nom:"INSTITUT CATALÀ DE RECERCA DE L'AIGUA (ICRA)",
    nif:"G-17920851",
    tel:"(+34) 972 18 33 80",
    direccio:[
      "Parc Científic i Tecnològic de la Universitat de Girona",
      "Edifici H<sub>2</sub>O, C/Emili Grahit, 101",
    ],
    cp:"E-17003",
    poblacio:"Girona (Spain)",
  },
  observacions:[
    //"Forma de pagament: 50% del valor en iniciar el servei i el 50% restant a la seva finalització.",
  ],
  articles:[
    {
      'descr':"Implementació equacions Bio P (mòdul independent, standalone)",
      'preu':1000,
      'import':1000,
    },{
      'descr':"Integració mòdul Bio P al model existent (projecte ecoadvisor, model UCT-ICRA)",
      'preu':1000,
      'import':1000,
    },{
      'descr':"Adaptació interfície gràfica pel nou mòdul",
      'preu':500,
      'import':500,
    },{
      'descr':"testing/debugging",
      'preu':500,
      'import':500,
    },
  ],
};
