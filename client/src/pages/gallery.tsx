import { useState } from "react";
import { Play } from "lucide-react";
import PageHeader from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; title: string; description: string } | null>(null);
  const { toast } = useToast();

  const filters = [
    { id: "all", label: "All" },
    { id: "classroom", label: "Classrooms" },
    { id: "lab", label: "Laboratories" },
    { id: "facilities", label: "Facilities" },
    { id: "events", label: "Events" },
  ];

  const galleryItems = [
    // Classroom Images
    {
      category: "classroom",
      src: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Nursing classroom",
      title: "Classroom",
      description: "Learning environment for nursing theory classes",
    },
    {
      category: "classroom",
      src: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Anatomy class",
      title: "Study Room",
      description: "Space for group studies and discussions",
    },
    
    // Laboratory Images
    {
      category: "lab",
      src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Practice laboratory",
      title: "Practice Lab",
      description: "Basic lab for practical nursing skills training",
    },
    {
      category: "lab",
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Laboratory setup",
      title: "Lab Facilities",
      description: "Essential equipment for nursing education",
    },
    
    // Facilities Images
    {
      category: "facilities",
      src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Library with nursing books",
      title: "Library",
      description: "Study resources and nursing textbooks",
    },
    {
      category: "facilities",
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Campus building",
      title: "Campus",
      description: "Institute building in Lakhisarai",
    },
    
    // Events Images
    {
      category: "events",
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Student activities",
      title: "Student Events",
      description: "Various student activities and celebrations",
    },
    {
      category: "events",
      src: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Community program",
      title: "Community Programs",
      description: "Local health awareness activities",
    },
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (item: typeof galleryItems[0]) => {
    setLightboxImage(item);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const playVirtualTour = () => {
    toast({
      title: "Virtual Tour Coming Soon",
      description: "Virtual tour will be available soon. Please visit our campus for a physical tour.",
    });
  };

  return (
    <div>
      <PageHeader 
        title="Campus Gallery" 
        subtitle="See our learning facilities and campus environment"
        bgColor="bg-purple-600"
      />

      {/* Gallery Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800">Our Facilities</h3>
            <p className="text-gray-600 mt-4">Basic facilities for quality nursing education</p>
          </div>
          
          {/* Filter Buttons */}
          <div className="text-center mb-12">
            <div className="inline-flex space-x-2 bg-gray-100 p-2 rounded-lg">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    activeFilter === filter.id
                      ? "bg-institute-blue text-white"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer gallery-item"
                onClick={() => openLightbox(item)}
              >
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Campus Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Visit Our Campus</h3>
            <p className="text-lg text-gray-700 mb-8">
              We welcome you to visit our campus in person and see our facilities
            </p>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-4 text-institute-blue">Campus Visit</h4>
                <p className="text-gray-600 mb-6">Schedule a visit to tour our facilities and meet our faculty</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Address:</strong> Main Road, Medical College Area, Lakhisarai, Bihar - 811311</p>
                  <p><strong>Contact:</strong> +91 XXXXXXXXX</p>
                  <p><strong>Visit Hours:</strong> Monday to Friday, 10 AM to 4 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300"
            >
              ✕
            </button>
            <img 
              src={lightboxImage.src} 
              alt={lightboxImage.alt}
              className="w-full h-auto max-h-screen object-contain rounded-lg"
            />
            <div className="text-white text-center mt-4">
              <h4 className="text-lg font-semibold mb-2">{lightboxImage.title}</h4>
              <p className="text-gray-300">{lightboxImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
