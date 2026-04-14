import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { User } from "@/types/user";
import MySafeAreaView from "@/components/common/MySafeAreaView";
import UserIcon from "@/assets/svg/User.svg";
import { fontFamily } from "@/theme/fontFamily";
import BackIcon from "@/assets/svg/epBack.svg";

export default function UserDetails() {
  const { id } = useLocalSearchParams();
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then(setUser);
  }, []);

  if (!user) return <Text style={style.text}>Loading...</Text>;

  return (
    <MySafeAreaView color="#18181B">
      <View style={style.container}>
        <TouchableOpacity
          style={style.backButton}
          onPress={() => router.back()}
        >
          <BackIcon width={18} height={18} color="white" />
          <Text style={style.backText}> Back</Text>
        </TouchableOpacity>

        <UserIcon width={200} height={200} color="#19A1BE" />
        <Text style={style.text}>Name: {user.name}</Text>
        <Text style={style.text}>Username: {user.username}</Text>
        <Text style={style.text}>Email: {user.email}</Text>
        <Text style={style.text}>Phone: {user.phone}</Text>
        <Text style={style.text}>Website: {user.website}</Text>
        <Text style={style.text}>City: {user.address.city}</Text>
        <Text style={style.text}>Street: {user.address.street}</Text>
        <Text style={style.text}>Company: {user.company.name}</Text>
        <Text style={style.text}>{user.company.catchPhrase}</Text>
        <Text style={style.text}>{user.company.bs}</Text>
      </View>
    </MySafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#18181B",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    marginTop: 10,
    fontFamily: fontFamily.regular,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    color: "white",
    fontSize: 18,
    fontFamily: fontFamily.bold,
  },
});
