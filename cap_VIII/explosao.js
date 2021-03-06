const SOM_EXPLOSAO = new Audio();
SOM_EXPLOSAO.src = 'sound/explosao.mp3';
SOM_EXPLOSAO.volume = 0.4;
SOM_EXPLOSAO.load();

function Explosao(context, imagem, x, y){
    this.context = context;
    this.imagem = imagem;
    this.spriteseet = new Spritesheets(context, imagem, 1, 5);
    this.spriteseet.intervalo = 50;
    this.x = x;
    this.y = y;
    this.animando = false;

    var explosao = this;
    this.fimDaExplosao = null;
    
    this.spriteseet.fimDoCiclo = () =>{
        explosao.animacao.excluirSprite(explosao);

        if(explosao.fimDaExplosao) explosao.fimDaExplosao();
    }

    SOM_EXPLOSAO.currentTime = 0.0;
    SOM_EXPLOSAO.play();
}

Explosao.prototype = {
    atualizar(){

    },
    desenhar(){
        this.spriteseet.desenhar(this.x, this.y);
        this.spriteseet.proximoQuadro();
    }
}