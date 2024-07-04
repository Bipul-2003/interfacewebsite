import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { StarIcon } from "lucide-react";

export default function Reviewcard() {
  return (
    <div className="max-w-lg">
      <div className="grid gap-4 rounded-lg bg-background p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <h4 className="text-lg font-semibold">Sarah Johnson</h4>
              <p className="text-sm text-muted-foreground">
                Software Engineer, Microsoft
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <StarIcon className="h-5 w-5 text-yellow-500" />
          </div>
          <span className="text-sm font-medium">5.0</span>
        </div>
        <blockquote className="text-muted-foreground">
          "I've taken several courses on Hiro and each one has been\n
          exceptional. The instructors are\n\n knowledgeable and\n engaging, and
          the platform is incredibly user-friendly.\n Highly recommended!"
        </blockquote>
      </div>
    </div>
  );
}
