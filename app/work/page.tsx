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
  type CarouselApi,
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
import ProjectRes from "@/images/ProjectRes.png";
import projectrecipe from "@/images/projectrecipe.png";
import projectgame from "@/images/projectgame.png";
import projecthunt from "@/images/projecthunt.png";
import projectnews from "@/images/projectnews.png";

// Dummy data for projects
const projects = [
  {
    id: "01",
    title: "Lumos Learning App",
    category: "Educational App",
    description:
      "The Lumos Learning App is designed for CP (Cognitive and Physical) students to make learning the English alphabet fun and interactive. The app combines visual animations, auditory cues, and a responsive drawing canvas to create an engaging experience for children.",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "HTML5", "Vercel"],
    image: projectOne,
    liveUrl: "https://lumos-learning-app.vercel.app",
    githubUrl: "https://github.com/mmanikandan281/Lumos-Learning-App",
  },
  {
    id: "02",
    title: "MkM Shopping Platform",
    category: "E-commerce Frontend",
    description:
      "MkM Shopping is a modern e-commerce platform built with React.js, offering a seamless and responsive design. It includes user authentication, shopping cart functionality, and an integration with a headless CMS for easy content management. The platform provides a smooth shopping experience and supports dynamic product display with fast load times.",
    stack: ["React.js", "Tailwind CSS", "Javascript"],
    image: projectThree,
    liveUrl: "https://mkm-shopping.vercel.app/",
    githubUrl: "https://github.com/mmanikandan281/mkm-shopping",
  },
  {
    id: "03",
    title: "Resume Ranking System",
    category: "Machine Learning",
    description:
      "A machine learning-based system that scores and ranks resumes based on their relevance to a job description. It uses NLP techniques and a Random Forest Regressor to streamline the hiring process by computing similarity scores between resumes and job descriptions.",
    stack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "NLTK", "SpaCy", "Random Forest Regressor"],
    image: ProjectRes,
    liveUrl: "https://colab.research.google.com/drive/1_4CkJxQeAjofrzDWU0qRzC3xv8tfRxYP?usp=sharing",
    githubUrl: "https://github.com/mmanikandan281/Resume-Ranking-System",
  },
  {
    id: "04",
    title: "E-commerce Website",
    category: "React Application",
    description:
      "This is a fully functional eCommerce website built using React. The application allows users to browse products, view details, manage a shopping cart, and apply theme changes. The project utilizes React Router for navigation, Bootstrap for responsive design, and integrates a context API for theme management.",
    stack: ["React.js", "CSS", "Javascript"],
    image: projectTwo,
    liveUrl: "https://github.com/mmanikandan281/E-commerce-website",
    githubUrl: "https://github.com/mmanikandan281/E-commerce-website",
  },
  {
    id: "05",
    title: "Tic Tac Toe Game",
    category: "React Game",
    description:
      "A classic Tic Tac Toe game built using React and CSS. Two players take turns marking a 3x3 grid with X or O. The first to align three marks in a row, column, or diagonal wins. The game features a simple, interactive UI for an engaging experience.",
    stack: ["React.js", "CSS"],
    image: Projectfour,
    liveUrl: "https://github.com/mmanikandan281/Tic-Tac-Toe",
    githubUrl: "https://github.com/mmanikandan281/Tic-Tac-Toe",
  },
  {
    id: "06",
    title: "Intelligent Pothole Detection System",
    category: "Computer Vision",
    description:
      "Utilizes computer vision and machine learning for real-time pothole detection via webcams. Provides efficient and cost-effective monitoring, aiding timely road repairs through cloud-based reporting for agencies.",
    stack: ["TensorFlow Lite", "OpenCV", "Python"],
    image: Projectfive,
    liveUrl: "https://github.com/mmanikandan281/Intelligent-Pothole-Detection",
    githubUrl: "https://github.com/mmanikandan281/Intelligent-Pothole-Detection-System",
  },
  {
    id: "07",
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
    id: "08",
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
    id: "09",
    title: "Music Player Using Python",
    category: "Desktop Application",
    description:
      "A minimalistic music player with a GUI inspired by the classic iPod interface. The player allows users to play, pause, stop, and navigate through songs seamlessly.",
    stack: ["Python", "Pygame", "Tkinter"],
    image: projecteight,
    liveUrl: "https://github.com/mmanikandan281/MUSIC-PLAYER-USING-PYTHON",
    githubUrl: "https://github.com/mmanikandan281/MUSIC-PLAYER-USING-PYTHON",
  },
  {
    id: "10",
    title: "Lane Detection using OpenCV",
      category: "Computer Vision",
      description:
        "A project that detects lane lines in road images using Python and OpenCV. The algorithm processes images through grayscale conversion, Gaussian blur, Canny edge detection, and Hough Transform to identify lane boundaries for autonomous vehicle navigation.",
      stack: ["Python", "OpenCV", "NumPy"],
      image: projectnine,
      liveUrl: "https://colab.research.google.com/drive/1ZHE1WAEOQChv1IT9Iy4ZxYXrVYWSu13L?usp=sharing",
      githubUrl: "https://github.com/mmanikandan281/Lane-Line-detection",
    },
  {
    id: "11",
    title: "Text-to-Music Generator",
    category: "Generative AI",
    description:
      "A project utilizing Meta's Audiocraft (MusicGen Small Model) to generate music from text descriptions. Features a Streamlit-based UI for inputting prompts, adjusting music duration, and saving audio to Google Drive.",
    stack: ["Python", "Audiocraft", "Streamlit", "Torch", "Torchaudio", "FFmpeg"],
    image: projectten,
    liveUrl: "https://colab.research.google.com/drive/1G20-GKJv1lw4X49vJCGPnLKEOMk4zu-6?usp=sharing",
    githubUrl: "https://github.com/mmanikandan281/Text-to-music-Generator",
  },
    {
    id: "12",
    title: "Recipe Finder App",
    category: "Frontend",
    description:
      "A responsive React-based application that allows users to search for recipes using the Spoonacular API. Features include adding recipes to a persistent favorites list using localStorage, a tabbed UI for search results and favorites, and smooth state management with React Hooks.",
    stack: ["React.js", "CSS", "Spoonacular API"],
    image: projectrecipe,
    liveUrl: "https://github.com/mmanikandan281/Food-recipe-app",
    githubUrl: "https://github.com/mmanikandan281/Food-recipe-app",
  },
  {
    id: "13",
    title: "Puzzle Game",
    category: "Python Game",
    description:
      "A drag-and-drop picture puzzle game built with Pygame, allowing players to solve puzzles by arranging shuffled tiles. Features include customizable images, adjustable grid sizes (3x3 to 7x7), a reference image, and a confetti celebration upon completion.",
    stack: ["Python", "Pygame"],
    image: projectgame,
    liveUrl: "https://github.com/mmanikandan281/Puzzle-Game",
    githubUrl: "https://github.com/mmanikandan281/Puzzle-Game",
  },
  {
    id: "14",
    title: "Word Hunt",
    category: "Frontend",
    description:
      "A dictionary application built with React, utilizing the FreeDictionary API to provide word meanings, pronunciations, synonyms, antonyms, and usage examples. Features a sleek dark theme and responsive UI for an engaging user experience.",
    stack: ["React.js", "Material-UI", "FreeDictionary API"],
    image: projecthunt,
    liveUrl: "https://github.com/mmanikandan281/word-hunt",
    githubUrl: "https://github.com/mmanikandan281/word-hunt",
  },
    {
    id: "15",
    title: "Fake News Detection",
    category: "Natural Language Processing",
    description:
      "A machine learning project that classifies news articles as fake or real using NLP techniques. It employs text preprocessing, TF-IDF vectorization, and models like Logistic Regression, SVM, and Decision Tree, achieving up to 94.2% accuracy with Decision Tree.",
    stack: ["Python", "Scikit-Learn", "NLTK", "TF-IDF", "Pandas", "Matplotlib"],
    image: projectnews,
    liveUrl: "https://colab.research.google.com/drive/1eErFvKMsueFHUFQCk__tDqyF-Bcf8-Xh?usp=sharing",
    githubUrl: "https://github.com/mmanikandan281/Fake-News-Detection",
  },
];

export default function ProjectSlider() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollPrev = React.useCallback(() => {
    if (api) {
      api.scrollPrev();
    }
  }, [api]);

  const scrollNext = React.useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

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
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
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
                            {project?.title}
                          </h3>
                          <p className="text-sm md:text-base text-lightSky/80 font-medium">
                            {project?.category}
                          </p>
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
          <div className="absolute right-10 -bottom-8">
            <CarouselPrevious className="hidden md:flex rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect" />
            <CarouselNext className="hidden md:flex rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect" />
          </div>
        </Carousel>
        
        {/* Mobile Navigation Controls */}
        <div className="flex justify-center items-center mt-4 md:hidden gap-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
          </Button>
          
          {/* Slide indicator */}
          <div className="text-white/60 text-sm">
            {current} / {count}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </Container>
    </motion.section>
  );
}