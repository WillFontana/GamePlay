import React from "react";
import { View, Text, Image, Alert, ActivityIndicatorBase } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SignInImage from "../../assets/illustration.png";
import DiscordImg from "../../assets/discord.png";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const navigation = useNavigation();
  const { loading, signIn } = useAuth();

  async function handleSigIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image source={SignInImage} style={styles.image} resizeMode="stretch" />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se{"\n"}e organize suas{"\n"}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games{"\n"}
            favoritos com seus amigos
          </Text>

          {loading ? (
            <ActivityIndicatorBase color={theme.colors.primary} />
          ) : (
            <ButtonIcon
              imageSrc={DiscordImg}
              title={"Entrar com Discord"}
              onPress={handleSigIn}
            />
          )}
        </View>
      </View>
    </Background>
  );
}
