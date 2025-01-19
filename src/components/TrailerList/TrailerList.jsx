import css from "./TrailerList.module.css";
import TrailerItem from "../TrailerItem/TrailerItem";
import { useSelector } from "react-redux";

import Loader from "../Loader/Loader";
import { isLoading } from "../../redux/trailer/selectors";

const TrailerList = ({ filteredTrailers }) => {
  const loading = useSelector(isLoading);
  if (loading) {
    return <Loader />;
  }

  if (filteredTrailers.length === 0) {
    return <p className={css.text}>Sorry, there are no campers!</p>;
  }
  return (
    <ul className={css.list}>
      {filteredTrailers.map((item) => (
        <li className={css.listItem} key={item.id}>
          <TrailerItem trailer={item} />
        </li>
      ))}
    </ul>
  );
};

export default TrailerList;
