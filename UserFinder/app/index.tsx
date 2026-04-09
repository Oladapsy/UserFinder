import React, { useState } from "react";
import MySafeAreaView from "@/components/common/MySafeAreaView";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { fontFamily } from "@/theme/fontFamily";
import { LinearGradient } from "expo-linear-gradient";
export default function Index() {
  const [search, setSearch] = useState("");
  return (
    <MySafeAreaView color="#1A1A1D">
      <View style={styles.conatiner}>
        {/* Search Button */}
        <View style={styles.searcBox}>
          <View style={styles.textWrapper}>
            <Text style={styles.searchText}>Search for a name</Text>
          </View>
          <View>
            <LinearGradient
              colors={["#19A1BE", "#7D4192"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientBorder}
            >
              <TextInput
                placeholder="Search for a name"
                placeholderTextColor="#6C6C6C"
                style={styles.input}
                value={search}
                onChangeText={setSearch}
                clearButtonMode="while-editing"
                maxLength={100}
              />
            </LinearGradient>
          </View>
        </View>
      </View>
    </MySafeAreaView>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: "#1A1A1D",
    marginHorizontal: 20,
    flex: 1,
  },
  searcBox: {
    marginTop: 40,
  },
  textWrapper: {
    marginBottom: 10,
  },
  searchText: {
    color: "white",
    fontSize: 16,
    fontFamily: fontFamily.bold,
  },
  input: {
    height: 56,
    borderWidth: 2,
    padding: 10,
    borderRadius: 24,
    fontSize: 12,
    color: "white",
    fontFamily: fontFamily.regular,
    backgroundColor: "#1A1A1D",
  },
  gradientBorder: {
    borderRadius: 24,
    padding: 2,
  },
});
