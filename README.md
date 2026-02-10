# The Tokyo Arteries - Japan Vintage Street Style Jackets

![The Tokyo Arteries](https://img.shields.io/badge/The%20Tokyo%20Arteries-Premium%20Street%20Jackets-purple?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.1.1-646CFF?style=for-the-badge&logo=vite)
![Contentful](https://img.shields.io/badge/Contentful-CMS-2478CC?style=for-the-badge&logo=contentful)

## 📖 Overview

The Tokyo Arteries is a premium landing page showcasing Japan's finest vintage street style jackets. This project features precision-engineered urban armor for the modern warrior, combining sophisticated design with direct, urban-technical copywriting to drive conversions using the AIDA (Attention, Interest, Desire, Action) marketing framework.

**Developed as part of:** Beasiswa DevHandal2026 Course by CODEPOLITAN  
**Deployment Target:** TencentEdgeOne

## ✨ Features

- **Urban-Technical Design**: Flat design with purple color palette and retro aesthetic
- **Responsive Landing Page**: Optimized for all devices with modern React 19
- **Dynamic Product Catalog**: Real-time data from Contentful CMS
- **AIDA Framework**: Strategic sections designed to maximize conversion
- **WhatsApp Integration**: Direct CTA button with prefilled messages
- **FontAwesome Icons**: Professional iconography without emoji dependencies

## 🏗️ Architecture

### Tech Stack

- **Frontend**: React 19.2.0 + Vite 5.x
- **Styling**: CSS3 with flat design principles
- **CMS**: Contentful for product management
- **Icons**: FontAwesome React components
- **Build Tool**: Vite with ESLint configuration

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/MrRaffs/tokyo-arteries-jacket.git
   cd tokyo-arteries-web
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   change .env_example file name to .env in root directory

   ```bash
   VITE_CONTENTFUL_SPACE_ID= #your Contentful space id
   VITE_CONTENTFUL_ACCESS_TOKEN= #your Contentful acces token
   VITE_CONTENTFUL_CONTENT_TYPE= #your Contentful content type
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Open browser**
   Navigate to `http://localhost:5173`

## 📝 Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Build production-ready application       |
| `npm run preview` | Preview production build locally         |
| `npm run lint`    | Run ESLint for code quality checks       |

## 📊 Content Management

### Contentful Integration

The project uses Contentful CMS to manage product data with the following content model:

**Content Type**: `jackets`

| Field         | Type      | Description           |
| ------------- | --------- | --------------------- |
| `name`        | Text      | Product name          |
| `description` | Rich Text | Product description   |
| `price`       | Number    | Product price         |
| `category`    | Text      | Product category      |
| `image`       | Media     | Product image         |
| `featured`    | Boolean   | Featured product flag |

## 🚀 Deployment

### TencentEdgeOne Deployment

This project is configured for deployment on TencentEdgeOne CDN platform.

**Deploy to TencentEdgeOne**

- Select Create Project in Tencent Pages
- Import Github Repository
- Wait for it to be built
- Set up custom domain (optional)

## 📱 WhatsApp Integration

The CTA button integrates with WhatsApp using a prefilled message:

- **Target Number**: 089876543201
- **Action**: "Secure the Piece" button triggers WhatsApp with pre-written message

## 🤝 Contributing

This project is part of the DevHandal2026 educational program. For contributions:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is created for educational purposes as part of the DevHandal2026 course by CODEPOLITAN.

## 🎓 Course Information

**Program**: Beasiswa DevHandal2026  
**Provider**: CODEPOLITAN  
**Focus**: Modern web development with React and deployment strategies  
**Deployment Platform**: TencentEdgeOne

---

**Built with ❤️ for the DevHandal2026 program | Powered by React + Vite + Contentful**
