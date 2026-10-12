import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import fifa23 from '../../assets/images/fifa23.png'
import streetFighter from '../../assets/images/streetFighter.png'

const promocoes: Game[] = [
  {
    title: 'Resident Evil 4 - Remake',
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: resident,
    infos: ['R$ 199,90', '10%'],
    system: 'Windows',
    id: 1
  },
  {
    title: 'Resident Evil 4 - Remake',
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: resident,
    infos: ['R$ 199,90', '10%'],
    system: 'Windows',
    id: 2
  },
  {
    title: 'FIFA 23',
    category: 'Esporte',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    image: fifa23,
    infos: ['R$ 99,90', '-50%'],
    system: 'Windows',
    id: 3
  },
  {
    title: 'FIFA 23',
    category: 'Esporte',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    image: fifa23,
    infos: ['R$ 99,90', '-50%'],
    system: 'Windows',
    id: 4
  }
]

const emBreve: Game[] = [
  {
    title: 'Diablo 4',
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    image: diablo,
    infos: ['05/04'],
    system: 'Windows',
    id: 5
  },
  {
    title: 'Star Wars Jedi Survivor',
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    image: starWars,
    infos: ['05/04'],
    system: 'Windows',
    id: 6
  },
  {
    title: 'Street Fighter 6',
    category: 'Luta',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    image: streetFighter,
    infos: ['05/04'],
    system: 'Windows',
    id: 7
  },
  {
    title: 'The Legend of Zelda - TOK',
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    image: zelda,
    infos: ['05/04'],
    system: 'Switch',
    id: 8
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em Breve" background="black" />
  </>
)

export default Home
