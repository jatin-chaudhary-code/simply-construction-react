import {
  Mission,
  Newsletter,
  PageHeading,
  Offer,
  MyTeam,
  Testimonial,
} from "../components";

function AboutPage() {
  return (
    <>
      <PageHeading pageName={"About"} title={"About us"} />

      <Mission />

      <Offer />

      <MyTeam />

      <Testimonial />

      <Newsletter />
    </>
  );
}

export default AboutPage;
