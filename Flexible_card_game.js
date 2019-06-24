class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
    static get SPADES() {
        return 'Spades';
    }
    static get CLUBS() {
        return 'Clubs';
    }
    static get DIAMONDS() {
        return 'Diamonds';
    }
    static get HEARTS() {
        return 'Hearts';
    }
    static get SUITS() {
        return [Card.SPADES, Card.CLUBS, Card.DIAMONDS, Card.HEARTS];
    }
    get face_card() {
        return this.rank > 10;
    }
    toString() {
        return this.getRankLabel(this.rank) + ' of ' + this.suit;
    }
    valueOf() {
        return this.rank;
    }
    getRankLabel(rank) {
        switch (rank) {
            case 11:
                return 'Jack';
            case 12:
                return 'Queen';
            case 13:
                return 'King';
            case 1:
                return 'Ace';
            default:
                return rank;
        }
    }
}

class Deck {
    constructor() {
        const deckFactory = new DeckFactory()
        this.cards = deckFactory.getNewDeckOfCards();
    }
    count() {
        return this.cards.length;
    }
    draw(numberOfCardsToDraw) {
        const startPosition = this.cards.length - numberOfCardsToDraw;
        const cardsDrawn = this.cards.splice(startPosition, this.cards.length);
        return cardsDrawn;
    }
    shuffle() {
        this.cards = this.cards.sort(() => 0.5 - Math.random());
    }
    showDeck() {
        return this.cards;
    }
}

class DeckFactory {
    getNewDeckOfCards() {
        var cards = [];
        for (var suit in Card.SUITS) {
            for (var i = 1; i < 14; i++) {
                cards.push(new Card(Card.SUITS[suit], i));
            }
        }
        return cards;
    }
}


//
// Faro-In shuffle Deck control
//
class MagiciansDeck extends Deck {
    constructor(shuffleStrategy) {
        super();
        this.shuffleStrategy = shuffleStrategy;
    }
    shuffle() {
        let shuffleCount = 0;
        while (shuffleCount < 26) {
            this.cards = this.shuffleStrategy.shuffle(this.cards);
            shuffleCount++;
        }
    }
}

class ShuffleFaroStrategy {
    shuffle(cards) {
        if (!this.canBeFaroShuffled(cards)) {
            throw 'You dare give me a deck that cannot be faro in shuffled?!';
        }
        const splitDeck = this.splitDeckInHalf(cards);
        return this.combineSplitDeck(splitDeck);
    }
    canBeFaroShuffled(cards) {
        return cards.length % 2 === 0;
    }
    splitDeckInHalf(cards) {
        const firstHalf = this.getFirstHalf(cards);
        const secondHalf = [...cards];
        return { firstHalf, secondHalf };
    }
    getFirstHalf(cards) {
        return cards.splice(0, cards.length / 2);
    }
    combineSplitDeck({ firstHalf, secondHalf }) {
        const combinedDeck = [];
        for (var i = 0; i < 26; i++) {
            combinedDeck.push(secondHalf[i]);
            combinedDeck.push(firstHalf[i]);
        }
        return combinedDeck;
    }
}

/// faro shuffle in play
// const faroInShuffle = new ShuffleFaroStrategy();
// const magiciansDeck = new MagiciansDeck(faroInShuffle);

// console.log('deck before shuffle: ', magiciansDeck.showDeck());
// magiciansDeck.shuffle();
// Test.expect('just to split the logs', 'just to split the logs');
// console.log('deck after shuffle: ', magiciansDeck.showDeck());

// Test.expect('just to split the logs', 'just to split the logs');
// console.log('deck before shuffle: ', magiciansDeck.showDeck());
// magiciansDeck.shuffle();
// Test.expect('just to split the logs', 'just to split the logs');
// console.log('deck after shuffle: ', magiciansDeck.showDeck());