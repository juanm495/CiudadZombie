var Jugador = {

  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  mover: function(movX,movY,tecla){
    var aux = this.ancho
    this.alto = this.ancho

    switch (tecla) {
      case "arriba":
        this.sprite = 'imagenes/auto_rojo_arriba.png'
        break;
      case "abajo":
      this.sprite = 'imagenes/auto_rojo_abajo.png'
        break;
      case "izq":
      this.sprite = 'imagenes/auto_rojo_izquierda.png'
        break;
      case "der":
      aux = this.alto
      this.sprite = 'imagenes/auto_rojo_derecha.png'
        break;
 
      default:
        break;
    }

    if(tecla == "arriba" || tecla == "abajo"){
      this.ancho = 15;
      this.alto = 30;
    }else if(tecla == 'der'|| tecla == "izq" ){
      this.ancho = 30;
      this.alto = 15;
    }

    this.x = this.x + movX;

    this.y = this.y + movY;
  },
  perderVidas: function(cantVidas){
   this.vidas -= cantVidas;
  }

}
