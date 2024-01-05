import BasicTabs from "./Tabs";

function About() {
  return (
    <>
      <div style={{ marginTop: '0rem', width: '100%', height: '10px' }} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div>
            <h2 className="main-title about-h2">ABOUT US</h2>
            <p className="main-p">
              <strong>DiJen Foods</strong> established in 2019 under single proprietorship evolved into DiJen Foods Pvt Ltd in 2023. As a first step, we intend to open Asian Stories, a restaurant serving Pan Asian cuisine, with the goal of growing the brand utilizing the franchise model.
            </p>
            <br></br><br></br>
            <BasicTabs />
            <br></br>
            <h3>Join Us</h3>
            <p className="main-p">Redefine Pan Asian cuisine with AI. Experience the fusion of tradition and technology at our restaurant.</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
