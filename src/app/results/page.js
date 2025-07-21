export default function Results() {
  return (
    <section id="results" className="mb-12">
      <h2 className="text-2xl font-bold mb-6" style={{color: 'var(--foreground)'}}>Model Results</h2>
      <div className="glass-card">
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="glass-card" style={{borderColor: 'var(--card-border)'}}>
              <p className="text-sm text-gray-500">Accuracy</p>
              <p className="text-2xl font-bold">94.7%</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-500">Precision</p>
              <p className="text-2xl font-bold">92.3%</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-500">Recall</p>
              <p className="text-2xl font-bold">95.1%</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-500">F1 Score</p>
              <p className="text-2xl font-bold">93.6%</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4">Confusion Matrix</h3>
              <div className="chart-container">
                <div className="flex items-center justify-center h-full bg-gray-100 rounded">
                  <p className="text-gray-500">Confusion matrix will appear here</p>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4">ROC Curve</h3>
              <div className="chart-container">
                <div className="flex items-center justify-center h-full bg-gray-100 rounded">
                  <p className="text-gray-500">ROC curve will appear here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Model Comparison</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accuracy</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precision</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recall</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">F1 Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Training Time</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="bg-purple-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium">Random Forest</td>
                  <td className="px-6 py-4 whitespace-nowrap">94.7%</td>
                  <td className="px-6 py-4 whitespace-nowrap">92.3%</td>
                  <td className="px-6 py-4 whitespace-nowrap">95.1%</td>
                  <td className="px-6 py-4 whitespace-nowrap">93.6%</td>
                  <td className="px-6 py-4 whitespace-nowrap">12.4s</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">Decision Tree</td>
                  <td className="px-6 py-4 whitespace-nowrap">89.2%</td>
                  <td className="px-6 py-4 whitespace-nowrap">87.5%</td>
                  <td className="px-6 py-4 whitespace-nowrap">90.1%</td>
                  <td className="px-6 py-4 whitespace-nowrap">88.7%</td>
                  <td className="px-6 py-4 whitespace-nowrap">3.2s</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">Neural Network</td>
                  <td className="px-6 py-4 whitespace-nowrap">93.1%</td>
                  <td className="px-6 py-4 whitespace-nowrap">91.8%</td>
                  <td className="px-6 py-4 whitespace-nowrap">93.5%</td>
                  <td className="px-6 py-4 whitespace-nowrap">92.6%</td>
                  <td className="px-6 py-4 whitespace-nowrap">45.7s</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Download Report as</label>
            <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md">
              <option>PDF</option>
              <option>CSV</option>
              <option>HTML</option>
            </select>
          </div>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-6 rounded-lg transition duration-200">
            Download Full Report
          </button>
        </div>
      </div>
    </section>
  );
}
