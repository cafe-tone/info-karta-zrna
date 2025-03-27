import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },

  label: {
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 5,
  },
  value: {
    fontSize: 12,
    marginBottom: 5,
  },
});

export default function TasteSection({
  taste1,
  taste2,
  taste3,
}: {
  taste1: string;
  taste2: string;
  taste3: string;
}) {
  return (
    <View style={styles.section}>
      <Text style={styles.label}>Chuťový profil</Text>
      <Text style={styles.value}>{taste1}</Text>
      <Text style={styles.value}>{taste2}</Text>
      <Text style={styles.value}>{taste3}</Text>
    </View>
  );
}
