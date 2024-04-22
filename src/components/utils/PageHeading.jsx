function PageHeading({ pageName, title }) {
  return (
    <div
      className="ht__bradcaump__area"
      data--black__overlay={6}
      style={{
        background:
          "rgba(0, 0, 0, 0) url(images/bg/5.jpg) no-repeat scroll center center / cover",
      }}
    >
      <div className="ht__bradcaump__wrap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bradcaump__inner text-center">
                <h2 className="bradcaump-title">{title}</h2>
                <nav className="bradcaump-inner">
                  <a className="breadcrumb-item" href="/">
                    Home
                  </a>
                  <span className="brd-separetor">-</span>
                  <span className="breadcrumb-item active">{pageName}</span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeading;
