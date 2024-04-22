import {
  PageHeading,
  Offer,
  ServiceInner,
  MyTeam,
  Testimonial,
  Newsletter,
} from "../components";

function ServicesPage() {
  return (
    <>
      <PageHeading pageName={"Services"} title={"Services"} />

      <Offer />

      <ServiceInner />

      <MyTeam />

      <Testimonial />

      <Newsletter />
    </>
  );
}

export default ServicesPage;
