import { FortuneTeller } from './FortuneTeller/FortuneTeller';
import './index.styl';


const app = document.querySelector<HTMLDivElement>('.app');

const fortuneTeller = new FortuneTeller(app)
