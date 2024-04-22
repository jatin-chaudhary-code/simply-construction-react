function WhereLocated() {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="htc__google__map">
          <h2 className="title__line--5">WHERE WE LOCATED</h2>
          <div className="map__contacts">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  id="gmap_canvas"
                  style={{ width: "100%", height: 470 }}
                  src="https://maps.google.com/maps?q=121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                />
                <a href="https://sites.google.com/view/maps-api-v2/mapv2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhereLocated;
