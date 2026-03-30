import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, X, Sun, Moon, Mail, Phone, MapPin, Briefcase, Layers, Code,
  LayoutDashboard, CheckCircle2, FolderGit2
} from "lucide-react";
import { useState, useEffect } from "react";

// --- TYPES & INTERFACES (Audit: Typage strict pour la sécurité et la clarté du code) ---
interface Stat {
  val: string;
  label: string;
}

interface Experience {
  date: string;
  title: string;
  company: string;
  desc: string;
}

interface Project {
  title: string;
  category: string;
  context: string;
  solution: string;
  results: { label: string; val: string }[];
  tools: string[];
}

interface Translation {
  role: string;
  heroDesc: string;
  about: {
    title: string;
    text: string;
  };
  skills: {
    title: string;
    subtitle: string;
    toolsTitle: string;
    items: string[];
  };
  stats: Stat[];
  experience: {
    title: string;
    subtitle: string;
    items: Experience[];
  };
  projects: {
    title: string;
    subtitle: string;
    items: Project[];
  };
  contact: {
    title: string;
    subtitle: string;
    desc: string;
    email: string;
    phone: string;
  };
  nav: {
    about: string;
    exp: string;
    skills: string;
    projects: string;
    contact: string;
  };
  ui: {
    contactMe: string;
    context: string;
    solution: string;
    results: string;
  };
  tools: { name: string; category: string }[];
}

