import { useSelector } from "react-redux";
import css from "./DetailedInfo.module.css";
import { selectTrailer } from "../../redux/trailer/selectors";
import icons from "../../assets/sprite.svg";
import clsx from "clsx";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import TrailerFeatures from "../TrailerFeatures/TrailerFeatures";
import TrailerReviews from "../TrailerReviews/TrailerReviews";

const activeLink = ({ isActive }) => {
  return clsx(css.detailsLink, isActive && css.active);
};

const DetailedInfo = () => {
  const trailer = useSelector(selectTrailer);
  return (
    <>
      <h2 className={css.nameTitle}>{trailer.name}</h2>
      <div className={css.ratingWrapper}>
        <svg className={css.icon} width="16" height="16">
          <use href={`${icons}#rating`} />
        </svg>
        <p className={css.reviews}>
          {trailer.rating} ({trailer.reviews ? trailer.reviews.length : 0}{" "}
          Reviews)
        </p>
        <svg className={css.icon} width="20" height="20">
          <use href={`${icons}#map`} />
        </svg>
        {trailer.location}
      </div>
      <p className={css.nameTitle}>{`€ ${Number(trailer.price).toFixed(2)}`}</p>

      {trailer.gallery.length > 0 ? (
        <ul className={css.gallery}>
          {trailer.gallery.map((item, index) => (
            <li key={index}>
              <img
                className={css.photo}
                src={item.thumb}
                alt={`Gallery image ${index + 1}`}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No images available.</p>
      )}
      <p className={css.itemDescription}>{trailer.description}</p>

      <ul className={css.details}>
        <li className={css.detailsItem}>
          <NavLink className={activeLink} to="features">
            Features
          </NavLink>
        </li>
        <li className={css.detailsItem}>
          <NavLink className={activeLink} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="" element={<Navigate to="features" />} />
        <Route path="features" element={<TrailerFeatures />}></Route>
        <Route path="reviews" element={<TrailerReviews />}></Route>
      </Routes>
    </>
  );
};

export default DetailedInfo;
