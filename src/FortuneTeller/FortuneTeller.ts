import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import 'playing-card';
import './FortuneTeller.styl';



export class FortuneTeller {
    container: HTMLElement;

    constructor(container: HTMLElement) {
        this.container = container;

        this.render();
    }



    render() {
        const element = document.createElement('button')
        element.classList.add('FortuneTeller')
        element.textContent = 'PLAY';
        this.container.appendChild(element);

        const div = document.createElement('div');
        div.classList.add('block-card');
        this.container.appendChild(div);

        const button = document.querySelector('.FortuneTeller');

        button.addEventListener('click', () => {
            
            element.nextElementSibling.remove();

            // div.textContent = '';
            const arrRank = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
            let elRank = Math.floor(Math.random() * arrRank.length);

            const arrSuit = ['D', 'H', 'C', 'S'];
            let elSuit = Math.floor(Math.random() * arrSuit.length);
           
            const div = document.createElement('div');
            div.classList.add('block-card');
            this.container.appendChild(div);

            const playingCard = document.createElement('playing-card');
            playingCard.setAttribute('rank', arrRank[elRank]);
            playingCard.setAttribute('suit', arrSuit[elSuit]);
            div.appendChild(playingCard);


        });

       
    }
}