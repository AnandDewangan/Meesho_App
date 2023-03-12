import { Container } from "react-bootstrap";
import "./UserProfile.css";
import userBackground from "../../Images/background_user.jpg";
import Footer from "../Footer/Footer";

export default function UserProfile() {
  return (
    <>
    <div style={{marginTop:"10rem"}}></div>
      <Container>
        <div>
          <div className="w-100 userBackgroundImage">
            <div className="userDetails d-flex justify-content-between align-items-center">
              <h3 className="userName">User Name</h3>
              <a href="/logIn">Log Out ➡️</a>
            </div>
            <img src={userBackground} alt="userBackground" width="100%" />
          </div>
        </div>
      </Container>
      <Footer/>
    </>
  );
}
