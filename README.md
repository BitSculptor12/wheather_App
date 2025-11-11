
# Real-Time Weather App

> A simple, responsive Real-Time Weather application with a Java (Spring Boot) backend and a plain HTML/CSS/JavaScript frontend.  
> Fetches live weather from a third-party weather API and optionally generates a short AI summary for each city’s weather.

![](./assets/screenshot.png)

---

## Features
- Real-time current weather for any city (temperature, humidity, wind, description).
- 3-day / 7-day forecast (optional depending on API).
- Responsive frontend built with HTML, CSS, and vanilla JavaScript.
- Java Spring Boot backend that proxies weather API requests (keeps API key secure).
- Optional AI weather summary (short natural-language summary) — configurable.
- Clean UI with loading states and error handling.
- Easy to run locally and deploy.

---

## Tech Stack
- Frontend: HTML5, CSS3, JavaScript (vanilla)
- Backend: Java (Spring Boot) — REST API
- External APIs: OpenWeatherMap (recommended) or any weather API (Weatherbit, AccuWeather, etc.)
- Optional: OpenAI (or other LLM) for AI-powered weather summary
- Build: Maven (or Gradle) for Java backend

---

## Project Stru![WhatsApp Im![WhatsApp Image 2025-11-11 at 16 57 13_e067b1da](https://github.com/user-attachments/assets/924a7880-48f5-469e-b0f9-ba947b3f3685)
age 2025-11-11 at 16 56 48_6ef8863e](https://github.com/user-attachments/assets/e8941015-b64c-4121-af57-3d08fb5a6c49)
cture (suggested)
```
real-time-weather-app/
│
├─ backend/                      # Spring Boot app (Java)
│   ├─ src/main/java/...
│   ├─ src/main/resources/application.properties
│   └─ pom.xml
│
├─ frontend/                     # Static frontend files
│   ├─ index.html
│   ├─ css/
│   │   └─ styles.css
│   └─ js/
│       └─ app.js
│
├─ assets/
│   └─ screenshot.png
│
└─ README.md
```
