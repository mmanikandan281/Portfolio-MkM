"use client";
import React, { useState } from "react";
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
import SuccessMsg from "./SuccessMsg";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Address: "",
    Message: "",
    Service: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      Service: value,
    }));
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (!formData.Name.trim() || !formData.Email.trim()) {
      toast({
        title: "Error: Something is wrong",
        description: "Please input your name and email to continue",
        variant: "destructive",
      });
      return;
    }

    const currentDateTime = new Date().toLocaleString();

    // Option 1: Using EmailJS (Recommended)
    const emailJSData = {
      from_name: formData.Name,
      from_email: formData.Email,
      phone: formData.Phone,
      address: formData.Address,
      message: formData.Message,
      service: formData.Service,
      datetime: currentDateTime,
      to_email: "manioyassco@gmail.com"
    };

    try {
      setLoading(true);
      
      // Using your Formspree form
      const response = await fetch("https://formspree.io/f/xnnvagbw", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.Name,
          email: formData.Email,
          phone: formData.Phone,
          address: formData.Address,
          message: formData.Message,
          service: formData.Service,
          datetime: currentDateTime,
          _replyto: formData.Email,
          _subject: `New Contact Form Submission from ${formData.Name}`
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setStatus("Success! Your message has been sent.");
        setFormData({
          Name: "",
          Email: "",
          Phone: "",
          Address: "",
          Message: "",
          Service: "",
        });
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error("Error!", error);
      setStatus("Error! Something went wrong.");
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4">
      <h3 className="text-2xl md:text-4xl text-lightSky">
        Let&apos;s work together
      </h3>
      <p className="text-white/60 text-sm md:text-base">
        I'm passionate about turning ideas into reality. If you're looking for innovative solutions or want to collaborate on exciting projects, I'd love to work with you. Let's create something amazing together!
      </p>
      <>
        {success ? (
          <SuccessMsg status={status} />
        ) : (
          <>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <Input
                  type="text"
                  id="Name"
                  name="Name"
                  required
                  placeholder="Your name"
                  value={formData.Name}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  id="Email"
                  name="Email"
                  required
                  placeholder="Email address"
                  value={formData.Email}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-center">
                <Input
                  type="text"
                  id="Phone"
                  name="Phone"
                  placeholder="Phone number"
                  value={formData.Phone}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  id="Address"
                  name="Address"
                  placeholder="Address"
                  value={formData.Address}
                  onChange={handleChange}
                />
              </div>

              <Textarea
                name="Message"
                placeholder="Text here"
                value={formData.Message}
                onChange={handleChange}
                rows={5}
              />
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-bodyColor text-white border-white/20">
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="frontend-development">Frontend Development</SelectItem>
                    <SelectItem value="ml-development">Machine Learning Model Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Button
              disabled={isLoading}
              onClick={handleSubmit}
              type="submit"
              className="w-full py-4 bg-lightSky/5 text-white/80 border border-lightSky/20 hover:bg-lightSky/10 hover:border-lightSky hover:text-hoverColor hoverEffect"
            >
              {isLoading ? "Sending message..." : "Send Message"}
            </Button>
          </>
        )}
      </>
    </form>
  );
};

export default ContactForm;