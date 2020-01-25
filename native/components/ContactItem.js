import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

const ContactItem = ({ name, imageUrl, id }) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity style={styles.listItem} underlayColor={"#fff"}>
      <Image
        style={styles.image}
        source={{
          uri: imageUrl
        }}
        resizeMode={"contain"}
      />

      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50
  },
  listItem: {
    padding: 10,
    margin: 5,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10
  }
});

export default ContactItem;
