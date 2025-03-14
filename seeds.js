const mongoose = require("mongoose");
const Report = require("./models/Report");

mongoose.connect(process.env.DB_URL || "mongodb://127.0.0.1:27017/MedVault");

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
    imageUrl: "https://example.com/pneumonia-xray.jpg",
    time: getRandomDate(),
    recordType: "Radiology",
    userId: "67d332811432c9c9fdf763f0",
  },
  {
    disease: "Diabetes Mellitus",
    description: "Chronic condition affecting blood sugar regulation.",
    clinicalHistory: "Frequent urination and increased thirst.",
    findings: "Fasting glucose levels above normal range.",
    doctorName: "Dr. John Doe",
    imageUrl: "https://example.com/diabetes-chart.jpg",
    time: getRandomDate(),
    recordType: "Lab Report",
    userId: "67d332811432c9c9fdf763f0",
  },
  {
    disease: "Hypertension",
    description: "Chronic high blood pressure.",
    clinicalHistory: "Patient reports frequent headaches and dizziness.",
    findings: "BP recorded at 150/95 mmHg.",
    doctorName: "Dr. Emily Brown",
    imageUrl: "https://example.com/hypertension-chart.jpg",
    time: getRandomDate(),
    recordType: "Clinical Examination",
    userId: "67d332811432c9c9fdf763f0",
  },
  {
    disease: "COVID-19",
    description: "Viral respiratory illness.",
    clinicalHistory: "Fever, cough, and difficulty breathing.",
    findings: "PCR test positive for SARS-CoV-2.",
    doctorName: "Dr. Mark Wilson",
    imageUrl: "https://example.com/covid-test.jpg",
    time: getRandomDate(),
    recordType: "Lab Report",
    userId: "67d332811432c9c9fdf763f0",
  },
  {
    disease: "Asthma",
    description: "Chronic inflammatory disease of the airways.",
    clinicalHistory: "Shortness of breath, wheezing, and coughing.",
    findings: "Pulmonary function test shows reduced airflow.",
    doctorName: "Dr. Sarah Johnson",
    imageUrl: "https://example.com/asthma-test.jpg",
    time: getRandomDate(),
    recordType: "Pulmonology",
    userId: "67d332811432c9c9fdf763f0",
  },
  {
    disease: "Tuberculosis",
    description: "Bacterial infection affecting the lungs.",
    clinicalHistory: "Persistent cough, night sweats, and weight loss.",
    findings: "Chest X-ray shows cavitary lesions.",
    doctorName: "Dr. Robert Clark",
    imageUrl: "https://example.com/tb-xray.jpg",
    time: getRandomDate(),
    recordType: "Radiology",
    userId: "67d332811432c9c9fdf763f0",
  },
  {
    disease: "Kidney Stones",
    description: "Hard mineral deposits in the kidneys.",
    clinicalHistory: "Severe pain in the lower back and frequent urination.",
    findings: "CT scan confirms presence of multiple stones.",
    doctorName: "Dr. Anna Baker",
    imageUrl: "https://example.com/kidney-stones.jpg",
    time: getRandomDate(),
    recordType: "Radiology",
    userId: "67d332811432c9c9fdf763f0",
  },
  {
    disease: "Liver Cirrhosis",
    description: "Chronic liver disease leading to scarring.",
    clinicalHistory: "Alcoholic history, jaundice, and fatigue.",
    findings: "Ultrasound shows shrunken liver with nodular surface.",
    doctorName: "Dr. Tom Harris",
    imageUrl: "https://example.com/liver-cirrhosis.jpg",
    time: getRandomDate(),
    recordType: "Gastroenterology",
    userId: "67d332811432c9c9fdf763f0",
  },
  {
    disease: "Anemia",
    description: "Condition marked by a deficiency of red blood cells.",
    clinicalHistory: "Fatigue, dizziness, and pale skin.",
    findings: "Hemoglobin levels at 8.2 g/dL.",
    doctorName: "Dr. Karen Mitchell",
    imageUrl: "https://example.com/anemia-test.jpg",
    time: getRandomDate(),
    recordType: "Lab Report",
    userId: "67d332811432c9c9fdf763f0",
  },
  {
    disease: "Migraine",
    description: "Neurological condition characterized by severe headaches.",
    clinicalHistory: "Throbbing headache, nausea, and sensitivity to light.",
    findings: "CT scan normal, clinical diagnosis of migraine.",
    doctorName: "Dr. Steven Lewis",
    imageUrl: "https://example.com/migraine-symptoms.jpg",
    time: getRandomDate(),
    recordType: "Neurology",
    userId: "67d332811432c9c9fdf763f0",
  },
];

const seedDB = async () => {
  await Report.deleteMany({});
  await Report.insertMany(seedReports);
  console.log("Database Seeded with 10 reports with random dates!");
  mongoose.connection.close();
};

seedDB();
