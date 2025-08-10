import { Eye, Target, Handshake, Bus, Heart, Trophy, Users2 } from "lucide-react";
import PageHeader from "@/components/ui/page-header";

export default function About() {
  const coreValues = [
    {
      icon: Handshake,
      title: "Integrity",
      description: "Upholding honesty and moral principles in all endeavors",
      color: "bg-blue-100 text-institute-blue",
    },
    {
      icon: Bus,
      title: "Professionalism",
      description: "Maintaining highest standards in healthcare practice",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Heart,
      title: "Empathy",
      description: "Compassionate care for patients and understanding",
      color: "bg-red-100 text-institute-red",
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Striving for the highest quality in education",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Users2,
      title: "Service",
      description: "Commitment to community health and wellbeing",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const facultyMembers = [
    {
      name: "Dr. Priya Sharma",
      position: "Principal",
      qualification: "M.Sc. Nursing, 15+ years in nursing education",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    },
    {
      name: "Ms. Renu Kumari",
      position: "Senior Instructor",
      qualification: "B.Sc. Nursing, Specialist in Community Health",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    },
    {
      name: "Mr. Rajesh Kumar",
      position: "Clinical Coordinator",
      qualification: "B.Sc. Nursing, 10+ years clinical experience",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    },
  ];

  const campusHighlights = [
    {
      title: "Learning Classrooms",
      description: "Well-lit classrooms with essential teaching tools for effective nursing education and theory sessions.",
      image: "https://t4.ftcdn.net/jpg/04/31/47/35/360_F_431473578_sfwRzAfW9CBQ6R2Ak1QZZVT5eKkIiJbR.jpg",
    },
    {
      title: "Practice Laboratory",
      description: "Basic lab facilities for hands-on training in fundamental nursing skills and patient care procedures.",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    },
    {
      title: "Study Library",
      description: "Library with nursing textbooks, reference materials, and study resources for students.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    },
  ];

  return (
    <div>
      <PageHeader 
        title="About Anushka ANM Training Institute" 
        subtitle="Dedicated to excellence in nursing education since 2020"
      />

      {/* Institutional Background */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Foundation</h3>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Established in 2020 in Lakhisarai, Bihar, Anushka ANM Training Institute is one of the promising nursing 
                  education centers in the region, aspiring to become a leading institution in healthcare training.
                </p>
                <p className="leading-relaxed">
                  We are committed to providing quality nursing education to students from Lakhisarai and surrounding areas, 
                  focusing on practical skills and compassionate care that meets the healthcare needs of our community.
                </p>
                <p className="leading-relaxed">
                  Our goal is to prepare skilled and dedicated nursing professionals who can contribute meaningfully to 
                  Bihar's healthcare system while maintaining the highest standards of patient care.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://deshbhagatuniversity.in/wp-content/uploads/2024/08/3027.jpg" 
                alt="Educational institution building" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800">Our Vision & Mission</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-institute-blue rounded-full flex items-center justify-center mb-6">
                <Eye className="text-white" size={24} />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Vision</h4>
              <p className="text-gray-700 leading-relaxed">
                To become one of the best nursing training institutes in Lakhisarai and aspire to be 
                recognized as a quality healthcare education center that prepares skilled nursing 
                professionals for Bihar and the region.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-institute-red rounded-full flex items-center justify-center mb-6">
                <Target className="text-white" size={24} />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Mission</h4>
              <p className="text-gray-700 leading-relaxed">
                To provide skill-based, career-oriented nursing education with strong ethical values, 
                fostering critical thinking, practical competence, and professional integrity among 
                our students to meet the evolving healthcare needs of society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800">Our Core Values</h3>
            <p className="text-gray-600 mt-4">The principles that guide our educational approach and institutional culture</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${value.color.split(' ')[0]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className={value.color.split(' ')[1]} size={24} />
                </div>
                <h5 className="font-semibold text-gray-800 mb-2">{value.title}</h5>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800">Campus Highlights</h3>
            <p className="text-gray-600 mt-4">State-of-the-art facilities designed for comprehensive nursing education</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {campusHighlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={highlight.image} 
                  alt={highlight.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3">{highlight.title}</h4>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Faculty */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800">Leadership & Faculty</h3>
            <p className="text-gray-600 mt-4">Experienced professionals dedicated to nursing education excellence</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {facultyMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h4 className="text-xl font-semibold text-gray-800">{member.name}</h4>
                <p className="text-institute-blue font-medium">{member.position}</p>
                <p className="text-sm text-gray-600 mt-2">{member.qualification}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
