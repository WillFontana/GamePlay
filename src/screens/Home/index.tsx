import React, { useState } from "react";
import { View, FlatList } from "react-native";

import { Appointment } from "../../components/Appointment";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";
import { Background } from "../../components/Background";

import { styles } from "./styles";

export function Home() {
  const [category, setCategory] = useState("");

  const appointments = [
    {
      id: "1",
      guild: { id: "1", name: "A Disney", icon: null, owner: true },
      category: "1",
      date: "22/06 às 20:40",
      description: "Vai todo mundo virar dev aqui to nem aí",
    },
    {
      id: "2",
      guild: { id: "1", name: "A Disney", icon: null, owner: true },
      category: "1",
      date: "22/06 às 20:40",
      description: "Vai todo mundo virar dev aqui to nem aí",
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <View style={styles.content}>
        <ListHeader title="Partidas agendadas" subtitle="Total 6" />
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Appointment data={item} />}
          ItemSeparatorComponent={() => <ListDivider />}
        />
      </View>
    </Background>
  );
}
