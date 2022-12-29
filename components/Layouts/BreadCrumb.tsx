import Breadcrumb from "react-bootstrap/Breadcrumb";
import style from "../../styles/Restuarants.module.css";

export const BreadCrumb = () => {
  return (
    <>
      <Breadcrumb style={{ marginTop: "2rem" }}>
        <Breadcrumb.Item className={style.breadcrumbMain} href="/">
          All
        </Breadcrumb.Item>
        <Breadcrumb.Item className={style.breadcrumbMain} href="/categories">
          Categories
        </Breadcrumb.Item>
        <Breadcrumb.Item className={style.breadcrumbLast} active>
          Restuarants
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};
