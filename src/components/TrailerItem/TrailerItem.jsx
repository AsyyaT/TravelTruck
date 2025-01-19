import { Link } from "react-router-dom";
import css from "./TrailerItem.module.css";
import icons from "../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectFavourites } from "../../redux/favourites/selectors";
import { toggleFavourite } from "../../redux/favourites/slice";
import FeaturesList from "../FeaturesList/FeaturesList";

const TrailerItem = ({ trailer }) => {
  const dispatch = useDispatch();
  const favourites = useSelector(selectFavourites);
  const isFavourite =
    Array.isArray(favourites) && favourites.includes(trailer.id);

  const handleToggleFavourite = () => {
    dispatch(toggleFavourite(trailer.id));
  };
  return (
    <div className={css.itemWrapper}>
      {trailer.gallery?.[0]?.thumb && (
        <img
          className={css.photo}
          src={`${trailer.gallery[0].thumb}`}
          width="292"
          alt={`${trailer.name}`}
        />
      )}
      <div className={css.infoWrapper}>
        <div className={css.nameWrapper}>
          <h2 className={css.nameTitle}>{trailer.name}</h2>
          <div className={css.favouriteWrapper}>
            <p>{`€ ${Number(trailer.price).toFixed(2)}`}</p>
            <svg
              width="26"
              height="24"
              onClick={handleToggleFavourite}
              fill={isFavourite ? "#e44848" : "#101828"}
              cursor="pointer"
            >
              <use href={`${icons}#heart`} />
            </svg>
          </div>
        </div>
        <div className={css.ratingWrapper}>
          <svg width="16" height="16">
            <use href={`${icons}#rating`} />
          </svg>
          <p className={css.reviews}>
            {trailer.rating} ({trailer.reviews.length} Reviews)
          </p>
          <svg width="20" height="20">
            <use href={`${icons}#map`} />
          </svg>{" "}
          {trailer.location}
        </div>
        <p className={css.itemDescription}>
          {`${trailer.description.substring(0, 60)}` + "..."}
        </p>
        <FeaturesList trailer={trailer} />
        <Link
          to={`/catalog/${trailer.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className={css.itemBtn}>
            Show more
          </button>
        </Link>
      </div>
    </div>
  );
};
export default TrailerItem;
