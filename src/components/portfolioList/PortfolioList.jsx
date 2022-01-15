import "./portfolioList.scss";

export default function PortfolioList({
  id,
  title,
  active,
  setSelected,
  setselectedProject,
  setshowingProject,
}) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => {
        setshowingProject(false);
        setSelected(id);
      }}
    >
      {title}
    </li>
  );
}
