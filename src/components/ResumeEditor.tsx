// ResumeEditor.tsx
"use client";
import React from "react";
import {
  PDFViewer,
  Document,
  Page,
  View,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";
import ResumeDataForm from "./ResumeDataForm/ResumeDataForm";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    padding: 32,
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#222",
  },
  header: {
    alignItems: "center",
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#222",
    paddingBottom: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 2,
  },
  contact: {
    fontSize: 10,
    marginBottom: 2,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 6,
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: "#222",
    paddingBottom: 2,
  },
  section: {
    marginBottom: 10,
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  jobTitle: {
    fontWeight: "bold",
  },
  jobCompany: {
    fontSize: 11,
    fontWeight: "bold",
  },
  jobLocation: {
    fontSize: 10,
    color: "#555",
  },
  jobDate: {
    fontSize: 10,
    color: "#555",
  },
  bulletList: {
    marginLeft: 12,
    marginTop: 2,
  },
  bulletItem: {
    flexDirection: "row",
    marginBottom: 2,
  },
  bulletText: {
    fontSize: 11,
  },
  educationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  skillList: {
    marginLeft: 12,
    marginTop: 2,
  },
  certList: {
    marginLeft: 12,
    marginTop: 2,
  },
});

export default function ResumeEditor() {
  return (
    <div className="flex w-full bg-white h-screen">
      <div className="w-[40vw]">
        <ResumeDataForm />
      </div>
      <PDFViewer className="grow h-screen">
        <Document>
          <Page size="A4" style={styles.page}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.name}>MICHAEL HARRIS</Text>
              <Text style={styles.subtitle}>
                Digital Marketing | SEO | SEM | Content Marketing
              </Text>
              <Text style={styles.contact}>
                Sydney, Australia | michael.harris@email.com | +61 412 345 678 |
                linkedin.com/in/michaelharris
              </Text>
            </View>
            {/* Professional Summary */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>PROFESSIONAL SUMMARY</Text>
              <Text>
                Results-oriented marketing professional with over 5 years of
                experience in digital marketing, brand strategy, and content
                creation. Proven ability to drive brand growth, increase online
                engagement, and deliver data-driven results. Expert in utilizing
                digital tools and analytics to optimize marketing campaigns and
                achieve business objectives.
              </Text>
            </View>
            {/* Work Experience */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>
              {/* Job 1 */}
              <View style={styles.jobHeader}>
                <View>
                  <Text style={styles.jobTitle}>Marketing Manager</Text>
                  <Text style={styles.jobCompany}>
                    XYZ Corporation, Sydney, NSW
                  </Text>
                </View>
                <Text style={styles.jobDate}>January 2022 – Present</Text>
              </View>
              <View style={styles.bulletList}>
                <View style={styles.bulletItem}>
                  <Text>• </Text>
                  <Text style={styles.bulletText}>
                    Lead a team of 5 in creating and executing digital marketing
                    strategies across multiple platforms, including social
                    media, SEO, and email campaigns.
                  </Text>
                </View>
                <View style={styles.bulletItem}>
                  <Text>• </Text>
                  <Text style={styles.bulletText}>
                    Achieved a 35% increase in website traffic and 50% boost in
                    social media engagement within the first year.
                  </Text>
                </View>
                <View style={styles.bulletItem}>
                  <Text>• </Text>
                  <Text style={styles.bulletText}>
                    Managed a marketing budget of $200,000, ensuring maximum ROI
                    through cost-effective advertising strategies.
                  </Text>
                </View>
              </View>
              {/* Job 2 */}
              <View style={styles.jobHeader}>
                <View>
                  <Text style={styles.jobTitle}>
                    Digital Marketing Specialist
                  </Text>
                  <Text style={styles.jobCompany}>
                    ABC Solutions, Melbourne, VIC
                  </Text>
                </View>
                <Text style={styles.jobDate}>June 2018 – December 2021</Text>
              </View>
              <View style={styles.bulletList}>
                <View style={styles.bulletItem}>
                  <Text>• </Text>
                  <Text style={styles.bulletText}>
                    Developed and executed SEO and SEM strategies that increased
                    organic search traffic by 25%.
                  </Text>
                </View>
                <View style={styles.bulletItem}>
                  <Text>• </Text>
                  <Text style={styles.bulletText}>
                    Created and managed Google Ads and Facebook Ads campaigns,
                    resulting in a 20% increase in qualified leads.
                  </Text>
                </View>
                <View style={styles.bulletItem}>
                  <Text>• </Text>
                  <Text style={styles.bulletText}>
                    Produced engaging content for blogs, newsletters, and social
                    media platforms to attract target audiences.
                  </Text>
                </View>
              </View>
            </View>
            {/* Education */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>EDUCATION</Text>
              <View style={styles.educationHeader}>
                <View>
                  <Text style={styles.jobTitle}>Bachelor of Marketing</Text>
                  <Text style={styles.jobCompany}>
                    University of Sydney, Sydney, NSW
                  </Text>
                </View>
                <Text style={styles.jobDate}>Graduated: 2018</Text>
              </View>
            </View>
            {/* Skills */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>SKILLS</Text>
              <View style={styles.skillList}>
                <View style={styles.bulletItem}>
                  <Text>• </Text>
                  <Text style={styles.bulletText}>
                    Digital Marketing Strategy, SEO & SEM, Google Analytics &
                    SEMrush
                  </Text>
                </View>
                <View style={styles.bulletItem}>
                  <Text>• </Text>
                  <Text style={styles.bulletText}>
                    Social Media Marketing, Content Creation & Copywriting,
                    Budget Management, Data Analysis
                  </Text>
                </View>
              </View>
            </View>
            {/* Certifications */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>CERTIFICATIONS</Text>
              <View style={styles.certList}>
                <View style={styles.bulletItem}>
                  <Text>• </Text>
                  <Text style={styles.bulletText}>
                    Google Analytics Certified
                  </Text>
                </View>
                <View style={styles.bulletItem}>
                  <Text>• </Text>
                  <Text style={styles.bulletText}>
                    Facebook Blueprint Certification
                  </Text>
                </View>
                <View style={styles.bulletItem}>
                  <Text>• </Text>
                  <Text style={styles.bulletText}>
                    HubSpot Inbound Marketing Certification
                  </Text>
                </View>
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}
