import { Link } from "wouter";
import { 
  Info, 
  Stethoscope, 
  Images, 
  Download, 
  Tag,
  Users,
  Briefcase,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();

  const handleDownloadProspectus = () => {
    toast({
      title: "Download Available Soon",
      description: "Prospectus download will be available soon. Please contact the institute for detailed information.",
    });
  };

  const quickAccessItems = [
    {
      href: "/about",
      icon: Info,
      title: "About Us",
      description: "Learn about our institute, mission, and values",
      bgColor: "bg-blue-100",
      iconColor: "bg-institute-blue",
    },
    {
      href: "/courses", 
      icon: Stethoscope,
      title: "ANM Course Details",
      description: "Complete curriculum, syllabus, and career opportunities",
      bgColor: "bg-green-100",
      iconColor: "bg-green-600",
    },
    {
      href: "/gallery",
      icon: Images,
      title: "View Gallery",
      description: "Explore our campus facilities and learning environment",
      bgColor: "bg-purple-100",
      iconColor: "bg-purple-600",
    },
    {
      onClick: handleDownloadProspectus,
      icon: Download,
      title: "Download Prospectus",
      description: "Get detailed information about admissions and courses",
      bgColor: "bg-red-100",
      iconColor: "bg-institute-red",
    },
  ];

  const whyChooseItems = [
    {
      icon: Tag,
      title: "Official Recognition",
      description: "Approved by Bihar Nursing Council with DCECE counseling admissions",
      iconBg: "bg-institute-blue",
    },
    {
      icon: Users,
      title: "Expert Faculty", 
      description: "Experienced nursing professionals and medical experts",
      iconBg: "bg-green-600",
    },
    {
      icon: Briefcase,
      title: "Career Opportunities",
      description: "Good job opportunities in hospitals and healthcare centers",
      iconBg: "bg-institute-red",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="institute-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Quality Nursing Education</h2>
              <p className="text-xl mb-8 text-blue-100">
                Committed to providing quality ANM training since 2020. Approved by Bihar Nursing Council.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/admission">
                  <Button className="btn-primary">
                    Apply Now <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="btn-secondary"
                  onClick={handleDownloadProspectus}
                >
                  Download Prospectus
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://media.istockphoto.com/id/1419093004/photo/young-nurse-consoling-little-girl-patient-lying-on-bed-in-hospital-ward.jpg?s=2048x2048&w=is&k=20&c=Lz8RO2h2CYbFdadXGdmunuFt9QZ9VEbGBT8GCL6Tso8=" 
                alt="Nursing classroom with students" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Medical training laboratory" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Students in practical training" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Hospital training ward" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome & Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-yellow-100 p-8 rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Institute facilities collage" 
                  className="rounded-xl shadow-lg w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-institute-red text-white p-6 rounded-xl shadow-xl">
                  <h3 className="text-2xl font-bold text-center">Welcome to</h3>
                  <h4 className="text-lg font-semibold text-center">ANUSHKA ANM</h4>
                  <h4 className="text-lg font-semibold text-center">TRAINING INSTITUTE</h4>
                </div>
              </div>
            </div>
            
            <div>
              <div className="mb-6">
                <span className="text-institute-red font-semibold text-lg">Established in 2020</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Nursing Education in Lakhisarai</h3>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Anushka ANM Training Institute is one of the quality nursing schools in Lakhisarai, Bihar, aspiring to become 
                  one of the best in the region. We are recognized by the <strong className="text-institute-blue">Bihar Nursing Council</strong> 
                  and offer our ANM program through <strong className="text-institute-blue">DCECE (Bihar Paramedical) counseling</strong>.
                </p>
                <p className="leading-relaxed">
                  Our mission is to provide practical nursing education with good values and prepare skilled healthcare 
                  professionals who can serve their communities with dedication and care.
                </p>
                <div className="flex items-center space-x-6 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-institute-red">2020</div>
                    <div className="text-sm text-gray-600">Established</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-institute-blue">100+</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Tiles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Quick Access</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAccessItems.map((item, index) => (
              <div 
                key={index}
                className={`${item.bgColor} p-8 rounded-xl text-center hover:shadow-lg transition-shadow cursor-pointer group`}
                {...(item.href ? { onClick: () => window.location.href = item.href } : { onClick: item.onClick })}
              >
                <div className={`w-16 h-16 ${item.iconColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Anushka ANM Training Institute?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseItems.map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 ${item.iconBg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <item.icon className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-semibold mb-4">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
