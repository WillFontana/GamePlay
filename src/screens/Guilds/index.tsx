import React, { useState, useEffect } from "react";
import { View, FlatList, Alert } from "react-native";
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { Load } from "../../components/Load";
import { api } from "../../services/api";

import { styles } from "./styles";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: Props) {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchGuilds() {
    try {
      const { data } = await api.get("/users/@me/guilds");
      setGuilds(data);
    } catch (error) {
      Alert.alert("Não foi possível carregar os servidores!");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGuilds();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Load />
      ) : (
        <FlatList
          data={guilds}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Guild onPress={() => handleGuildSelect(item)} data={item} />
          )}
          ItemSeparatorComponent={() => <ListDivider isCenter />}
          contentContainerStyle={{ paddingBottom: 68, paddingTop: 24 }}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<ListDivider isCenter />}
          style={styles.guilds}
        />
      )}
    </View>
  );
}
