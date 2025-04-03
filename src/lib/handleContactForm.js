"use server";

import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";

async function handleContactForm(formData) {
  const { name, email, message = "" } = Object.fromEntries(formData.entries());

  const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS || "{}");

  const auth = new GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const service = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.SPREADSHEET_ID;
  const range = "Sheet1!A1:C1";
  const valueInputOption = "USER_ENTERED";
  const resource = {
    values: [[name, email, message]],
  };
  try {
    const result = service.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption,
      resource,
    });

    if (result.status !== 200) {
      return true;
    }

    return true;
  } catch (error) {
    return false;
  }
}

export default handleContactForm;
