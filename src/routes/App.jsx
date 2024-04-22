import "./App.css";
import { Header, Footer } from "../components";

import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import { WebsiteContext } from "../store/Website-Store";

function App() {
  const [blogData, setBlogData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [teamData, setTeamData] = useState([]);

  const fetchBlogs = () => {
    fetch("http://localhost:3000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogData(data));
  };

  const fetchServices = () => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  };

  const fetchTeam = () => {
    fetch("http://localhost:3000/team")
      .then((res) => res.json())
      .then((data) => setTeamData(data));
  };

  useEffect(() => {
    fetchBlogs();
    fetchServices();
    fetchTeam();
  }, []);

  return (
    <>
      <WebsiteContext.Provider
        value={{
          blogData: blogData,
          serviceData: serviceData,
          teamData: teamData,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </WebsiteContext.Provider>
    </>
  );
}

let defaultServiceData = [
  { cardImg: "images/service/1.jpg", title: "CONSTRUCTION" },
  { cardImg: "images/service/2.jpg", title: "RENOVATION" },
  { cardImg: "images/service/3.jpg", title: "ARCHITECTURE" },
  { cardImg: "images/service/4.jpg", title: "CONCRETE SUPPLY" },
  { cardImg: "images/service/5.jpg", title: "LAMINATE FLOORING" },
  { cardImg: "images/service/6.jpg", title: "CONSULTING" },
];

let DefautltTeamData = [
  {
    name: "andrew simons",
    post: "chief electrican",
    img: "images/team/1.jpg",
  },
  {
    name: "STAWART SMITH",
    post: "chief electrican",
    img: "images/team/2.jpg",
  },
  {
    name: "KALVIN MOMEN",
    post: "chief electrican",
    img: "images/team/3.jpg",
  },
  {
    name: "MARK TAYLOR",
    post: "chief electrican",
    img: "images/team/4.jpg",
  },
];

export default App;
