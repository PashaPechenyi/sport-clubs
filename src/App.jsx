import React, { useEffect, useState, useCallback } from "react";

import Header from "./components/Header/Header";
import Cities from "./components/Cities/Cities";
import SportCategories from "./components/SportCategories/SportCategories";
import ClubsCards from "./components/ClubsCards/ClubsCards";
import Footer from "./components/Footer/Footer";

function App() {
  // Все клубы во всех городах
  const [allClubs, setAllClubs] = useState([]);
  useEffect(() => {
    fetch("https://instasport.co/dashboard/api/v1/clubs/")
      .then((response) => response.json())
      .then((data) => {
        setAllClubs(data);
      })
      .catch((error) => error);
  }, []);

  // Все города в которых находятся клубы
  const [allCities, setAllCities] = useState([]);
  useEffect(() => {
    let citiesSet = new Set();
    allClubs.forEach((item) => {
      citiesSet.add(item.city.title);
    });
    setAllCities([...citiesSet]);
  }, [allClubs]);

  // Выбраный город при клике или null (если город не выбран)
  const [activeCity, setActiveCity] = useState(null);
  const changeActiveCity = useCallback((city) => {
    setActiveCity(city);
    changeActiveSportCategory(null);
  }, []);

  // Все доступные клубы в выбраном городе
  // (если город не выбран то все клубы во всех городах)
  const [clubsOnCity, setClubsOnCity] = useState([]);
  useEffect(() => {
    if (!activeCity) {
      setClubsOnCity(allClubs);
      return;
    }

    const arrayOfCitiesClubs = allClubs.filter(
      (club) => club.city.title === activeCity
    );

    setClubsOnCity(arrayOfCitiesClubs);
  }, [allClubs, activeCity]);

  // Все спортивные направления в клубах clubsOnCity (с учетом выбранного города)
  const [allSportCategory, setAllSportCategory] = useState([]);
  useEffect(() => {
    let sportCategorySet = new Set();
    clubsOnCity.forEach((item) => {
      item.activity.forEach(({ slug }) => {
        sportCategorySet.add(slug);
      });
    });
    setAllSportCategory([...sportCategorySet]);
  }, [clubsOnCity]);

  // Выбранное спортивное направление или null (если оно не выбрано)
  const [activeSportCategory, setActiveSportCategory] = useState(null);
  const changeActiveSportCategory = useCallback((sportCategory) => {
    setActiveSportCategory(sportCategory);
  }, []);

  // Все клубы с учетом выбранного спортивного направления
  // и города(по городу уже отфильтрованы клубы в clubsOnCity)
  const [clubsForReturn, setClubsForReturn] = useState([]);
  useEffect(() => {
    if (!activeSportCategory) {
      setClubsForReturn(clubsOnCity);
      return;
    }

    let arrayOfClubs = [];

    clubsOnCity.forEach((item) => {
      let shouldClubReturn = false;
      for (let sportCategory of item.activity) {
        if (activeSportCategory === sportCategory.slug) {
          shouldClubReturn = true;
        }
      }

      if (shouldClubReturn) arrayOfClubs.push(item);
    });

    setClubsForReturn(arrayOfClubs);
  }, [activeSportCategory, clubsOnCity]);

  return (
    <div>
      <Header />
      <Cities
        allCities={allCities}
        activeCity={activeCity}
        changeActiveCity={changeActiveCity}
      />
      <SportCategories
        changeActiveSportCategory={changeActiveSportCategory}
        activeSportCategory={activeSportCategory}
        allSportCategory={allSportCategory}
      />
      <ClubsCards clubsForReturn={clubsForReturn} />
      <Footer />
    </div>
  );
}

export default App;
