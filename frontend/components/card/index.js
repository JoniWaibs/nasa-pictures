import Image from 'next/image';
import styles from '../../styles/Home.module.scss'

const blurDataURL = () => `data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==`

const Card = ({picture}) => {
  const { imgSrc, camera: { fullName } } = picture;

  return (
    <div className={styles.picture}>
      <div className={styles.pictureHeader}>
        <p>{fullName}</p>
      </div>
      <div className={styles.imgWrapper}>
        <Image
          src={imgSrc}
          alt="Picture of the author"
          width={200}
          height={200}
          blurDataURL={blurDataURL()}
          placeholder="blur"
        />
      </div>
    </div>
  )
};

export default Card;
