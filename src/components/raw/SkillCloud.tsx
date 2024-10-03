import IconCloud from "@/@/components/magicui/icon-cloud";



const slugs = [
    "python",
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "express",
    "git",
    "github",
    "visualstudiocode",
    "mongodb",
    "nodejs",
    "cplusplus",
    "django",
    'tailwindcss',
    'redux',
    'pandas',
    'numpy',
];

export default function IconCloudDemo() {
  return (
    <div className="relative flex h-full  self-center  items-center overflow-hidden">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
