import Section from '../Section'

import zelda from '../../assets/images/zelda.png'
import { Item, Items } from './styles'

const Gallery = () => (
  <Section background="black" title="Galeria">
    <Items>
      <Item>
        <img src={zelda} alt="" />
      </Item>
      <Item>
        <img src={zelda} alt="" />
      </Item>
      <Item>
        <img src={zelda} alt="" />
      </Item>
      <Item>
        <img src={zelda} alt="" />
      </Item>
    </Items>
  </Section>
)

export default Gallery
