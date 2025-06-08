
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProfileSection = (): JSX.Element => {
  // User profile data
  const profileData = {
    name: "Baron Von Rydtger",
    profession: "Graphic Designer, 2D, 3D, Web3",
    stats: [
      { label: "Followers", count: "12,320" },
      { label: "Following", count: "548" },
      { label: "Posts", count: "1,098" },
    ],
  };

  return (
    <div className="flex flex-col w-full max-w-[522px] items-start gap-5">
      <Card className="w-full border-[#eaeaea]">
        <CardContent className="p-6">
          <div className="flex items-start gap-[18px] w-full">
            {/* Profile Avatar with Add Button */}
            <div className="relative">
              <Avatar className="h-[127px] w-[127px]">
                <AvatarImage
                  src="..//avatar-2.png"
                  alt="Profile"
                  className="object-cover"
                />
                <AvatarFallback>BV</AvatarFallback>
              </Avatar>

              <div className="absolute bottom-0 right-0 flex items-center justify-center w-11 h-11 rounded-full shadow-button-56px bg-gradient-to-b from-[rgba(181,93,217,1)] to-[rgba(80,84,201,1)]">
                <span className="relative text-[28px] font-semibold text-white">
                  +
                </span>
                <div className="absolute w-10 h-10 top-0.5 left-0.5 rounded-full border-none blur-[0.39px]" />
                <div className="absolute w-3 h-4 top-1 left-4 rounded-[90px] bg-gradient-to-b from-[rgba(255,255,255,0.56)] to-[rgba(255,255,255,0.09)]" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex flex-col items-start gap-4 flex-1">
              <div className="flex items-start justify-between w-full">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1.5">
                    <h2 className="font-bold text-2xl text-[#272528] tracking-[-0.72px] leading-6 font-['AktivGrotesk-Bold-Bold',Helvetica]">
                      {profileData.name}
                    </h2>
                    <img
                      className="w-6 h-6"
                      alt="Loxala icon"
                      src="/loxala-icon.svg"
                    />
                  </div>
                  <p className="text-[#7c7c7c] text-base font-normal font-['Open_Sans',Helvetica]">
                    {profileData.profession}
                  </p>
                </div>

                <Button variant="ghost" className="p-0 h-11 w-11">
                  <img className="w-11 h-11" alt="Settings" src="/button.svg" />
                </Button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 w-full">
                {profileData.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center py-1.5 flex-1 rounded-lg"
                  >
                    <span className="text-xl font-bold text-center bg-gradient-to-b from-[rgba(181,93,217,1)] to-[rgba(80,84,201,1)] bg-clip-text text-transparent font-['Open_Sans',Helvetica]">
                      {stat.count}
                    </span>
                    <span className="text-sm font-normal text-center text-[#272528] font-['Open_Sans',Helvetica]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem
          value="about"
          className="border-[#eaeaea] bg-white rounded-lg"
        >
          <AccordionTrigger className="px-6 py-4 h-[75px] font-bold text-xl text-[#272528] font-['Open_Sans',Helvetica]">
            About
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4 text-[#7c7c7c] font-['Open_Sans',Helvetica]">
              <p className="text-sm leading-relaxed">
                Creative visionary with 8+ years of experience crafting digital experiences
                that bridge art and technology. Specializing in UI/UX design, 3D modeling,
                and emerging Web3 interfaces. Passionate about creating user-centered designs
                that tell compelling stories and drive meaningful engagement.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-[#272528] text-sm mb-2 flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-[rgba(181,93,217,1)] to-[rgba(80,84,201,1)] rounded-full mr-2"></span>
                    Expertise
                  </h4>
                  <ul className="text-xs space-y-1">
                    <li>• UI/UX Design & Prototyping</li>
                    <li>• 3D Modeling & Animation</li>
                    <li>• Web3 & Blockchain Interfaces</li>
                    <li>• Brand Identity & Visual Systems</li>
                    <li>• Motion Graphics & Micro-interactions</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[#272528] text-sm mb-2 flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-[rgba(181,93,217,1)] to-[rgba(80,84,201,1)] rounded-full mr-2"></span>
                    Tools & Tech
                  </h4>
                  <ul className="text-xs space-y-1">
                    <li>• Figma, Adobe Creative Suite</li>
                    <li>• Blender, Cinema 4D, Maya</li>
                    <li>• React, TypeScript, Three.js</li>
                    <li>• Framer, Webflow, Principle</li>
                    <li>• Solidity, Web3.js, Ethereum</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[rgba(181,93,217,0.05)] to-[rgba(80,84,201,0.05)] rounded-lg p-4 border border-[rgba(181,93,217,0.1)]">
                <h4 className="font-semibold text-[#272528] text-sm mb-2">Currently Working On</h4>
                <p className="text-xs leading-relaxed">
                  Leading design at a cutting-edge Web3 startup, exploring the intersection of
                  traditional design principles and decentralized technologies. Building the
                  future of digital ownership and community-driven platforms.
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#eaeaea]">
                <div>
                  <p className="text-xs font-medium text-[#272528]">📍 San Francisco, CA</p>
                  <p className="text-xs text-[#999]">Available for remote collaboration</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium text-[#272528]">🎯 Open to</p>
                  <p className="text-xs text-[#999]">Freelance • Consulting • Speaking</p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#eaeaea]">
                <p className="text-xs text-[#999] italic text-center">
                  "Design is not just what it looks like and feels like. Design is how it works."
                  <span className="font-medium">— Steve Jobs</span>
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
