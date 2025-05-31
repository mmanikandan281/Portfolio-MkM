"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, Briefcase, Code2, User, Award } from "lucide-react";
import Container from "@/components/Container";

const tabMenu = [
  { title: "Internships", value: "internships", icon: Briefcase },
  { title: "Education", value: "education", icon: GraduationCap },
  { title: "Skills", value: "skills", icon: Code2 },
  { title: "Achievements", value: "achievements", icon: Award },
  { title: "About me", value: "about", icon: User },
  { title: "Certificates", value: "certificates", icon: Code2 },
];

const tabContent = {
  internships: {
    title: "Internships",
    items: [
      {
        role: "Machine Learning Intern",
        company: "Cognifyz Technologies (Remote)",
        period: "Mar 2025 – Apr 2025",
        description:
          "As a remote Machine Learning Intern at Cognifyz Technologies, I developed and optimized predictive models using Python and scikit-learn. I handled complete ML workflows, including data preprocessing, model training, and evaluation, while enhancing collaboration and model tuning in a remote environment.",
        highlights: [
          "Predictive Modeling",
          "Python",
          "scikit-learn",
          "End-to-End ML Workflow",
          "Model Tuning",
        ],
      },
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
        achievements: ["84.4%", "College Topper"],
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
        name: "Soft Skills",
        description:
          "Possess strong interpersonal and cognitive abilities that enhance collaboration, learning, and problem-solving in diverse environments.",
        skills: [
          "Communication",
          "Fast Learner",
          "Time Management",
          "Adaptability",
          "Critical Thinking",
          "Collaboration",
          "Flexibility",
        ],
      },
      {
        name: "Tools & Others",
        description:
          "Experienced in utilizing various platforms and tools to enhance productivity and collaborate on projects.",
        skills: ["Git", "Google Colab", "HackerRank", "LinkedIn", "Kaggle"],
      },
    ],
  },
  achievements: {
    title: "Achievements",
    items: [
      {
        title: "College Topper - BCA Program",
        institution: "Sadanam Kumaran College, University of Calicut",
        period: "Aug 2021 - April 2024",
        description:
          "Achieved the highest academic performance in the Bachelor of Computer Application program with 84.4%, demonstrating exceptional dedication, consistent hard work, and strong analytical skills throughout the three-year course.",
        category: "Academic Excellence",
        highlights: [
          "Top Rank",
          "84.4% Score",
          "Academic Excellence",
          "Consistent Performance",
        ],
      },
      {
        title: "NSS Volunteer",
        institution: "KANNADI HSS, Palakkad",
        period: "July 2019 - March 2021",
        description:
          "Actively participated in National Service Scheme (NSS) activities during Higher Secondary education, contributing to community service initiatives, social awareness campaigns, and various outreach programs that benefited local communities.",
        category: "Community Service",
        highlights: [
          "Community Service",
          "Social Impact",
          "Leadership",
          "Volunteer Work",
        ],
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
        certificate: "Career Essentials in Data Analysis",
        institution: "Microsoft and LinkedIn",
        period: "May 2025",
        description:
          "Completed the 'Career Essentials in Data Analysis' learning path by Microsoft and LinkedIn, covering over 9 hours of training in data analysis, data visualization, and data analytics.",
        certificate_id: "38f627691fb7e67f227fb046082ffb804632d27abc1f5ec58fc16c80ccc4beda"
      },
      {
        certificate: "What Is Generative AI?",
        institution: "LinkedIn Learning",
        period: "December 2024",
        description:
          "Completed the 'What Is Generative AI?' course on LinkedIn Learning, covering key concepts of generative AI, tools, and applications in artificial intelligence.",
        certificate_id: "88de7aac7ab99ecd5fb3d2b66fcdf49cbdcfebabec2dee801df856952f90b243"
      },
      {
        certificate: "JavaScript Algorithms and Data Structures",
        institution: "freeCodeCamp",
        period: "March 2025",
        description:
          "Completed the JavaScript Algorithms and Data Structures Developer Certification from freeCodeCamp.org, representing approximately 300 hours of coding practice in algorithms, data structures, and JavaScript fundamentals.",
        certificate_url: "https://freecodecamp.org/certification/Manikandan10/javascript-algorithms-and-data-structures-v8"
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
    <section className="text-white py-6 sm:py-10">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.4 } }}
          className="w-full max-w-6xl mx-auto"
        >
          <Tabs defaultValue="internships" className="w-full">
            {/* Mobile-first horizontal scrolling tabs */}
            <div className="sticky top-0 bg-gradient-to-r from-gray-900/95 via-black/90 to-gray-900/95 backdrop-blur-md z-10 pb-4 mb-6 border-b border-gray-700/50">
              <TabsList className="w-full h-auto p-0 bg-transparent border-none">
                <div className="flex w-full overflow-x-auto scrollbar-hide">
                  <div className="flex space-x-1 min-w-max px-2">
                    {tabMenu.map((item) => (
                      <TabsTrigger
                        key={item.value}
                        value={item.value}
                        className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-300 hover:text-lightSky hover:bg-lightSky/5 data-[state=active]:text-lightSky data-[state=active]:bg-lightSky/10 data-[state=active]:border-b-2 data-[state=active]:border-lightSky rounded-lg transition-all duration-300 border border-transparent hover:border-lightSky/20 data-[state=active]:border-lightSky/30 whitespace-nowrap shadow-sm"
                      >
                        <item.icon className="w-4 h-4" />
                        <span className="hidden sm:inline">{item.title}</span>
                        <span className="sm:hidden">{item.title.split(' ')[0]}</span>
                      </TabsTrigger>
                    ))}
                  </div>
                </div>
              </TabsList>
            </div>

            {/* Content Area */}
            <div className="px-2">
              {/* Internships Tab */}
              <TabsContent value="internships" className="mt-0">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
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
                      className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-lightSky/30 transition-all duration-300"
                    >
                      <div className="space-y-3">
                        <div className="flex flex-col space-y-2">
                          <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                          <p className="text-gray-300">{item.company}</p>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Calendar className="w-4 h-4 mr-2" />
                            {item.period}
                          </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {item.highlights.map((highlight, i) => (
                            <Badge key={i} variant="secondary" className="bg-lightSky/10 text-lightSky border-lightSky/20">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Education Tab */}
              <TabsContent value="education" className="mt-0">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
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
                      className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-lightSky/30 transition-all duration-300"
                    >
                      <div className="space-y-3">
                        <div className="flex flex-col space-y-2">
                          <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
                          <p className="text-gray-300">{item.institution}</p>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Calendar className="w-4 h-4 mr-2" />
                            {item.period}
                          </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                        {item.achievements.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {item.achievements.map((achievement, i) => (
                              <Badge key={i} variant="secondary" className="bg-lightSky/10 text-lightSky border-lightSky/20">
                                {achievement}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Skills Tab */}
              <TabsContent value="skills" className="mt-0">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
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
                      className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-lightSky/30 transition-all duration-300"
                    >
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                        <p className="text-gray-300 leading-relaxed">{category.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, i) => (
                            <Badge key={i} variant="secondary" className="bg-lightSky/10 text-lightSky border-lightSky/20">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Achievements Tab */}
              <TabsContent value="achievements" className="mt-0">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.achievements.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.achievements.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-lightSky/30 transition-all duration-300"
                    >
                      <div className="space-y-3">
                        <div className="flex flex-col space-y-2">
                          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                          <p className="text-gray-300">{item.institution}</p>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="bg-lightSky/10 text-lightSky border-lightSky/40">
                              {item.category}
                            </Badge>
                            <div className="flex items-center text-gray-400 text-sm">
                              <Calendar className="w-4 h-4 mr-2" />
                              {item.period}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {item.highlights.map((highlight, i) => (
                            <Badge key={i} variant="secondary" className="bg-lightSky/10 text-lightSky border-lightSky/20">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* About Me Tab */}
              <TabsContent value="about" className="mt-0">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.about.title}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-lightSky/30 transition-all duration-300"
                >
                  <div className="space-y-6">
                    <p className="text-gray-300 text-lg leading-relaxed">{tabContent.about.bio}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Interests</h3>
                        <div className="flex flex-wrap gap-2">
                          {tabContent.about.interests.map((interest, i) => (
                            <Badge key={i} variant="secondary" className="bg-lightSky/10 text-lightSky border-lightSky/20">
                              {interest}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                          {tabContent.about.languages.map((language, i) => (
                            <Badge key={i} variant="secondary" className="bg-lightSky/10 text-lightSky border-lightSky/20">
                              {language}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>

              {/* Certificates Tab */}
              <TabsContent value="certificates" className="mt-0">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
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
                      className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-lightSky/30 transition-all duration-300"
                    >
                      <div className="space-y-3">
                        <div className="flex flex-col space-y-2">
                          <h3 className="text-xl font-semibold text-white">{item.certificate}</h3>
                          <p className="text-gray-300">{item.institution}</p>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Calendar className="w-4 h-4 mr-2" />
                            {item.period}
                          </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                      </div>
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