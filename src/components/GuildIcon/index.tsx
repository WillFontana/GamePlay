import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";

export function GuildIcon() {
  const uri =
    "https://i.pinimg.com/originals/6a/76/86/6a7686ac88abb0919a313877b45f93b9.jpg";
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
