import {
  ContactForm,
  ContactInfo,
  PageHeading,
  WhereLocated,
} from "../components";

function ContactPage() {
  return (
    <>
      <PageHeading pageName={"Contact"} title={"Contact"} />
      <section className="htc__contact__area bg__white ptb--150">
        <div className="container">
          <ContactInfo />
          <WhereLocated />
          <ContactForm />
        </div>
      </section>
    </>
  );
}

export default ContactPage;
