import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from "lucide-react";
import {
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiHuggingface,
  SiLangchain,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiPlotly,
  SiMysql,
  SiGooglecolab,  
  SiOpencv,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { MdOutlineAutoGraph,MdAnalytics } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming & AI Frameworks",
      color: "text-blue-400",
      skills: [
        { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
        {
          name: "TensorFlow", icon: <SiTensorflow className="w-4 h-4 text-[#FF6F00]" />
        },
        {
          name: "PyTorch", icon: <SiPytorch className="w-4 h-4 text-[#EE4C2C]" />
        },
        {
          name: "Keras", icon: <SiKeras className="w-4 h-4 text-[#D00000]" />
        },
        {
          name: "HuggingFace", icon: <SiHuggingface className="w-4 h-4 text-[#FFCA28]" />
        },
        {
         name: "LangChain", icon: <SiLangchain className="w-4 h-4 text-[#00BFFF]" />
        },
      ],
    },
    {
      icon: Database,
      title: "Data & Visualization",
      color: "text-green-400",
      skills: [
        {
          name: "NumPy", icon: <SiNumpy className="w-4 h-4 text-[#013243]" />
        },
        {
          name: "Pandas", icon: <SiPandas className="w-4 h-4 text-[#150458]" />
        },
        {
         name: "scikit-learn", icon: <SiScikitlearn className="w-4 h-4 text-[#F7931E]" />
        },
        {
          name: "Plotly", icon: <SiPlotly className="w-4 h-4 text-[#3F4F75]" />
        },
      ],
    },
    {
      icon: Layout,
      title: "Databases & Storage",
      color: "text-purple-400",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
        {
          name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />
        },
        {
         name: "MySQL", icon: <SiMysql className="w-4 h-4 text-[#4479A1]" />
        },
        {
          name: "Data Warehousing", icon: <Database className="w-4 h-4 text-[#38B2AC]" />
        },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & Deployment",
      color: "text-orange-400",
      skills: [
        { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        {
          name: "Docker",
          icon: <FaDocker className="w-4 h-4 text-[#2496ED]" />,
        },
        { name: "CI/CD", icon: <FcWorkflow className="w-4 h-4" /> },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Tools & IDEs",
      color: "text-pink-400",
      skills: [
        {
          name: "VS Code",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },
        { name: "Google Colab", icon: <SiGooglecolab className="w-4 h-4 text-[#F9AB00]" /> },
        {
          name: "OpenCV", icon: <SiOpencv className="w-4 h-4 text-[#5C3EE8]" />
        },
        { name: "Jupyter", icon: <Database className="w-4 h-4 text-[#38B2AC]" /> },
      ],
    },
    {
      icon: Paintbrush,
      title: "Creative & Analytical",
      color: "text-yellow-400",
      skills: [
        {
          name: "Data Storytelling", icon: <MdAnalytics className="w-4 h-4 text-[#FF5722]" />
        },
        {
          name: "Feature Engineering", icon: <Cpu className="w-4 h-4 text-[#7C4DFF]" />
        },
        {
         name: "EDA", icon: <MdAnalytics className="w-4 h-4 text-[#9C27B0]" />
        },
        {
          name: "Predictive Modeling", icon: <MdOutlineAutoGraph className="w-4 h-4 text-[#00BCD4]" />
        },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
