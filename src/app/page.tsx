import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { HeroSection } from "./../components/Hero";
import { StarIcon } from "@radix-ui/react-icons";
import {
  UsersIcon,
  ThumbsUpIcon,
  AwardIcon,
  RocketIcon,
  CompassIcon,
  BriefcaseIcon,
  BookIcon,
} from "lucide-react";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import NumberTicker from "@/components/magicui/number-ticker";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Marquee from "@/components/magicui/marquee";
import Reviewcard from "@/components/reviewcard";
import RetroGrid from "@/components/magicui/retro-grid";
import Oribital from "@/components/Oribital";
import LinearGradient from "@/components/magicui/linear-gradient";
import RadialGradient from "@/components/magicui/radial-gradient";
import Image from "next/image";

export default function Home() {
  const reviews = [
    {
      name: "Jack",
      username: "@jack",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Jill",
      username: "@jill",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "John",
      username: "@john",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Jane",
      username: "@jane",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      name: "Jenny",
      username: "@jenny",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jenny",
    },
    {
      name: "James",
      username: "@james",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/james",
    },
  ];

  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
  return (
    <div className="flex flex-col ">
      <section className="w-full relative py-20 md:py-32">
        <div className="container grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col items-start justify-center space-y-6 ">
            <h1 className="relative text-4xl font-bold tracking-tight  sm:text-5xl md:text-6xl lg:text-7xl">
              Unlock Your Potential with <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Interface</span>
           
            </h1>
            <p className="max-w-md text-lg md:text-xl">
              Discover a world-class education platform that empowers you to
              achieve your goals.
            </p>
            <Button
              asChild
              className="inline-flex h-12 items-center justify-center rounded-md  px-8 text-sm font-medium  shadow-md transition-colors ">
              <Link href="#" prefetch={false}>
                Explore
              </Link>
            </Button>
          </div>
          <div className="hidden md:block">
            <HeroSection />
          </div>
          {/* <img
            src="/placeholder.svg"
            width={800}
            height={600}
            alt="Hiro Hero Image"
            className="mx-auto h-full w-full max-w-[500px] rounded-xl object-cover"
          /> */}
        </div>
        <LinearGradient />
      </section>
      <section className=" w-full py-16 md:py-24 bg-background">
        <div className="container">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
              Trusted by Thousands
            </h2>
            <div className="flex justify-center">
              <p className="mt-4 max-w-2xl text-muted-foreground  md:text-xl">
                Interface has earned a reputation for excellence, with thousands
                of satisfied customers and industry-leading ratings.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center space-y-2">
              <StarIcon className="h-8 w-8 text-yellow-500" />
              <h3 className="text-2xl font-bold">4.9</h3>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <UsersIcon className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold">
                <NumberTicker value={20000} /> +
              </h3>
              <p className="text-muted-foreground">Students Enrolled</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <ThumbsUpIcon className="h-8 w-8 text-green-500" />
              <h3 className="text-2xl font-bold">
                <NumberTicker value={98} />%
              </h3>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <AwardIcon className="h-8 w-8 text-orange-500" />
              <h3 className="text-2xl font-bold">
                <NumberTicker value={5} />
              </h3>
              <p className="text-muted-foreground">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>
      <section className=" w-full flex py-8">
        <div className="container px-4 md:px-6">
          <div className="relative  flex flex-col items-center justify-center space-y-4 text-center">
            <RetroGrid className="font-bold" />
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Student Reviews
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Our Students Say
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out our stellar reviews and see why students love learning
                with Interface.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-7xl items-center py-12  ">
            <Marquee pauseOnHover className="[--duration:20s]">
              {firstRow.map((review) => (
                <div key={review.username} className="">
                  <Reviewcard />
                </div>
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {secondRow.map((review) => (
                <div key={review.username} className="">
                  <Reviewcard />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>
      <section className="relative w-full pb-16  ">
        <div className="  container grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 ">
          <div className=" flex flex-col items-start justify-center space-y-6">
            <RadialGradient origin="left" />
            <h2 className="relative text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
              Discover the Power
              <Image
                src="/undraw_code.svg"
                alt="education"
                width={60}
                height={60}
                className="absolute -top-1 -right-16 "
              />
            </h2>
            <p className="max-w-md text-muted-foreground md:text-xl">
              Interface is a leading edtech platform that offers a wide range of
              courses, programs, and resources to help you achieve your personal
              and professional goals.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-start space-x-3">
                <BookIcon className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="text-lg font-medium">Courses</h4>
                  <p className="text-muted-foreground">
                    Explore our extensive library of offline courses covering a
                    variety of topics.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <BriefcaseIcon className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="text-lg font-medium">Programs</h4>
                  <p className="text-muted-foreground">
                    Enroll in our comprehensive programs to develop in-demand
                    skills.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CompassIcon className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="text-lg font-medium">Resources</h4>
                  <p className="text-muted-foreground">
                    Access a wealth of educational resources to support your
                    learning journey.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <RocketIcon className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="text-lg font-medium">Career Development</h4>
                  <p className="text-muted-foreground">
                    Unlock new opportunities and advance your career with our
                    specialized courses.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <img
            src="/placeholder.svg"
            width={800}
            height={600}
            alt="Hiro About Image"
            className="mx-auto h-full w-full max-w-[500px] rounded-xl object-cover"
          /> */}
          <div className="pl-16 hidden  md:flex items-center justify-center">
            {/* <Oribital /> */}
            <Image
              src="/educator.svg"
              alt="education"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
