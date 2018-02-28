function CardService() {

  var api = axios.create({
    baseURL: 'https://inspire-server.herokuapp.com/cards',
    timeout: 1000,
  })

  var game
  var cards

  // var cards = [
  //   {
  //     name: 'highland sword',
  //     img: 'sword.png',
  //     description: 'A basic sword used for battle.',
  //     attack: 2,
  //     defense: 1,
  //     style: 'highland-sword'
  //   },
  //   {
  //     name: 'elven battle sword',
  //     img: 'sword.png',
  //     description: 'An elegant sword used for battle.',
  //     attack: 2,
  //     defense: 2,
  //     style: 'elven-sword'
  //   },
  //   {
  //     name: 'short battle sword',
  //     img: 'sword.png',
  //     description: 'A short sword used for battle.',
  //     attack: 1,
  //     defense: 3,
  //     style: 'short-sword'
  //   }
  // ]

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