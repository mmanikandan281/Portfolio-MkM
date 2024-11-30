import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const ContactForm = () => {
  return (
    <form className="space-y-4">
      <h3 className="text-2xl md:text-4xl text-lightSky">
        Let&apos;s work together
      </h3>
      <p className="text-white/60 text-sm md:text-base">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit
        vel saepe fugiat ex aperiam, totam quae et tenetur deleniti.
      </p>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <Input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Firstname"
          />
          <Input type="text" id="name" name="name" placeholder="Lastname" />
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <Input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email address"
          />
          <Input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone number"
          />
        </div>

        <Textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Your message"
        />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent className="bg-bodyColor text-white border-white/20">
            <SelectGroup>
              <SelectLabel>Select a service</SelectLabel>
              <SelectItem value="est">Web Development</SelectItem>
              <SelectItem value="cst">UI/UX Design</SelectItem>
              <SelectItem value="mst">Logo Design</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Button
        type="submit"
        className="w-full py-4 bg-lightSky/5 text-white/80 border border-lightSky/20 hover:bg-lightSky/10 hover:border-lightSky hover:text-hoverColor hoverEffect"
      >
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
