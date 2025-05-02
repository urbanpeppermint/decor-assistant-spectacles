# Décor Assistant: AR Interior Design for Spectacles

> Tags: `Spectacles Lens Studio License` • `AI Vision` • 
`Capabilities`

> 🔗 Built on Snap's [AI Assistant 
Sample](https://github.com/Snapchat/Lens-Studio-Spectacles-Samples/tree/main/AI%20Assistant)
> (Original features: Text-to-Speech, Camera Access, AI Vision, Fetch 
API)

Décor Assistant is an augmented reality tool built for Snap 
Spectacles, enabling users to visualize and interact with interior 
design concepts within their own physical spaces. This project 
leverages Snap's AI Assistant Sample as a foundation, extending its 
capabilities for intelligent spatial design.

---

## ✨ Key Features

- 🧠 **AI-Powered Style Analysis**  
  Employs custom integration with GPT-4o to analyze scanned room 
environments and suggest relevant interior design styles.

- 🎨 **DALLE Visualization**  
  Generates photorealistic image previews of redesigned spaces based 
on AI style recommendations and user customizations.

- 🧱 **Surface-Aware AR Placement**  
  Precisely anchors virtual décor objects to detected walls and 
floors using WorldQueryHit.

- 🎛️ **Dual Interaction Modes**  
  - **AI Suggestions Mode**: Receives automated décor style 
recommendations and visualizations driven by AI.
  - **Manual Design Mode**: Allows for direct and intuitive placement 
of virtual objects using SpawnOnSurface for personalized design.

---

## 🛠️ Technical Stack

| Component | Source |
|-----------|--------|
| AR Foundation | Snap Spectacles Experimental API |
| Surface Detection | Custom WorldQueryHit extensions |
| AI Integration | OpenAI GPT-4o + DALLE-3 |
| 3D Models | See [CREDITS.md](./CREDITS.md) |

---

<details>
<summary><strong>📸 How It Works (Screenshots + 
Flow)</strong></summary>

### 1. Capture Your Space

<img src="docs/screenshots/step1_capture.jpg" width="400"/>

---

### 2. AI Suggests Style Based on Room Layout

<img src="docs/screenshots/step2_ai_suggestion.jpg" width="400"/>

---

### 3. View DALLE-Generated Room Concept

<img src="docs/screenshots/step3_dalle_result.jpg" width="400"/>

---

### 4. Drag-and-Drop Decor in Manual Mode

<img src="docs/screenshots/step4_manual_mode.jpg" width="400"/>

</details>

---

## ▶️ Demo Video

Coming soon!  
(You can upload a .mp4 or .mov demo to `docs/demo.mp4` and embed like 
this:)

```html
<video src="docs/demo.mp4" width="600" controls autoplay 
loop></video>
```

---

## ⚙️ Setup

### Prerequisites

- Snap Spectacles (2021 or later)
- Lens Studio (v5.7.2.25 or later)
- OpenAI API key with access to both GPT-4o and DALLE models.

### Run the Project

1. Clone the repository:
   ```
   git clone 
https://github.com/urbanpeppermint/decor-assistant-spectacles.git
   ```

2. Open the `AI_Decor_Assistant.esproj` file using Lens Studio.

3. Set your OpenAI API key in the `VisionOpenAI_DALLE.js` script.

4. Build and deploy to Spectacles (follow Snap's official 
documentation).

---

## 🧱 Base Code Attribution

This project builds upon the AI Assistant Sample provided by Snap 
Inc., which is licensed under the Apache License 2.0.

## 🚀 Roadmap

- 🛋️ **Furniture Recognition**: Integrating SnapML or Roboflow for 
intelligent detection and interaction with existing furniture.
- 🏠 **Multi-Room Support**: Expanding the application to facilitate 
design across multiple interconnected rooms.
- 💾 **Design Save/Load**: Implementing functionality to save and 
load user-created design projects for later editing.

## 🤝 Contributing

We encourage and welcome contributions to Décor Assistant! If you 
have expertise in areas such as:

- Improving the accuracy and robustness of surface detection logic.
- Developing additional AI-powered style presets and recommendations.
- Optimizing the handling and rendering of 3D models within the AR 
environment.

Please feel free to fork the repo and submit pull requests with your 
proposed enhancements.
