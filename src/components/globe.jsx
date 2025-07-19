import IconCloud from "./ui/icon-cloud";

const slugs = [
  "python",
  "tensorflow",
  "pytorch",
  "scikitlearn",
  "pandas",
  "numpy",
  "matplotlib",
  "mysql",
  "postgresql",
  "mongodb",
  "jupyter",
  "anaconda",
  "keras",
  "amazonaws",
  "microsoftazure",
  "googlecloud",
  "docker",
  "kubernetes",
  "git",
  "github",
  "streamlit",
  "tableau",
  "visualstudiocode",
  "linux",
];


function AiSkillsCloud() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default AiSkillsCloud;
