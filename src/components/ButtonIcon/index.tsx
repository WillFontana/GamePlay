import React from "react";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {
  Image,
  Text,
  View,
  ImageProps,
} from "react-native";

import { styles } from "./styles";

type Props = RectButtonProps & {
  title: string;
  imageSrc: ImageProps["source"];
};

export function ButtonIcon({ title, imageSrc, ...rest }: Props) {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={imageSrc} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}
