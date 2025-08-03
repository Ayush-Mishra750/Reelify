import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function Home() {
  const user=await currentUser();
  if(!user){
    return null;
  }
  const loggedInUser=await prisma.user.findUnique({
    where:{clerkUserId:user.id}
  })
  if(!loggedInUser){
    await prisma.user.create({
      data:{
        name:user.fullName||"name",
        email:user.emailAddresses[0].emailAddress,
        clerkUserId:user.id
      }
    })
  }
  return (
         <div>
          <Button>Click me</Button>
         </div>
  );
}
