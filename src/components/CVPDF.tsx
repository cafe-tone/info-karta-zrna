import {
  Document,
  Link,
  Page,
  Path,
  StyleSheet,
  Svg,
  Text,
  View,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    fontFamily: "Roboto",
    flexDirection: "row",
    fontSize: 8,
    lineHeight: 1.3,
  },
  mainColumn: {
    padding: 25,
  },
  sidebar: {
    width: "30%",
    backgroundColor: "black",
    color: "white",
  },
  image: {
    maxWidth: "100%",
    width: 90,
    height: 90,
    objectFit: "cover",
    borderRadius: "100%",
  },
  sidebarSection: {
    marginBottom: 40,
  },
  sidebarTitleContainer: {
    borderBottom: "1px solid hsl(0, 0%, 20%)",
    paddingBottom: 5,
  },
  title: {
    fontSize: 12,
    fontWeight: 700,
  },
  list: {
    marginTop: 12,
  },
  mainContent: {
    width: "100%",
  },
  name: {
    fontSize: 24,
    lineHeight: 1,
  },
  profession: {
    fontWeight: 500,
    letterSpacing: 2,
    fontSize: 11,
    color: "hsla(266, 100%, 50%, 1)",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
  },
  mainSection: {
    marginBottom: 55,
  },
  personalList: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  personalListItem: {
    width: "50%",
  },
  experienceDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 9,
    marginBottom: 9,
  },
  titleContainer: {
    borderBottom: "1px solid hsl(0, 0%, 90%)",
    paddingBottom: 4,
    marginBottom: 10,
  },
  mainEntry: {
    marginTop: 22,
  },
  fsize11: {
    fontSize: 11,
  },
  fw500: {
    fontWeight: 500,
  },
  fw600: {
    fontWeight: 600,
  },
  accentColor: {
    color: "hsla(266, 100%, 50%, 1)",
  },
  mTop5: {
    marginTop: 5,
  },
  listItem: {
    marginTop: 4,
  },
  textDecoNone: {
    textDecoration: "none",
  },
});

export const CVPdf = () => {
  return (
    <Document>
      <Page style={styles.body} size="LEGAL">
        <View style={[styles.sidebar, styles.mainColumn]}></View>

        <View style={[styles.mainContent, styles.mainColumn]}>
          {/* General information */}
          <View style={styles.mainSection}>
            <Text style={styles.name}>Aaaqa Aaaqa</Text>

            <Text style={[styles.profession, { marginTop: 5 }]}>
              Full Stack Developer
            </Text>

            <View
              style={[
                styles.iconContainer,
                { marginTop: 15, marginBottom: 15 },
              ]}
            >
              <Svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                style={styles.icon}
              >
                <Path
                  d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
                  fill="rgb(0, 0, 0)"
                />
              </Svg>
              <Text>123 Street Name, City, Country</Text>
            </View>

            <Text>
              A full stack developer with 5 years of experience in developing
              web applications. I have a strong knowledge of front-end
              technologies and frameworks, and I am proficient in back-end
              development using Node.js and Express.
            </Text>

            {/* Contact information */}
            <View style={[styles.personalList, { marginTop: 15 }]}>
              <View style={[styles.iconContainer, styles.personalListItem]}>
                <Svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  style={styles.icon}
                >
                  <Path
                    d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
                    fill="rgb(0, 0, 0)"
                  />
                </Svg>
                <Link
                  src={`mailto:vadsd@asda`}
                  style={[styles.textDecoNone, styles.accentColor]}
                >
                  vadsd@asda
                </Link>
              </View>

              <View style={[styles.iconContainer, styles.personalListItem]}>
                <Svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  style={styles.icon}
                >
                  <Path
                    d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"
                    fill="rgb(0, 0, 0)"
                  />
                </Svg>
              </View>

              <View
                style={[
                  styles.iconContainer,
                  styles.personalListItem,
                  styles.listItem,
                ]}
              >
                <Svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  style={styles.icon}
                >
                  <Path
                    d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                    fill="rgb(0, 0, 0)"
                  />
                </Svg>
              </View>

              <View
                style={[
                  styles.iconContainer,
                  styles.personalListItem,
                  styles.listItem,
                ]}
              >
                <Svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  style={styles.icon}
                >
                  <Path
                    d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z"
                    fill="rgb(0, 0, 0)"
                  />
                </Svg>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
