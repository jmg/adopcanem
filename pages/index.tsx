import type {NextPage} from "next";

import {Stack} from "@chakra-ui/react";

import Hero from "../screens/Home/sections/Hero";
import MeetYourBuddy from "../screens/Home/sections/MeetYourBuddy";
import Process from "../screens/Home/sections/Process";
import Transit from "../screens/Home/sections/Transit";
import History from "../screens/Home/sections/History";
import LifeStories from "../screens/Home/sections/LifeStories";

const Home: NextPage = () => {
  return (
    <Stack>
      <Hero />
      <MeetYourBuddy />
      <Process />
      <Transit />
      <History />
      <LifeStories />
    </Stack>
  );
};

export default Home;
