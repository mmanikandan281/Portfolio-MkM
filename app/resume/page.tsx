"use client";
import Container from "@/components/Container";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const ResumePage = () => {
  return (
    <Container className="py-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="w-full"
      >
        <Tabs defaultValue="account" className="w-full flex gap-10">
          <TabsList className="flex flex-col h-full bg-transparent w-60 gap-5">
            <TabsTrigger
              value="experience"
              className="bg-white/10 w-full py-2.5 text-white"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="bg-white/10 w-full py-2.5 text-white"
            >
              Education
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="bg-white/10 w-full py-2.5 text-white"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              value="about"
              className="bg-white/10 w-full py-2.5 text-white"
            >
              About me
            </TabsTrigger>
          </TabsList>
          <div className="flex-1 bg-red-400">
            <TabsContent value="experience">
              <p>
                Experience ipsum dolor sit amet consectetur adipisicing elit.
                Itaque alias dignissimos molestiae quia corporis recusandae
                mollitia cumque earum blanditiis. At!
              </p>
            </TabsContent>
            <TabsContent value="education">
              <p>
                Education ipsum dolor sit amet consectetur adipisicing elit.
                Labore adipisci harum ut beatae porro, nam et sapiente ipsam
                reprehenderit quasi.
              </p>
            </TabsContent>
            <TabsContent value="skills">
              <p>
                Skills ipsum dolor sit amet consectetur adipisicing elit. Labore
                adipisci harum ut beatae porro, nam et sapiente ipsam
                reprehenderit quasi.
              </p>
            </TabsContent>
            <TabsContent value="about">
              <p>
                About ipsum dolor sit amet consectetur adipisicing elit. Labore
                adipisci harum ut beatae porro, nam et sapiente ipsam
                reprehenderit quasi.
              </p>
            </TabsContent>
          </div>
        </Tabs>
      </motion.div>
    </Container>
  );
};

export default ResumePage;
