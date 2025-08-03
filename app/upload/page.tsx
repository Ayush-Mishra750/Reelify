"use client"
import { uploadShortsAction } from "@/actions/upload-shorts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useActionState, useState } from "react";

const page = () => {
  const [formState, action,isPending]=useActionState(uploadShortsAction,{errors:{}});
   const [videoUrl,setVideoUrl]=useState<string>("");
   const handleSubmit=(formData:FormData)=>{
          formData.append('video',videoUrl);
          return action(formData);
   }
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="mb-6 text-2xl font-bold text-center ">Upload Shorts</h1>
     <form className="w-full" action={handleSubmit}>
        <div className="mb-4">
        <Label className="text-lg">Title</Label>
        <Input type="text" placeholder="Title" name="title" />
        {
          formState.errors.title && <span className="text-red-600 text-sm">{formState.errors.title}</span>
        }
      </div>

       <div className="mb-4">
        <Label className="text-lg">Description</Label>
        <Input type="text" placeholder="Description" name="description" />
        {
          formState.errors.description && <span className="text-red-600 text-sm">{formState.errors.description}</span>
        }
      </div>
       <div className="mb-4">
        <Label className="text-lg">Upload file</Label>
        <Input type="file"  name="video" />

      </div>
      <Button className="cursor-pointer" type="submit">Upload</Button>
      </form>
    </div>
  );
};

export default page;
