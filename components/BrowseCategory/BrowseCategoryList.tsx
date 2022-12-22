import { BrowseCategoryCard } from "./BrowseCategoryCard";

export const BrowseCategoryList = () => {
  return (
    <>
      <ul className="row" style={{ listStyle: "None", padding: "0px" }}>
        <h3 className="mt-3">Browse By Category</h3>
        <li className="col">
          <BrowseCategoryCard category="Restuarants" />
        </li>
        <li className="col">
          <BrowseCategoryCard category="Laundry" />
        </li>
        <li className="col">
          <BrowseCategoryCard category="Tours & Travel" />
        </li>
      </ul>
    </>
  );
};
