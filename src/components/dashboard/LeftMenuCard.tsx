import { Images } from 'assets/images';

const LeftMenuCard = () => {
  const menuList = [
    {
      title: 'Home',
      icon: Images.HomeIcon
    },
    {
      title: 'Members',
      icon: Images.InnoGroup
    },
    {
      title: 'Organizations',
      icon: Images.InnoOrganization,
      children: []
    }
  ];

  return (
    <div className="card border border-grey-card-border rounded p-6">
      <div className="flex items-center">
        <img src={Images.Profile} alt="Profile Avatar" className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h2 className="text-lg font-bold">Sven Pietsch</h2>
          <p className="text-gray-500">Innoloft GmbH</p>
        </div>
      </div>
      {menuList.map((menuItem, index) => (
        <div className="mt-4 flex items-center gap-3" key={index}>
          <img className="h-4 w-4" src={menuItem.icon} alt="Inno Home" />
          <h3 className="text-lg font-semibold">{menuItem.title}</h3>
          {Object.keys(menuItem).includes('children') && (
            <img className="h-4 w-4 ml-auto invert" src={Images.InnoDownArrow} alt="Inno Down Arrow" />
            // <span className="rotate-90 ml-auto text-lg">&gt;</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default LeftMenuCard;
