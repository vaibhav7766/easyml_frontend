"use client";
import { useRef } from "react";

export default function Upload() {
  const fileInputRef = useRef(null);

  // Drag and drop handlers (for demo, not functional)
  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add("active");
  };
  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove("active");
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove("active");
    if (fileInputRef.current) {
      fileInputRef.current.files = e.dataTransfer.files;
      alert(`${e.dataTransfer.files.length} file(s) selected for upload`);
    }
  };
  const handleChange = (e) => {
    if (e.target.files.length > 0) {
      alert(`${e.target.files.length} file(s) selected for upload`);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4" style={{color: 'var(--foreground)'}}>Upload Dataset</h1>
      <p>Upload your dataset (CSV, Excel, JSON) to start the ML pipeline.</p>
      <section id="upload" className="mb-12">
        <div className="glass-card">
          <div
            className="glass-card file-drop-area rounded-lg p-8 text-center mb-6"
            style={{border: '1px dashed var(--card-border)', background: 'rgba(36, 37, 46, 0.35)', color: 'var(--foreground)'}}
            id="fileDropArea"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <i className="fas fa-cloud-upload-alt text-4xl text-purple-500 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">
              Drag & Drop your files here
            </h3>
            <p className="mb-4" style={{color: 'var(--accent)'}}>or</p>
            <label
              htmlFor="fileInput"
              className="btn-primary cursor-pointer"
            >
              Browse Files
            </label>
            <input
              type="file"
              id="fileInput"
              className="hidden"
              multiple
              accept=".csv,.xlsx,.json"
              ref={fileInputRef}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Supported Formats</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className="fas fa-file-csv text-blue-500"></i>
                </div>
                <div>
                  <p className="font-medium">CSV</p>
                  <p className="text-sm text-gray-500">
                    Comma separated values
                  </p>
                </div>
              </div>
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <i className="fas fa-file-excel text-green-500"></i>
              </div>
              <div>
                <p className="font-medium">Excel</p>
                <p className="text-sm text-gray-500">.xlsx, .xls</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full mr-4">
                <i className="fas fa-file-code text-yellow-500"></i>
              </div>
              <div>
                <p className="font-medium">JSON</p>
                <p className="text-sm text-gray-500">
                  JavaScript Object Notation
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Recent Uploads</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Filename
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Size
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <i className="fas fa-file-csv text-blue-500 mr-2"></i>
                        <span>customer_data.csv</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">CSV</td>
                    <td className="px-6 py-4 whitespace-nowrap">2.4 MB</td>
                    <td className="px-6 py-4 whitespace-nowrap">2023-06-15</td>
                    <td className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                      Processed
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <i className="fas fa-file-excel text-green-500 mr-2"></i>
                        <span>sales_report.xlsx</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">Excel</td>
                    <td className="px-6 py-4 whitespace-nowrap">5.1 MB</td>
                    <td className="px-6 py-4 whitespace-nowrap">2023-06-14</td>
                    <td className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                      Processing
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
