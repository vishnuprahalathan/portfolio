import {
    FaCode,
    FaJava,
    FaPython,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaDocker,
    FaGithub,
    FaShieldAlt,
    FaNetworkWired,
    FaDatabase,
    FaBrain,
    FaLock,
    FaTerminal,
    FaBug,
    FaUsers,
    FaCertificate,
    FaPalette,
    FaBehance,
} from "react-icons/fa";

import elevateLabs from "../assets/elevate_labs.jpg";
import skctLogo from "../assets/skct_logo.jpg";
import chanakyaShieldImg from "../assets/chanakya_shield.png";
import passGuardImg from "../assets/passguard.png";
import vpnImg from "../assets/vpn.png";
import melangeImg from "../assets/melange.png";

// New local images to prevent broken links
import flowmindImg from "../assets/flowmind.png";
import visionAiImg from "../assets/vision_ai.png";
import photographyImg from "../assets/photography.png";
import reelsImg from "../assets/reels.png";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Experience",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Cyber Security Specialist",
        icon: FaShieldAlt,
    },
    {
        title: "AI / ML Developer",
        icon: FaBrain,
    },
    {
        title: "Graphic Designer",
        icon: FaPalette,
    },
    {
        title: "DevOps Enthusiast",
        icon: FaNetworkWired,
    },
];

const technologies = [
    {
        name: "Java",
        icon: FaJava,
        color: "#f89820",
    },
    {
        name: "Python",
        icon: FaPython,
        color: "#3776ab",
    },
    {
        name: "Spring Boot",
        icon: FaCode,
        color: "#6db33f",
    },
    {
        name: "React JS",
        icon: FaReact,
        color: "#61dafb",
    },
    {
        name: "HTML 5",
        icon: FaHtml5,
        color: "#e34f26",
    },
    {
        name: "CSS 3",
        icon: FaCss3Alt,
        color: "#1572b6",
    },
    {
        name: "Docker",
        icon: FaDocker,
        color: "#2496ed",
    },
    {
        name: "GitHub",
        icon: FaGithub,
        color: "#ffffff",
    },
    {
        name: "Wireshark",
        icon: FaNetworkWired,
        color: "#16a085",
    },
    {
        name: "Burp Suite",
        icon: FaBug,
        color: "#e67e22",
    },
    {
        name: "Adobe Photoshop",
        icon: FaPalette,
        color: "#31a8ff",
    },
    {
        name: "Adobe Illustrator",
        icon: FaPalette,
        color: "#ff9a00",
    },
];

const experiences = [
    {
        title: "Cybersecurity | AI/ML | DevOps Trainee",
        company_name: "Elevate Labs",
        icon: elevateLabs,
        iconBg: "#E6DEDD",
        date: "Jun 2024 – Jul 2024",
        points: [
            "Performed vulnerability assessments combining cybersecurity and ML workflows (AI-driven Security).",
            "Built ML models and automated deployments using DevOps tools (CI/CD integrated).",
            "Collaborated on multi-person codebases via GitHub, practicing code reviews and resolving merge conflicts.",
            "Worked with Java, Python, Spring Boot, React.js, and Docker while building secure and scalable mini-projects."
        ],
    },
    {
        title: "B.E. Computer Science & Engineering (Cybersecurity)",
        company_name: "Sri Krishna College of Technology",
        icon: skctLogo,
        iconBg: "#000000",
        date: "Aug 2023 - Present",
        points: ["CGPA: 7.36*", "Specialized in Network Security, Cryptography, and Secure Coding."],
    },
];

