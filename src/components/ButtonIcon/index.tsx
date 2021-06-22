import React from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  ImageProps,
} from "react-native";

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  imageSrc: ImageProps["source"];
};

export function ButtonIcon({ title, imageSrc, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={imageSrc} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
