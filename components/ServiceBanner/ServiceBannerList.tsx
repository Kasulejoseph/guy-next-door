import { ServiceBanner } from "./Banner";
export const ServiceBannerList = () => {
  return (
    <>
      <ul className="row" style={{ listStyle: "None" }}>
        <li className="col">
          <ServiceBanner type="Products Type" />
        </li>
        <li className="col">
          <ServiceBanner type="Services Type" />
        </li>
      </ul>
    </>
  );
};
