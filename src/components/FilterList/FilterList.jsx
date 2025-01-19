import icons from "../../assets/sprite.svg";
import css from "./FilterList.module.css";
import { Field } from "formik";

const FilterList = ({ filters, groupName, group, name, type }) => {
  return (
    <>
      <h3 className={css.title}>{groupName}</h3>
      <div className={css.groupWrapper} role="group" aria-labelledby={group}>
        {filters.map((filter) => (
          <label key={filter.label}>
            <Field
              type={type}
              name={name}
              value={filter.value}
              className={css.elemTitle}
            />
            <p className={css.filterItem}>
              <svg width="32" height="32">
                <use href={`${icons}#${filter.iconPath}`} />
              </svg>
              {filter.label}
            </p>
          </label>
        ))}
      </div>
    </>
  );
};

export default FilterList;
