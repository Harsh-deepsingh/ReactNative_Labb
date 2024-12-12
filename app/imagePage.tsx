import { StyleSheet, ScrollView } from "react-native";
import ImageList from "../components/imageList";


export default function ImagePage() {
  return (
  <ScrollView>
    <ImageList />
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
});