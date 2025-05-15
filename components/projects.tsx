"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowUpRight, Github } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type Project = {
  id: number
  title: string
  semester: string
  tags: string[]
  description?: string
  projectUrl?: string
  githubUrl?: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "KBC Mindfest",
      semester: "Diploma",
      description: "Interactive quiz platform with multiple categories and difficulty levels.",
      tags: ["React.js","MongoDB","Google OAuth"],
      projectUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Text-Speech Recognition",
      semester: "3rd Sem",
      description: "System that converts spoken language into written text and vice versa.",
      tags: ["Python","pyttsx3"],
      projectUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Crop Prediction System",
      semester: "4th Sem",
      description: "IoT-based system to predict optimal crop selection based on soil and climate data.",
      tags: ["Moisture Sensor","Arduino","Python","Django"],
      projectUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "RawBeauty",
      semester: "4th Sem Internship",
      description: "E-commerce website for natural beauty products with custom themes and features.",
      tags: ["Wordpress", "Django"],
      projectUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Event Ledger",
      semester: "5th Sem",
      description: "Blockchain-verified certificate generation and validation system.",
      tags: ["Solidity", "Flutter", "Dart", "Truffle"],
      projectUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Digitone",
      semester: "6th Sem",
      description: "AI-powered content generator using transformer-based models.",
      tags: ["MusicGen-small", "transformers", "Flask", "React.js", "Python"],
      projectUrl: "https://github.com/Poojan3108/Digitone",
      githubUrl: "https://github.com/Poojan3108/Digitone",
    },
    {
      id: 7,
      title: "Phishing Domain Detection",
      semester: "6th Sem Internship",
      description: "ML-based system to identify and flag potential phishing domains.",
      tags: ["Python", "Keras", "TensorFlow"],
      projectUrl: "https://example.com/phishing-detection",
      githubUrl: "https://github.com/Poojan3108/phishing-detection",
    },
    {
      id: 8,
      title: "Product Sentiment Analysis",
      semester: "7th Sem",
      description: "NLP tool that analyzes customer reviews to determine product sentiment.",
      tags: ["Python", "React.js", "NLP", "textblob"],
      projectUrl: "https://github.com/Poojan3108/Sentiment_Analysis",
      githubUrl: "https://github.com/Poojan3108/Sentiment_Analysis",
    },
    {
      id: 9,
      title: "Mapping of Possible Terrestrial Habitat for Wildlife",
      semester: "8th Sem Internship SPM",
      description: "Deep learning approach to map and identify potential wildlife habitats using satellite imagery.",
      tags: ["DeepLabV3+", "UNet", "TransUNet", "DigiGlobe16"],
      projectUrl: "https://github.com/Poojan3108/Mapping-of-Possible-Terrestrial-Habitat-for-Wildlife",
      githubUrl: "https://github.com/Poojan3108/Mapping-of-Possible-Terrestrial-Habitat-for-Wildlife",
    },
  ]

  // Define color classes for different tag categories
  const getTagColor = (tag: string): string => {
    if (tag.includes("Web") || tag.includes("MERN") || tag.includes("Wordpress")) 
      return "bg-emerald-900/20 text-emerald-300 dark:bg-emerald-900/20 dark:text-emerald-300";
    if (tag.includes("AI") || tag.includes("Machine Learning") || tag.includes("Deep Learning") || tag.includes("NLP") || tag.includes("Natural Language")) 
      return "bg-purple-900/20 text-purple-300 dark:bg-purple-900/20 dark:text-purple-300";
    if (tag.includes("IoT") || tag.includes("Hardware")) 
      return "bg-green-900/20 text-green-300 dark:bg-green-900/20 dark:text-green-300";
    if (tag.includes("Blockchain")) 
      return "bg-amber-900/20 text-amber-300 dark:bg-amber-900/20 dark:text-amber-300";
    if (tag.includes("Data") || tag.includes("Remote")) 
      return "bg-teal-900/20 text-teal-300 dark:bg-teal-900/20 dark:text-teal-300";
    if (tag.includes("Cyber")) 
      return "bg-rose-900/20 text-rose-300 dark:bg-rose-900/20 dark:text-rose-300";
    if (tag.includes("Gen AI") || tag.includes("Transformer")) 
      return "bg-indigo-900/20 text-indigo-300 dark:bg-indigo-900/20 dark:text-indigo-300";

    return "bg-slate-800/40 text-slate-300 dark:bg-slate-800/40 dark:text-slate-300";
  };

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium text-amber-600 dark:text-amber-400 tracking-wide mb-2">PORTFOLIO</p>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my work across various domains, from web development to AI and machine learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="group h-full border-none bg-white dark:bg-slate-900 hover:bg-gradient-to-b hover:from-white hover:to-slate-50 dark:hover:from-slate-900 dark:hover:to-slate-800/80 overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                <CardContent className="p-6 space-y-4 flex-grow">

                  {/* Title with link */}
                  <Link 
                    href={project.projectUrl || "#"} 
                    className="block group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-300"
                  >
                    <h3 className="text-xl font-medium leading-tight tracking-tight flex items-center">
                      {project.title}
                      <ArrowUpRight className="h-4 w-4 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                    </h3>
                  </Link>
                  
                  {/* Description */}
                  {project.description && (
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {project.description}
                    </p>
                  )}
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className={`text-xs px-2 py-0.5 rounded-md font-medium border-0 ${getTagColor(tag)}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                  {project.githubUrl && (
                    <Link 
                      href={project.githubUrl} 
                      target="_blank"
                      className="flex items-center text-xs text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-amber-300 transition-colors"
                    >
                      <Github className="h-3.5 w-3.5 mr-1.5" />
                      View Source
                    </Link>
                  )}

                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full px-6 bg-white dark:bg-transparent border border-slate-200 dark:border-slate-800 transition-colors shadow-sm dark:text-amber-400 dark:hover:text-amber-300" 
            asChild
          >
            <Link href="https://github.com/Poojan3108" target="_blank">
              View All Projects <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}