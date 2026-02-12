# How to Get a Google Maps API Key

To use the map functionality, you need a Google Maps API Key. Here's a step-by-step guide:

## 1. Create a Project on Google Cloud
1.  Go to the [Google Cloud Console](https://console.cloud.google.com/).
2.  If you don't have an account, create one.
3.  Click the project dropdown in the top bar (next to "Google Cloud").
4.  Click **"New Project"**.
5.  Give your project a name (e.g., "Ideal Home Project") and click **"Create"**.
6.  Once created, select your new project from the top dropdown.

## 2. Enable Required APIs
For the map and directions to work, you need to enable two specific APIs:

1.  In the left sidebar, go to **"APIs & Services" > "Library"**.
2.  Search for **"Maps JavaScript API"**.
    -   Click on it and click **"Enable"**.
3.  Go back to the Library.
4.  Search for **"Directions API"**.
    -   Click on it and click **"Enable"**.

> **Note**: You may need to set up a billing account with Google Cloud. They offer a generous free tier ($200/month credit), which is usually enough for development and small projects.

## 3. Create an API Key
1.  In the left sidebar, go to **"APIs & Services" > "Credentials"**.
2.  Click **"+ CREATE CREDENTIALS"** (at the top) and select **"API key"**.
3.  Your API key will be created and displayed in a popup window.
4.  **Copy this key**.

## 4. Add the Key to Your Project
1.  Open the file named `.env` in your project folder (`c:\Users\HP\Desktop\Ideal home\.env`).
2.  Paste your key like this:
    ```
    VITE_GOOGLE_MAPS_API_KEY=AIzaSy... (your key here)
    ```
3.  Save the file.
4.  **Important**: Stop and restart your development server for the changes to take effect:
    -   Press `Ctrl + C` in your terminal to stop.
    -   Run `npm run dev` to start again.

## 5. (Optional) Restrict Your Key
To prevent unauthorized use of your key (and potential costs), it's good practice to restrict it:
1.  In the "Credentials" page, click on the name of your API key to edit it.
2.  Under **"API restrictions"**, select **"Restrict key"**.
3.  In the dropdown, select **"Maps JavaScript API"** and **"Directions API"**.
4.  Click **"Save"**.
