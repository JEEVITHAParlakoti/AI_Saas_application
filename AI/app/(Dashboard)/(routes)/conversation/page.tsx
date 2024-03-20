"use client";

import Heading from "@/components/Heading";
import { MessageSquare } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { formschema } from "./constants";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ChatCompletionRequestMessage from "openai";
import axios from "axios";
import { cn } from "@/lib/utils";

const Conversationpage = () => {
  const [messages, setmessages] = useState<ChatCompletionRequestMessage[]>([]);

  const form = useForm<z.infer<typeof formschema>>({
    resolver: zodResolver(formschema),
    defaultValues: {
      prompt: "",
    },
  });

  const isloading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formschema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };

      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/conversation", {
        messages: newMessages,
      });
      console.log(messages);
      setmessages((current) => [...current, userMessage, response.data]);

      form.reset();
    } catch (error: any) {
      //todo open pro model
      console.log(error);
    }
  };
  return (
    <div>
      <Heading
        title="conversation"
        description="most advanced conversation AI"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="p-4 lg:p-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg
                                    border
                                    w-full
                                    p-4
                                    px-3
                                    md:px-6
                                    focus-within:shadow-sm
                                    grid
                                    grid-col-12
                                    gap-2
                         "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="outline-none border-0 focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isloading}
                        placeholder="Eg:how to prapose a girl"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isloading}
              >
                Genarate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-2 mt-4">
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div
                key={message.apiKey}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  // message.role == "user"
                  //   ? "bg-white border border-black/10"
                  //   : "bg-muted"
                )}
              >
                {message.apiKey}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversationpage;
