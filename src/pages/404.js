
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
let Custom404 = () => {
  return (
    <>
      <Navbar1 showBlue={true} />
        <div className={"h-[80vh] mt-32 flex justify-center items-center"}>
          <img
            className={"h-[40rem]"}
            src={"/assets/pageNotFoundImg.svg"}
            alt="Page not Found"
          />
        </div>
      <Footer1 />
    </>
  );
};

export default Custom404;
