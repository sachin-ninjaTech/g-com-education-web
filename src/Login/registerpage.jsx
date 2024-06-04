import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Login/css/index.css";
// import Image from "../Login/img/bg-img.jpg";
import Logoimg from "../Login/img/transparent-logo.svg";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-solid-svg-icons";

const RegisterPage = () => {
  return (
    <div className="container-fluid p-0">
      <div className="grid">
        <div className="row g-0 d-flex justify-content-between">
          <div className="col-md-6">
            <div className="image-container">
              {/* <img
                src={Image}
                alt="bg-img"
                className="img-fluid opacity-100 img-set"
              /> */}
              <img src={Logoimg} alt="Logo" className="logo-image" />
              <p className="logo-text ">
                Explore the world around you with us with comfortable and
                quality services, let's join immediately and get the benefits
              </p>
            </div>
          </div>

          <div className="col-md-6 ">
            <div className="middlewar">
              <h3 className="headh3">CREATE-AN-ACCOUNT</h3>

              <Form className="form_input">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{ opacity: 1 }}>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label style={{ opacity: 1 }}>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label style={{ opacity: 1 }}>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="I have read and agree to the terms & conditions"
                    style={{ opacity: 1 }}
                  />
                </Form.Group>

                {/* <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block btn-witdh "
                >
                  SIGN IN
                </button> */}
                <button type="submit" class="btn btn-primary btn-block mb-3">
                  Register Now
                </button>
              </Form>
              <p
                style={{
                  textAlign: "center",
                  marginTop: 30,
                  color: "#AAAAAA",
                  opacity: 1,
                }}
              >
                Or sign with
              </p>
              <div className="row d-flex justify-content-center justify-content-evenly">
                {/* <div className="col-md-3 btn-mediadiv">
                  <button className="btn bg-transparent size=lg media-btn">
                    Facebook
                  </button>
                </div>
                <div className="col-md-3 btn-mediadiv">
                  <button className="btn bg-transparent media-btn">
                    Google
                  </button>
                </div> */}

                <div className="col-md-6 btn-mediadiv">
                  <button className="btn bg-transparent btn-lg media-btn">
                    <i
                      className="fa-brands fa-facebook"
                      style={{
                        color: "blue",
                        fontSize: 16,
                        display: "inline",
                      }}
                    ></i>
                    &nbsp; Facebook
                  </button>
                </div>
                <div className="col-md-6 btn-mediadiv">
                  <button className="btn bg-transparent btn-lg media-btn">
                    <i
                      className="fab fa-google fa-1x"
                      style={{
                        background:
                          "conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                        WebkitTextFillColor: "transparent",
                      }}
                    ></i>
                    &nbsp; Google
                  </button>
                </div>
                <p
                  style={{
                    textAlign: "center",
                    color: "#333333",
                    marginTop: 10,
                  }}
                >
                  Do you have account? <span style={{fontWeight:900}}>Sign in</span>                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
