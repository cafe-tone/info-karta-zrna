import {
  Document,
  Font,
  Page,
  StyleSheet,
  Svg,
  View,
} from "@react-pdf/renderer";

import RobotoSlabBold from "../assets/fonts/RobotoSlab-Bold.ttf";
import RobotoSlabRegular from "../assets/fonts/RobotoSlab-Regular.ttf";
import RobotoSlabSemiBold from "../assets/fonts/RobotoSlab-SemiBold.ttf";
import { NameHeader } from "./NameHeader";
import TasteSection from "./Taste";

Font.register({
  family: "Roboto Slab",
  fonts: [
    { src: RobotoSlabRegular },
    { src: RobotoSlabBold, fontWeight: "bold" },
    { src: RobotoSlabSemiBold, fontStyle: "italic" },
  ],
});

const pageStyles = StyleSheet.create({
  page: {
    fontFamily: "Roboto Slab",
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  topSection: {},
  mainInfoSection: {},
});

// Find inspiration at:
// https://github.com/DarkWool/cv-creator-app/blob/main/src/components/CVPreview.js
function ResumePdf() {
  return (
    <Document>
      <Page size={[90, 60]} orientation="portrait" style={pageStyles.page}>
        <View style={pageStyles.topSection}>
          <View style={pageStyles.mainInfoSection}>
            <NameHeader label="Název" value="Název kávy" />
            <NameHeader label="Země" value="Etiopie" />
          </View>
          <Svg width="100%" height="2">
            <line
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              stroke="#000000"
              strokeWidth="1"
            />
          </Svg>
          <TasteSection
            taste1="Jasná, ovocná chuť"
            taste2="Oříšková"
            taste3="Medová"
          />
        </View>
      </Page>
    </Document>
  );
}
export function Preview() {
  return (
    <ResumePdf />

    // <PDFViewer>
    // </PDFViewer>
  );
}
