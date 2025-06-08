
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";
import { ProfileSection } from "./sections/ProfileSection";
import { UserPostsSection } from "./sections/UserPostsSection";
import { ContactSection } from "./sections/ContactSection/ContactSection";

export const Prototype = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <div className="bg-white w-full max-w-[1440px] flex flex-col">
        {/* Navigation section at the top */}
        <div className="w-full mb-8">
          <NavigationSection />
        </div>

        {/* Main content area with Profile and UserPosts sections */}
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-0 px-4 md:px-0 py-4 md:py-0">
          {/* Profile section on the left */}
          <div className="w-full md:w-[36%] md:ml-[5%] md:pr-4">
            <ProfileSection />
          </div>

          {/* User posts section on the right */}
          <div className="w-full md:w-[51%] md:ml-[1%]">
            <UserPostsSection />
          </div>
        </div>

        <div className="w-full px-4 md:px-16 py-8">
          <ContactSection />
        </div>
      </div>
    </div>
  );
};


