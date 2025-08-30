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
import { useResumeStore } from "@/zustand/useResumeStore";

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
  const { resumeData } = useResumeStore();
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
              <Text style={styles.name}>{resumeData.name}</Text>
              <Text style={styles.subtitle}>
                {resumeData.titles?.join(" | ")}
              </Text>
              <Text style={styles.contact}>
                {resumeData.location} | {resumeData.email} | {resumeData.phone}{" "}
                |{resumeData.socialMedia?.map((s) => s.label).join(" | ")}
              </Text>
            </View>
            {/* Sections */}
            {resumeData.sections?.map((sectionId) => {
              const section = resumeData.sectionDetails[sectionId];
              if (!section) return null;
              // Professional Summary
              if (section.type === "profSummary") {
                return (
                  <View style={styles.section} key={sectionId}>
                    <Text style={styles.sectionTitle}>{section.title}</Text>
                    <Text>
                      {typeof section.summary?.text === "string"
                        ? section.summary.text
                        : ""}
                    </Text>
                  </View>
                );
              }
              // Work Experience
              if (section.type === "workExperience") {
                type JobType = {
                  title: string;
                  company: string;
                  location: string;
                  startDate: string;
                  endDate: string;
                  isActive: boolean;
                  summary?: { bullets?: string[] };
                };
                const workSection = section as typeof section & {
                  subSections: Array<JobType>;
                };
                return (
                  <View style={styles.section} key={sectionId}>
                    <Text style={styles.sectionTitle}>{workSection.title}</Text>
                    {workSection.subSections?.map(
                      (job: JobType, idx: number) => (
                        <React.Fragment key={idx}>
                          <View style={styles.jobHeader}>
                            <View>
                              <Text style={styles.jobTitle}>{job.title}</Text>
                              <Text style={styles.jobCompany}>
                                {job.company}, {job.location}
                              </Text>
                            </View>
                            <Text style={styles.jobDate}>
                              {job.isActive
                                ? `${job.startDate} – Present`
                                : `${job.startDate} – ${job.endDate}`}
                            </Text>
                          </View>
                          {Array.isArray(job.summary?.bullets) && (
                            <View style={styles.bulletList}>
                              {job.summary.bullets.map(
                                (bullet: string, bidx: number) => (
                                  <View style={styles.bulletItem} key={bidx}>
                                    <Text>• </Text>
                                    <Text style={styles.bulletText}>
                                      {bullet}
                                    </Text>
                                  </View>
                                )
                              )}
                            </View>
                          )}
                        </React.Fragment>
                      )
                    )}
                  </View>
                );
              }
              // Education
              if (section.type === "education") {
                type EduType = {
                  title: string;
                  company: string;
                  location: string;
                  startDate: string;
                  endDate: string;
                  isActive: boolean;
                  summary?: { bullets?: string[] };
                };
                const eduSection = section as typeof section & {
                  subSections: Array<EduType>;
                };
                return (
                  <View style={styles.section} key={sectionId}>
                    <Text style={styles.sectionTitle}>{eduSection.title}</Text>
                    {eduSection.subSections?.map(
                      (edu: EduType, idx: number) => (
                        <View style={styles.educationHeader} key={idx}>
                          <View>
                            <Text style={styles.jobTitle}>{edu.title}</Text>
                            <Text style={styles.jobCompany}>
                              {edu.company}, {edu.location}
                            </Text>
                          </View>
                          <Text style={styles.jobDate}>
                            {edu.isActive
                              ? `Graduated: ${edu.startDate}`
                              : `Graduated: ${edu.endDate}`}
                          </Text>
                        </View>
                      )
                    )}
                  </View>
                );
              }
              // Custom section
              if (section.type === "custom") {
                return (
                  <View style={styles.section} key={sectionId}>
                    <Text style={styles.sectionTitle}>{section.title}</Text>
                    <Text>
                      {typeof section.summary?.text === "string"
                        ? section.summary.text
                        : ""}
                    </Text>
                  </View>
                );
              }
              return null;
            })}
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}
