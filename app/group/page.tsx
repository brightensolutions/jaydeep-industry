import type { Metadata } from "next"
import LightAboutSection from "@/components/light-about-section"
import Breadcrumb from "@/components/breadcrumb" // Renamed import
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, Award, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Group Companies - Jaydeep Industries",
  description: "Learn about Jaydeep Industries group companies and our strategic partnerships in the textile industry.",
}

export default function GroupPage() {
  return (
    <main>
      <Breadcrumb />
      <LightAboutSection />
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Group</h1>
          <p className="text-lg text-gray-700">Details about the Jaydeep Industries group and its affiliations.</p>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-[#da222a]/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-[#da222a] mb-4">Our Group Companies</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Jaydeep Industries is part of a larger group of companies, each specializing in different aspects of the
            industrial sector. Together, we form a formidable force in innovation and production.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">Jaydeep Engineering</h3>
              <p className="text-gray-600">Specializing in custom machinery and industrial automation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">Jaydeep Metals</h3>
              <p className="text-gray-600">A leader in metal fabrication and material supply.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">Jaydeep Logistics</h3>
              <p className="text-gray-600">Providing efficient and reliable supply chain solutions globally.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="py-20 bg-[#0066a4]/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">Our Group</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Jaydeep Industries is part of a strong network of companies dedicated to excellence in textile
              manufacturing and weaving accessories.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="p-8 bg-white border-gray-100">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <Building2 className="h-12 w-12 text-[#da222a]" />
                  <div>
                    <CardTitle className="text-2xl text-[#1a1a1a]">Jaydeep Industries</CardTitle>
                    <p className="text-gray-600">Parent Company</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Established in 1976, Jaydeep Industries is the flagship company specializing in weaving accessories
                  and SWASTIK brand Wire Heads.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <Award className="h-4 w-4 text-[#da222a] mr-3" />
                    47+ years of experience
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Globe className="h-4 w-4 text-[#da222a] mr-3" />
                    Global reach and recognition
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 text-[#da222a] mr-3" />
                    Trusted by textile manufacturers worldwide
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white border-gray-100">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <Building2 className="h-12 w-12 text-[#0066a4]" />
                  <div>
                    <CardTitle className="text-2xl text-[#1a1a1a]">Shree Sainath Industries</CardTitle>
                    <p className="text-gray-600">Strategic Partner</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our strategic partner specializing in SSI brand Metal Reeds, including channel and stainless steel
                  reeds manufacturing.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <Award className="h-4 w-4 text-[#0066a4] mr-3" />
                    Specialized in metal reed manufacturing
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Globe className="h-4 w-4 text-[#0066a4] mr-3" />
                    Channel and stainless steel expertise
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 text-[#0066a4] mr-3" />
                    Close collaboration with Jaydeep Industries
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-16 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-[#1a1a1a] text-center mb-8">Our Collective Strength</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#0066a4]/50 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-[#0066a4]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">Quality Excellence</h3>
                <p className="text-gray-600">
                  Combined expertise ensures superior quality products across all our brands
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#da222a]/50 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-[#da222a]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">Global Reach</h3>
                <p className="text-gray-600">Our network spans across India and international markets</p>
              </div>
              <div className="text-center">
                <div className="bg-[#1a1a1a]/50 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-[#1a1a1a]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">Customer Focus</h3>
                <p className="text-gray-600">Dedicated to meeting exact requirements of our valued customers</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">Partnership Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              We are always looking for strategic partnerships and collaborations that can help us serve our customers
              better and expand our reach in the textile industry.
            </p>
            <div className="bg-[#0066a4] text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Interested in Joining Our Network?</h3>
              <p className="text-[#0066a4]/20 mb-6">
                Contact us to explore partnership opportunities and learn how we can work together to serve the textile
                industry better.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
