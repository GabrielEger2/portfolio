import Image from 'next/image'
import Block from './Block'

const VerticalImage = () => (
  <Block className="col-span-4 row-span-6">
    <Image
      src="/imgs/home/verticalPhoto.jpg"
      alt="Gabriel"
      className="w-full h-full object-cover card"
      width={650}
      height={870}
    />
  </Block>
)

const MapBlock = () => (
  <Block className="col-span-4 row-span-3 col-start-5 row-start-4">
    <Image
      src="/imgs/home/globeImage.jpg"
      alt="Gabriel"
      className="w-full h-full object-cover card"
      width={600}
      height={600}
    />
  </Block>
)

const SquarePhoto = () => (
  <Block className="col-span-3 row-span-1 p-0">
    <Image
      src="/imgs/home/squarePhoto.jpg"
      alt="Gabriel"
      className="w-full h-full object-cover card"
      width={600}
      height={600}
    />
  </Block>
)

export { MapBlock, SquarePhoto, VerticalImage }

