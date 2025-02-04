"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, Briefcase, Code2, User } from "lucide-react";
import Container from "@/components/Container";

const tabMenu = [
  { title: "Internships", value: "internships", icon: Briefcase },
  { title: "Education", value: "education", icon: GraduationCap },
  { title: "Skills", value: "skills", icon: Code2 },
  { title: "About me", value: "about", icon: User },
  { title: "Certificates", value: "certificates", icon: Code2 }, // Added Certificates
];

const tabContent = {
  internships: {
    title: "Internships",
    items: [
      {
        role: "Data Science Intern",
        company: "Teachnook (ORBO)",
        period: "Summer 2024",
        description:
          "During my internship at Teachnook, I gained hands-on experience in data science, focusing on exploratory data analysis (EDA), regression modeling, and classification modeling. I mastered data visualization, fine-tuned regression models, and designed accurate classification models through feature selection. This internship equipped me with valuable data science skills for future projects.",
        highlights: ["Data Science", "Exploratory Data Analysis", "Regression Modeling", "Classification Modeling", "Feature Selection"],
      },
    ],
  },
  education: {
    title: "Educational Background",
    items: [
      {
        degree: "Master of Computer Application",
        institution: "University of Calicut",
        period: "Sep 2024 - Present",
        description: "Currently pursuing Master of Computer Application (MCA) from Lead College of Management.",
        achievements: []
      },
      
      {
        degree: "Bachelor of Computer Application",
        institution: "University of Calicut",
        period: "Aug 2021 - April 2024",
        description:
          "Completed Bachelor of computer application from sadanam kumaran college.",
        achievements: ["84.4%"],
      },
      {
        degree: "Higher Secondary Education",
        institution: "KANNADI HSS, Palakkad",
        period: "July 2019 - March 2021",
        description:
          "Completed higher secondary education with a focus on Computer Science.",
        achievements: ["89%"],
      },
      {
        degree: "SSLC Education",
        institution: "Bhavans Vidhya Mandir, Chithali",
        period: "June 2018 - March 2019",
        description: "Completed SSLC education.",
        achievements: ["69%"],
      },
    ],
  },
  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Frontend Development",
        description:
          "Experienced in building responsive and interactive user interfaces using modern frontend technologies. Skilled in translating design concepts into functional applications with a focus on performance and user experience. Proficient in JavaScript frameworks like React , ensuring optimal performance and scalability of web applications",
        skills: [
          "React",
          "Html & Css",
          "TypeScript",
          "Tailwind CSS",
          "Javascript",
        ],
      },
      {
        name: "Machine Learning Model Development",
        description:
          "Focused on designing, training, and deploying machine learning models. Experienced in data preprocessing, model evaluation, and optimization techniques for various tasks including regression, classification, and clustering.",
        skills: ["Python", "TensorFlow", "Opencv", "Seaborn", "Pandas", "NumPy"],
      },
      
      {
        name: "Tools & Others",
        description:
          "Experienced in utilizing various platforms and tools to enhance productivity, collaborate on open-source projects, and solve complex problems. Active on GitHub for code repositories, Kaggle for data science challenges, and HackerRank for practicing coding skills.",
        skills: ["Git", "HackerRank", "LinkedIn", "Kaggle"],
      },
      
    ],
  },
  about: {
    title: "About Me",
    bio: "I am a passionate machine learning and front-end developer with a strong foundation in building innovative solutions. With hands-on experience in developing user-centric web applications using modern frontend technologies like React and Javascript, and expertise in designing and deploying machine learning models, I am dedicated to pushing the boundaries of technology. I am constantly exploring new tools and frameworks, aiming to deliver high-quality, efficient, and scalable solutions.",
    interests: [
      "Machine Learning",
      "Frontend Development",
      "Data Science",
      "Tech Blogging",
    ],
    languages: ["Malayalam (Native)", "English (Fluent)"],
  },
  certificates: { // Added section for certificates
    title: "Certificates",
    items: [
      {
        certificate: "Certificate of Internship Completion",
        institution: "ORBO",
        period: "May 2023",
        description: "Completed an internship focusing on data science, with an emphasis on exploratory data analysis, regression modeling, and classification modeling.",
      },
      {
        certificate: "Python Basics",
        institution: "Zanx",
        period: "June 2023",
        description: "A foundational course on Python programming, covering syntax, data structures, and basic libraries.",
      },
      {
        certificate: "Python Programming",
        institution: "Kaggle",
        period: "June 2023",
        description: "An intermediate course on Python programming that covers advanced topics like OOP and working with libraries.",
      },
      {
        certificate: "Pandas",
        institution: "Kaggle",
        period: "December 2022",
        description: "A certification focused on using the Pandas library for data manipulation, analysis, and data cleaning.",
      },
      {
        certificate: "Intro to Machine Learning",
        institution: "Kaggle",
        period: "December 2022",
        description: "Introduction to machine learning techniques including supervised and unsupervised learning, algorithms, and model evaluation.",
      },
    ],
  },
};

export default function ResumePage() {
  return (
    <section className="flex flex-col justify-center text-white py-10">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="w-full"
        >
          <Tabs
            defaultValue="internships"
            className="w-full flex flex-col md:flex-row gap-6 md:gap-10"
          >
            <TabsList className="flex md:flex-col h-full bg-transparent md:w-64 gap-4">
              {tabMenu.map((item) => (
                <TabsTrigger
                  key={item.value}
                  value={item.value}
                  className="bg-white/10 w-full py-2.5 text-white data-[state=active]:bg-hoverColor hover:bg-lightSky/50 text-xs sm:text-sm"
                >
                  <div className="flex items-center gap-1.5 md:w-[50%] md:gap-3">
                    <item.icon className="w-4 h-4 md:h-5 md:w-5" />
                    {item.title}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="flex-1 min-h-[400px]">
              <TabsContent value="internships">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.internships.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.internships.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-6"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{item.role}</h3>
                          <p className="text-muted-foreground">
                            {item.company}
                          </p>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {item.period}
                        </div>
                      </div>
                      <p className="mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, i) => (
                          <Badge key={i} variant="secondary">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="education">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.education.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.education.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-6"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {item.degree}
                          </h3>
                          <p className="text-muted-foreground">
                            {item.institution}
                          </p>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {item.period}
                        </div>
                      </div>
                      <p className="mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement, i) => (
                          <Badge key={i} variant="secondary">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.skills.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.skills.categories.map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-6"
                    >
                      <h3 className="text-lg font-semibold mb-4">
                        {category.name}
                      </h3>
                      <p className="text-sm text-white/60 mb-4 font-normal leading-7">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="about">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.about.title}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border rounded-lg border-lightSky/20 p-6"
                >
                  <p className="mb-6 text-lg">{tabContent.about.bio}</p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {tabContent.about.interests.map((interest, i) => (
                          <Badge key={i} variant="secondary">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {tabContent.about.languages.map((language, i) => (
                          <Badge key={i} variant="secondary">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
              <TabsContent value="certificates">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.certificates.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.certificates.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-6"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{item.certificate}</h3>
                          <p className="text-muted-foreground">
                            {item.institution}
                          </p>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {item.period}
                        </div>
                      </div>
                      <p className="mb-4">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </Container>
    </section>
  );
}
