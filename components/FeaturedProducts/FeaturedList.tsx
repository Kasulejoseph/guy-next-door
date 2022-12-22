import { FeaturedCard } from "./FeaturedCard";
export const FeaturedList = () => {
  return (
    <>
      <ul className="row" style={{ listStyle: "None", padding: "0px" }}>
        <h3 className="mt-3">Featured Services</h3>
        <li className="col">
          <FeaturedCard type="Mama Naki Kafunda" />
        </li>
        <li className="col">
          <FeaturedCard type="Shopwise Supermarket" />
        </li>
        <li className="col">
          <FeaturedCard type="JB Unisex Salon" />
        </li>
      </ul>
    </>
  );
};
