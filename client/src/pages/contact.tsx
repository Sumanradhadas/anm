import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Train,
  Bus,
  Plane,
  Home as HomeIcon,
  Tag,
  Download,
  PhoneCall
} from "lucide-react";
import PageHeader from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactInquirySchema } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const submitContact = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for contacting us. We will get back to you soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to Send Message",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      await submitContact.mutateAsync(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openMap = () => {
    window.open('https://maps.google.com/?q=Lakhisarai,Bihar', '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: (
        <>
          Anushka ANM Training Institute<br />
          Main Road, Medical College Area<br />
          Lakhisarai, Bihar - 811311<br />
          India
        </>
      ),
      color: "bg-institute-blue",
    },
    {
      icon: Phone,
      title: "Phone",
      content: (
        <>
          +91 XXXXXXXXX<br />
          +91 XXXXXXXXX (Admission Helpline)
        </>
      ),
      color: "bg-institute-red",
    },
    {
      icon: Mail,
      title: "Email",
      content: (
        <>
          info@anushkaanm.ac.in<br />
          admission@anushkaanm.ac.in
        </>
      ),
      color: "bg-green-600",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: (
        <>
          Monday - Friday: 9:00 AM - 5:00 PM<br />
          Saturday: 9:00 AM - 2:00 PM<br />
          Sunday: Closed
        </>
      ),
      color: "bg-purple-600",
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "bg-blue-600 hover:bg-blue-700" },
    { icon: Twitter, href: "#", color: "bg-blue-400 hover:bg-blue-500" },
    { icon: Instagram, href: "#", color: "bg-red-600 hover:bg-red-700" },
    { icon: Linkedin, href: "#", color: "bg-blue-800 hover:bg-blue-900" },
  ];

  const transportationInfo = [
    {
      icon: Train,
      title: "By Train",
      description: "Lakhisarai Junction - 2 km",
      color: "text-institute-blue",
    },
    {
      icon: Bus,
      title: "By Bus", 
      description: "Lakhisarai Bus Stand - 1.5 km",
      color: "text-institute-red",
    },
    {
      icon: Plane,
      title: "By Air",
      description: "Patna Airport - 120 km",
      color: "text-green-600",
    },
  ];

  const quickLinks = [
    {
      href: "https://dcece.ac.in",
      icon: HomeIcon,
      title: "DCECE Website",
      description: "Official counseling portal",
      color: "bg-blue-50",
      external: true,
    },
    {
      href: "#",
      icon: Tag,
      title: "Bihar Nursing Council",
      description: "Regulatory authority",
      color: "bg-green-50",
      external: true,
    },
    {
      href: "#",
      icon: Download,
      title: "Download Forms",
      description: "Application & inquiry forms",
      color: "bg-red-50",
      external: false,
    },
    {
      href: "#",
      icon: PhoneCall,
      title: "Emergency Contact",
      description: "24/7 helpline support",
      color: "bg-purple-50",
      external: false,
    },
  ];

  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with Anushka ANM Training Institute"
        bgColor="bg-institute-red"
      />

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                      <info.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">{info.title}</h4>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Social Media Links */}
              <div className="mt-8">
                <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.href} 
                      className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center text-white transition-colors`}
                    >
                      <social.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your first name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your last name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="Enter your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="admission">Admission Inquiry</SelectItem>
                            <SelectItem value="course">Course Information</SelectItem>
                            <SelectItem value="fee">Fee Structure</SelectItem>
                            <SelectItem value="facilities">Facilities</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea rows={5} placeholder="Please describe your query in detail..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox id="privacy-policy" />
                    <label htmlFor="privacy-policy" className="text-gray-600 text-sm">
                      I agree to the Privacy Policy and consent to the processing of my personal data.
                    </label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-institute-red hover:bg-red-700"
                    disabled={isSubmitting || submitContact.isPending}
                  >
                    {isSubmitting || submitContact.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800">Find Us</h3>
            <p className="text-gray-600 mt-4">Located in the heart of Lakhisarai, Bihar</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Map Placeholder */}
              <div className="h-96 bg-gray-200 flex items-center justify-center relative">
                <img 
                  src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                  alt="Interactive map showing Lakhisarai location" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="text-4xl mb-4 mx-auto" size={48} />
                    <h4 className="text-xl font-semibold">Anushka ANM Training Institute</h4>
                    <p>Lakhisarai, Bihar - 811311</p>
                    <Button 
                      className="mt-4 bg-institute-blue hover:bg-blue-800"
                      onClick={openMap}
                    >
                      View on Google Maps
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Directions */}
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">How to Reach</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  {transportationInfo.map((transport, index) => (
                    <div key={index} className="flex items-start">
                      <transport.icon className={`${transport.color} mr-3 mt-1 flex-shrink-0`} size={20} />
                      <div>
                        <p className="font-medium">{transport.title}</p>
                        <p className="text-gray-600">{transport.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800">Quick Links</h3>
            <p className="text-gray-600 mt-4">Important resources and external links</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {quickLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`block ${link.color} p-6 rounded-xl text-center hover:shadow-lg transition-shadow`}
              >
                <link.icon className="text-2xl mb-3 mx-auto" size={32} />
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center justify-center">
                  {link.title}
                  {link.external && <ExternalLink className="ml-1" size={14} />}
                </h4>
                <p className="text-gray-600 text-sm">{link.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
