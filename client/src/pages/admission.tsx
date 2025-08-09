import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  UserPlus, 
  FileUp, 
  CreditCard, 
  CalendarCheck, 
  GraduationCap, 
  Percent, 
  FlaskConical, 
  Calendar,
  User,
  MapPin,
  HeartPulse,
  FileDown,
  ExternalLink
} from "lucide-react";
import PageHeader from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertAdmissionInquirySchema } from "@shared/schema";

export default function Admission() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(insertAdmissionInquirySchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      query: "",
    },
  });

  const submitInquiry = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest("POST", "/api/admission-inquiry", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Submitted Successfully",
        description: "We will contact you soon regarding your admission query.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Failed to submit inquiry. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      await submitInquiry.mutateAsync(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadProspectus = () => {
    toast({
      title: "Download Available Soon",
      description: "Prospectus download will be available soon. Please contact the institute for detailed information.",
    });
  };

  return (
    <div>
      <PageHeader 
        title="Admission Information" 
        subtitle="Your pathway to a rewarding nursing career"
        bgColor="bg-green-600"
      />

      {/* Admission Through DCECE */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Admission through DCECE</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              All admissions to Anushka ANM Training Institute are conducted exclusively through 
              <strong className="text-institute-blue"> DCECE (Bihar Paramedical) Counseling</strong>. 
              This ensures transparency and merit-based selection for all candidates.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-bold text-institute-blue mb-6">What is DCECE?</h4>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  DCECE (Diploma Certificate Entrance Competitive Examination) is the official 
                  entrance examination conducted by the Government of Bihar for admissions to 
                  various paramedical and nursing courses in the state.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-3">Key Benefits of DCECE:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                      Merit-based transparent selection
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                      Government regulated process
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                      Equal opportunity for all candidates
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                      Counseling and seat allotment system
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Students preparing for entrance examination" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800">Application Process</h3>
            <p className="text-gray-600 mt-4">Step-by-step guide to DCECE application and counseling</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-institute-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserPlus className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-3">Step 1: Registration</h4>
                <p className="text-gray-600 text-sm">Visit DCECE official website and complete online registration with required details</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-institute-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileUp className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-3">Step 2: Document Upload</h4>
                <p className="text-gray-600 text-sm">Upload scanned copies of educational certificates and other required documents</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-3">Step 3: Fee Payment</h4>
                <p className="text-gray-600 text-sm">Pay the application fee online through available payment methods</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CalendarCheck className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-3">Step 4: Counseling</h4>
                <p className="text-gray-600 text-sm">Attend counseling on scheduled date for document verification and seat allotment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800">Eligibility Requirements</h3>
              <p className="text-gray-600 mt-4">Ensure you meet all criteria before applying</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h4 className="text-xl font-bold text-institute-blue mb-6">Academic Qualifications</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <GraduationCap className="text-institute-blue mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>10+2 or equivalent from recognized board</span>
                  </li>
                  <li className="flex items-start">
                    <Percent className="text-institute-blue mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Minimum 45% marks (40% for reserved categories)</span>
                  </li>
                  <li className="flex items-start">
                    <FlaskConical className="text-institute-blue mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Physics, Chemistry, Biology as mandatory subjects</span>
                  </li>
                  <li className="flex items-start">
                    <GraduationCap className="text-institute-blue mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>English as compulsory subject</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-8 rounded-xl">
                <h4 className="text-xl font-bold text-institute-red mb-6">Other Criteria</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Calendar className="text-institute-red mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Age limit: 17 to 35 years (as on 31st December)</span>
                  </li>
                  <li className="flex items-start">
                    <User className="text-institute-red mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Only female candidates are eligible</span>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="text-institute-red mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Preference for Bihar state residents</span>
                  </li>
                  <li className="flex items-start">
                    <HeartPulse className="text-institute-red mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Medical fitness certificate required</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800">Important Dates (Tentative)</h3>
              <p className="text-gray-600 mt-4">Keep track of DCECE counseling schedule</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-institute-blue text-white p-4">
                <h4 className="text-lg font-semibold">DCECE ANM Counseling Timeline 2024-25</h4>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-medium text-gray-800">Online Application Starts</span>
                    <span className="text-institute-blue font-semibold">May 2024</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-medium text-gray-800">Application Deadline</span>
                    <span className="text-institute-red font-semibold">June 2024</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-medium text-gray-800">Counseling Dates</span>
                    <span className="text-green-600 font-semibold">July - August 2024</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-medium text-gray-800">Document Verification</span>
                    <span className="text-purple-600 font-semibold">During Counseling</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-800">Academic Session Starts</span>
                    <span className="text-gray-800 font-semibold">September 2024</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <p className="text-yellow-800 text-sm">
                <strong>Note:</strong> These are tentative dates. Please check the official DCECE website for exact dates and notifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prospectus Download */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Download Prospectus</h3>
            <p className="text-lg text-gray-700 mb-8">
              Get detailed information about course curriculum, fees, facilities, and admission process
            </p>
            
            <div className="institute-gradient p-8 rounded-xl text-white">
              <div className="mb-6">
                <FileDown className="text-6xl mb-4 opacity-80 mx-auto" size={64} />
                <h4 className="text-2xl font-bold mb-2">ANM Course Prospectus 2024-25</h4>
                <p className="text-blue-100">Comprehensive guide with all necessary information</p>
              </div>
              <Button 
                className="bg-white text-institute-blue hover:bg-gray-100"
                onClick={handleDownloadProspectus}
              >
                <FileDown className="mr-2" size={16} />
                Download PDF (2.5 MB)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Queries */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800">Need Help?</h3>
              <p className="text-gray-600 mt-4">Contact us for admission-related queries</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold text-institute-blue mb-6">Quick Contact</h4>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
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
                            <Input placeholder="Enter your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="query"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Query</FormLabel>
                          <FormControl>
                            <Textarea rows={4} placeholder="Describe your query..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-institute-blue hover:bg-blue-800"
                      disabled={isSubmitting || submitInquiry.isPending}
                    >
                      {isSubmitting || submitInquiry.isPending ? "Sending..." : "Send Query"}
                    </Button>
                  </form>
                </Form>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold text-institute-red mb-6">Contact Information</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-institute-blue rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">📞</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Phone</p>
                      <p className="text-gray-600">+91 XXXXXXXXX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-institute-blue rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✉️</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-gray-600">admission@anushkaranm.ac.in</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-institute-blue rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">🕒</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Office Hours</p>
                      <p className="text-gray-600">Mon - Fri: 9:00 AM - 5:00 PM<br />Sat: 9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-institute-blue rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <ExternalLink className="text-white" size={12} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">DCECE Official Website</p>
                      <a href="https://dcece.ac.in" target="_blank" rel="noopener noreferrer" className="text-institute-blue hover:underline">dcece.ac.in</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
