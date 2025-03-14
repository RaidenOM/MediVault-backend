const mongoose = require("mongoose");
const Report = require("./models/Report");
require("dotenv").config();

mongoose.connect(process.env.DB_URL);

// Function to generate a random date within the last 6 months
const getRandomDate = () => {
  const now = new Date();
  const pastDate = new Date(now.setMonth(now.getMonth() - 6)); // 6 months ago
  return new Date(
    pastDate.getTime() + Math.random() * (Date.now() - pastDate.getTime())
  ).toISOString();
};

const seedReports = [
  {
    disease: "Pneumonia",
    description: "Inflammation of the lung tissue.",
    clinicalHistory: "Patient has had a persistent cough for two weeks.",
    findings: "X-ray shows consolidation in the right lower lobe.",
    doctorName: "Dr. Alice Smith",
    time: getRandomDate(),
    recordType: "Radiology",
    userId: "67d39bf0df28abe2dd11f37b",
    reportUrl:
      "https://res.cloudinary.com/dnltrumxv/raw/upload/v1741921295/MedVault/wqtfmgeryipyucjfdqa6.pdf",
  },
  {
    disease: "Diabetes Mellitus",
    description: "Chronic condition affecting blood sugar regulation.",
    clinicalHistory: "Frequent urination and increased thirst.",
    findings: "Fasting glucose levels above normal range.",
    doctorName: "Dr. John Doe",
    time: getRandomDate(),
    recordType: "Lab Report",
    userId: "67d39bf0df28abe2dd11f37b",
    reportUrl:
      "https://res.cloudinary.com/dnltrumxv/raw/upload/v1741921295/MedVault/wqtfmgeryipyucjfdqa6.pdf",
  },
  {
    disease: "Hypertension",
    description: "Chronic high blood pressure.",
    clinicalHistory: "Patient reports frequent headaches and dizziness.",
    findings: "BP recorded at 150/95 mmHg.",
    doctorName: "Dr. Emily Brown",
    time: getRandomDate(),
    recordType: "Clinical Examination",
    userId: "67d39bf0df28abe2dd11f37b",
    reportUrl:
      "https://res.cloudinary.com/dnltrumxv/raw/upload/v1741921295/MedVault/wqtfmgeryipyucjfdqa6.pdf",
  },
  {
    disease: "COVID-19",
    description: "Viral respiratory illness.",
    clinicalHistory: "Fever, cough, and difficulty breathing.",
    findings: "PCR test positive for SARS-CoV-2.",
    doctorName: "Dr. Mark Wilson",
    time: getRandomDate(),
    recordType: "Lab Report",
    userId: "67d39bf0df28abe2dd11f37b",
    reportUrl:
      "https://res.cloudinary.com/dnltrumxv/raw/upload/v1741921295/MedVault/wqtfmgeryipyucjfdqa6.pdf",
  },
  {
    disease: "Asthma",
    description: "Chronic inflammatory disease of the airways.",
    clinicalHistory: "Shortness of breath, wheezing, and coughing.",
    findings: "Pulmonary function test shows reduced airflow.",
    doctorName: "Dr. Sarah Johnson",
    time: getRandomDate(),
    recordType: "Pulmonology",
    userId: "67d39bf0df28abe2dd11f37b",
    reportUrl:
      "https://res.cloudinary.com/dnltrumxv/raw/upload/v1741921295/MedVault/wqtfmgeryipyucjfdqa6.pdf",
  },
  {
    disease: "Tuberculosis",
    description: "Bacterial infection affecting the lungs.",
    clinicalHistory: "Persistent cough, night sweats, and weight loss.",
    findings: "Chest X-ray shows cavitary lesions.",
    doctorName: "Dr. Robert Clark",
    time: getRandomDate(),
    recordType: "Radiology",
    userId: "67d39bf0df28abe2dd11f37b",
    reportUrl:
      "https://res.cloudinary.com/dnltrumxv/raw/upload/v1741921295/MedVault/wqtfmgeryipyucjfdqa6.pdf",
  },
  {
    disease: "Kidney Stones",
    description: "Hard mineral deposits in the kidneys.",
    clinicalHistory: "Severe pain in the lower back and frequent urination.",
    findings: "CT scan confirms presence of multiple stones.",
    doctorName: "Dr. Anna Baker",
    time: getRandomDate(),
    recordType: "Radiology",
    userId: "67d39bf0df28abe2dd11f37b",
    reportUrl:
      "https://res.cloudinary.com/dnltrumxv/raw/upload/v1741921295/MedVault/wqtfmgeryipyucjfdqa6.pdf",
  },
  {
    disease: "Liver Cirrhosis",
    description: "Chronic liver disease leading to scarring.",
    clinicalHistory: "Alcoholic history, jaundice, and fatigue.",
    findings: "Ultrasound shows shrunken liver with nodular surface.",
    doctorName: "Dr. Tom Harris",
    time: getRandomDate(),
    recordType: "Gastroenterology",
    userId: "67d39bf0df28abe2dd11f37b",
    reportUrl:
      "https://res.cloudinary.com/dnltrumxv/raw/upload/v1741921295/MedVault/wqtfmgeryipyucjfdqa6.pdf",
  },
  {
    disease: "Anemia",
    description: "Condition marked by a deficiency of red blood cells.",
    clinicalHistory: "Fatigue, dizziness, and pale skin.",
    findings: "Hemoglobin levels at 8.2 g/dL.",
    doctorName: "Dr. Karen Mitchell",
    time: getRandomDate(),
    recordType: "Lab Report",
    userId: "67d39bf0df28abe2dd11f37b",
    reportUrl:
      "https://res.cloudinary.com/dnltrumxv/raw/upload/v1741921295/MedVault/wqtfmgeryipyucjfdqa6.pdf",
  },
  {
    disease: "Migraine",
    description: "Neurological condition characterized by severe headaches.",
    clinicalHistory: "Throbbing headache, nausea, and sensitivity to light.",
    findings: "CT scan normal, clinical diagnosis of migraine.",
    doctorName: "Dr. Steven Lewis",
    time: getRandomDate(),
    recordType: "Neurology",
    userId: "67d39bf0df28abe2dd11f37b",
    reportUrl:
      "https://res.cloudinary.com/dnltrumxv/raw/upload/v1741921295/MedVault/wqtfmgeryipyucjfdqa6.pdf",
  },
];

const seedDB = async () => {
  await Report.deleteMany({});
  await Report.insertMany(seedReports);
  console.log("Database Seeded with 10 reports with random dates!");
  mongoose.connection.close();
};

seedDB();
