import Tag from '../Tag'
import { Card, Description, InfosContainer, Title } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <InfosContainer>
      {infos.map((info) => (
        <Tag key={info} size="small">
          {info}
        </Tag>
      ))}
    </InfosContainer>
    <Title>{title}</Title>
    <Tag size="small">{category}</Tag>
    <Tag size="small">{system}</Tag>
    <Description>{description}</Description>
  </Card>
)

export default Product
