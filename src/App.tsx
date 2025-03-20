import React from 'react';
import {
  BookOpen,
  BrainCircuit,
  Building2,
  ChevronDown,
  GraduationCap,
  LineChart,
  Users2,
  CheckCircle2,
  Clock,
  Trophy,
  Briefcase,
  MessagesSquare,
  HelpCircle,
  Laptop,
  MessageCircle,
  FolderGit2,
  Building,
  Award,
  Clock3,
  BookOpenCheck,
  FolderKanban,
  Rocket,
  Medal,
  CheckCircle,
  BookCheck,
  Brain,
  Presentation,
  Target
} from 'lucide-react';
import { motion } from 'framer-motion';
import { TopicDropdown } from './components/TopicDropdown';
import { TimelineStep } from './components/TimelineStep';

const coreFundamentals = [
  {
    title: "Fundamentals of AI",
    content: "If you're embarking on a career in the field of Data Science, it's essential to acquire a thorough understanding of this domain. In this section, you'll receive a comprehensive overview of the Data Science field and its various key components."
  },
  {
    title: "Python Programming",
    content: "Python is the backbone of Data Science. It is most widely used language for DS. It’s very easy to learn compared to other languages and non tech people can also learn it. You need not become an expert in it. You should mainly know how to manipulate data using it."
  },
  {
    title: "SQL",
    content: "SQL is the most underrated skill of a Data Scientist. It is used to pull required data pints from the complex database of clients. You need to write long queries using joins to get the relevant data points"
  },
  {
    title: "Tableau",
    content: "Tableau is a software that offers collaborative data visualization for organizations working with business information analytics. In this course we have covered tableau from basics to advance which will help any individual to clear data analyst interviews."
  },
  {
    title: "PowerBI",
    content: "Microsoft Power BI is a business intelligence platform that provides nontechnical business users with tools for aggregating, analyzing, visualizing and sharing data. In our course we have covered all aspects of powerbi necessary to clear data analyst interviews with different case studies to showcase in your resume."
  },
  {
    title: "MS Excel",
    content: "Excel is a spreadsheet program from Microsoft and a component of its Office product group for business applications. Microsoft Excel enables users to format, organize and calculate data in a spreadsheet. Its features calculation or computation capabilities, graphing tools, pivot tables, and a macro programming language called Visual Basic for Applications (VBA)."
  },
  {
    title: "Maths & Statistics",
    content: "Maths & Statistics is what makes Data Science unique. Lots of Data Science problems are solved using statistics tests. Also understanding the dataset is done using statistics. It is very important for interviews."
  },
  {
    title: "Data Structure & Algo.",
    content: "DSA is not a prime necessity of Data Science but some companies do ask DSA related questions specifically the product based companies like Amazon"
  },
  {
    title: "R Language",
    content: "R is not widely used as compared to Python but still some companies use it. It’s very power when it comes to plotting variety of graphics. The Exploratory Data Analysis is done better with R as compared to python."
  },
  {
    title: "Kaggle, Git & GitHub",
    content: "Kaggle is a good place to participate in machine learning/ deep learning competitions. This course covers about kaggle platform and how you can utilise kaggle to build your portfolio. It explains how you can use dataset, notebooks, competition here to get medals and boost your portfolio. Also we have covered GitHub"
  },
];

