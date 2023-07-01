import { useEffect, useState } from "react"
import { GET_CONFIGURATIONS } from "redux/actions/config/config.actions";
import { CONFIG_DATA } from "redux/reducers/config/app/app.slice";
import { useAppDispatch, useAppSelector } from "redux/store";
import LoadingSpinner from "./loader/loader";
import { Images } from "assets/images";

const Header = () => {
    const dispatch = useAppDispatch();
    const { loader, configsData } = useAppSelector(CONFIG_DATA);

    const configurationId = 1;

    const [isMobile, setIsMobile] = useState(window.innerWidth);

    const fetchConfigs = (configId: number) => {
        dispatch(GET_CONFIGURATIONS(configId));
    }

    useEffect(() => {
        fetchConfigs(configurationId);
    }, []);

    const handleWindowResize = () => {
        setIsMobile(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    return (
        loader ? <LoadingSpinner /> :
            (
                <header className="header" style={{ backgroundColor: configsData.mainColor }}>
                    <nav className={`navItems ${isMobile < 768 && 'justify-start px-5'}`}>
                        <div className="headerLogo">
                            <img className="object-contain w-full h-full" src={configsData.logo} alt="InnoLoft" />
                        </div>
                        {isMobile > 768 && (
                            <>
                                <div className="searchBar">
                                    <input
                                        type="search"
                                        placeholder="Enter interests, keyword, company name, etc."
                                        name="search"
                                        aria-label="Search"
                                    />
                                    <img className="pl-2" src={Images.Search} alt="Search" />
                                </div>
                                <div className="headerRightMenu">
                                    <img src={Images.InnoMessenger} alt="Inno Messenger" />
                                    <h4 className="flex gap-2 items-center">EN
                                        <img className="h-4 w-4" src={Images.InnoDownArrow} alt="Inno Down Arrow" />
                                    </h4>
                                    <img src={Images.InnoNotification} alt="Inno Down Arrow" />
                                    <p className="profileIcon">
                                        <img src={configsData.logo} alt="Profile Logo" />
                                    </p>
                                    <img className="h-4 w-4" src={Images.InnoDownArrow} alt="Inno Down Arrow" />
                                </div>
                            </>
                        )}
                    </nav>
                </header >
            )
    )
}

export default Header
