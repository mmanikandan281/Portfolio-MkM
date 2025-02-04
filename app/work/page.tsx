"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "@/components/Container";
import projectOne from "@/images/projectOne.png";
import projectTwo from "@/images/projectTwo.png";
import projectThree from "@/images/projectThree.png";
import Projectfour from "@/images/Projectfour.png";
import Projectfive from "@/images/Projectfive.png";
import Projectsix from "@/images/Projectsix.png";
import projectseven from "@/images/projectseven.png";
import projecteight from "@/images/projecteight.png";
import projectnine from "@/images/projectnine.png";
import projectten from "@/images/projectten.png";


// Dummy data for projects
const projects = [

  {
    id: "01",
    title: "Lumos Learning App",
    category: "Lumos Learning App",
    description:
      "The Lumos Learning App is designed for CP (Cognitive and Physical) students to make learning the English alphabet fun and interactive. The app combines visual animations, auditory cues, and a responsive drawing canvas to create an engaging experience for children.",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "HTML5", "Vercel"],
    image: projectOne, // Replace with the actual image path
    liveUrl: "https://lumos-learning-app.vercel.app",
    githubUrl: "https://github.com/mmanikandan281/Lumos-Learning-App",
  },
  {
    id: "02",
    title: "MkM Shopping",
    category: "Frontend",
    description:
      "MkM Shopping is a modern e-commerce platform built with React.js, offering a seamless and responsive design. It includes user authentication, shopping cart functionality, and an integration with a headless CMS for easy content management. The platform provides a smooth shopping experience and supports dynamic product display with fast load times.",
    stack: ["React.js", "Tailwind CSS", "Javascript"],
    image: projectThree, // Replace with the actual image path
    liveUrl: "https://mkm-shopping.vercel.app/", // Replace with the actual live URL
    githubUrl: "https://github.com/mmanikandan281/mkm-shopping", // Replace with your GitHub repository URL
  },

  
  {
    id: "03",
    title: "E commerce Website",
    category: "Frontend",
    description:
      "This is a fully functional eCommerce website built using React. The application allows users to browse products, view details, manage a shopping cart, and apply theme changes. The project utilizes React Router for navigation, Bootstrap for responsive design, and integrates a context API for theme management.",
    stack: ["React.js", "Css", "Javascript"],
    image: projectTwo,
    liveUrl: "https://github.com/mmanikandan281/E-commerce-website",
    githubUrl: "https://github.com/mmanikandan281/E-commerce-website",
  },
  
    {
      id: "04",
      title: "Tic Tac Toe",
      category: "Game",
      description:
        "A classic Tic Tac Toe game built using React and CSS. Two players take turns marking a 3x3 grid with X or O. The first to align three marks in a row, column, or diagonal wins. The game features a simple, interactive UI for an engaging experience.",
      stack: ["React.js", "CSS"],
      image: Projectfour,
      liveUrl: "https://github.com/mmanikandan281/Tic-Tac-Toe",
      githubUrl: "https://github.com/mmanikandan281/Tic-Tac-Toe",
  },
    {
      id: "05",
      title: "Intelligent Pothole Detection System",
      category: "Machine Learning",
      description:
        "Utilizes computer vision and machine learning for real-time pothole detection via webcams. Provides efficient and cost-effective monitoring, aiding timely road repairs through cloud-based reporting for agencies.",
      stack: ["TensorFlow Lite", "OpenCV", "Python"],
      image: Projectfive,
      liveUrl: "https://github.com/mmanikandan281/Intelligent-Pothole-Detection",
      githubUrl: "https://github.com/mmanikandan281/Intelligent-Pothole-Detection-System",
},
{
    id: "06",
    title: "AI-Based Fire Detection System",
    category: "Deep Learning",
    description:
      "A Python-based deep learning project that uses a Convolutional Neural Network (CNN) for fire detection in images. It serves as a supplementary tool to traditional fire detection systems by leveraging TensorFlow, Keras, and OpenCV for image processing and classification.",
    stack: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Pillow"],
    image: Projectsix,
    liveUrl: "https://github.com/mmanikandan281/Fire-Detection",
    githubUrl: "https://github.com/mmanikandan281/Fire-Detection",
},
{
  id: "07",
  title: "Sign Language Detection Model",
  category: "Deep Learning",
  description:
    "A real-time sign language detection system using YOLOv8 for object detection. The model is trained on a custom dataset from Roboflow and deployed for real-time recognition via a webcam, leveraging OpenCV and Ultralytics YOLO.",
  stack: ["Python", "YOLOv8", "Roboflow", "OpenCV", "Ultralytics"],
  image: projectseven,
  liveUrl: "https://github.com/mmanikandan281/Sign-Language-Detection",
  githubUrl: "https://github.com/mmanikandan281/Sign-Language-Detection",
},
{
  id: "08",
  title: "Music Player Using Python",
  category: "Python",
  description:
    "A minimalistic music player with a GUI inspired by the classic iPod interface. The player allows users to play, pause, stop, and navigate through songs seamlessly.",
  stack: ["Python", "Pygame", "Tkinter"],
  image: projecteight,
  liveUrl: "https://github.com/mmanikandan281/MUSIC-PLAYER-USING-PYTHON",
  githubUrl: "https://github.com/mmanikandan281/MUSIC-PLAYER-USING-PYTHON",
},
{
  id: "09",
  title: "Speech-to-Text and Text Summarization",
  category: "Natural Language Processing",
  description: "This project leverages OpenAI's Whisper API for transcribing speech (audio files) to text and GPT-3.5-turbo for summarizing the transcribed text. It's implemented in Python and designed for use in Google Colab.",
  stack: ["Python", "OpenAI Whisper", "GPT-3.5", "Google Colab"],
  image: projectnine,
  liveUrl: "https://colab.research.google.com/drive/1lNx2Qgk3kVOGHjjGrJhYgYkLD61DiXFY?usp=drive_link",
  githubUrl: "https://github.com/mmanikandan281/Speech-To-Text",
},
{
  id: "10",
  title: "Titanic Survival Prediction using Logistic Regression",
  category: "Data Analytics",
  description: "This project uses the Titanic dataset for classification, predicting survival or deceased using Logistic Regression in Python.",
  stack: ["Python", "Logistic Regression", "pandas", "matplotlib", "seaborn"],
  image: projectten,
  liveUrl: "https://colab.research.google.com/drive/1vaPSGJhmPId-B_pdapQsDMkDAzJcSKeA?usp=drive_link",
  githubUrl: "https://github.com/mmanikandan281/Datascience-Analyzer"
}

];

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 md:py-12"
    >
      <Container>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          onSelect={() => {
            const index = 0;
            if (typeof index === "number") {
              handleSlideChange(index);
            }
          }}
        >
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id}>
                <Card className="bg-bodyColor border-lightSky/20">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
                      <div className="w-full md:w-1/2 order-2 md:order-1 mb-8 md:mb-0">
                        <div className="space-y-3 md:space-y-6 mt-4 md:mt-0">
                          <h2 className="text-4xl md:text-8xl leading-none font-extrabold text-transparent text-outline">
                            {project?.id}
                          </h2>
                          <h3 className="text-xl md:text-3xl font-bold leading-none text-white group-hover:text-lightSky hoverEffect">
                            {project?.category} project
                          </h3>
                          <p className="text-white/60 text-sm md:text-base leading-6 md:leading-normal">
                            {project?.description}
                          </p>
                          <ul className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 items-center">
                            {project?.stack?.map((item, index) => (
                              <li
                                key={index}
                                className="text-xs md:text-base text-lightSky"
                              >
                                {item}
                                {index !== project?.stack?.length - 1 && ","}
                              </li>
                            ))}
                          </ul>
                          <Separator className="bg-gray-700" />
                          <div className="flex items-center space-x-4">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Link href={project.liveUrl}>
                                    <Button
                                      variant="outline"
                                      size="icon"
                                      className="bg-lightSky/5 text-white/80 border-lightSky/20 hover:bg-lightSky/10 hover:border-lightSky hover:text-hoverColor hoverEffect"
                                    >
                                      <ArrowUpRight className="h-4 w-4" />
                                      <span className="sr-only">
                                        View Live Project
                                      </span>
                                    </Button>
                                  </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>View Live Project</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Link href={project.githubUrl}>
                                    <Button
                                      variant="outline"
                                      size="icon"
                                      className="bg-lightSky/5 text-white/80 border-lightSky/20 hover:bg-lightSky/10 hover:border-lightSky hover:text-hoverColor hoverEffect"
                                    >
                                      <Github className="h-4 w-4" />
                                      <span className="sr-only">
                                        View GitHub Repository
                                      </span>
                                    </Button>
                                  </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>View GitHub Repository</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 order-1 md:order-2">
                        <div className="relative h-64 md:h-96 bg-gray-700 rounded-lg overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute right-10 -bottom-8 bg-red-600">
            <CarouselPrevious className="hidden md:flex rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect" />
            <CarouselNext className="hidden md:flex rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect" />
          </div>
        </Carousel>
        <div className="flex justify-center mt-4 md:hidden">
          <Button
            variant="outline"
            size="icon"
            className="mr-2 rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect"
            onClick={() => handleSlideChange(currentIndex - 1)}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="mr-2 rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect"
            onClick={() => handleSlideChange(currentIndex + 1)}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </Container>
    </motion.section>
  );
}
