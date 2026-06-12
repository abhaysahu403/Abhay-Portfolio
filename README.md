# Abhay Sahu Portfolio

A modern, interactive portfolio website for Abhay Sahu — a Backend Engineer & AI Systems Builder specializing in scalable microservices and real-time intelligent systems.

![Portfolio Preview](https://via.placeholder.com/1200x600/0f172a/3b82f6?text=Abhay+Sahu+Portfolio)

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Static site

## ✨ Features

- **Interactive Hero Section** — Animated introduction with mouse-follow glow effect
- **Project Showcase** — Detailed case studies with architecture diagrams (SecureWealth AI, SafeSphere, BharatStudio)
- **Skills Visualization** — Proficiency-based skill display across Backend, AI/ML, Infrastructure, and Languages
- **Achievements Gallery** — Hackathon wins, certifications, and DSA accomplishments
- **AI Chat Assistant** — Interactive AI-powered chatbot for visitor queries
- **Contact Form** — Direct contact options with phone, email, GitHub, LinkedIn, and LeetCode links
- **Responsive Design** — Fully optimized for all screen sizes

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Anthropic API key (for AI chat feature)

### Installation

```bash
# Clone the repository
git clone https://github.com/abhaysahu403/Abhay-Portfolio.git
cd Abhay-Portfolio

# Install dependencies
npm install

# Set up environment variables
# Copy .env.example to .env and add your Anthropic API key
# The API key is only needed for the AI chat feature
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/abhaysahu403/Abhay-Portfolio)

1. Click the deploy button above or go to [Vercel](https://vercel.com)
2. Import your repository
3. Add environment variable: `ANTHROPIC_API_KEY` with your API key
4. Deploy!

**Note:** The AI chat feature requires the `ANTHROPIC_API_KEY` environment variable to be set in your Vercel project settings.

## 📁 Project Structure

```
abhay-portfolio/
├── public/
│   ├── abhay.png                 # Profile image
│   ├── Abhay_Sahu_Resume.pdf     # Resume download
│   └── favicon.svg               # Site favicon
├── src/
│   ├── components/
│   │   ├── Achievements.jsx      # Awards & achievements
│   │   ├── AIChat.jsx            # AI chatbot widget
│   │   ├── ArchDiagram.jsx      # Architecture diagram renderer
│   │   ├── CaseStudyModal.jsx   # Project detail modal
│   │   ├── Contact.jsx          # Contact section
│   │   ├── Footer.jsx           # Site footer
│   │   ├── Hero.jsx             # Hero section
│   │   ├── MouseGlow.jsx        # Mouse follow effect
│   │   ├── Navbar.jsx           # Navigation bar
│   │   ├── Projects.jsx         # Projects showcase
│   │   └── Skills.jsx           # Skills visualization
│   ├── data/
│   │   └── portfolio.js         # Portfolio content data
│   ├── App.jsx                  # Main app component
│   ├── index.css                # Global styles
│   └── main.jsx                 # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## 🧑‍💻 About Abhay Sahu

- **Role:** Backend Engineer & AI Systems Builder
- **Education:** B.Tech in CSE, Sagar Institute of Research & Technology, Bhopal (2027)
- **Location:** Bhopal, India
- **CGPA:** 7.7/10

### Key Projects

| Project | Description | Tech Stack |
|---------|-------------|------------|
| **SecureWealth AI** | Event-driven fraud detection engine with sub-30ms latency | Python, FastAPI, Kafka, Redis, PostgreSQL, XGBoost |
| **SafeSphere** | AI-powered disaster preparedness platform (🏆 1st Prize, Anveshna Hackathon) | Django, Gemini API, Mapbox, Three.js |
| **BharatStudio** | AI content generation platform | Python, Generative AI, Full-Stack |

### Skills

- **Backend:** Spring Boot, FastAPI, Django, REST, Microservices
- **AI/ML:** XGBoost, SHAP, Gemini API, Prompt Engineering, RAG
- **Infrastructure:** Apache Kafka, Docker, Redis, PostgreSQL, Oracle Cloud
- **Languages:** Python, Java, SQL, JavaScript

### Certifications

- Oracle Cloud Infrastructure 2025 Certified Developer Professional
- Oracle Cloud Infrastructure 2025 Certified Generative AI Professional
- MySQL HeatWave Implementation Certified Associate
- NPTEL — Java Programming (Elite)
- NPTEL — Machine Learning

## 📬 Contact

- **Email:** abhaysahucse@gmail.com
- **Phone:** 930-282-8547
- **GitHub:** [github.com/abhaysahu-cse](https://github.com/abhaysahu-cse)
- **LinkedIn:** [linkedin.com/in/abhay-sahu-222226232](https://www.linkedin.com/in/abhay-sahu-222226232/)
- **LeetCode:** [leetcode.com/u/Abhay_Sahu_Cse/](https://leetcode.com/u/Abhay_Sahu_Cse/)
- **Twitter:** [x.com/SahuAbhay93](https://x.com/SahuAbhay93)

## 📄 License

This project is for demonstration purposes.