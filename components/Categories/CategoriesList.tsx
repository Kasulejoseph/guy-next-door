import { CategoryCard } from "./CategoriesCard";

export const CategoriesList = () => {
  return (
    <>
      <ul className="row" style={{ listStyle: "None", padding: '0px' }}>
        {/* <h3 className="mt-3">All Categories</h3> */}
        {["Restuarants", "Laundry", "Tours & Travel", "Art"].map((category) => (
          <li key={category} className="col">
            {" "}
            <CategoryCard category={category} />{" "}
          </li>
        ))}
      </ul>
    </>
  );
};