// --- DATA ---
const t: Record<'fr' | 'en', Translation> = {
  fr: {
    role: "Opérations, Projets & Stratégie Digitale",
    heroDesc: "Profil hybride alliant rigueur opérationnelle, aisance relationnelle et forte culture digitale. J'accompagne les entreprises dans l'optimisation de leurs processus, le déploiement de projets et l'accompagnement des équipes.",
    about: {
      title: "À propos",
      text: "Fort d'une expérience internationale et multisectorielle, je m'adapte rapidement à de nouveaux environnements. Mon parcours me permet de faire le lien entre les enjeux métiers, l'opérationnel et le digital. Que ce soit pour structurer un projet, optimiser un outil ou accompagner une équipe, mon approche reste la même : efficacité, résolution de problèmes et orientation résultats."
    },
    skills: {
      title: "Domaines d'expertise",
      subtitle: "Compétences clés & Outils",
      toolsTitle: "Outils",
      items: [
        "Gestion des Opérations", "Management de Projet", "Relation Client B2B/B2C", 
        "Stratégie Digitale", "Gestion de Projets Web", "Analyse de Données", 
        "Logistique & Flux", "Optimisation des Processus", "Outils CRM & ERP"
      ]
    },
    stats: [
      { val: "6+", label: "Années d'expérience" },
      { val: "3+", label: "Secteurs (Tech, Auto, Logistique)" },
      { val: "360°", label: "Vision globale (Ops & Web)" }
    ],
    experience: {
      title: "Parcours Professionnel",
      subtitle: "Historique professionnel détaillé",
      items: [
        {
          date: "2024 — PRÉSENT",
          title: "COORDINATEUR LOGISTIQUE & OPÉRATIONS",
          company: "FREELANCE",
          desc: "Pilotage des flux logistiques, contrôle qualité et gestion de la relation client B2B/B2C. Optimisation des plannings et résolution de problèmes en temps réel."
        },
        {
          date: "2023 — PRÉSENT",
          title: "CONSULTANT DIGITAL",
          company: "FREELANCE",
          desc: "Création d'écosystèmes digitaux, gestion de projets web de A à Z. Déploiement de stratégies d'acquisition, gestion de campagnes publicitaires et optimisation des processus internes pour divers clients."
        },
        {
          date: "2022 — 2023",
          title: "BUSINESS DEVELOPER",
          company: "DUTTON ONE — AUSTRALIE",
          desc: "Développement commercial sur le marché australien. Négociation, gestion de portefeuille clients internationaux et suivi administratif rigoureux dans un environnement anglophone."
        },
        {
          date: "2021 — 2022",
          title: "RESPONSABLE MARKETING",
          company: "YELLOCLOUD",
          desc: "Création de sites web, supports de communication et community management."
        }
      ]
    },
    projects: {
      title: "Cas Pratiques",
      subtitle: "Exemples concrets d'interventions",
      items: [
        {
          title: "Génération de Leads (Google & Meta Ads)",
          category: "Acquisition Digitale",
          context: "Un client professionnel disposait d'un site web mais manquait de trafic qualifié et de demandes de devis entrantes (leads).",
          solution: "Audit de l'existant, mise en place d'un tracking précis (Pixel/GTM), création de campagnes Search (Google) ciblées sur l'intention d'achat et campagnes Meta pour la notoriété. Optimisation continue du budget (A/B testing).",
          results: [
            { label: "Objectif", val: "Baisse du CPL" },
            { label: "Tracking", val: "100% Mesurable" }
          ],
          tools: ["Google Ads", "Meta Ads", "Tag Manager", "Analytics"]
        },
        {
          title: "Optimisation des Flux de Livraison (Auto)",
          category: "Opérations & Logistique",
          context: "Gestion complexe des convoyages de véhicules premium à travers la France et l'Europe, nécessitant une coordination sans faille entre la concession et le client final.",
          solution: "Standardisation du processus de mise en main, gestion rigoureuse des documents administratifs (cession, conformité), et reporting en temps réel pour anticiper et résoudre les aléas logistiques.",
          results: [
            { label: "Qualité", val: "Zéro Défaut" },
            { label: "Couverture", val: "Internationale" }
          ],
          tools: ["CRM", "Outils de Planification", "Process Qualité"]
        },
        {
          title: "Lancement d'Écosystème E-commerce",
          category: "Développement & Tech",
          context: "Une entreprise souhaitant lancer ses ventes en ligne rapidement, mais refusant de dépendre d'une agence pour chaque modification de produit ou de prix.",
          solution: "Développement complet de la boutique sur Shopify, configuration des passerelles de paiement (Stripe/PayPal), et formation du client pour une gestion du catalogue 100% autonome.",
          results: [
            { label: "Déploiement", val: "Rapide" },
            { label: "Gestion", val: "Autonomie Totale" }
          ],
          tools: ["Shopify", "Stripe", "Figma"]
        },
        {
          title: "Structuration Commerciale & CRM",
          category: "Stratégie & Vente",
          context: "Un besoin de structurer la prospection B2B (qui se faisait sur Excel) pour suivre efficacement les leads et ne rater aucune relance dans un environnement concurrentiel.",
          solution: "Mise en place d'un CRM (Monday/Notion) avec un pipeline de vente visuel (Kanban). Création de templates d'emails pour le cold calling et suivi centralisé de chaque prospect jusqu'au closing.",
          results: [
            { label: "Pipeline", val: "Centralisé" },
            { label: "Suivi", val: "Zéro Oubli" }
          ],
          tools: ["CRM", "Notion", "Cold Calling"]
        }
      ]
    },
    contact: {
      title: "Prêt à relever un nouveau défi ?",
      subtitle: "Discutons de votre prochain projet",
      desc: "À la recherche d'une nouvelle opportunité (Opérations, Admin, Digital, Management). Prêt à m'investir pleinement.",
      email: "Email",
      phone: "07 62 05 51 90"
    },
    nav: {
      about: "Profil",
      exp: "Expériences",
      skills: "Compétences",
      projects: "Cas Pratiques",
      contact: "Contact"
    },
    ui: {
      contactMe: "Me contacter",
      context: "Contexte",
      solution: "Solution apportée",
      results: "Impact"
    },
    tools: [
      { name: "Monday", category: "Gestion de Projet" },
      { name: "Notion", category: "Productivité" },
      { name: "Make", category: "Automatisation" },
      { name: "Figma", category: "Design / UI" },
      { name: "Shopify / WP / Stripe", category: "E-commerce & Web" },
      { name: "Google Analytics", category: "Data / Analytics" },
    ]
  },
  en: {
    role: "Operations, Projects & Digital Strategy",
    heroDesc: "Hybrid profile combining operational rigor, interpersonal skills, and a strong digital culture. I help companies optimize their processes, deploy projects, and support teams.",
    about: {
      title: "About Me",
      text: "With international and cross-sector experience, I adapt quickly to new environments. My background allows me to bridge the gap between business needs, operations, and digital solutions. Whether structuring a project, optimizing a tool, or supporting a team, my approach remains the same: efficiency, problem-solving, and a results-oriented mindset."
    },
    skills: {
      title: "Areas of Expertise",
      subtitle: "Key skills & Tools",
      toolsTitle: "Tools",
      items: [
        "Operations Management", "Project Management", "B2B/B2C Client Relations", 
        "Digital Strategy", "Web Project Management", "Data Analysis", 
        "Logistics & Flows", "Process Optimization", "CRM & ERP Tools"
      ]
    },
    stats: [
      { val: "6+", label: "Years of Experience" },
      { val: "3+", label: "Sectors (Tech, Auto, Logistics)" },
      { val: "360°", label: "Global Vision (Ops & Web)" }
    ],
    experience: {
      title: "Professional Journey",
      subtitle: "Detailed professional history",
      items: [
        {
          date: "2024 — PRESENT",
          title: "LOGISTICS & OPERATIONS COORDINATOR",
          company: "FREELANCE",
          desc: "Management of logistics flows, quality control, and B2B/B2C customer relationship management. Schedule optimization and real-time problem solving."
        },
        {
          date: "2023 — PRESENT",
          title: "DIGITAL CONSULTANT",
          company: "FREELANCE",
          desc: "Creation of digital ecosystems, end-to-end web project management. Deployment of acquisition strategies, ad campaign management, and optimization of internal processes for various clients."
        },
        {
          date: "2022 — 2023",
          title: "BUSINESS DEVELOPER",
          company: "DUTTON ONE — AUSTRALIA",
          desc: "Business development in the Australian market. Negotiation, management of international client portfolios, and rigorous administrative follow-up in an English-speaking environment."
        },
        {
          date: "2021 — 2022",
          title: "MARKETING MANAGER",
          company: "YELLOCLOUD",
          desc: "Website creation, communication materials, and community management."
        }
      ]
    },
    projects: {
      title: "Use Cases",
      subtitle: "Concrete examples of interventions",
      items: [
        {
          title: "Lead Generation (Google & Meta Ads)",
          category: "Digital Acquisition",
          context: "A professional client had a website but lacked qualified traffic and incoming quote requests (leads).",
          solution: "Existing audit, implementation of precise tracking (Pixel/GTM), creation of Search campaigns (Google) targeted on purchase intent, and Meta campaigns for brand awareness. Continuous budget optimization (A/B testing).",
          results: [
            { label: "Goal", val: "Lower CPL" },
            { label: "Tracking", val: "100% Measurable" }
          ],
          tools: ["Google Ads", "Meta Ads", "Tag Manager", "Analytics"]
        },
        {
          title: "Delivery Flow Optimization (Auto)",
          category: "Operations & Logistics",
          context: "Complex management of premium vehicle convoys across France and Europe, requiring flawless coordination between the dealership and the end customer.",
          solution: "Standardization of the handover process, rigorous management of administrative documents (transfer, compliance), and real-time reporting to anticipate and resolve logistical hazards.",
          results: [
            { label: "Quality", val: "Zero Defects" },
            { label: "Coverage", val: "International" }
          ],
          tools: ["CRM", "Planning Tools", "Quality Process"]
        },
        {
          title: "E-commerce Ecosystem Launch",
          category: "Development & Tech",
          context: "A company wanting to launch online sales quickly, but refusing to depend on an agency for every product or price modification.",
          solution: "Full store development on Shopify, configuration of payment gateways (Stripe/PayPal), and client training for 100% autonomous catalog management.",
          results: [
            { label: "Deployment", val: "Fast" },
            { label: "Management", val: "Total Autonomy" }
          ],
          tools: ["Shopify", "Stripe", "Figma"]
        },
        {
          title: "Commercial Structuring & CRM",
          category: "Strategy & Sales",
          context: "A need to structure B2B prospecting (previously done on Excel) to effectively track leads and never miss a follow-up in a competitive environment.",
          solution: "Implementation of a CRM (Monday/Notion) with a visual sales pipeline (Kanban). Creation of email templates for cold calling and centralized tracking of each prospect until closing.",
          results: [
            { label: "Pipeline", val: "Centralized" },
            { label: "Follow-up", val: "Zero Misses" }
          ],
          tools: ["CRM", "Notion", "Cold Calling"]
        }
      ]
    },
    contact: {
      title: "Ready for a new challenge?",
      subtitle: "Let's discuss your next project",
      desc: "Looking for a new professional opportunity (Operations, Admin, Digital, Management). Ready to fully commit.",
      email: "Email",
      phone: "07 62 05 51 90"
    },
    nav: {
      about: "Profile",
      exp: "Experience",
      skills: "Skills",
      projects: "Use Cases",
      contact: "Contact"
    },
    ui: {
      contactMe: "Contact me",
      context: "Context",
      solution: "Solution provided",
      results: "Impact"
    },
    tools: [
      { name: "Monday", category: "Project Management" },
      { name: "Notion", category: "Productivity" },
      { name: "Make", category: "Automation" },
      { name: "Figma", category: "Design / UI" },
      { name: "Shopify / WP / Stripe", category: "E-commerce & Web" },
      { name: "Google Analytics", category: "Data / Analytics" },
    ]
  }
};

