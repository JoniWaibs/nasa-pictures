import Image from 'next/image';
import styles from '../../styles/Home.module.scss'

const Card = ({picture}) => {
  const { roverData : { name }, imgSrc } = picture;

  return (
    <div className={styles.picture}>
      <p>{name}</p>
     <Image
      src={imgSrc}
      alt="Picture of the author"
      width={200}
      height={200}
      blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
      placeholder="blur"
    />
    </div>
  )
};

export default Card;
