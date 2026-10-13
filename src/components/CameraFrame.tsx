import { CameraFrameProps } from "@/types/type";
import { StyleSheet, View } from "react-native";

export default function CameraFrame({
  size = 280,
  color = "#ffffff",
  thickness = 4,
  cornerLength = 35,
}: CameraFrameProps) {
  const cornerStyle = {
    width: cornerLength,
    height: cornerLength,
    borderColor: color,
    borderWidth: thickness,
  };

  return (
    <View
      pointerEvents="none"
      style={{
        width: size,
        height: size,
        position: "absolute",
        top: 300,
        left: 50,
      }}
    >
      <View
        style={[
          styles.frame,
          {
            width: size,
            height: size,
          },
        ]}
      >
        <View style={[styles.corner, styles.topLeft, cornerStyle]} />
        <View style={[styles.corner, styles.topRight, cornerStyle]} />
        <View style={[styles.corner, styles.bottomLeft, cornerStyle]} />
        <View style={[styles.corner, styles.bottomRight, cornerStyle]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    position: "relative",
  },
  corner: {
    position: "absolute",
  },
  topLeft: {
    top: 0,
    left: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderTopLeftRadius: 18,
  },
  topRight: {
    top: 0,
    right: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderTopRightRadius: 18,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomLeftRadius: 18,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomRightRadius: 18,
  },
});
