import React, { useState } from 'react';
import { 
  Database, Cloud, Cpu, Terminal, GitBranch, Server, 
  Workflow, CheckCircle2, ChevronRight, Code2, Layers,
  Linkedin, Github, Phone, Mail, FileDown, Award, Briefcase, GraduationCap
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('architectures');
  const [selectedArch, setSelectedArch] = useState('lakehouse');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copied, setCopied] = useState(false);

  // System Architecture Diagrams based on Databricks & MLOps expertise
  const architectureData = {
    lakehouse: {
      title: "Multi-Cloud Medallion Lakehouse Architecture",
      subtitle: "Streaming & Batch Ingestion across Azure, AWS & GCP (GXS Digital Banking / DASH)",
      layers: [
        { name: "Sources", items: ["Kafka", "Azure Event Hubs", "REST APIs", "Banking OLTP DBs"], color: "bg-purple-900/40 text-purple-300 border-purple-700/50" },
        { name: "Bronze (Raw)", items: ["Append-only ADLS / S3", "Schema Enforcement", "Autoloader Streaming"], color: "bg-amber-900/40 text-amber-300 border-amber-700/50" },
        { name: "Silver (Cleaned)", items: ["Deduplication", "HIPAA/Regulatory Audit", "Spark Data Validation"], color: "bg-slate-700/60 text-slate-300 border-slate-600" },
        { name: "Gold (Business)", items: ["Aggregated Data Marts", "Redshift / Synapse", "Real-Time ML Feature Store"], color: "bg-amber-500/20 text-amber-400 border-amber-500/40" }
      ],
      code: `# Databricks PySpark Autoloader Ingestion into Delta Lake
from pyspark.sql.functions import col, current_timestamp

(spark.readStream
  .format("cloudFiles")
  .option("cloudFiles.format", "json")
  .option("cloudFiles.schemaLocation", "dbfs:/mnt/schemas/gxs_banking")
  .load("dbfs:/mnt/raw/transactions/")
  .withColumn("ingested_at", current_timestamp())
  .writeStream
  .format("delta")
  .option("checkpointLocation", "dbfs:/mnt/checkpoints/gxs_bronze")
  .outputMode("append")
  .table("gold_banking.transactions_raw"))`
    },
    mlops: {
      title: "Enterprise MLOps & Real-Time Analytics Pipeline",
      subtitle: "Model Lifecycle Tracking with MLflow & Vector Search Embeddings",
      layers: [
        { name: "Data Prep", items: ["Delta Live Tables", "Feature Store", "Chunking & Vector Store"], color: "bg-blue-900/40 text-blue-300 border-blue-700/50" },
        { name: "Model Ops", items: ["MLflow Experiment", "Hyperopt Tuning", "Model Registry"], color: "bg-emerald-900/40 text-emerald-300 border-emerald-700/50" },
        { name: "Retrieval", items: ["Databricks Vector Search", "LangChain Framework", "RAG Prompt Pipeline"], color: "bg-sky-900/40 text-sky-300 border-sky-700/50" },
        { name: "Serving", items: ["REST API Endpoints", "DARE Archival System", "Automated Compliance Monitoring"], color: "bg-indigo-900/40 text-indigo-300 border-indigo-700/50" }
      ],
      code: `# Real-Time ML Model Registration & Pipeline Tracking via MLflow
import mlflow
import mlflow.spark

with mlflow.start_run(run_name="banking_fraud_detection"):
    mlflow.log_param("chunk_size", 512)
    mlflow.log_param("embedding_model", "text-embedding-3-small")
    
    # Execute distributed Spark training
    model_accuracy = train_spark_ml_model(df_silver)
    mlflow.log_metric("accuracy", model_accuracy)
    
    print("Pipeline run successfully logged to Databricks MLflow Registry.")`
    }
  };

  // Expanded Skills categorised from resume
  const skills = [
    { name: "Apache Spark & PySpark", level: "Expert / Architect (15+ Yrs)", category: "bigdata", icon: Cpu },
    { name: "Databricks & Delta Lake", level: "Multi-Cloud Expert", category: "bigdata", icon: Database },
    { name: "Azure (ADF, Fabric, ADLS)", level: "Enterprise Architect", category: "cloud", icon: Cloud },
    { name: "AWS (EMR, Redshift, S3)", level: "Cloud Migration Lead", category: "cloud", icon: Cloud },
    { name: "CI / CD & Airflow", level: "Pipeline Automation", category: "devops", icon: GitBranch },
    { name: "MLflow & RAG Architectures", level: "MLOps Specialist", category: "mlops", icon: Layers },
    { name: "PostgreSQL, Oracle, Redshift", level: "Database Tuning", category: "database", icon: Server },
    { name: "Python, Scala & React.js", level: "Full Stack Platform Dev", category: "code", icon: Code2 }
  ];

  // Resume Work Experience
  const experiences = [
    {
      company: "Singtel",
      location: "Singapore",
      role: "Lead Data Engineer",
      period: "September 2023 – Present",
      bullets: [
        "Architected enterprise analytics pipelines leveraging Databricks, Microsoft Fabric, and Apache Spark on Azure/GCP for GXS Digital Banking and DASH Remittance.",
        "Engineered high-throughput Spark pipelines supporting real-time ML model deployment, operational analytics, and automated regulatory reporting.",
        "Built the Data Archival & Retrieval (DARE) system using React.js, PostgreSQL, and AWS to securely archive decommissioned banking data.",
        "Refactored distributed Spark jobs and tuned Databricks cluster configurations to accelerate training cycle times and pipeline throughput."
      ]
    },
    {
      company: "Impetus",
      location: "Bengaluru, India",
      role: "Lead Software Engineer",
      period: "April 2022 – September 2023",
      bullets: [
        "Engineered big data processing pipelines for Intelligent Mural Networks (IMN) at Optum, processing complex healthcare intelligence datasets.",
        "Automated production ETL workflows using Apache Airflow, reducing manual operations by 60%."
      ]
    },
    {
      company: "Optum",
      location: "Chennai, India",
      role: "Senior Data Engineer",
      period: "October 2016 – March 2022",
      bullets: [
        "Led enterprise database migrations from Oracle to Spark SQL and Amazon Redshift, delivering $15M in operational cost savings while ensuring HIPAA compliance.",
        "Built an automated Spark–Oracle data comparison framework from scratch, reducing manual QA testing effort by 70%.",
        "Designed targeted consumer device analytics pipelines that directly drove SGD 2M revenue generation within a single week."
      ]
    },
    {
      company: "Ramco Systems",
      location: "Chennai, India",
      role: "ETL Developer",
      period: "December 2014 – September 2016",
      bullets: [
        "Designed and deployed an East Asian Income Tax Calculator and reporting module for international tax compliance.",
        "Automated tax calculations, payroll processing workflows, and backend ERP data integration across enterprise clients."
      ]
    }
  ];

  // Resume Education
  const education = [
    {
      degree: "Specialist Diploma in Full Stack with AI",
      institution: "National University of Singapore (NUS)",
      period: "2025",
      details: "Focus: Deep Learning, Production AI Deployment & React/Node Full-Stack Platforms"
    },
    {
      degree: "Master of Business Administration (MBA) - Finance & Marketing",
      institution: "Anna University (Easa Engineering College)",
      period: "2012 – 2014",
      details: "CGPA: 7.9"
    },
    {
      degree: "Bachelor of Engineering (B.Tech) - Information Technology",
      institution: "Anna University (Apollo Engineering College)",
      period: "2008 – 2012",
      details: "CGPA: 7.6"
    }
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(s => s.category === selectedCategory);

  const copyCode = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-sky-500/10 border border-sky-500/30 rounded-lg text-sky-400">
              <Database className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">Vigneshwaran<span className="text-sky-400">.DE</span></span>
          </div>
          <div className="flex space-x-6 text-sm font-medium text-slate-400">
            <button onClick={() => setActiveTab('architectures')} className={`hover:text-sky-400 transition ${activeTab === 'architectures' ? 'text-sky-400 font-semibold' : ''}`}>Designs</button>
            <button onClick={() => setActiveTab('skills')} className={`hover:text-sky-400 transition ${activeTab === 'skills' ? 'text-sky-400 font-semibold' : ''}`}>Skills</button>
            <button onClick={() => setActiveTab('experience')} className={`hover:text-sky-400 transition ${activeTab === 'experience' ? 'text-sky-400 font-semibold' : ''}`}>Experience & Education</button>
            <button onClick={() => setActiveTab('contact')} className={`hover:text-sky-400 transition ${activeTab === 'contact' ? 'text-sky-400 font-semibold' : ''}`}>Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span> Singapore | Lead Data Engineer & Data Platform Architect
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight max-w-4xl leading-tight">
          Vigneshwaran Vadivel
        </h1>
        <p className="mt-4 text-lg text-slate-400 max-w-3xl leading-relaxed">
          Over 15 years of experience architecting multi-cloud data lakes (Databricks, Microsoft Fabric, Redshift), building distributed PySpark pipelines, and operationalizing production MLOps/AI systems across banking, telecom, and healthcare.
        </p>

        {/* Quick Contact & Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="https://github.com/vignesh4v/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 hover:text-white hover:border-sky-500 transition text-sm">
            <Github className="w-4 h-4 text-sky-400" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/vignesh4v/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 hover:text-white hover:border-sky-500 transition text-sm">
            <Linkedin className="w-4 h-4 text-sky-400" /> LinkedIn
          </a>
          <a href="mailto:vignesh4v@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 hover:text-white hover:border-sky-500 transition text-sm">
            <Mail className="w-4 h-4 text-sky-400" /> vignesh4v@gmail.com
          </a>
        </div>

        {/* High-Impact Key Metrics Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex items-center gap-4">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg"><Award className="w-6 h-6" /></div>
            <div>
              <p className="text-xl font-bold text-white">$15M Saved</p>
              <p className="text-xs text-slate-400">Cloud Migration & Database Modernization</p>
            </div>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex items-center gap-4">
            <div className="p-3 bg-sky-500/10 text-sky-400 rounded-lg"><Award className="w-6 h-6" /></div>
            <div>
              <p className="text-xl font-bold text-white">SGD 2M Impact</p>
              <p className="text-xs text-slate-400">Generated via Consumer Analytics Pipelines</p>
            </div>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex items-center gap-4">
            <div className="p-3 bg-purple-500/10 text-purple-400 rounded-lg"><Award className="w-6 h-6" /></div>
            <div>
              <p className="text-xl font-bold text-white">40% Runtime Boost</p>
              <p className="text-xs text-slate-400">Spark SQL & ETL Performance Optimization</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Interactive Sections */}
      <main className="max-w-7xl mx-auto px-6 pb-24">
        
        {/* TAB 1: ARCHITECTURES & DESIGNS */}
        {activeTab === 'architectures' && (
          <section className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
              <div>
                <h2 className="text-2xl font-bold text-white">Interactive System Designs</h2>
                <p className="text-slate-400 text-sm mt-1">Select an architecture pattern to view data flow layers and PySpark / MLflow code snippets.</p>
              </div>
              <div className="flex bg-slate-900 border border-slate-800 p-1 rounded-xl">
                <button 
                  onClick={() => setSelectedArch('lakehouse')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${selectedArch === 'lakehouse' ? 'bg-sky-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  Multi-Cloud Lakehouse
                </button>
                <button 
                  onClick={() => setSelectedArch('mlops')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${selectedArch === 'mlops' ? 'bg-sky-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  MLOps & Vector Search
                </button>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-100">{architectureData[selectedArch].title}</h3>
                <p className="text-slate-400 text-sm mt-1">{architectureData[selectedArch].subtitle}</p>
              </div>

              {/* Data Pipeline Stages */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-8">
                {architectureData[selectedArch].layers.map((layer, idx) => (
                  <div key={idx} className="relative group">
                    <div className={`p-4 rounded-xl border ${layer.color} h-full flex flex-col justify-between transition-all duration-300 hover:scale-[1.02]`}>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider opacity-75">{`Stage 0${idx + 1}`}</span>
                        <h4 className="font-bold text-base mt-1 mb-3">{layer.name}</h4>
                        <ul className="space-y-2">
                          {layer.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="text-xs flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 opacity-60 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {idx < 3 && (
                      <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Live Code Snippet */}
              <div className="mt-8 bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-mono text-slate-300">spark_pipeline_execution.py</span>
                  </div>
                  <button 
                    onClick={() => copyCode(architectureData[selectedArch].code)}
                    className="text-xs px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                  >
                    {copied ? 'Copied!' : 'Copy Code'}
                  </button>
                </div>
                <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
                  <code>{architectureData[selectedArch].code}</code>
                </pre>
              </div>
            </div>
          </section>
        )}

        {/* TAB 2: TECHNICAL SKILLS */}
        {activeTab === 'skills' && (
          <section className="space-y-8">
            <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white">Technical Ecosystem</h2>
                <p className="text-slate-400 text-sm mt-1">Core frameworks, cloud platforms, and databases utilized across enterprise initiatives.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['all', 'bigdata', 'cloud', 'devops', 'mlops', 'database', 'code'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider transition ${selectedCategory === cat ? 'bg-sky-500 text-white' : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredSkills.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div key={idx} className="bg-slate-900/60 border border-slate-800 p-5 rounded-xl hover:border-sky-500/50 transition group">
                    <div className="p-3 bg-sky-500/10 border border-sky-500/20 text-sky-400 w-fit rounded-lg mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-100 text-base">{skill.name}</h3>
                    <p className="text-xs text-sky-400 font-medium mt-1">{skill.level}</p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* TAB 3: WORK EXPERIENCE & EDUCATION */}
        {activeTab === 'experience' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Professional Experience Column */}
            <section className="lg:col-span-2 space-y-6">
              <div className="border-b border-slate-800 pb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-sky-400" />
                <h2 className="text-2xl font-bold text-white">Professional Experience</h2>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                        <p className="text-sky-400 text-sm font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-slate-400 font-mono block">{exp.period}</span>
                        <span className="text-xs text-slate-500">{exp.location}</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-slate-300">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-sky-400 mt-1">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Column */}
            <section className="space-y-6">
              <div className="border-b border-slate-800 pb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-sky-400" />
                <h2 className="text-2xl font-bold text-white">Education</h2>
              </div>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl">
                    <span className="text-xs text-sky-400 font-mono">{edu.period}</span>
                    <h3 className="text-base font-bold text-white mt-1">{edu.degree}</h3>
                    <p className="text-xs text-slate-400 mt-1">{edu.institution}</p>
                    <p className="text-xs text-slate-500 mt-2">{edu.details}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* TAB 4: CONTACT SECTION */}
        {activeTab === 'contact' && (
          <section className="space-y-8 max-w-4xl mx-auto">
            <div className="border-b border-slate-800 pb-6 text-center">
              <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
              <p className="text-slate-400 text-sm mt-2">Open for enterprise data architecture consulting, engineering leadership, and strategic AI initiatives.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl text-center">
                <Mail className="w-8 h-8 text-sky-400 mx-auto mb-3" />
                <h3 className="text-base font-bold text-white">Email</h3>
                <a href="mailto:vignesh4v@gmail.com" className="text-xs text-sky-400 hover:underline mt-2 block">vignesh4v@gmail.com</a>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl text-center">
                <Phone className="w-8 h-8 text-sky-400 mx-auto mb-3" />
                <h3 className="text-base font-bold text-white">Phone / WhatsApp</h3>
                <p className="text-xs text-slate-300 mt-2">+65 83612341 / +91 9597383924</p>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl text-center">
                <Linkedin className="w-8 h-8 text-sky-400 mx-auto mb-3" />
                <h3 className="text-base font-bold text-white">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/vignesh4v/" target="_blank" rel="noreferrer" className="text-xs text-sky-400 hover:underline mt-2 block">linkedin.com/in/vignesh4v</a>
              </div>
            </div>
          </section>
        )}

      </main>
    </div>
  );
}