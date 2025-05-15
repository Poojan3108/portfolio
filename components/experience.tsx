"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type ExperienceItem = {
  id: number
  company: string
  location: string
  role: string
  period: string
  description: string
}

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: "CHARUSAT Space Research and Technology Center",
      location: "Anand, India",
      role: "Research Intern",
      period: "Dec 2024 - May 2025",
      description: "Developed a system for mapping possible terrestrial habitats for wildlife using remote sensory data and deep learning frameworks.",
    },
    {
      id: 2,
      company: "iNeuron.ai",
      location: "Remote",
      role: "Intern",
      period: "May 2024 - June 2024",
      description: "Analysed algorithms used for detecting phishing domains by extracting key features of web page links and identifying whether they are genuine or not.",
    },
    {
      id: 3,
      company: "Intern",
      location: "Vadodara, India",
      role: "Intern",
      period: "May 2023 - June 2023",
      description: "Developed an e-commerce website using Wordpress and Django with hands-on experience of team collaborations and coporate interactions.",
    },
  ]

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="section-subtitle">Experience</div>
        <h2 className="section-title">Explore My Design Journey</h2>

        <div className="mt-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="timeline-dot"></div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-3">
                  <h3 className="font-medium">{exp.company}</h3>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
                <div className="md:col-span-7">
                  <h4 className="font-medium">{exp.role}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                  <p className="text-sm">{exp.description}</p>
                </div>
                <div className="md:col-span-2 flex md:justify-end items-start gap-2">
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
