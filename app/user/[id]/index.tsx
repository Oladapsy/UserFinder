import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import MySafeAreaView from "@/components/common/MySafeAreaView";
import UserIcon from "@/assets/svg/User.svg";
import { fontFamily } from "@/theme/fontFamily";
import BackIcon from "@/assets/svg/epBack.svg";
import { useGetUserByIdQuery } from "@/api/userApi";

export default function UserDetails() {
  const { id } = useLocalSearchParams();
  const userId = Array.isArray(id) ? id[0] : id;
  const router = useRouter();

  const { data: user, isLoading, error } = useGetUserByIdQuery(userId as string)

  if (isLoading) {
    return (
      <MySafeAreaView color="#18181B">
        <Text style={styles.text}>Loading...</Text>
      </MySafeAreaView>
    );
  }

  if (error) {
    return (
      <MySafeAreaView color="#1A1A1D">
        <Text style={styles.emptyText}>User details cannot be fetched</Text>
      </MySafeAreaView>
    );
  }
  if (!user) {
    return (
      <MySafeAreaView color="#18181B">
        <Text style={styles.emptyText}>User not found</Text>
      </MySafeAreaView>
    );
  }

  return (
    <MySafeAreaView color="#18181B">
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <BackIcon width={18} height={18} color="white" />
          <Text style={styles.backText}> Back</Text>
        </TouchableOpacity>

        <UserIcon width={200} height={200} color="#19A1BE" />
        <Text style={styles.text}>Name: {user.name}</Text>
        <Text style={styles.text}>Username: {user.username}</Text>
        <Text style={styles.text}>Email: {user.email}</Text>
        <Text style={styles.text}>Phone: {user.phone}</Text>
        <Text style={styles.text}>Website: {user.website}</Text>
        <Text style={styles.text}>City: {user.address?.city}</Text>
        <Text style={styles.text}>Street: {user.address?.street}</Text>
        <Text style={styles.text}>Company: {user.company?.name}</Text>
        <Text style={styles.text}>{user.company?.bs}</Text>
      </View>
    </MySafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  emptyText: {
    color: "#F64A31",
    textAlign: "center",
    marginTop: 40,
    fontFamily: fontFamily.regular,
    fontSize: 16,
  },
});
