"use server";

import { JWT } from "google-auth-library";
import { google } from "googleapis";

async function handleContactForm(formData: FormData): Promise<boolean> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return false;
  }

  try {
    const rawCredentials = process.env.GOOGLE_CREDENTIALS;
    const spreadsheetId = process.env.SPREADSHEET_ID;

    if (!rawCredentials || !spreadsheetId) {
      console.error(
        "Missing GOOGLE_CREDENTIALS or SPREADSHEET_ID environment variable.",
      );
      return false;
    }

    const credentials: unknown = JSON.parse(rawCredentials);
    if (
      typeof credentials !== "object" ||
      credentials === null ||
      !("client_email" in credentials) ||
      !("private_key" in credentials) ||
      typeof credentials.client_email !== "string" ||
      typeof credentials.private_key !== "string"
    ) {
      console.error("Invalid GOOGLE_CREDENTIALS structure.");
      return false;
    }

    const auth = new JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const service = google.sheets({ version: "v4", auth });
    const result = await service.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A1:C1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, email, message]],
      },
    });

    return result.status === 200;
  } catch (error) {
    console.error(
      "Failed to append contact form submission:",
      error instanceof Error ? error.message : "Unknown error",
    );
    return false;
  }
}

export default handleContactForm;
