import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Appointment } from "../../components/Appointment";

import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";

import { styles } from "./styles";

export function Home() {
  const [category, setCategory] = useState("");

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendário",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "30/04 ás 4:40",
      description: "É hoje que vamos ao challenger sem perder uma partida",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Lendário",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "30/04 ás 4:40",
      description: "É hoje que vamos ao challenger sem perder uma partida",
    },
  ];

  return (
    <View>
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
          renderItem={({ item }) => <Appointment data={item} />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
        />
      </View>
    </View>
  );
}
