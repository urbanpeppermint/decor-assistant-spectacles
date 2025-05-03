Décor Assistant: AR Interior Design for Spectacles

🔗 Built on Snap's AI Assistant Sample (Original features: Text-to-Speech, 
Camera Access, AI Vision, Fetch API)

Décor Assistant is an augmented reality tool built for Snap Spectacles, 
enabling users to visualize and interact with interior design concepts 
within their own physical spaces. This project leverages Snap's AI 
Assistant Sample as a foundation, extending its capabilities for 
intelligent spatial design.

Base Project Features

Voice commands (SIK Text-to-Speech)

Real-time camera feed processing

HTTP requests via Fetch API

Key Features

Surface-Aware AR Placement: Precisely anchors virtual décor objects to 
detected walls and floors using WorldQueryHit (integrated from Snap's AI 
Assistant Sample).

AI-Powered Style Analysis: Employs custom integration with GPT-4o to 
analyze scanned room environments and suggest relevant interior design 
styles.

DALLE Visualization: Generates photorealistic image previews of redesigned 
spaces based on AI style recommendations and user customizations.

Dual Interaction Modes:

Toggle between AI suggestions & manual drag-and-drop

AI Suggestions Mode: Receives automated décor style recommendations and 
visualizations driven by AI.

Manual Design Mode: Allows for direct and intuitive placement of virtual 
objects using SpawnOnSurface for personalized design.

🛠️ Technical Stack

Component

Source

AR Foundation

Snap Spectacles Experimental API

Surface Detection

Custom WorldQueryHit extensions

AI Integration

OpenAI GPT-4o + DALLE-3

3D Models

CREDITS.md

🛠️ Technical Implementation

Base Project: Modified version of Snap's AI Assistant Sample (developed 
with Lens Studio v5.7.2.25).

Key Extensions:

Custom OpenAI Integration: Seamlessly integrates GPT-4o for intelligent 
style analysis and DALLE for realistic image generation.

Enhanced Object Library: Includes a curated selection of high-quality 3D 
models sourced from Sketchfab (see Licenses & Attributions).

⚙️ Setup

Prerequisites

Snap Spectacles (2021 or later)

Lens Studio (v5.7.2.25 or later)

OpenAI API key with access to both GPT-4o and DALLE models.

Run the Project

Clone the repository:git clone [your-repo-url]

(Replace [your-repo-url] with the actual URL of your GitHub repository)

Open the main.esproj file located within the cloned directory using Lens 
Studio.

Follow the official Snap Lens Studio documentation for deploying lenses to 
Spectacles.

Base Code

This project builds upon the AI Assistant Sample provided by Snap Inc., 
which is licensed under the Apache License 2.0.

🚀 Roadmap

Future development efforts for Décor Assistant include:

Furniture Recognition: Integrating SnapML or Roboflow for intelligent 
detection and interaction with existing furniture.

Multi-Room Support: Expanding the application to facilitate design across 
multiple interconnected rooms.

Design Save/Load: Implementing functionality to save and load user-created 
design projects for later editing.

🤝 Contributing

We encourage and welcome contributions to Décor Assistant! If you have 
expertise in areas such as:

Improving the accuracy and robustness of surface detection logic.

Developing additional AI-powered style presets and recommendations.

Optimizing the handling and rendering of 3D models within the AR 
environment.

Please feel free to submit pull requests with your proposed enhancements.
