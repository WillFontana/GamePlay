import React, { useState, useEffect } from "react";
import { View, ImageBackground, Text, FlatList, Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";

import { Fontisto } from "@expo/vector-icons";
import BannerImg from "../../assets/banner.png";
import DiscordImg from "../../assets/discord.png";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { ListHeader } from "../../components/ListHeader";
import { Member, MemberProps } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";
import { AppointmentProps } from "../../components/Appointment";
import { api } from "../../services/api";
import { Load } from "../../components/Load";

type Params = {
  guildSelected: AppointmentProps;
};

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
};

export function AppointmentDetails() {
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const { guildSelected } = route.params as Params;

  async function fetchGuildWidget() {
    try {
      const { data } = await api.get(
        `/guilds/${guildSelected.guild.id}/widget.json`
      );
      setWidget(data);
    } catch (error) {
      Alert.alert(
        "Verifique as configurações do servidor. Será que o Widget está habilitado?"
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGuildWidget();
  }, []);

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
          <Text style={styles.title}>{guildSelected.guild.name}</Text>
          <Text style={styles.subtitle}>{guildSelected.description}</Text>
        </View>
      </ImageBackground>

      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Jogadores"
            subtitle={`Total ${widget.members.length}`}
          />
          <FlatList
            data={widget.members}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <ListDivider isCenter />}
            style={styles.members}
            renderItem={({ item }) => <Member data={item} />}
          />
        </>
      )}
      <View style={styles.footer}>
        <ButtonIcon imageSrc={DiscordImg} title={"Entrar na partida"} />
      </View>
    </Background>
  );
}
