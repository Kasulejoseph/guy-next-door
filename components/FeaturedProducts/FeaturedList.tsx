import { FeaturedCard } from "./FeaturedCard";
export const FeaturedList = () => {
  return (
    <>
      <ul className="row" style={{ listStyle: "None" }}>
        <h3 className="mt-3">Featured Services</h3>
        {["Mama Naki Kafunda", "Shopwise Supermarket", "JB Unisex Salon", "Art"].map((type) => (
          <li key={type} className="col">
            {" "}
            <FeaturedCard type={type} />{" "}
          </li>
        ))}
      </ul>
    </>
  );
};
