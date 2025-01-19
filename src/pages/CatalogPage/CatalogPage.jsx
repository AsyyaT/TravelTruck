import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrailers } from "../../redux/trailer/operations";
import TrailerList from "../../components/TrailerList/TrailerList";
import Filters from "../../components/Filters/Filters";
import css from "./CatalogPage.module.css";
import { selectFilteredTrailers } from "../../redux/filters/selectors";
import { isLoading } from "../../redux/trailer/selectors";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filteredTrailers = useSelector(selectFilteredTrailers);
  const loading = useSelector(isLoading);
  const [visibleCount, setVisibleCount] = useState(4);
  useEffect(() => {
    dispatch(fetchTrailers());
  }, [dispatch]);

  useEffect(() => {
    setVisibleCount(4);
  }, [filteredTrailers]);

  const onClickButton = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <>
      <title>Catalog Page</title>
      <section className={css.catalogContainer}>
        <Filters />
        <TrailerList
          filteredTrailers={filteredTrailers.slice(0, visibleCount)}
        />
      </section>
      {!loading && visibleCount < filteredTrailers.length && (
        <button className={css.searchBtn} type="button" onClick={onClickButton}>
          Load more
        </button>
      )}
    </>
  );
};

export default CatalogPage;
