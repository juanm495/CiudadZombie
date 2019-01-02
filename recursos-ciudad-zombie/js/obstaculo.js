var Obstaculo = function (sprite, x, y, ancho, alto, potencia) {
  this.sprite = sprite;
  this.x = x;
  this.y = y;
  this.ancho = ancho;
  this.alto = alto;
  this.potencia = potencia

  Obstaculo.prototype.chocar = function(Jugador){
    Jugador.perderVidas(this.potencia);
  }
  }


