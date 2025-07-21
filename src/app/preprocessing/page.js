export default function Preprocessing() {
  return (
    <section id="preprocessing" className="mb-12">
      <h2 className="text-2xl font-bold mb-6" style={{color: 'var(--foreground)'}}>Data Preprocessing</h2>
      <div className="glass-card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="glass-card" style={{borderColor: 'var(--card-border)'}}>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <i className="fas fa-broom mr-2 text-purple-500"></i>
              Data Cleaning
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <input id="handle-missing" type="checkbox" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
                <label htmlFor="handle-missing" className="ml-2 block text-sm text-gray-700">Handle missing values</label>
              </div>
              <div className="flex items-center">
                <input id="remove-duplicates" type="checkbox" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
                <label htmlFor="remove-duplicates" className="ml-2 block text-sm text-gray-700">Remove duplicates</label>
              </div>
              <div className="flex items-center">
                <input id="outlier-detection" type="checkbox" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
                <label htmlFor="outlier-detection" className="ml-2 block text-sm text-gray-700">Outlier detection</label>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <i className="fas fa-sliders-h mr-2 text-blue-500"></i>
              Data Transformation
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Normalization</label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md">
                  <option>None</option>
                  <option>Min-Max Scaling</option>
                  <option>Standard Scaling</option>
                  <option>Robust Scaling</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Encoding</label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md">
                  <option>None</option>
                  <option>One-Hot Encoding</option>
                  <option>Label Encoding</option>
                  <option>Ordinal Encoding</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Preview Processed Data</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Income</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Education</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">1</td>
                  <td className="px-6 py-4 whitespace-nowrap">32</td>
                  <td className="px-6 py-4 whitespace-nowrap">$45,000</td>
                  <td className="px-6 py-4 whitespace-nowrap">Male</td>
                  <td className="px-6 py-4 whitespace-nowrap">Bachelor</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">2</td>
                  <td className="px-6 py-4 whitespace-nowrap">28</td>
                  <td className="px-6 py-4 whitespace-nowrap">$52,000</td>
                  <td className="px-6 py-4 whitespace-nowrap">Female</td>
                  <td className="px-6 py-4 whitespace-nowrap">Master</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">3</td>
                  <td className="px-6 py-4 whitespace-nowrap">45</td>
                  <td className="px-6 py-4 whitespace-nowrap">$78,000</td>
                  <td className="px-6 py-4 whitespace-nowrap">Male</td>
                  <td className="px-6 py-4 whitespace-nowrap">PhD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-6 rounded-lg transition duration-200">
            Apply Preprocessing
          </button>
        </div>
      </div>
    </section>
  );
}
