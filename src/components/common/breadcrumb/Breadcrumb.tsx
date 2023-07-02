import { Images } from 'assets/images';

const Breadcrump = () => {
  return (
    <div className="flex items-center">
      <img src={Images.HomeIcon} alt="Home" />
      <img className="breadcrumbArrow" src={Images.BreadcrumbArrow} alt="Inno Breadcrumb Arrow" />
      <span className="greySmallContent">Offers</span>
      <img className="breadcrumbArrow" src={Images.BreadcrumbArrow} alt="Inno Breadcrumb Arrow" />
      <span className="greySmallContent font-semibold">Intelligent Finite Elements in Structural mechanics</span>
    </div>
  );
};

export default Breadcrump;
