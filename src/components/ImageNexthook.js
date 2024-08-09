import Image from 'next/image'

const builderLoader = ({ src, width, height,  quality }) => {
  return `${src}?width=${width}&quality=${quality || 100}&height=${height}`
}

const BuilderImage = (props) => {
  return <Image loader={builderLoader} sizes="100%" style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}  objectFit="cover" {...props} />
}

export default BuilderImage
