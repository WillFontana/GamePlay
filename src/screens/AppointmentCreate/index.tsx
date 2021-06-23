import React, { useState } from "react";
import { Text } from "react-native";

import { Background } from "../../components/Background";
import { CategorySelect } from "../../components/CategorySelect";
import { Header } from "../../components/Header";

import { styles } from "./styles";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  return (
    <Background>
      <Header title="Agendar Partida" />
      <Text style={styles.label}>Categoria</Text>
      <CategorySelect
        hasCheckBox
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
    </Background>
  );
}
