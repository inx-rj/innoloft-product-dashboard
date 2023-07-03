import { Images } from 'assets/images';
import Breadcrump from 'components/common/breadcrumb/Breadcrumb';
import Button from 'components/common/button/Button';
import LeftMenuCard from 'components/dashboard/LeftMenuCard';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  console.log({ productId });
  return (
    <div className="md:container grid md:grid-cols-3 gap-[30px] p-2.5 md:p-0 md:px-[55px] mt-5">
      <div className="hidden md:block">
        <LeftMenuCard />
      </div>
      <div className="col-span-2">
        <div className="flex items-center">
          <Breadcrump />
          <Button customClass='ml-auto' name="Edit" value="Edit" handleOnClick={() => console.log({ productId })} />
        </div>
        <div className="card border border-grey-card-border rounded mt-7">
          <div className="flex items-center">
            <img src={Images.Profile} alt="Profile Avatar" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h2 className="text-lg font-bold">Sven Pietsch</h2>
              <p className="text-gray-500">Innoloft GmbH</p>
            </div>
          </div>
          <div className="p-5">
            <h1>Title</h1>
            <p className="greySmallContent mt-2.5">Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
