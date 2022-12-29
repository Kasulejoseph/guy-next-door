import Breadcrumb from "react-bootstrap/Breadcrumb";
import style from "../../styles/Restuarants.module.css";

interface breadcrumbprops {
  category: string | "";
}

export const BreadCrumb = ({ category }: breadcrumbprops) => {

  return (
    <>
      <Breadcrumb style={{ marginTop: "2rem" }}>
        <Breadcrumb.Item className={style.breadcrumbMain} href="/">
          All
        </Breadcrumb.Item>
        <Breadcrumb.Item
          active={category ? false : true}
          className={style.breadcrumbMain}
          href="/categories"
        >
          Categories
        </Breadcrumb.Item>
        {category ? (
          <Breadcrumb.Item className={style.breadcrumbLast} active={true}>
            {category}
          </Breadcrumb.Item>
        ) : (
          ""
        )}
      </Breadcrumb>
    </>
  );
};
