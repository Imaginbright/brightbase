import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const techProblemDescriptionMap: { [key: string]: string } = {
  ipad: "iPads are powerful tablets, but often face issues like app compatibility, storage limits, and high repair costs.",
  appstore:
    "The App Store is the main source for iOS apps, but strict policies and regional restrictions can limit app availability.",
  debitcard:
    "Debit cards are essential for online payments, but issues like declined transactions and international limits often arise.",
  nigeria:
    "In Nigeria, tech users face challenges like limited payment gateways, poor internet reliability, and high device costs.",
  camera:
    "Smartphone and device cameras often struggle with low-light performance, lens damage, or software restrictions.",
  mouse:
    "Computer mice can suffer from issues like double-clicking errors, poor sensitivity, or connectivity problems.",
  va: "Virtual Assistants (VAs) like Siri or Alexa help automate tasks but often lack accuracy, context awareness, or language support.",
  lcd: "LCD screens are widely used in devices but are prone to issues like dead pixels, backlight bleeding, and durability problems.",
  mirror:
    "Smart mirrors and reflective tech face challenges with visibility, cost, and integrating interactive features effectively.",
  sidestore:
    "Sidetores are alternative app marketplaces outside the official App Store, raising concerns about security and app reliability.",
  ipas: "IPAs are iOS app files used for installation, but sideloading them can be complex and limited by Apple’s restrictions.",
  sideload:
    "Sideloading allows installing apps outside official stores, but it comes with risks like malware and revoked certificates.",
  subscription:
    "Subscription models offer convenience but can lead to recurring costs, hidden fees, and difficulty canceling services.",
  battery:
    "Device batteries degrade over time, causing shorter usage, overheating, and sudden shutdowns.",
  charger:
    "Chargers vary by device and region, leading to slow charging, incompatibility, or damage when using third-party options.",
  warranty:
    "Warranties protect your device, but navigating claim processes and exclusions can be frustrating.",
  iosupdate:
    "iOS updates improve features and security but sometimes cause performance issues or compatibility problems on older devices.",
  jailbreak:
    "Jailbreaking removes iOS restrictions, allowing more customization but also voiding warranty and increasing security risks.",
  vpn: "VPNs improve privacy and unlock content, but free services can slow speeds, log data, or fail to bypass geo-blocks.",
  sim: "SIM card issues like activation errors, poor network coverage, and carrier locks can limit device usability.",
  storage:
    "Limited storage space often leads to performance issues, app crashes, and constant data management headaches.",
  overheating:
    "Devices overheat under heavy use or poor ventilation, causing throttling, shutdowns, or hardware damage.",
  bluetooth:
    "Bluetooth devices sometimes face pairing failures, connection drops, or limited range issues.",
  screenprotector:
    "Screen protectors prevent damage but can affect touch sensitivity, clarity, or compatibility with certain cases.",
  wifi: "Wi-Fi problems like weak signal, disconnections, or slow speeds often stem from router issues or interference.",
  biometrics:
    "Biometric sensors like Face ID or fingerprint readers can fail due to dirt, hardware wear, or poor lighting conditions.",
  storageexpansion:
    "Some devices lack expandable storage, forcing reliance on cloud solutions or frequent file cleanup.",
  icloud:
    "iCloud offers seamless backup and sync, but limited free storage and sync errors can frustrate users.",
  payments:
    "Digital payments are convenient but often fail due to bank restrictions, security checks, or network errors.",
  screenburn:
    "OLED and LCD screens can suffer from burn-in, leaving permanent ghost images after prolonged static display.",
  repair:
    "Device repairs can be expensive and risky, with unofficial services sometimes using low-quality parts.",
  accessories:
    "Finding compatible accessories can be tricky, and low-quality ones may cause performance issues or damage.",
};

export const getTechProblemDescription = (techName: string): string => {
  // Normalize the input: remove unwanted characters and lowercase it
  const normalizedTechName = techName.replace(/[ .]/g, "").toLowerCase();

  // Lookup from the map, else return a default description
  return techProblemDescriptionMap[normalizedTechName]
    ? techProblemDescriptionMap[normalizedTechName]
    : `${techName} is a technology or issue commonly encountered in the real world, often bringing both challenges and opportunities.`;
};

export const getDevIconClassName = (techName: string) => {
  const normalizedTechName = techName.replace(/[ .]/g, "").toLowerCase();

  const techMap: { [key: string]: string } = {
    javascript: "devicon-javascript-plain",
    js: "devicon-javascript-plain",
  };

  return techMap[normalizedTechName]
    ? `${techMap[normalizedTechName]} colored`
    : "devicon-ghost-original";
};

export function formatNumber(number: number) {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + "K";
  } else {
    return number.toString();
  }
}

export const getTimeStamp = (createdAt: Date): string => {
  const date = new Date(createdAt);
  const now = new Date();

  const diffMilliseconds = now.getTime() - date.getTime();
  const diffSeconds = Math.round(diffMilliseconds / 1000);
  if (diffSeconds < 60) {
    return `${diffSeconds} seconds ago`;
  }

  const diffMinutes = Math.round(diffSeconds / 60);
  if (diffMinutes < 60) {
    return `${diffMinutes} mins ago`;
  }

  const diffHours = Math.round(diffMinutes / 60);
  if (diffHours < 24) {
    return `${diffHours} hours ago`;
  }

  const diffDays = Math.round(diffHours / 24);

  return `${diffDays} days ago`;
};
