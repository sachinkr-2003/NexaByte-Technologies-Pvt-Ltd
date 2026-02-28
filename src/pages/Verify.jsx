import { useState } from "react";

export default function Verify() {
  const [certificateId, setCertificateId] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleVerify = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (certificateId.toLowerCase().includes("nex")) {
        setResult({
          valid: true,
          name: "Sample Student",
          course: "MERN Stack Development",
          issueDate: "15 Jan 2024",
          certificateId: certificateId
        });
      } else {
        setResult({ valid: false });
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-24 px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight px-4">
            Verify <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Certificate</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Authenticate your NexaByte training certificate
          </p>
        </div>
      </section>

      {/* Verification Form */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-8">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-12 rounded-3xl border-2 border-blue-200 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-magnifying-glass text-white text-5xl"></i>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certificate Verification</h2>
              <p className="text-gray-600 text-lg">Enter your certificate ID to verify authenticity</p>
            </div>

            <form onSubmit={handleVerify} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-3 text-lg">Certificate ID</label>
                <input
                  type="text"
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value)}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-lg"
                  placeholder="e.g., NEX2024001234"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-xl font-bold text-xl hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Verifying..." : "Verify Certificate"}
              </button>
            </form>

            {/* Result */}
            {result && (
              <div className={`mt-8 p-8 rounded-2xl ${result.valid ? "bg-green-50 border-2 border-green-300" : "bg-red-50 border-2 border-red-300"}`}>
                {result.valid ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <i className="fa-solid fa-circle-check text-green-600 text-5xl"></i>
                      <h3 className="text-2xl sm:text-3xl font-bold text-green-700">Valid Certificate</h3>
                    </div>
                    <div className="space-y-3 text-lg">
                      <p><span className="font-semibold text-gray-700">Student Name:</span> <span className="text-gray-900">{result.name}</span></p>
                      <p><span className="font-semibold text-gray-700">Course:</span> <span className="text-gray-900">{result.course}</span></p>
                      <p><span className="font-semibold text-gray-700">Issue Date:</span> <span className="text-gray-900">{result.issueDate}</span></p>
                      <p><span className="font-semibold text-gray-700">Certificate ID:</span> <span className="text-gray-900">{result.certificateId}</span></p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <i className="fa-solid fa-circle-xmark text-red-600 text-5xl mb-4 block"></i>
                    <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-2">Invalid Certificate</h3>
                    <p className="text-gray-600 text-lg">The certificate ID you entered is not valid. Please check and try again.</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Verify?</h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">1.</span>
                <p>Locate your certificate ID on your NexaByte certificate (usually at the bottom)</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">2.</span>
                <p>Enter the complete certificate ID in the field above</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">3.</span>
                <p>Click "Verify Certificate" to check authenticity</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">4.</span>
                <p>View the verification result with certificate details</p>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Having trouble verifying your certificate?</p>
            <a href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
