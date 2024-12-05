import React from "react";
import UserCard from "./UserCard";
import Counter from "./Counter";
import Greeting from "./Greeting";
import ButtonTextChanger from "./ButtonTextChanger";
import Welcome from "./Welcome";
import FavoriteColor from "./FavoriteColor";
import ButtonWithAlert from "./ButtonWithAlert";
import GreetingByTime from "./GreetingByTime";
import NumberList from "./NumberList";
import SimpleForm from "./SimpleForm";

const App = () => {
  return (
    <div>
      <UserCard
        name="Pragasam"
        email="surya14798@gmail.com.com"
        location="Tamil Nadu, India"
      />
      <Counter />
      <Greeting name="Pragasam" />
      <ButtonTextChanger />
      <Welcome />
      <FavoriteColor />
      <ButtonWithAlert />
      <GreetingByTime />
      <NumberList />
      <SimpleForm />
    </div>
  );
};

export default App;
