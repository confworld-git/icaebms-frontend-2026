
import React from 'react';
import { FileText, CheckCircle } from 'lucide-react';
import Hero from '../commonhero/common-hero';

const abstract_submission_guidelines = [
  {
    title: "Abstract Submission Guidelines",
    list: [
      "The original work should be described in the abstract.",
      "Abstract should be written in English.",
      "It should be one paragraph with a word limit of 150.",
      "Please provide a slight biography with your abstract (An example is given in the template).",
      "The abstract should be submitted in the format of an MS Word (.doc or .docx) document.",
      "After you've finished preparing your abstract according to the above instructions, submit your abstract here.",
      "After submission, you will be acknowledged of the receipt of the abstract via email within three working days.",
      "The Title, Author's Names and Affiliations should be centred. Please underline the presenting author. Corresponding author E-mail should be there.",
    ],
  },
];

const full_paper_submission_guidelines = [
  {
    title: "Full Paper Submission Guidelines",
    description:
      "You are encouraged to submit full papers if your abstract is accepted and you have paid the registration cost for the ICAEBMS-2026.",
    list: [
      "Total number of pages must be 6-8 in double-column format.",
      "The manuscript should be in English and checked for grammar and language errors.",
      "Tables, figures and images should be properly named with good quality.",
      "The Title, Author's Names and Affiliations should be centred. Please underline the presenting author. Corresponding author E-mail should be there.",
      "Abstract not more than 150 words.",
      "Minimum 5 Keywords should be written in lowercase letters and italics (Not applicable to names/scientific names) and should be separated with commas.",
      "Names of affiliations should be given including the country.",
      "Background/Introduction, Motivation and Objectives.",
      "Statement of Contribution/Methods.",
      "Results, Discussion and Conclusion.",
      "Funding statement.",
      "Acknowledgements.",
      "References minimum 35 (30% of which must be within the last 2 years) should be there. Authors may submit their references in Chicago style. Authors are responsible for ensuring that the information in each reference is complete and accurate. All references should be numbered consecutively in the order of their first citation. Citations of references in the text should be identified using numbers in square brackets e.g., \"as discussed by Smith [9]\"; \"as discussed elsewhere [9, 10]\". All references should be cited within the text and uncited references will be removed.",
      "The paper should be submitted in the format of an MS Word (.doc or .docx) document.",
      "After you've finished preparing your full paper according to the above instructions, submit your full paper here.",
    ],
  },
];

export default function SubmissionGuideline() {
  return (
    <section>
      <Hero 
              title="Submission Guidelines" 
              breadcrumbs={[{ label: 'Home', link: '#' }]}
              backgroundImage="/images/commonheroimages/commonhero8.webp"
            />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-12 px-4 sm:px-4 lg:px-4">
      <div className="w-full">
        

        <div className="space-y-8">
          {/* Abstract Guidelines */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-blue-500">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-4">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-bold text-white">
                  {abstract_submission_guidelines[0].title}
                </h2>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {abstract_submission_guidelines[0].list.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Full Paper Guidelines */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-orange-400">
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 px-4 py-4">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-bold text-white">
                  {full_paper_submission_guidelines[0].title}
                </h2>
              </div>
            </div>
            <div className="p-6">
              {full_paper_submission_guidelines[0].description && (
                <p className="text-gray-700 mb-6 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                  {full_paper_submission_guidelines[0].description}
                </p>
              )}
              <ul className="space-y-4">
                {full_paper_submission_guidelines[0].list.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            For any queries, please contact the organizing committee
          </p>
        </div>
      </div>
    </div>
    </section>
    
  );
}
