import CameraFrame from "@/components/CameraFrame";
import Cards from "@/components/Cards";
import { Size, fontWeights } from "@/constant/theme";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const handleOpenCameraController = async () => {
    if (!permission || !permission.granted) {
      const permissionResponse = await requestPermission();
      if (!permissionResponse.granted) {
        alert("Camera permission is required to use this feature");
        return;
      }
    }
    setModalVisible(true);
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingLeft: insets.left + 15,
          paddingRight: insets.right + 15,
          backgroundColor: theme.background,
        },
      ]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={{ flexDirection: "column", gap: 5 }}>
            <Text style={[styles.text, { color: theme.text }]}>
              <Text style={{ color: theme.selectedButton }}>I</Text>
              docs
            </Text>
            <Text style={[styles.subTitle, { color: "#999999" }]}>
              YOUR COLLECTIONS
            </Text>
          </View>
          <Cards />
        </View>

        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <CameraView style={styles.camera} facing={facing} />
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons color={"#fff"} name="close" size={24} />
              </TouchableOpacity>
            </View>

            <CameraFrame />

            <View style={styles.buttonCaptureContainer}>
              <TouchableOpacity style={styles.buttonCapture}></TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>

      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: theme.selectedButton,
            bottom: Math.max(insets.bottom, 100),
          },
        ]}
        onPress={handleOpenCameraController}
      >
        <Ionicons name="add" size={32} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  text: {
    fontSize: Size.title,
    fontWeight: fontWeights.semibold,
  },
  subTitle: {
    fontSize: 10,
    fontWeight: fontWeights.regular,
  },
  content: {
    flexDirection: "column",
    gap: 20,
  },
  button: {
    position: "absolute",
    right: 10,
    bottom: 0,
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonCaptureContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    alignItems: "center",
    paddingBottom: 50,
  },
  buttonCapture: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#000",
  },

  camera: {
    flex: 1,
  },

  buttonContainer: {
    position: "absolute",
    top: 70,
    width: "100%",
    left: 30,
    right: 0,
    alignItems: "flex-start",
    zIndex: 10,
    elevation: 10,
  },

  closeButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
});
