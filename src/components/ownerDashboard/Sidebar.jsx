import { Image, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
const { Sider } = Layout;
import logo from "../../assets/images/logo.png";
import avater from "../../assets/images/otpimg.png";
import Swal from "sweetalert2";
// eslint-disable-next-line react/prop-types
const Sidebar = ({ collapsed }) => {

    const handleLogout=()=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log out!'
          }).then((result) => {
            if (result.isConfirmed) {
              localStorage.clear();
              window.location.href = "/auth/login";
            }
          })
    }
  return (
    <div className="fixed top-0 left-0 bottom-0 font-popins">
      <Sider
        className=" bg-white h-[100vh] w-[300px]"
        width={250}
        collapsedWidth={80}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div
          className={` ${
            collapsed ? "text-lg" : "text-3xl"
          } font-bold my-10 text-white text-center`}
        >
          <Image src={logo} preview={false} className=" " />
        </div>
        <div className="flex-col items-center justify-between">
          <Menu
      
            mode="inline"
            className="px-2 font-popins bg-white text-black"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6V0H18V6H10ZM0 10V0H8V10H0ZM10 18V8H18V18H10ZM0 18V12H8V18H0Z" fill="#1F3B6B"/>
                    </svg>
                    
                ),
                label: (
                  <Link  className="text-[16px] font-semibold" to={`/dashboard`}>
                    {" "}
                    Dashboard
                  </Link>
                ),
              },
              {
                key: "2",
                icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 12H14V14H8V12ZM6 4H4V6H6V4ZM8 10H14V8H8V10ZM8 6H14V4H8V6ZM6 8H4V10H6V8ZM18 2V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0H16C17.1 0 18 0.9 18 2ZM16 2H2V16H16V2ZM6 12H4V14H6V12Z" fill="#424242"/>
                    </svg>
                    
                ),
                label: <Link className="text-[16px] font-semibold" to={`/dashboard/createnewforms`}>Create Forms</Link>,
              },
              {
                key: "3",
                icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 6C11.4696 6 10.9609 6.21071 10.5858 6.58579C10.2107 6.96086 10 7.46957 10 8C10 8.53043 10.2107 9.03914 10.5858 9.41421C10.9609 9.78929 11.4696 10 12 10C12.5304 10 13.0391 9.78929 13.4142 9.41421C13.7893 9.03914 14 8.53043 14 8C14 7.46957 13.7893 6.96086 13.4142 6.58579C13.0391 6.21071 12.5304 6 12 6ZM12 13C14.67 13 20 14.33 20 17V20H4V17C4 14.33 9.33 13 12 13ZM12 14.9C9.03 14.9 5.9 16.36 5.9 17V18.1H18.1V17C18.1 16.36 14.97 14.9 12 14.9Z" fill="#424242"/>
                    </svg>
                    
                ),
                label: (
                  <Link  className="text-[16px] font-semibold" to={`/dashboard/profile`}>Profile</Link>
                ),
              },
              {
                key: "4",
                icon: (
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V16C20 16.55 19.8042 17.0208 19.4125 17.4125C19.0208 17.8042 18.55 18 18 18H2ZM2 16H18V2H2V16ZM3 14H8V12H3V14ZM12.55 12L17.5 7.05L16.075 5.625L12.55 9.175L11.125 7.75L9.725 9.175L12.55 12ZM3 10H8V8H3V10ZM3 6H8V4H3V6Z" fill="#424242"/>
                    </svg>
                    
                ),
                label: <Link className="text-[16px] font-semibold" to={`/dashboard/feedbackresult`}>Feedback result</Link>,
              },
             
            ]}
          />
          <div className="flex flex-row items-center justify-around min-h-screen    ">
            <div
              className="flex flex-row items-center gap-2 text-white  "
              role="menuitem"
            >
              <img
                src={avater}
                alt="avatar"
                className="w-10 h-10 rounded-2xl"
              />
              <div>
                <h1 className="text-secondaryTitle text-sm font-work font-bold">
                  Jenny
                </h1>
                <span className="text-[#FFFFFFB2] text-xs font-nunito font-semibold">
                  jenny@gmail.com
                </span>
              </div>
            </div>
           <button onClick={handleLogout}> <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 7L9.5 10.25M12.5 7L9.5 4M12.5 7L3 7M7 13L0.5 13L0.500001 1L7 1"
                stroke="#D34635"
              />
            </svg></button>
          </div>
        </div>
      </Sider>
    </div>
  );
};

export default Sidebar;
