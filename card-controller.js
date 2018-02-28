function CardController(){
  var cardService = new CardService()

  function drawCards(){
    var cardsElem = document.getElementById('cards')
    var cardTemplate = ''
    var cards = cardService.getCards()

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      var random = Math.floor(Math.random() * 3) + 1
      cardTemplate +=`
      <div class="col-6 col-md-3">
          <div class="grad${random} pad">
            <div class="card-header bg-info text-white margin">
              <p>Card ${i+1}</p>
            </div>
            <div class="card-block rgba-green-light text-white">
              <img style="width: 100%" src="${card.img}" alt="">
              <p class="">Health: ${card.health}</p>
            </div>
            <div class="card-footer rgba-grey-light text-white clearfix">
              <i class="ra ra-sword pull-left"> ${card.attack}</i>
              <i class="ra ra-knight-helmet pull-right"> ${card.defense}</i>
            </div>
          </div>
        </div>
      `
    }
    cardsElem.innerHTML = cardTemplate
  }

  cardService.loadCards(drawCards)
}