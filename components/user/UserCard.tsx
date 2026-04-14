import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import UserIcon from "@/assets/svg/User.svg";
import { fontFamily } from "@/theme/fontFamily";
import { User } from "@/types/user";
import { useRouter } from "expo-router";

type UserCardProps = {
  user: User;
};

export default function UserCard({ user }: UserCardProps) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/user/${user.id}`)}
    >
      <UserIcon width={50} height={50} color="#612220"/>

      <Text style={styles.name} numberOfLines={1}>
        {user.name}
      </Text>
      <Text style={styles.email} numberOfLines={1}>
        {user.email}
      </Text>
      <Text style={styles.phone} numberOfLines={1}>
        {user.phone}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#16CAF1",
    // odd background color #F05C33
    borderRadius: 12,
    padding: 15,
    marginLeft: 8,
    marginVertical: 8,
    // width: 200,
    flex: 1,
    alignItems: "center",
    height: 150,
  },
  name: {
    color: "white",
    fontSize: 16,
    fontFamily: fontFamily.bold,
    marginTop: 10,
  },
  email: {
    color: "white",
    fontSize: 12,
    fontFamily: fontFamily.regular,
    marginTop: 5,
  },
  phone: {
    color: "white",
    fontSize: 12,
    fontFamily: fontFamily.regular,
    marginTop: 2,
  },
});
