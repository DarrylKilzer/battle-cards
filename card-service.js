function CardService() {

  var api = axios.create({
    baseURL: 'https://inspire-server.herokuapp.com/cards',
    timeout: 1000,
  })

  var game = {}

  this.getCards = function(){
    return cards
  }

  this.loadCards = function(cb){
    api().then(res =>{
      game = res.data[0]
      cards = game.players[0].hand
      console.log(game)
      cb()
    })
  }

}