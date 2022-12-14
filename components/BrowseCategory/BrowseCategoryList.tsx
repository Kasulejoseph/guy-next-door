import { CategoryCard } from "../Categories/CategoriesCard";

export const BrowseCategoryList = () => {
  return (
    <>
      <ul className="row" style={{ listStyle: "None" }}>
        <h3 className="mt-3">Browse By Category</h3>
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
