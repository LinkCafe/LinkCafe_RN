import { ScrollView } from "react-native";
import React from "react";
import Categories from "../components/Categories";
import { SafeAreaView } from "react-native-safe-area-context";
import Discussions from "../components/Discussions";
import Articles from "../components/Articles";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <Categories />
        <Discussions />
        <Articles />
      </ScrollView>
    </SafeAreaView>
  );
};



export default Home;