// --- TOOLS DATA ---
// Removed as it is now inside the Translation object

export default function App() {
  // Initialize state from localStorage if available
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mz-theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  
  const [lang, setLang] = useState<'fr' | 'en'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mz-lang');
      if (saved === 'fr' || saved === 'en') return saved;
      return navigator.language.startsWith('fr') ? 'fr' : 'en';
    }
    return 'fr';
  });
  
  const [activeTab, setActiveTab] = useState('overview');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Gestion optimisée du thème et sauvegarde
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('theme-transitioning');
    
    if (isDarkMode) {
      root.classList.remove('light');
      localStorage.setItem('mz-theme', 'dark');
    } else {
      root.classList.add('light');
      localStorage.setItem('mz-theme', 'light');
    }

    const timeout = setTimeout(() => {
      root.classList.remove('theme-transitioning');
    }, 50);
    return () => clearTimeout(timeout);
  }, [isDarkMode]);

  // Sauvegarde de la langue et mise à jour des balises SEO/Accessibilité
  useEffect(() => {
    localStorage.setItem('mz-lang', lang);
    document.documentElement.lang = lang;
    document.title = lang === 'fr' ? 'Mohamed Zitouni - Portfolio' : 'Mohamed Zitouni - Portfolio';
  }, [lang]);

  const currentT = t[lang];

  return (
    // Audit: Ajout de overflow-x-hidden pour éviter tout scroll horizontal indésirable
    <div className="min-h-[100dvh] overflow-x-hidden selection:bg-accent selection:text-bg bg-bg text-ink font-sans transition-colors duration-300 flex flex-col lg:flex-row pt-20 lg:pt-0">
      
      {/* Mobile Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-ink/10 lg:hidden">
        <div className="px-6 h-20 flex items-center justify-between">
          <button 
            onClick={() => { setActiveTab('overview'); window.scrollTo(0, 0); }}
            className="flex items-center space-x-3 text-left focus:outline-none group"
          >
            <div className="w-8 h-8 rounded-full border border-ink/20 overflow-hidden shrink-0 group-hover:border-accent/50 transition-colors">
              <img 
                src="https://i.postimg.cc/XNyc1zyQ/Design-sans-titre.png" 
                alt="Mohamed Zitouni" 
                className="w-full h-full object-cover object-center select-none scale-[1.15]"
                referrerPolicy="no-referrer"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>
            <div className="font-display font-bold text-lg tracking-tight group-hover:text-accent transition-colors">MZ<span className="text-accent">.</span></div>
          </button>
          <button 
            className="p-2" 
            onClick={() => setIsMenuOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed inset-0 z-[100] bg-bg flex flex-col p-6 lg:hidden"
          >
            <div className="flex justify-end">
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className="p-2"
                aria-label="Fermer le menu"
              >
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col space-y-6 mt-8 text-xl font-display font-medium">
              <button onClick={() => { setActiveTab('overview'); setIsMenuOpen(false); }} className={`text-left flex items-center ${activeTab === 'overview' ? 'text-accent' : ''}`}>
                <LayoutDashboard size={20} className="mr-4" /> Overview
              </button>
              <button onClick={() => { setActiveTab('experience'); setIsMenuOpen(false); }} className={`text-left flex items-center ${activeTab === 'experience' ? 'text-accent' : ''}`}>
                <Briefcase size={20} className="mr-4" /> {currentT.nav.exp}
              </button>
              <button onClick={() => { setActiveTab('skills'); setIsMenuOpen(false); }} className={`text-left flex items-center ${activeTab === 'skills' ? 'text-accent' : ''}`}>
                <Code size={20} className="mr-4" /> {currentT.nav.skills}
              </button>
              <button onClick={() => { setActiveTab('projects'); setIsMenuOpen(false); }} className={`text-left flex items-center ${activeTab === 'projects' ? 'text-accent' : ''}`}>
                <FolderGit2 size={20} className="mr-4" /> {currentT.nav.projects}
              </button>
              <button onClick={() => { setActiveTab('contact'); setIsMenuOpen(false); }} className={`text-left flex items-center ${activeTab === 'contact' ? 'text-accent' : ''}`}>
                <Mail size={20} className="mr-4" /> {currentT.nav.contact}
              </button>
              
              <div className="flex items-center justify-between pt-8 border-t border-ink/10 mt-auto">
                <button 
                  onClick={() => { setLang(lang === 'fr' ? 'en' : 'fr'); setIsMenuOpen(false); }} 
                  className="text-sm font-bold uppercase px-4 py-2 bg-ink/5 rounded-lg"
                  aria-label="Changer de langue"
                >
                  {lang === 'fr' ? 'Switch to EN' : 'Passer en FR'}
                </button>
                <button 
                  onClick={() => { setIsDarkMode(!isDarkMode); setIsMenuOpen(false); }} 
                  className="p-3 bg-ink/5 rounded-full"
                  aria-label="Changer de thème"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar (SaaS Navigation) */}
      <aside className="w-full lg:w-72 bg-surface border-r border-ink/10 lg:h-screen lg:fixed flex flex-col lg:pt-10 p-6 z-10 hidden lg:flex">
        
        {/* Profile Photo & Name */}
        <button 
          onClick={() => { setActiveTab('overview'); window.scrollTo(0, 0); }}
          className="mb-8 flex flex-col items-center text-center focus:outline-none group"
        >
          <div className="relative mb-4 transition-transform duration-300 group-hover:scale-105">
            <div className="w-24 h-24 rounded-full border-4 border-bg shadow-sm overflow-hidden group-hover:border-accent/20 transition-colors">
              <img 
                src="https://i.postimg.cc/XNyc1zyQ/Design-sans-titre.png" 
                alt="Mohamed Zitouni" 
                className="w-full h-full object-cover object-center select-none scale-[1.15]"
                referrerPolicy="no-referrer"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </div>
            <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-bg rounded-full z-10"></div>
          </div>
          <h1 className="text-xl font-display font-bold group-hover:text-accent transition-colors">Mohamed Zitouni</h1>
          <p className="text-xs text-ink/70 mt-1 font-mono">ID: MZ-OPS-2026</p>
        </button>

        {/* Navigation Tabs */}
        <nav className="flex flex-col gap-2">
          <button 
            onClick={() => setActiveTab('overview')} 
            className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'overview' ? 'bg-accent text-bg shadow-sm' : 'hover:bg-ink/5 text-ink/90'}`}
          >
            <LayoutDashboard size={18} className="mr-3" /> Overview
          </button>
          <button 
            onClick={() => setActiveTab('experience')} 
            className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'experience' ? 'bg-accent text-bg shadow-sm' : 'hover:bg-ink/5 text-ink/90'}`}
          >
            <Briefcase size={18} className="mr-3" /> {currentT.nav.exp}
          </button>
          <button 
            onClick={() => setActiveTab('skills')} 
            className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'skills' ? 'bg-accent text-bg shadow-sm' : 'hover:bg-ink/5 text-ink/90'}`}
          >
            <Code size={18} className="mr-3" /> {currentT.nav.skills}
          </button>
          <button 
            onClick={() => setActiveTab('projects')} 
            className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'projects' ? 'bg-accent text-bg shadow-sm' : 'hover:bg-ink/5 text-ink/90'}`}
          >
            <FolderGit2 size={18} className="mr-3" /> {currentT.nav.projects}
          </button>
          <button 
            onClick={() => setActiveTab('contact')} 
            className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'contact' ? 'bg-accent text-bg shadow-sm' : 'hover:bg-ink/5 text-ink/90'}`}
          >
            <Mail size={18} className="mr-3" /> {currentT.nav.contact}
          </button>
        </nav>

        {/* Settings / Toggles at bottom */}
        <div className="mt-auto pt-6 border-t border-ink/10 flex flex-col gap-4">
          <div className="flex items-center justify-between px-2">
            <span className="text-sm font-medium text-ink/90">Thème</span>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              className="p-2 bg-ink/5 rounded-full hover:bg-ink/10 transition-colors text-ink"
              aria-label="Changer de thème"
            >
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
          <div className="flex items-center justify-between px-2">
            <span className="text-sm font-medium text-ink/90">Langue</span>
            <button 
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')} 
              className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-ink/5 rounded-lg hover:bg-ink/10 transition-colors text-ink"
              aria-label="Changer de langue"
            >
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area - Audit: Centrage vertical dynamique pour éviter le scroll inutile */}
      <main className="flex-1 lg:ml-72 p-6 md:p-10 lg:p-12 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col flex-1">
          <AnimatePresence mode="wait">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <motion.div key="overview" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.15, ease: "easeOut" }} className="space-y-4 md:space-y-6 my-auto w-full py-2">
              <header className="mb-4 md:mb-6">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">Dashboard</h2>
                <p className="text-ink/90 text-lg">{currentT.role}</p>
              </header>
              
              {/* About Section (Moved up for mobile) */}
              <div className="bg-surface border border-accent/20 p-5 md:p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg font-bold mb-3 flex items-center"><Layers className="mr-3 text-accent" size={20} /> {currentT.about.title}</h3>
                <p className="text-ink/90 leading-relaxed text-base">{currentT.about.text}</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentT.stats.map((stat: Stat, i: number) => (
                  <div key={i} className="bg-surface border border-accent/20 p-4 md:p-5 rounded-2xl shadow-sm flex flex-col justify-center">
                    <p className="text-xs font-bold text-ink/70 uppercase tracking-wider mb-1">{stat.label}</p>
                    <p className="text-2xl md:text-3xl font-display font-bold text-accent">{stat.val}</p>
                  </div>
                ))}
              </div>

              {/* Quick Contact Banner */}
              <div className="bg-accent/10 border border-accent/20 p-4 md:p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center">
                  <MapPin className="text-accent mr-3 shrink-0" size={20} />
                  <span className="font-medium text-ink/90 text-sm md:text-base">Paris, France (Mobile international)</span>
                </div>
                <button onClick={() => setActiveTab('contact')} className="px-6 py-2.5 bg-accent text-bg rounded-xl font-bold text-sm hover:shadow-md transition-all whitespace-nowrap">
                  {currentT.ui.contactMe}
                </button>
              </div>
            </motion.div>
          )}

          {/* TAB 2: EXPERIENCE */}
          {activeTab === 'experience' && (
            <motion.div key="experience" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.15, ease: "easeOut" }} className="space-y-6 my-auto w-full py-4">
              <header className="mb-6 md:mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">{currentT.experience.title}</h2>
                <p className="text-ink/90 text-lg">{currentT.experience.subtitle}</p>
              </header>
              
              <div className="space-y-4">
                {currentT.experience.items.map((exp: Experience, i: number) => (
                  <div key={i} className="bg-surface border border-accent/20 p-6 rounded-2xl shadow-sm flex flex-col md:flex-row gap-4 md:gap-6 hover:border-accent/40 transition-colors group">
                    <div className="md:w-56 shrink-0">
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent md:bg-ink/5 md:text-ink/90 text-xs font-bold rounded-lg mb-2 md:group-hover:bg-accent/10 md:group-hover:text-accent transition-colors">{exp.date}</span>
                      <p className="text-sm font-bold text-ink/90 uppercase tracking-wider">{exp.company}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold mb-2">{exp.title}</h3>
                      <p className="text-ink/90 leading-relaxed text-sm md:text-base">{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 3: SKILLS */}
          {activeTab === 'skills' && (
            <motion.div key="skills" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.15, ease: "easeOut" }} className="space-y-6 my-auto w-full py-4">
              <header className="mb-6 md:mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">{currentT.skills.title}</h2>
                <p className="text-ink/90 text-lg">{currentT.skills.subtitle}</p>
              </header>
              
              {/* Skills Grid */}
              <div className="bg-surface border border-accent/20 p-6 rounded-2xl shadow-sm mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
                  {currentT.skills.items.map((skill: string, i: number) => (
                    <div key={i} className="group flex items-center p-3 md:p-4 border border-accent/20 rounded-xl bg-bg hover:border-accent/40 hover:bg-accent/5 transition-colors duration-300 cursor-default">
                      <CheckCircle2 size={18} className="text-accent mr-3 shrink-0 transition-colors duration-300" />
                      <span className="text-sm font-medium transition-colors duration-300 group-hover:text-accent">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Stack */}
              <div className="bg-surface border border-accent/20 p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg font-bold mb-4 flex items-center"><Code className="mr-3 text-accent" size={20} /> {currentT.skills.toolsTitle}</h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {currentT.tools.map((tool, i) => (
                    <div key={i} className="flex flex-col px-4 py-2 bg-bg border border-accent/20 rounded-lg hover:border-accent/40 transition-colors cursor-default">
                      <span className="text-sm font-bold">{tool.name}</span>
                      <span className="text-[10px] uppercase tracking-wider text-ink/70">{tool.category}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 4: PROJECTS */}
          {activeTab === 'projects' && (
            <motion.div key="projects" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.15, ease: "easeOut" }} className="space-y-6 my-auto w-full py-4">
              <header className="mb-6 md:mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">{currentT.projects.title}</h2>
                <p className="text-ink/90 text-lg">{currentT.projects.subtitle}</p>
              </header>
              
              <div className="grid grid-cols-1 gap-6">
                {currentT.projects.items.map((project: Project, i: number) => (
                  <div key={i} className="bg-surface border border-accent/20 p-6 md:p-8 rounded-2xl shadow-sm hover:border-accent/40 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-lg mb-3">{project.category}</span>
                        <h3 className="text-2xl font-display font-bold">{project.title}</h3>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-bg p-5 rounded-xl border border-ink/5">
                        <h4 className="text-sm font-bold text-ink/70 uppercase tracking-wider mb-2">{currentT.ui.context}</h4>
                        <p className="text-ink/90 text-sm leading-relaxed">{project.context}</p>
                      </div>
                      <div className="bg-bg p-5 rounded-xl border border-ink/5">
                        <h4 className="text-sm font-bold text-ink/70 uppercase tracking-wider mb-2">{currentT.ui.solution}</h4>
                        <p className="text-ink/90 text-sm leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between pt-6 border-t border-ink/10">
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, j) => (
                          <span key={j} className="px-3 py-1 bg-ink/5 text-ink/90 text-xs font-medium rounded-md">{tool}</span>
                        ))}
                      </div>
                      <div className="flex gap-4 w-full md:w-auto">
                        {project.results.map((res, j) => (
                          <div key={j} className="flex-1 md:flex-none">
                            <p className="text-[10px] font-bold text-ink/70 uppercase tracking-wider mb-1">{res.label}</p>
                            <p className="text-lg font-display font-bold text-accent">{res.val}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 5: CONTACT */}
          {activeTab === 'contact' && (
            <motion.div key="contact" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.15, ease: "easeOut" }} className="space-y-6 my-auto w-full py-4">
              <header className="mb-6 md:mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">{currentT.nav.contact}</h2>
                <p className="text-ink/90 text-lg">{currentT.contact.subtitle}</p>
              </header>

              {/* Contact Call to Action */}
              <div className="bg-accent text-bg p-6 md:p-8 rounded-2xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-2">{currentT.contact.title}</h3>
                  <p className="text-bg/90 leading-relaxed max-w-xl text-sm md:text-base">{currentT.contact.desc}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
                  <a href="mailto:mohamedzitouni.pro@gmail.com" className="flex items-center justify-center px-6 py-3 bg-bg text-ink rounded-xl font-bold text-sm hover:scale-105 transition-transform">
                    <Mail size={18} className="mr-2" /> Email
                  </a>
                  <a href="tel:+33762055190" className="flex items-center justify-center px-6 py-3 bg-transparent border-2 border-bg text-bg rounded-xl font-bold text-sm hover:bg-bg/10 transition-colors">
                    <Phone size={18} className="mr-2" /> {currentT.contact.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