const projects = [
    {
        name: "FlowMind",
        description:
            "A Gemini Live Agent project that intelligently manages workflows, integrates language models, and provides conversational AI experiences tailored for productivity.",
        tags: [
            { name: "gemini-api", color: "blue-text-gradient" },
            { name: "react", color: "green-text-gradient" },
            { name: "gen-ai", color: "pink-text-gradient" },
        ],
        image: flowmindImg,
        source_code_link: "https://github.com/vishnuprahalathan/FlowMind",
        iconType: "github",
    },
    {
        name: "Vision AI Website Architect",
        description:
            "An AI-powered architect that visually plans and generates web structure blueprints. Seamlessly integrates with AI to conceptualize and structure modern web platforms.",
        tags: [
            { name: "ai-vision", color: "blue-text-gradient" },
            { name: "nextjs", color: "green-text-gradient" },
            { name: "architecture", color: "pink-text-gradient" },
        ],
        image: visionAiImg,
        source_code_link: "https://github.com/vishnuprahalathan/Vision-AI-Website-Architect",
        iconType: "github",
    },
    {
        name: "Chanakya Shield",
        description:
            "Real-Time Network Packet Sniffer & Anomaly Detection System. Hybrid IDS performing feature extraction and ML-based anomaly detection (SVM, Isolation Forest).",
        tags: [
            { name: "python", color: "blue-text-gradient" },
            { name: "scapy", color: "green-text-gradient" },
            { name: "machine-learning", color: "pink-text-gradient" },
            { name: "docker", color: "blue-text-gradient" },
        ],
        image: chanakyaShieldImg,
        source_code_link: "https://github.com/vishnuprahalathan/Chanakya_Shield",
        iconType: "github",
    },
    {
        name: "PassGuard",
        description:
            "Advanced password security tool featuring password strength analysis, breach detection, secure password generation, and encrypted storage with best-in-class standards.",
        tags: [
            { name: "security", color: "blue-text-gradient" },
            { name: "cryptography", color: "green-text-gradient" },
            { name: "python", color: "pink-text-gradient" },
        ],
        image: passGuardImg,
        source_code_link: "https://github.com/vishnuprahalathan/PassGuard",
        iconType: "github",
    },
    {
        name: "VPN Implementation",
        description:
            "Custom VPN solution built from scratch with secure tunneling protocols, encryption mechanisms, and traffic routing capabilities for enhanced privacy and security.",
        tags: [
            { name: "networking", color: "blue-text-gradient" },
            { name: "security", color: "green-text-gradient" },
            { name: "encryption", color: "pink-text-gradient" },
        ],
        image: vpnImg,
        source_code_link: "https://github.com/vishnuprahalathan/VPN",
        iconType: "github",
    },
    {
        name: "Melange",
        description:
            "Skill Learning Platform built with React.js and Spring Boot. Full-stack application for instructors and learners with REST APIs, authentication, and interactive UI.",
        tags: [
            { name: "react", color: "blue-text-gradient" },
            { name: "springboot", color: "green-text-gradient" },
            { name: "mysql", color: "pink-text-gradient" },
        ],
        image: melangeImg,
        source_code_link: "https://github.com/vishnuprahalathan/melange",
        iconType: "github",
    },
    {
        name: "Cinematic Photography",
        description:
            "A collection of my professional photography and color grading work. Features cinematic compositions, street photography, and advanced photo editing techniques.",
        tags: [
            { name: "photography", color: "blue-text-gradient" },
            { name: "color-grading", color: "green-text-gradient" },
            { name: "lightroom", color: "pink-text-gradient" },
        ],
        image: photographyImg,
        source_code_link: "https://www.instagram.com/supasutarajinikanto",
        iconType: "behance", // using behance icon temporarily as a generic link/portfolio icon
    },
    {
        name: "Video Reels & VFX Editing",
        description:
            "High-energy video reels, VFX, and motion graphics edited for Instagram. Showcasing seamless transitions, beat-syncing, and advanced post-production storytelling.",
        tags: [
            { name: "video-editing", color: "blue-text-gradient" },
            { name: "premiere-pro", color: "green-text-gradient" },
            { name: "davinci-resolve", color: "pink-text-gradient" },
        ],
        image: reelsImg,
        source_code_link: "https://www.instagram.com/supasutarajinikanto",
        iconType: "behance",
    },
];

export { services, technologies, experiences, projects };
