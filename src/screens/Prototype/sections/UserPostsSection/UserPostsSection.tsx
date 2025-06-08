import {
  ChevronDownIcon,
  MoreVerticalIcon,
  PlusIcon,
  ShareIcon,
} from "lucide-react";
import React from "react";
import { Avatar } from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const UserPostsSection = (): JSX.Element => {
  // Post data for mapping
  const posts = [
    {
      id: 1,
      backgroundImage: "..//community---post.png",
      heartIcon: "/icon-heart-1.svg",
    },
    {
      id: 2,
      backgroundImage: "..//community---post-1.png",
      heartIcon: "/icon-heart.svg",
    },
  ];

  // Common post data
  const postData = {
    author: "Thomas Gordon",
    timeAgo: "6 days ago",
    tags: ["#Tips", "#UIDesign", "#MobileApp", "#UXDesign"],
    content:
      "Had a great team meeting today discussing our upcoming design system. It's going to be a game-changer for our design process. We're always pushing each other to create...",
    likes: 56,
    ideas: 1,
    comments: 120,
  };

  return (
    <section className="flex flex-col w-full items-start gap-4">
      <h2 className="font-['Open_Sans',Helvetica] font-bold text-[#272528] text-xl">
        Baron&apos;s Posts
      </h2>

      <div className="flex flex-col w-full items-start gap-4">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="flex flex-col h-[383px] items-start justify-between w-full rounded-[18px] overflow-hidden p-0 border-0"
            style={{
              background: `linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.8) 100%), url(${post.backgroundImage}) 50% 50% / cover`,
            }}
          >
            <CardContent className="flex flex-col w-full items-start gap-[11px] p-[27px]">
              <div className="items-center justify-between self-stretch w-full flex">
                <div className="flex items-center gap-[14px] flex-1">
                  <div className="inline-flex items-center gap-[9px]">
                    <Avatar
                      className="w-[27px] h-[27px]"
                      style={{
                        background: "url(..//avatar-2.png) 50% 50% / cover",
                      }}
                    />

                    <div className="inline-flex items-center gap-[7px]">
                      <span className="font-['Open_Sans',Helvetica] font-semibold text-white text-[16px]">
                        {postData.author}
                      </span>

                      <img
                        className="w-[18px] h-[18px]"
                        alt="Verified icon"
                        src="/loxala-icon-1.svg"
                      />
                    </div>
                  </div>

                  <div className="w-[4.5px] h-[4.5px] bg-white rounded-[2px]" />

                  <span className="font-['Open_Sans',Helvetica] font-normal text-white text-[14px]">
                    {postData.timeAgo}
                  </span>
                </div>

                <div className="inline-flex items-center gap-[7px]">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-[27px] gap-[4.5px] px-[14px] py-[11px] bg-[#ffffff1a] rounded-[45px] border border-solid border-white backdrop-blur-[4.5px] text-white"
                  >
                    <PlusIcon className="w-[16px] h-[16px]" />
                    <span className="font-['Open_Sans',Helvetica] font-semibold text-[11px] text-center">
                      Connect
                    </span>
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-[23px] h-[23px] p-0"
                  >
                    <ShareIcon className="w-[23px] h-[23px] text-white" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-[23px] h-[23px] p-0"
                  >
                    <MoreVerticalIcon className="w-[23px] h-[23px] text-white" />
                  </Button>
                </div>
              </div>
            </CardContent>

            <CardContent className="flex items-end justify-end gap-[9px] p-[27px] self-stretch w-full mt-auto">
              <div className="flex flex-col items-start gap-[18px] flex-1">
                <div className="flex flex-col items-start gap-[9px] self-stretch w-full">
                  <div className="flex items-start gap-[7px] flex-wrap self-stretch w-full">
                    {postData.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        className="px-[18px] py-[7px] bg-[#ffffff1f] rounded-[7px] backdrop-blur-[11px] font-body-regular-8 text-white"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <p className="self-stretch h-[44px] font-['Open_Sans',Helvetica] font-normal text-white text-[16px] overflow-hidden text-ellipsis line-clamp-2">
                    {postData.content}
                  </p>
                </div>

                <div className="inline-flex items-center justify-center gap-[9px] absolute top-[97px] left-[27px]">
                  <span className="font-body-semibold-14 text-white">More</span>
                  <ChevronDownIcon className="w-[16px] h-[16px] text-white" />
                </div>

                <div className="inline-flex items-center gap-[9px]">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-[27px] inline-flex items-center justify-center gap-[4.5px] px-[8px] py-[11px] bg-[#ffffff1a] rounded-[45px] backdrop-blur-[4.5px] text-white border-0"
                  >
                    {post.id === 1 ? (
                      <img
                        className="w-[16px] h-[16px]"
                        alt="HeartIcon icon"
                        src={post.heartIcon}
                      />
                    ) : (
                      <img
                        className="w-[16px] h-[16px]"
                        alt="HeartIcon icon"
                        src={post.heartIcon}
                      />
                    )}
                    <span className="font-['Open_Sans',Helvetica] font-semibold text-[11px] text-center">
                      {postData.likes}
                    </span>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="h-[27px] inline-flex items-center justify-center gap-[4.5px] px-[8px] py-[11px] bg-[#ffffff1a] rounded-[45px] backdrop-blur-[4.5px] text-white border-0"
                  >
                    <img
                      className="w-[16px] h-[16px]"
                      alt="Idea icon"
                      src="/icon-lampidea.svg"
                    />
                    <span className="font-['Open_Sans',Helvetica] font-semibold text-[11px] text-center">
                      {postData.ideas}
                    </span>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="h-[27px] inline-flex items-center justify-center gap-[4.5px] px-[8px] py-[11px] bg-[#ffffff1a] rounded-[45px] backdrop-blur-[4.5px] text-white border-0"
                  >
                    <img
                      className="w-[16px] h-[16px]"
                      alt="Message icon"
                      src="/icon-message.svg"
                    />
                    <span className="font-['Open_Sans',Helvetica] font-semibold text-[11px] text-center">
                      {postData.comments}
                    </span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
