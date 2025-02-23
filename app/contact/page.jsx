"use client";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useRef } from "react";
import { FormEvent } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62) 856 244 500 96",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "luthfiizhar@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Jakarta, Indonesia",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const ref = useRef(null);
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const response = await fetch("/api/mail", {
      method: "post",
      body: formData,
    });

    const data = await response.json();

    if (data["status"] === 200) {
      toast({
        title: "Form submitted",
        description: "Your form has been sent.",
      });
      // ref.current?.reset();
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              ref={ref}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              {/* <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                pariatur veniam facilis
              </p> */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  id="first_name"
                  name="first_name"
                  placeholder="Firstname"
                  required
                />
                <Input
                  type="lastname"
                  id="last_name"
                  name="last_name"
                  placeholder="Lastname"
                />
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <Input
                  type="phone"
                  id="phone_number"
                  name="phone_number"
                  placeholder="Phone Number"
                  required
                />
              </div>
              {/* 
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="mobile">Mobile Development</SelectItem>
                    <SelectItem value="solution">IT Solution</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select> */}
              <Textarea
                className="h-[200px]"
                id="message"
                name="message"
                placeholder="Type your message here."
              />
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px] ">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white/60">{item.title}</h3>
                      <p className="text-xl">{item.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
