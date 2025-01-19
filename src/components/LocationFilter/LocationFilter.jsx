import { useDispatch, useSelector } from "react-redux";
import { selectQuery, setQuery } from "../../redux/location/slice";
import css from "../../components/Filters/Filters.module.css";
import icons from "../../assets/sprite.svg";

const LocationFilter = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);

  const handleFilterChange = ({ target }) => {
    dispatch(setQuery(target.value.toLowerCase().trim()));
  };

  return (
    <div className={css.inputWrapper}>
      <p className={css.filterTitle}>Location</p>
      <input
        className={css.inputLocation}
        type="text"
        placeholder="City"
        value={query}
        onChange={handleFilterChange}
      />
      <svg className={css.icon} width="20" height="20">
        <use href={`${icons}#map`} />
      </svg>
    </div>
  );
};

export default LocationFilter;
