import React from "react";
import { View, Text, Image } from "react-native";
import SignInImage from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { styles } from "./styles";
import DiscordImg from "../../assets/discord.png";

export function SignIn() {
  return (
    <View style={styles.container}>

      <Image source={SignInImage} style={styles.image} resizeMode="stretch" />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{'\n'}
          e organize suas{'\n'}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{'\n'}
          favoritos com seus amigos
        </Text>

        <ButtonIcon
          imageSrc={DiscordImg}
          title={"Entrar com Discord"}
          activeOpacity={0.7}
        />
      </View>
    </View>
  );
}
