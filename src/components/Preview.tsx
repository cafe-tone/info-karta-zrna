import { Document, Page, StyleSheet, View } from "@react-pdf/renderer";

const commonStyles = StyleSheet.create({
  body: {
    fontFamilyL: "Roboto",
  },
  bulletBlock: {
    display: "flex",
    flexDirection: "column",
    marginTop: 2,
    marginBottom: 2,
  },
  heading: {
    fontSize: 12,
    fontWeight: 700,
    borderBottom: "0.5 solid #000",
    marginBottom: 5,
  },
  workHeaderLine: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 12,
  },
  boldText: {
    fontSize: 12,
    fontWeight: 700,
  },
  normalTextLine: {
    fontSize: 12,
    display: "flex",
    flexDirection: "row",
  },
  link: {
    color: "#0a52cf",
  },
});

const styles = StyleSheet.create({
  page: {
    padding: 300,
    fontFamily: "Roboto",
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  summary: {
    fontSize: 12,
  },
});

// Find inspiration at:
// https://github.com/DarkWool/cv-creator-app/blob/main/src/components/CVPreview.js
function ResumePdf() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <View style={commonStyles.heading}>AAAA</View>
        </View>
      </Page>
    </Document>
  );
}
export function Preview() {
  return (
    <div className="resume-container">
      <ResumePdf />
    </div>
  );
}
