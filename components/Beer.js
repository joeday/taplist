import PropTypes from "prop-types";
import styles from "./Beer.module.css";
import Image from "next/future/image";
import SlopeSymbol from "./SlopeSymbol";

export default function Beer(props) {
  const {
    tap,
    dateAdded,
    title,
    description,
    ibu,
    abv,
    classification,
    imageName,
  } = props;

  return (
    <section className={styles.beerContainer}>
      <Image
        className={styles.beerImage}
        src={imageName}
        height={305}
        width={296}
        alt={title}
      />
      <div className={styles.contentContainer}>
        <div className={styles.metaTop}>Tap &#35;{tap}</div>
        <div className={styles.beerName}>{title}</div>
        <div className={styles.beerDescription}>{description}</div>
        <div className={styles.metaBottom}>
          <div className={styles.abv}>{abv} ABV</div>
          <div className={styles.ibu}>{ibu} IBU</div>
          <div className={styles.classification}>{SlopeSymbol({classification})}</div>
        </div>
      </div>
    </section>
  );
}

Beer.propTypes = {
  tap: PropTypes.number,
  dateAdded: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  ibu: PropTypes.number,
  abv: PropTypes.string,
  classification: PropTypes.number,
  imageName: PropTypes.string,
};
