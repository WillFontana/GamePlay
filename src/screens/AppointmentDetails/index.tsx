import React from "react";
import { View, ImageBackground, Text, FlatList } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import { Fontisto } from "@expo/vector-icons";
import BannerImg from "../../assets/banner.png";
import DiscordImg from "../../assets/discord.png";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";

export function AppointmentDetails() {
  const members = [
    {
      id: "1",
      username: "Willyan Fontana",
      avatar_url: "https://github.com/willfontana.png",
      status: "online",
    },
    {
      id: "2",
      username: "Jogador Desconhecido",
      avatar_url:
        "http://s.glbimg.com/po/tt/f/original/2011/08/24/183979-dante_.jpg",
      status: "offline",
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>A Disney</Text>
          <Text style={styles.subtitle}>
            Vai todo mundo virar dev aqui to nem aí.
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <ListDivider isCenter />}
        style={styles.members}
        renderItem={({ item }) => <Member data={item} />}
      />
      <View style={styles.footer}>
        <ButtonIcon imageSrc={DiscordImg} title={"Entrar na partida"} />
      </View>
    </Background>
  );
}
