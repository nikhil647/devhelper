import "./Navbar.scss";
import Image from "next/image";
import { GithubOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div>
          <Image
            src="/images/dsa.svg"
            alt="Picture of the author"
            width={200}
            height={100}
          />
        </div>
        <div className="spacer" />
        <div className="auth">
          {" "}
          <GithubOutlined style={{ fontSize: "24px" }} />
          <span className="auth-text"> Sign in with Github </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
