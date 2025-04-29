import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Ava Sharma",
    role: "AI Strategist",
    image: "/three.png",
    linkedin: "https://www.linkedin.com/in/ava-sharma",
    description:
      "Ava is a senior strategist who crafts intelligent strategies that turn AI into real business results. She excels in bridging technical innovation with business outcomes.",
  },
  {
    name: "Liam Patel",
    role: "Lead Developer",
    image: "/three.png",
    linkedin: "https://www.linkedin.com/in/liam-patel",
    description:
      "Liam leads our development team with expertise in building scalable software systems. His code drives performance and future-ready products.",
  },
  {
    name: "Sophie Nguyen",
    role: "Content Director",
    image: "/three.png",
    linkedin: "https://www.linkedin.com/in/sophie-nguyen",
    description:
      "Sophie curates strategic content that elevates brand stories. Her work blends creativity with SEO to maximize digital reach.",
  },
  {
    name: "Ethan Kim",
    role: "Automation Engineer",
    image: "/three.png",
    linkedin: "https://www.linkedin.com/in/ethan-kim",
    description:
      "Ethan designs intelligent automation pipelines that boost productivity. His solutions reduce manual effort and enhance the workflows.",
  },
  {
    name: "Isabella Lopez",
    role: "UX Designer",
    image: "/three.png",
    linkedin: "https://www.linkedin.com/in/isabella-lopez",
    description:
      "Isabella crafts user experiences that are elegant, intuitive, and human-centered. She ensures every interaction feels natural and seamless.",
  },
  {
    name: "Noah Singh",
    role: "Growth Marketer",
    image: "/three.png",
    linkedin: "https://www.linkedin.com/in/noah-singh",
    description:
      "Noah drives growth through data-led campaigns and bold strategies. He transforms analytics into actionable marketing results.",
  },
  {
    name: "Emily Chen",
    role: "AI Research Engineer",
    image: "/three.png",
    linkedin: "https://www.linkedin.com/in/emily-chen",
    description:
      "Emily explores cutting-edge AI algorithms and turns theory into applied models. Her research powers our core AI systems.",
  },
  {
    name: "Raj Mehta",
    role: "Tech Operations Lead",
    image: "/three.png",
    linkedin: "https://www.linkedin.com/in/raj-mehta",
    description:
      "Raj ensures our technology infrastructure runs smoothly and scales efficiently. He leads DevOps and other performance optimization efforts.",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="py-16 px-6 md:px-20 lg:px-40 bg-white">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 text-center mb-12">
        Meet the Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="cursor-pointer group">
            <div className="relative overflow-hidden rounded-md shadow-md">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-[#09bbc8] text-white flex items-center justify-center px-4 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <p className="text-md">{member.description}</p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1 mb-1">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-1 text-[#09bbc8] hover:text-[#078a95] transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
