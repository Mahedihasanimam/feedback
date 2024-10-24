import { useState } from "react";
import {
  Menu,
  Drawer,
  Image,
} from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import profile from "../../assets/images/profile.png";
// import gloval from "/public/icons/gloval.svg";
// import user from "/public/icons/user.svg";

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

//   const profileMenu = (
//     <Menu style={{ width: 200, backgroundColor: "#060000", color: "#ffffff" }}>
//       <Menu.Item key="1">
//         <Link to="/auth/GuestLogin"> Guest Log in</Link>
//       </Menu.Item>
//       <Menu.Item key="2">
//         <Link to="/auth/OwnerLogin">Owner Log in</Link>
//       </Menu.Item>
//       <Menu.Item key="3">
//         <Link to="/Bookyourstay">Book your stay</Link>
//       </Menu.Item>
//       <Menu.Item key="4">
//         <Link to="/FAQ">FAQ</Link>
//       </Menu.Item>
//       <Menu.Item key="5">
//         {isOwner ? (
//           <Link to="/Profile">My Profile</Link>
//         ) : (
//           <Link to="/ownerProfile">Owner profile</Link>
//         )}
//       </Menu.Item>
//     </Menu>
//   );

  return (
    <div className="bg-[#F4F4F4]">
      <nav className="w-full p-4  flex justify-between items-center">
        {/* Left Side: Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img width={80} height={80} src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Middle: Navigation Links (Hidden on small screens) */}
        <div className="hidden w-full lg:flex items-center justify-center space-x-2 px-2">
          <ul className="space-x-2 list-none flex items-center gap-6 text-[16px] font-bold  py-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/companylist">Company List</Link>
            </li>
          </ul>
        </div>

        {/* Right Side: Buttons (Hidden on small screens) */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className=" text-white flex items-center  space-x-4">
            <Link to="/notification" className="text-white ">
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
            <div className="pb-6">
              <Image
                preview={false}
                src={profile}
                alt="user"
                width={40}
                height={40}
                className="mt-4"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#424242]">George</h1>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <MenuOutlined
            className="text-2xl"
            onClick={() => setDrawerVisible(true)}
          />
        </div>

        {/* Drawer for Mobile Menu */}
        <Drawer
          className="flex-col justify-between"
          title={
            <div>
              <img width={80} height={80} src={logo} alt="Logo" />
            </div>
          }
          placement="left"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
        >
          <ul className="space-y-3 py-4 min-h-[calc(100vh-164px)] ">
            <li>
              <Link className="flex items-center space-x-2" to="/terms">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.20903 12.324H4.40103C3.82203 12.324 3.35303 12.794 3.35303 13.372V20.202C3.35303 20.78 3.82303 21.25 4.40103 21.25H6.21003C6.79003 21.25 7.25903 20.78 7.25903 20.201V13.372C7.25876 13.0939 7.14816 12.8272 6.95149 12.6305C6.75482 12.4339 6.48816 12.3233 6.21003 12.323M12.904 2.75H11.096C10.516 2.75 10.047 3.22 10.047 3.799V20.2C10.047 20.78 10.517 21.249 11.097 21.249H12.904C13.484 21.249 13.953 20.779 13.953 20.2V3.8C13.953 3.22 13.483 2.751 12.903 2.751M19.599 7.927H17.79C17.21 7.927 16.741 8.397 16.741 8.977V20.2C16.741 20.78 17.211 21.249 17.79 21.249H19.598C19.8762 21.2487 20.1428 21.1381 20.3395 20.9415C20.5362 20.7448 20.6468 20.4781 20.647 20.2V8.976C20.647 8.396 20.177 7.927 19.597 7.927"
                    stroke="#424242"
                    stroke-width="1.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span>Your Survey</span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center space-x-2" to="/terms">
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 15H9V9H7V15ZM8 7C8.28333 7 8.521 6.904 8.713 6.712C8.905 6.52 9.00067 6.28267 9 6C8.99933 5.71733 8.90333 5.48 8.712 5.288C8.52067 5.096 8.28333 5 8 5C7.71667 5 7.47933 5.096 7.288 5.288C7.09667 5.48 7.00067 5.71733 7 6C6.99933 6.28267 7.09533 6.52033 7.288 6.713C7.48067 6.90567 7.718 7.00133 8 7ZM8 20C5.68333 19.4167 3.77067 18.0873 2.262 16.012C0.753334 13.9367 -0.000666225 11.6327 4.41696e-07 9.1V3L8 0L16 3V9.1C16 11.6333 15.246 13.9377 13.738 16.013C12.23 18.0883 10.3173 19.4173 8 20Z"
                    fill="#424242"
                  />
                </svg>

                <span>Privacy Policy</span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center space-x-2" to="/terms">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 19.6448C10.649 18.6938 9.085 18.0878 7.445 17.8838C6.28185 17.6475 5.09682 17.5358 3.91 17.5508C3.75814 17.5521 3.60752 17.5233 3.46684 17.4661C3.32616 17.4089 3.1982 17.3244 3.09035 17.2175C2.98251 17.1106 2.8969 16.9834 2.83849 16.8432C2.78007 16.703 2.74999 16.5526 2.75 16.4008L2.771 5.50777C2.77036 5.21549 2.88103 4.93394 3.08053 4.72033C3.28002 4.50672 3.55336 4.37709 3.845 4.35777C5.05314 4.33376 6.2603 4.44173 7.445 4.67977C9.08322 4.89113 10.646 5.49565 12 6.44177M12 19.6448V6.44177M12 19.6448C13.351 18.6938 14.915 18.0878 16.555 17.8838C17.7182 17.6475 18.9032 17.5358 20.09 17.5508C20.2419 17.5521 20.3925 17.5233 20.5332 17.4661C20.6738 17.4089 20.8018 17.3244 20.9096 17.2175C21.0175 17.1106 21.1031 16.9834 21.1615 16.8432C21.2199 16.703 21.25 16.5526 21.25 16.4008L21.228 5.50777C21.2287 5.21566 21.1181 4.93424 20.9188 4.72066C20.7196 4.50707 20.4465 4.37733 20.155 4.35777C18.9469 4.33376 17.7397 4.44173 16.555 4.67977C14.9168 4.89113 13.354 5.49565 12 6.44177"
                    stroke="#424242"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Terms & Conditions</span>
              </Link>
            </li>
          </ul>
          <div className="flex flex-col space-y-2 ">
            <button
              className=" font-semibold text-[16px] p-5 flex items-center  space-x-4 text-red-500 "
              type="primary"
            >
              {" "}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 21C4.45 21 3.97933 20.8043 3.588 20.413C3.19667 20.0217 3.00067 19.5507 3 19V5C3 4.45 3.196 3.97933 3.588 3.588C3.98 3.19667 4.45067 3.00067 5 3H12V5H5V19H12V21H5ZM16 17L14.625 15.55L17.175 13H9V11H17.175L14.625 8.45L16 7L21 12L16 17Z"
                  fill="#424242"
                />
              </svg>
              <span>Logout</span>
            </button>
          </div>
        </Drawer>
      </nav>
    </div>
  );
};

export default Navbar;
