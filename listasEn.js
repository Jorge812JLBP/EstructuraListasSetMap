/*
class Persona{
    constructor(celular,nombre,edad){
            this.celular=celular;
            this.nombre=nombre;
            this.edad=edad;
    }
    info(){
        return "Celular: "+this.celular+"<br>"+"Nombre: "+this.nombre+"<br>"+"Edad: "+this.edad;
    }
}

class Directorio
{
    constructor()
    {
        this.datos=[];
    }

    agreagar(nuevo)
    {
        this.datos.push(nuevo);
    }
    listar()
    {
        let txt="";
        for(let i=0; i<this.datos.length; i++){
            txt=txt+this.datos[i].info()+"<br>"+"<br>";
        }
        return txt;
    }

    eliminar(ID)
    {
        for(let i=0;i<this.datos.length; i++){
            if (this.datos[i].ID===ID) {
                return this.datos.splice(i);
            }
        }
        return null;
    }

    buscar(Numero)
    {
        for(let i=0;i<this.datos.length; i++){
            if (this.datos[i].celular==Numero) {
                return this.datos[i];
            }
        }
        return null;

    }
}

let persona=new Directorio();

let nuevo = new Persona('111','Alan',10);
persona.agreagar(nuevo);

nuevo = new Persona('222','Beto',20);
persona.agreagar(nuevo);

nuevo = new Persona('333','Carlos',30);
persona.agreagar(nuevo);

nuevo = new Persona('444','David',40);
persona.agreagar(nuevo);

nuevo = new Persona('555','Efrain',50);
persona.agreagar(nuevo);


document.write(persona.listar());

let buscado = persona.buscar(111);
document.write("<b>Se encontro:<b/>" + "<br>" + buscado.info());
*/


class Persona{
  constructor(celular,nombre,edad){
          this.celular=celular;
          this.nombre=nombre;
          this.edad=edad;
  }
  info(){
      return "Celular: "+this.celular+"<br>"+"Nombre: "+this.nombre+"<br>"+"Edad: "+this.edad;
  }
}

class Directorio
{
  constructor()
  {
      this.datos=[];
  }

  agreagar(nuevo)
  {
      this.datos.push(nuevo);
  }
  
  listar()
  {
      let txt="";
      for(let i=0; i<this.datos.length; i++){
          txt=txt+this.datos[i].info()+"<br>"+"<br>";
      }
      return txt;
  }

  eliminar(ID)
  {
      for(let i=0;i<this.datos.length; i++){
          if (this.datos[i].ID===ID) {
              return this.datos.splice(i);
          }
      }
      return null;
  }

  buscar(Numero)
  {
      for(let i=0;i<this.datos.length; i++){
          if (this.datos[i].celular==Numero) {
              return this.datos[i];
          }
      }
      return null;

  }
}

let persona=new Directorio();

let nuevo = new Persona('111','Alan',10);
persona.agreagar(nuevo);

nuevo = new Persona('222','Beto',20);
persona.agreagar(nuevo);

nuevo = new Persona('333','Carlos',30);
persona.agreagar(nuevo);

nuevo = new Persona('444','David',40);
persona.agreagar(nuevo);

nuevo = new Persona('555','Efrain',50);
persona.agreagar(nuevo);


document.write(persona.listar());

let buscado = persona.buscar(444);
document.write("<b>Se encontro:<b/>" + "<br>" + buscado.info());