const advancedTechnologies = [
  {
    title: "Machine learning",
    content: "Machine learning is core of Data Science. These are mathematical algorithms which try to find patterns and relationships in the input and output of the given dataset. You need to know the inner workings of the algorithms and also how to do hyper parameter tuning"
  },
  {
    title: "Deep Learning",
    content: "Deep Learning is a subset of Machine learning. It deals with neural networks which solves complex problems of Computer Vision, Natural Language Processing and time series predictions. Someone will to target advance Data Science roles must have this skill. Also covered Generative AI and LLM Models"
  },
  {
    title: "Big Data and Hadoop",
    content: "Big Data and Hadoop play significant roles in the field of data science by enabling the storage, processing, and analysis of massive and complex datasets."
  },
  {
    title: "Spark",
    content: "Spark is a powerful and versatile framework that plays a crucial role in data science. It's known for its speed, ease of use, and capabilities for big data processing. Spark is widely used in data science for a variety of tasks and can significantly enhance data analysis and machine learning workflows."
  },
  {
    title: "Scala",
    content: "Scala is a versatile programming language that has gained popularity in the field of data science due to its combination of functional programming features and object-oriented capabilities. Data scientists often use Scala for various tasks, and it has become a common choice, especially in conjunction with big data frameworks like Apache Spark"
  },
  {
    title: "HBase",
    content: "HBase is a NoSQL database system that plays a significant role in data science, particularly in handling and analyzing large-scale, distributed, and semi-structured or unstructured data"
  },
  {
    title: "Hive",
    content: "Hive is a data warehousing and SQL-like query language system built on top of Hadoop. It is commonly used in data science for various tasks related to data storage, querying, and data preparation."
  },
  {
    title: "Kafka",
    content: "Kafka is a distributed streaming platform and messaging system that is increasingly used in data science for real-time data ingestion, event processing, and data analytics."
  },
  {
    title: "Airflow",
    content: "Airflow is an open-source platform that is widely used in data science and data engineering for workflow automation, scheduling, and orchestration. It provides a framework for defining, scheduling, and monitoring data pipelines, making it an essential tool for managing and executing data science workflows."
  },
  {
    title: "Big Data on Cloud",
    content: "Leveraging cloud computing for Big Data in data science offers numerous advantages, including scalability, cost-efficiency, accessibility, and simplified management. It covers AWS, Azure Databricks and Google Cloud Platform."
  },
];

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
            <img
                  src="/images/fulllogodark.png"
                  alt="Dataly Logo"
                  className="ml-2 text-xl font-bold"
                  style={{ width: '150px', height: 'auto', marginLeft: '10px', marginTop: '5px', display: 'block' }}
                />
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('curriculum')} className="text-gray-600 hover:text-blue-600">Curriculum</button>
              <button onClick={() => scrollToSection('timeline')} className="text-gray-600 hover:text-blue-600">Timeline</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-blue-600">Pricing</button>
              <button onClick={() => scrollToSection('certificate')} className="text-gray-600 hover:text-blue-600">Certificate</button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-blue-600">FAQ</button>
            </div>
            <a href="https://learn.dataly.ca" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              Login To Dataly
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Transform Your Career with Data Science
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Master the skills that drive industry innovation. Join our comprehensive data science program and become a certified data scientist in 6 months.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection('pricing')} className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300">
                  Start Learning
                </button>
                <a href="https://drive.google.com/file/d/1WDVSFwgNWfixWg82M2l-BLrfY1NxG8LR/view?usp=sharing" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition duration-300">
                  Download Syllabus
                </a>
              </div>
            </div>
            <div className="relative">
              <iframe
                src="https://player.vdocipher.com/v2/?otp=20160313versASE323ZL6lGI8ezrockHhn95HbHzOv2QPpDqxlODIagujPp1CCC3&playbackInfo=eyJ2aWRlb0lkIjoiNjJiZDQwZDQxZGQ1NDVhYTlhZDY2OTM1M2YyMDFkMTIifQ=="
                style={{ border: 0, height: '360px', width: '640px', maxWidth: '100%' }}
                allowFullScreen={true}
                allow="encrypted-media"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Unique Features</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-4">
                <img src="/images/handson.png" alt="Hands-On Learning" className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center">Hands-On Learning</h3>
              <p className="mt-2 text-gray-600 text-center">Get Complete Hands-on Practical Learning Experience through Assignments & Projects for Proper Confidence Building</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-4">
                <img src="/images/doubtsupt.png" alt="Doubt Clearance" className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center">Doubt Clearance</h3>
              <p className="mt-2 text-gray-600 text-center">You will get Chat Support for Doubt Clearance everyday for smooth and fast learning. Also Peer-To-Peer Learning will be available</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-4">
                <img src="/images/projects.png" alt="Capstone Projects" className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center">Capstone Projects</h3>
              <p className="mt-2 text-gray-600 text-center">Do Real World End-to-End Projects and get industrial experience.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-4">
                <img src="/images/intershp.png" alt="Get Internship" className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center">Get Internship</h3>
              <p className="mt-2 text-gray-600 text-center">After learning all the core topics and doing projects, you can do Industrial Internship with us and get Real-World exposure that will super enhance your skills</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-4">
                <img src="/images/finalcerti.png" alt="Certification" className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center">Certification</h3>
              <p className="mt-2 text-gray-600 text-center">Get certificate of individual modules and complete course certificate of the data science supremo program.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-4">
                <img src="/images/selpced.png" alt="Self Paced Learning" className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center">Self Paced Learning</h3>
              <p className="mt-2 text-gray-600 text-center">So you can learn according to your time availability and easily manage your work and studies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Comprehensive Curriculum</h2>
            <p className="mt-4 text-lg text-gray-600">Master the complete data science stack</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Core Fundamentals */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Core Fundamentals</h3>
              <div className="space-y-4">
                {coreFundamentals.map((topic, index) => (
                  <TopicDropdown key={index} title={topic.title} content={topic.content} />
                ))}
              </div>
            </div>
            {/* Advanced Technologies */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Advanced Technologies</h3>
              <div className="space-y-4">
                {advancedTechnologies.map((topic, index) => (
                  <TopicDropdown key={index} title={topic.title} content={topic.content} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">How You Will Become Job Ready?</h2>
            <p className="mt-4 text-lg text-gray-600">Your journey to becoming a data scientist</p>
          </div>
          <div className="space-y-12">
            <TimelineStep
              step={1}
              title="Learn Everything From Scratch"
              description="You will be learning all the technical topics from basics to advanced level and solving assignments to get complete hands-on practical learning experience."
              icon={<BookCheck className="w-8 h-8 text-white" />}
              index={0}
            />
            <TimelineStep
              step={2}
              title="Work On Industrial Projects"
              description="After that, you will be doing Industrial Projects that will boost up your confidence and enhance your resume."
              icon={<Brain className="w-8 h-8 text-white" />}
              index={1}
            />
            <TimelineStep
              step={3}
              title="Master Pro Career Growth Hacks"
              description="Simultaneously with the course, you will be learning LinkedIn Growth Hacks, Pro Resume Building and Proven techniques to find jobs through various online platforms."
              icon={<Presentation className="w-8 h-8 text-white" />}
              index={2}
            />
            <TimelineStep
              step={4}
              title="Do An Industrial Internship"
              description="After learning all the core topics and doing projects, you can do Industrial Internship with Us and get Real-World exposure that will super enhance your skills."
              icon={<Building2 className="w-8 h-8 text-white" />}
              index={3}
            />
            <TimelineStep
              step={5}
              title="Get Job Ready"
              description="Upon successful completion of the program offered by Dataly.ca, you will find yourself well-prepared and equipped for the job market. We are committed to helping you achieve your goal of becoming job-ready and thriving in the dynamic world of data science."
              icon={<Target className="w-8 h-8 text-white" />}
              index={4}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Data Science Supremo Program</h2>
            <p className="mt-4 text-lg text-blue-600 font-semibold">Get More Than 90% Discount Today</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {[
                  "20+ Hands-on Courses",
                  "50+ Industrial Projects",
                  "Practice Assignments",
                  "350+ Hours Learning Content",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  "Job Hunting Course",
                  "Course Completion Certificate",
                  "Free Future Updates",
                  "Lifetime Course Content Access"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 text-center">
              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900">$99</span>
                <span className="text-lg text-gray-500 line-through ml-4">$999</span>
              </div>
              <a href="https://learn.dataly.ca/comboPaymentPortal?cID=mIXvDqDBLfmjtvUnHxfn" className="bg-blue-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
                Enroll Now at 90% OFF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Dataly?</h2>
            <p className="mt-4 text-lg text-gray-600">Benefits that set us apart</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Trophy className="h-6 w-6 text-blue-600" />,
                title: "Industry Recognition",
                description: "Certified by leading tech companies"
              },
              {
                icon: <Users2 className="h-6 w-6 text-blue-600" />,
                title: "Learn From Experts",
                description: "Learn from industry professionals"
              },
              {
                icon: <Briefcase className="h-6 w-6 text-blue-600" />,
                title: "Career Support",
                description: "Learn Job Hunting Hacks"
              },
              {
                icon: <CheckCircle2 className="h-6 w-6 text-blue-600" />,
                title: "Practical Projects",
                description: "Real-world project experience"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                {benefit.icon}
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section id="certificate" className="py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Course Completion Certificate</h2>
            <p className="mt-4 text-lg text-gray-600">Get certified and showcase your expertise</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Medal className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Industry-Recognized Certification</h3>
                  <p className="mt-2 text-gray-600">Our certificates are valued by top companies worldwide</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Trophy className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Showcase Your Achievement</h3>
                  <p className="mt-2 text-gray-600">Add the certificate to your LinkedIn profile and resume</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Verify Your Skills</h3>
                  <p className="mt-2 text-gray-600">Digital verification system for authenticity</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-lg shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="border-8 border-blue-600 rounded-lg p-6">
                  <div className="text-center">
                    <BrainCircuit className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Certificate of Completion</h3>
                    <p className="text-lg text-gray-600 mb-6">This certifies that</p>
                    <p className="text-xl font-semibold text-blue-600 mb-4">[Student Name]</p>
                    <p className="text-gray-600 mb-6">has successfully completed the</p>
                    <p className="text-2xl font-bold text-gray-900 mb-6">Data Science Supremo Program</p>
                    <div className="flex justify-between items-center mt-8">
                      <div className="text-left">
                        <p className="text-sm text-gray-600">Date</p>
                        <p className="font-semibold">March 2025</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Certificate ID</p>
                        <p className="font-semibold">DS25-1234</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600">Got questions? We've got answers</p>
          </div>
          <div className="space-y-6">
            {[
              {
                "question": "How is Dataly different from any other online learning platform?",
                "answer": "We provide a complete hands-on practical learning experience through structured tutorial videos and Assignment & Projects Driven Courses. Our courses are offered at the most affordable prices, ensuring accessibility for all backgrounds. Learners receive 1-1 Chat Support for daily doubt clearance and enjoy lifetime course access for self-paced learning."
              },
              {
                "question": "I don't have a coding background or IT experience. How will this help me?",
                "answer": "This course is designed with beginners in mind, starting from the basics. Many learners with no prior coding experience have successfully completed the program."
              },
              {
                "question": "What is the course duration?",
                "answer": "The course duration is typically 6-9 months with 1-2 hours of daily commitment. It is self-paced with 350+ hours of video content and lifetime access."
              },
              {
                "question": "What is the method of learning?",
                "answer": "The course includes videos and assignments. Each assignment has topic-wise video links with related questions to solve. Mentors are available from 8 AM to 8 PM daily for support. Once assignments are submitted, learners receive solution files."
              },
              {
                "question": "Who will be my Teaching Assistant?",
                "answer": "We assign experienced Data Scientists and Data Engineers from our team to resolve your doubts and queries within 10-20 minutes."
              },
              {
                "question": "How do the Data Science projects work?",
                "answer": "Projects are guided assignments covering end-to-end processes like Data Cleaning, Preparation, Feature Engineering, Model Building, Evaluation, and Deployment on localhost and Cloud. Data Analytics case studies use tools like Tableau, Power BI, SQL, and Excel."
              },
              {
                "question": "When can I start my internship with Dataly?",
                "answer": "After course completion, you can apply for an internship through the course portal. A basic interview and assignment review are required. If not ready, learners have two weeks for preparation before a reattempt."
              },
              {
                "question": "Will I get lifetime content access?",
                "answer": "Yes, it's a one-time payment, and you’ll have lifetime access to the course."
              },
              {
                "question": "How is the course delivered?",
                "answer": "Once payment is complete, your account on the Dataly Learning Portal will be activated, and the course will be added. You can login to the portal and start learning."
              },
              {
                "question": "Do you have a refund policy?",
                "answer": "No, we do not have a refund policy."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <HelpCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                </div>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <img
                  src="/images/fulllogo.png"
                  alt="Dataly Logo"
                  className="ml-2 text-xl font-bold"
                />
              </div>
              <p className="mt-4 text-gray-400">Transforming careers through data science education</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('curriculum')} className="text-gray-400 hover:text-white">Courses</button></li>
                <li><button onClick={() => scrollToSection('timeline')} className="text-gray-400 hover:text-white">Timeline</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-white">Pricing</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:text-white">FAQ</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">team@dataly.ca</li>
                <li className="text-gray-400">+1 226 9788767</li>
                <li className="text-gray-400">Ontario, Canada</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/dataly-canada/" className="text-gray-400 hover:text-white">LinkedIn</a>
                <a href="http://www.instagram.com/dataly.official/" className="text-gray-400 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Dataly.Ca All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;