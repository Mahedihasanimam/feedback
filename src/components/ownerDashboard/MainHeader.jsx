import { Button, Image, Layout, theme } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/profile.png";
const { Header } = Layout;

const MainHeader = ({ setCollapsed, collapsed }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const location = useLocation();

  // Define a function to get the title based on the path
  const getTitle = (pathname) => {
    switch (pathname) {
      case "/":
        return "Hello, Amazon_bd";
      case "/createnewforms":
        return "Create forms";
      case "/profile":
        return "Our My Profile";
      case "/feedbackresult":
        return "Feedback result for created forms";
      default:
        return "Hello, Amazon_bd";
    }
  };

  const currentTitle = getTitle(location.pathname);

  return (
    <div>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        <div className=" flex justify-between pr-4  font-popins">
          <Button
            type="text"
            icon={
              collapsed ? (
                <RxHamburgerMenu className="  -ml-8 w-8 h-8 " />
              ) : (
                <RxHamburgerMenu className="  -ml-8 w-8 h-8 " />
              )
            }
            onClick={() => setCollapsed(!collapsed)}
            className="  "
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div className=" flex justify-between items-center w-full">
            <div className=" text-white text-[34px] font-bold">
              <span className="text-[#1F3B6B] text-[28px] font-bold">
                {currentTitle}
              </span>
            </div>
            <div className=" text-white flex items-center  space-x-4">
              <Link to="/notification" className="text-white">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="20" fill="#D2D8E1" />
                  <path
                    d="M20.0002 10C18.1437 10 16.3632 10.7375 15.0504 12.0503C13.7377 13.363 13.0002 15.1435 13.0002 17V20.528C13.0003 20.6831 12.9644 20.8362 12.8952 20.975L11.1782 24.408C11.0943 24.5757 11.0547 24.7621 11.0631 24.9494C11.0715 25.1368 11.1277 25.3188 11.2263 25.4783C11.3249 25.6379 11.4626 25.7695 11.6264 25.8608C11.7902 25.9521 11.9747 26 12.1622 26H27.8382C28.0257 26 28.2101 25.9521 28.3739 25.8608C28.5377 25.7695 28.6754 25.6379 28.774 25.4783C28.8726 25.3188 28.9288 25.1368 28.9372 24.9494C28.9457 24.7621 28.906 24.5757 28.8222 24.408L27.1062 20.975C27.0366 20.8362 27.0003 20.6832 27.0002 20.528V17C27.0002 15.1435 26.2627 13.363 24.9499 12.0503C23.6372 10.7375 21.8567 10 20.0002 10ZM20.0002 29C19.3795 29.0003 18.774 28.8081 18.2672 28.4499C17.7603 28.0917 17.3771 27.5852 17.1702 27H22.8302C22.6233 27.5852 22.24 28.0917 21.7332 28.4499C21.2263 28.8081 20.6208 29.0003 20.0002 29Z"
                    fill="#1F3B6B"
                  />
                </svg>
              </Link>
              <div>
                <Image
                  preview={false}
                  src={logo}
                  alt="user"
                  width={40}
                  height={40}
                  className="mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
};

export default MainHeader;
