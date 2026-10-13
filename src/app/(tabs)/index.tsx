import CameraFrame from "@/components/CameraFrame";
import Cards from "@/components/Cards";
import { Size, fontWeights } from "@/constant/theme";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import {
  CameraCapturedPicture,
  CameraType,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import { Image } from "expo-image";
import { useRef, useState } from "react";
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
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
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

  const handleCloseButton = () => {
    setModalVisible(false);
    setCapturedPhoto(null);
  };

  const handleCapture = async () => {
    try {
      if (!cameraRef.current) return;

      const photo: CameraCapturedPicture | undefined =
        await cameraRef.current.takePictureAsync();

      if (!photo) return;
      setCapturedPhoto(photo.uri);
    } catch (err) {
      console.log("Failed to capture photo:", err);
    }
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
            {capturedPhoto ? (
              <View style={styles.capturedPhotoContainer}>
                <Image
                  source={{ uri: capturedPhoto }}
                  style={{ width: "95%", height: "100%", borderRadius: 12 }}
                />
              </View>
            ) : (
              <>
                <CameraView
                  ref={cameraRef}
                  style={styles.camera}
                  facing={facing}
                />
                <CameraFrame />

                <View style={styles.buttonCaptureContainer}>
                  <TouchableOpacity
                    onPress={handleCapture}
                    style={styles.buttonCapture}
                    activeOpacity={0.7}
                  >
                    <View style={styles.innerButtonCapture}></View>
                  </TouchableOpacity>
                </View>
              </>
            )}
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleCloseButton}>
                <Ionicons color={"#fff"} name="close" size={24} />
              </TouchableOpacity>
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
    width: 65,
    height: 65,
    borderRadius: 50,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  capturedPhotoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerButtonCapture: {
    width: 57,
    height: 57,
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
