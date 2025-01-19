import { Form, Formik } from "formik";
import css from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilters } from "../../redux/filters/selectors";
import FilterList from "../FilterList/FilterList";
import LocationFilter from "../LocationFilter/LocationFilter";

const vehicleTypes = [
  {
    iconPath: "van",
    label: "Van",
    value: "panelTruck",
  },
  {
    iconPath: "full",
    label: "Fully Integrated",
    value: "fullyIntegrated",
  },
  {
    iconPath: "alcove",
    label: "Alcove",
    value: "alcove",
  },
];

const featuresTypes = [
  {
    iconPath: "ac",
    label: "AC",
    value: "AC",
  },
  {
    iconPath: "diagram",
    label: "Automatic",
    value: "automatic",
  },
  {
    iconPath: "cup-hot",
    label: "Kitchen",
    value: "kitchen",
  },
  {
    iconPath: "tv",
    label: "TV",
    value: "TV",
  },
  {
    iconPath: "water",
    label: "Bathroom",
    value: "bathroom",
  },
];

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  return (
    <div className={css.filterWrapper}>
      <LocationFilter />
      <Formik
        initialValues={{
          form: filters.form,
          features: filters.features,
        }}
        onSubmit={(values) => {
          dispatch(changeFilter(values));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <p className={css.filterTitle}>Filters</p>
            <FilterList
              filters={featuresTypes}
              groupName={"Vehicle equipment"}
              group={"features-group"}
              name={"features"}
              type={"checkbox"}
            />

            <FilterList
              filters={vehicleTypes}
              groupName={"Vehicle type"}
              group={"type-group"}
              name={"form"}
              type={"radio"}
            />

            {errors.bodyType && touched.bodyType ? (
              <div className={css.error}>{errors.bodyType}</div>
            ) : null}

            <button className={css.searchBtn} type="submit">
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Filters;
