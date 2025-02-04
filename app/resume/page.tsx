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
  { title: "Certificates", value: "certificates", icon: Code2 },
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
          "During my internship at Teachnook, I gained hands-on experience in data science, focusing on exploratory data analysis (EDA), regression modeling, and classification modeling. I mastered data visualization, fine-tuned regression models, and designed accurate classification models through feature selection.",
        highlights: [
          "Data Science",
          "Exploratory Data Analysis",
          "Regression Modeling",
          "Classification Modeling",
          "Feature Selection",
        ],
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
        description:
          "Currently pursuing Master of Computer Application (MCA) from Lead College of Management.",
        achievements: [],
      },
      {
        degree: "Bachelor of Computer Application",
        institution: "University of Calicut",
        period: "Aug 2021 - April 2024",
        description:
          "Completed Bachelor of Computer Application from Sadanam Kumaran College.",
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
          "Experienced in building responsive and interactive user interfaces using modern frontend technologies. Skilled in translating design concepts into functional applications with a focus on performance and user experience.",
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
          "Focused on designing, training, and deploying machine learning models. Experienced in data preprocessing, model evaluation, and optimization techniques.",
        skills: [
          "Python",
          "TensorFlow",
          "Opencv",
          "Seaborn",
          "Pandas",
          "NumPy",
        ],
      },
      {
        name: "Tools & Others",
        description:
          "Experienced in utilizing various platforms and tools to enhance productivity and collaborate on projects.",
        skills: ["Git", "HackerRank", "LinkedIn", "Kaggle"],
      },
    ],
  },
  about: {
    title: "About Me",
    bio: "I am a passionate machine learning and front-end developer with a strong foundation in building innovative solutions. I have hands-on experience in developing user-centric web applications using modern frontend technologies like React and JavaScript, and expertise in designing and deploying machine learning models.",
    interests: [
      "Machine Learning",
      "Frontend Development",
      "Data Science",
      "Tech Blogging",
    ],
    languages: ["Malayalam (Native)", "English (Fluent)"],
  },
  certificates: {
    title: "Certificates",
    items: [
      {
        certificate: "Certificate of Internship Completion",
        institution: "ORBO",
        period: "May 2023",
        description:
          "Completed an internship focusing on data science, with an emphasis on exploratory data analysis, regression modeling, and classification modeling.",
      },
      {
        certificate: "Python Basics",
        institution: "Zanx",
        period: "June 2023",
        description:
          "A foundational course on Python programming, covering syntax, data structures, and basic libraries.",
      },
      {
        certificate: "Python Programming",
        institution: "Kaggle",
        period: "June 2023",
        description:
          "An intermediate course on Python programming covering advanced topics like OOP and libraries.",
      },
      {
        certificate: "Pandas",
        institution: "Kaggle",
        period: "December 2022",
        description:
          "A certification focused on using the Pandas library for data manipulation and cleaning.",
      },
      {
        certificate: "Intro to Machine Learning",
        institution: "Kaggle",
        period: "December 2022",
        description:
          "Introduction to machine learning techniques including supervised and unsupervised learning.",
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
          animate={{ opacity: 1, transition: { duration: 0.4 } }}
          className="w-full"
        >
          <Tabs
            defaultValue="internships"
            className="w-full flex flex-col md:flex-row gap-6 md:gap-10"
          >
            {/* Enhanced Tabs Navigation with horizontal scroll */}
            <TabsList className="flex md:flex-col h-full bg-transparent md:w-64 gap-4 overflow-x-auto md:overflow-visible px-2 md:px-0">
              {tabMenu.map((item) => (
                <TabsTrigger
                  key={item.value}
                  value={item.value}
                  className="bg-white/10 w-full py-2.5 text-white hover:bg-lightSky/50 text-xs sm:text-sm flex-shrink-0 md:flex-shrink"
                >
                  <div className="flex items-center gap-1.5">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                    {item.title}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Content Section with responsive height */}
            <div className="flex-1">
              {/* Internships Tab */}
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

              {/* Education Tab */}
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

              {/* Skills Tab */}
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

              {/* About Me Tab */}
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

              {/* Certificates Tab */}
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
                          <h3 className="text-lg font-semibold">
                            {item.certificate}
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