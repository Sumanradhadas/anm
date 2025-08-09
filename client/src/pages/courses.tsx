import { Book, HandHeart, Clock, CreditCard, Hospital, Home, Baby, Briefcase } from "lucide-react";
import PageHeader from "@/components/ui/page-header";

export default function Courses() {
  const firstYearSubjects = [
    "Anatomy & Physiology",
    "Fundamentals of Nursing", 
    "Microbiology & Basic Pathology",
    "Psychology & Sociology",
    "First Aid & Emergency Care",
  ];

  const firstYearPractical = [
    "Basic Nursing Skills",
    "Vital Signs Monitoring",
    "Injection Administration", 
    "Wound Dressing",
  ];

  const secondYearSubjects = [
    "Community Health Nursing",
    "Maternal & Child Health",
    "Pharmacology & Drug Administration",
    "Health Education & Communication",
    "Nutrition & Dietetics",
  ];

  const secondYearPractical = [
    "Hospital Attachment",
    "Community Field Work",
    "Delivery Care",
    "Immunization Programs",
  ];

  const careerOpportunities = [
    {
      icon: Hospital,
      title: "Hospital Staff Nurse",
      description: "Work in government and private hospitals providing patient care",
      color: "bg-blue-50 text-institute-blue",
    },
    {
      icon: Home,
      title: "Community Health Worker", 
      description: "Serve in PHCs, CHCs, and community health programs",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: Baby,
      title: "Midwife Assistant",
      description: "Support maternal and child health programs",
      color: "bg-red-50 text-institute-red",
    },
    {
      icon: Briefcase,
      title: "Private Practice",
      description: "Start own clinic or healthcare services",
      color: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <div>
      <PageHeader 
        title="ANM Training Program" 
        subtitle="Comprehensive Auxiliary Nursing Midwifery Education"
        bgColor="bg-institute-red"
      />

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">About ANM Program</h3>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  The Auxiliary Nursing Midwifery (ANM) program is a comprehensive 2-year diploma course 
                  designed to train skilled healthcare professionals in nursing and midwifery practices.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Eligibility Criteria:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                      10+2 passed from recognized board
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                      Minimum 45% marks (40% for reserved categories)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                      Age limit: 17-35 years
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                      Female candidates only
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" 
                alt="Students studying anatomy" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" 
                alt="Nursing skills training" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" 
                alt="Community health work" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" 
                alt="Medical equipment training" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800">Comprehensive Curriculum</h3>
            <p className="text-gray-600 mt-4">2-Year structured program with theory and practical components</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* First Year */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-2xl font-bold text-institute-blue mb-6">First Year Curriculum</h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-3">Theory Subjects:</h5>
                  <ul className="space-y-2 text-gray-700">
                    {firstYearSubjects.map((subject, index) => (
                      <li key={index} className="flex items-start">
                        <Book className="text-institute-blue mr-2 mt-1 flex-shrink-0" size={16} />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-800 mb-3">Practical Training:</h5>
                  <ul className="space-y-2 text-gray-700">
                    {firstYearPractical.map((practice, index) => (
                      <li key={index} className="flex items-start">
                        <HandHeart className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        {practice}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Second Year */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-2xl font-bold text-institute-red mb-6">Second Year Curriculum</h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-3">Theory Subjects:</h5>
                  <ul className="space-y-2 text-gray-700">
                    {secondYearSubjects.map((subject, index) => (
                      <li key={index} className="flex items-start">
                        <Book className="text-institute-red mr-2 mt-1 flex-shrink-0" size={16} />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-800 mb-3">Clinical Practice:</h5>
                  <ul className="space-y-2 text-gray-700">
                    {secondYearPractical.map((practice, index) => (
                      <li key={index} className="flex items-start">
                        <HandHeart className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        {practice}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Pathway */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800">Admission Process</h3>
            <p className="text-gray-600 mt-4">Admission through DCECE (Bihar Paramedical) Counseling</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-institute-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">DCECE Registration</h4>
                <p className="text-gray-600">Register for DCECE counseling online through official website</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-institute-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Document Verification</h4>
                <p className="text-gray-600">Attend counseling with required documents for verification</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Seat Allotment</h4>
                <p className="text-gray-600">Receive seat allotment and complete admission formalities</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl mt-8">
              <h4 className="font-semibold text-institute-blue mb-3">Important Note:</h4>
              <p className="text-gray-700">All admissions are conducted strictly through DCECE counseling process. 
              Direct admissions are not available. Keep track of DCECE notification dates and counseling schedule.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fees & Duration */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800">Course Details & Fees</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold text-institute-blue mb-4 flex items-center">
                  <Clock className="mr-2" size={24} />
                  Course Duration
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Duration:</span>
                    <span className="font-semibold">24 Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Academic Year:</span>
                    <span className="font-semibold">2 Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Clinical Training:</span>
                    <span className="font-semibold">6 Months</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold text-institute-red mb-4 flex items-center">
                  <CreditCard className="mr-2" size={24} />
                  Fee Structure
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual Fee:</span>
                    <span className="font-semibold">₹25,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Course Fee:</span>
                    <span className="font-semibold">₹50,000</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="text-gray-600">Payment:</span>
                    <span className="font-semibold text-green-600">Installments Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800">Career Opportunities</h3>
            <p className="text-gray-600 mt-4">Wide range of opportunities in healthcare sector</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerOpportunities.map((opportunity, index) => (
              <div key={index} className={`text-center ${opportunity.color.split(' ')[0]} p-6 rounded-xl`}>
                <div className={`w-16 h-16 ${opportunity.color.split(' ')[0].replace('50', '600').replace('100', '600')} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <opportunity.icon className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{opportunity.title}</h4>
                <p className="text-gray-600 text-sm">{opportunity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
