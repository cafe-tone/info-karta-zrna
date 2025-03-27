import { StyleSheet, Text, View } from "@react-pdf/renderer";

const nameStyles = StyleSheet.create({
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

export function NameHeader({ label, value }: { label: string; value: string }) {
  return (
    <View style={nameStyles.section}>
      <Text style={nameStyles.label}>{label}</Text>
      <Text style={nameStyles.value}>{value}</Text>
    </View>
  );
}
