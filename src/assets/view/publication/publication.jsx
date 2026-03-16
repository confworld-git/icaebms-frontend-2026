import React from "react";
import {
  FileText,
  BookOpen,
  CheckCircle,
  AlertCircle,
  Download,
  Users,
  Globe,
  Award,
  Shield,
} from "lucide-react";
import Hero from "../commonhero/common-hero";

export default function Publication() {
  return (
    <section>
      {/* Hero would go here */}
      <div className="min-h-screen bg-gray-50">
        <Hero
          title="Publication"
          breadcrumbs={[{ label: "Home", link: "#" }]}
          backgroundImage="/images/commonheroimages/commonhero9.webp"
        />
        <main className="w-full px-3 sm:px-4 py-6 sm:py-12">
          {/* Introduction Section */}
          <section className="mb-8 sm:mb-16">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-8 md:p-12">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4 sm:mb-6">
                <Award className="w-10 h-10 sm:w-14 sm:h-14 text-orange-500 flex-shrink-0" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                  Publication of Presented Research
                </h1>
              </div>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                ICAEBMS-2026 provides several publication opportunities for presented
                work, ensuring your research reaches a global audience of peers,
                scholars, and academia members worldwide.
              </p> 

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {/* Conference Proceedings Card */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border-2 border-blue-200 hover:border-blue-600 transition-all">
                  <img
                    src="/images/publication/book.webp"
                    alt="Conference Proceedings"
                    className="w-full h-32 sm:h-40 md:h-48 object-contain rounded-lg mb-4 sm:mb-6"
                  />
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 flex-shrink-0" />
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                      Conference Proceedings
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    All accepted and registered abstracts will be published in
                    the Conference Proceedings with an ISBN Number.
                  </p>
                </div>

                {/* Journal Publication Card */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border-2 border-orange-200 hover:border-orange-500 transition-all">
                  <img
                    src="/images/publication/journal1.png"
                    alt="Journal Publication"
                    className="w-full h-32 sm:h-40 md:h-48 object-contain rounded-lg mb-4 sm:mb-6"
                  />
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 flex-shrink-0" />
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                      Journal Publication
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    Publish your high-quality paper in various Web of Science,
                    Scopus and other internationally indexed journals,
                    increasing the visibility and impact of your research.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 text-white">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />
                  <p className="text-base sm:text-lg md:text-xl font-semibold">
                    Your work will be disseminated to a wide audience globally
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Submission Guidelines Section */}
          <section className="mb-8 sm:mb-8">
            <div className="text-center mb- sm:mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                <FileText className="w-10 h-10 sm:w-14 sm:h-14 text-blue-600" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                  Submission Guidelines
                </h1>
              </div>
            </div>

            {/* Abstract Guidelines */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-8 md:p-8 mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row items-start gap-3 mb-6 sm:mb-8">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-lg">
                  <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700">
                    Abstract Submission Guidelines
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-1">
                    Follow these requirements for your abstract submission
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                {[
                  "The original work should be described in the abstract",
                  "Abstract should be written in English",
                  "It should be one paragraph with a word limit of 150",
                  "Please provide a slight biography with your abstract (An example is given in the template)",
                  "The abstract should be submitted in the format of an MS Word (.doc or .docx) document",
                  "After submission, you will be acknowledged of the receipt of the abstract via email within three working days",
                  "The Title, Author's Names, and Affiliations should be centred. Please underline the presenting author",
                  "Corresponding author E-mail should be there",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-2 sm:gap-3 items-start p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all border border-gray-200"
                  >
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Paper Guidelines */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-8 md:p-12">
              <div className="flex flex-col sm:flex-row items-start gap-3 mb-6 sm:mb-8">
                <div className="bg-orange-100 p-2 sm:p-3 rounded-lg">
                  <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700">
                    Full Paper Submission Guidelines
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-1">
                    Requirements for complete paper submission
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 sm:p-6 mb-6 sm:mb-8 rounded-lg">
                <p className="text-sm sm:text-base md:text-lg text-gray-800 font-semibold">
                  📝 You are encouraged to submit full papers if your abstract
                  is accepted and you have paid the registration cost for the
                  ICAEBMS-2026.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl border-2 border-blue-200">
                  <h4 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">
                    Page Length
                  </h4>
                  <p className="text-xl sm:text-2xl font-bold text-blue-600">
                    6-8 pages
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    double-column format
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl border-2 border-orange-200">
                  <h4 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">
                    Language
                  </h4>
                  <p className="text-xl sm:text-2xl font-bold text-orange-500">
                    English
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">grammar checked</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl border-2 border-blue-200">
                  <h4 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">
                    Abstract
                  </h4>
                  <p className="text-xl sm:text-2xl font-bold text-blue-600">
                    ≤ 150
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">words maximum</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl border-2 border-orange-200">
                  <h4 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">
                    Keywords
                  </h4>
                  <p className="text-xl sm:text-2xl font-bold text-orange-500">
                    Min. 5
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    lowercase, italics
                  </p>
                </div>
              </div>

              <div className="mb-6 sm:mb-8">
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  Required Sections
                </h4>
                <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                  {[
                    "Background/Introduction",
                    "Motivation and Objectives",
                    "Statement of Contribution/Methods",
                    "Results, Discussion and Conclusion",
                    "Funding statement",
                    "Acknowledgements",
                  ].map((section, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm sm:text-base font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-sm sm:text-base text-gray-700 font-medium">
                        {section}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-500 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                <h4 className="font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2 text-base sm:text-lg md:text-xl">
                  <AlertCircle className="w-6 h-6 sm:w-7 sm:h-7 text-orange-500 flex-shrink-0" />
                  References Requirements - CRITICAL
                </h4>
                <div className="space-y-3">
                  <div className="flex gap-2 sm:gap-3 items-start">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm sm:text-base font-bold flex-shrink-0">
                      35
                    </div>
                    <p className="text-sm sm:text-base text-gray-800 font-semibold pt-1">
                      Minimum 35 references required
                    </p>
                  </div>
                  <div className="flex gap-2 sm:gap-3 items-start">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">
                      30%
                    </div>
                    <p className="text-sm sm:text-base text-gray-800 font-semibold pt-1">
                      30% must be from the last 2 years
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 sm:p-4 space-y-2">
                    <p className="text-sm sm:text-base text-gray-700">
                      <span className="font-bold text-orange-500">Style:</span>{" "}
                      Chicago format
                    </p>
                    <p className="text-sm sm:text-base text-gray-700">
                      <span className="font-bold text-orange-500">Order:</span>{" "}
                      Numbered consecutively in order of citation
                    </p>
                    <p className="text-sm sm:text-base text-gray-700">
                      <span className="font-bold text-orange-500">
                        Citation format:
                      </span>{" "}
                      Use square brackets [9] or [9, 10]
                    </p>
                    <p className="text-sm sm:text-base text-gray-700">
                      <span className="font-bold text-orange-500">
                        Important:
                      </span>{" "}
                      All references must be cited within the text. Uncited
                      references will be removed
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 sm:p-5 border-2 border-blue-200">
                <h4 className="font-bold text-gray-800 mb-2 text-base sm:text-lg">
                  Formatting Details
                </h4>
                <ul className="space-y-1 text-sm sm:text-base text-gray-700">
                  <li>
                    • Tables, figures and images: properly named, good quality
                  </li>
                  <li>• Title, Author's Names, Affiliations: centred</li>
                  <li>• Underline the presenting author</li>
                  <li>• Include corresponding author email</li>
                  <li>• Affiliations with country names</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Ethics & Plagiarism Policy Section */}
          <section>
            <div className="text-center mb-6 sm:mb-8 mt-2">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                <Shield className="w-10 h-10 sm:w-14 sm:h-14 text-orange-500" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                  Plagiarism Policy & Publication Ethics
                </h1>
              </div>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-8 md:p-12">
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 text-center max-w-3xl mx-auto">
                ICAEBMS-2026 adheres to stringent anti-plagiarism policies to ensure
                the integrity and originality of all submissions.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border-l-4 border-blue-600">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm sm:text-base font-bold flex-shrink-0">
                      1
                    </div>
                    Plagiarism Check
                  </h3>
                  <div className="space-y-3 sm:space-y-4 ml-0 sm:ml-13">
                    <div className="flex gap-2 sm:gap-4 items-start">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                        Every submission undergoes a plagiarism check using{" "}
                        <span className="font-bold text-blue-600">
                          Crossref Similarity Check
                        </span>
                        , which is powered by{" "}
                        <span className="font-bold text-blue-600">
                          iThenticate
                        </span>
                        .
                      </p>
                    </div>
                    <div className="flex gap-2 sm:gap-4 items-start">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                        This ensures that all articles submitted to the
                        conference are original and free from plagiarism.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border-l-4 border-orange-500">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm sm:text-base font-bold flex-shrink-0">
                      2
                    </div>
                    Review Process
                  </h3>
                  <div className="space-y-3 sm:space-y-4 ml-0 sm:ml-13">
                    <div className="flex gap-2 sm:gap-4 items-start">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 flex-shrink-0 mt-1" />
                      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                        Submissions that pass the plagiarism check are sent to
                        the scientific committee for review.
                      </p>
                    </div>
                    <div className="flex gap-2 sm:gap-4 items-start">
                      <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 mt-1" />
                      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                        <span className="font-bold text-red-600">
                          Any submission found to be plagiarized at any stage
                          will be automatically rejected.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 bg-gradient-to-r from-red-100 to-orange-100 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border-2 border-red-400">
                <div className="flex items-start gap-2 sm:gap-4">
                  <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 text-red-600 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
                      Important Note
                    </h4>
                    <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
                      Authors are responsible for ensuring that their
                      submissions are original work and properly cite all
                      sources. Maintaining high ethical standards is crucial for
                      the integrity of academic research.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </section>
  );
}