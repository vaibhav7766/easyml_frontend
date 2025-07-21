export default function FeatureSelection() {
  return (
    <section id="feature_selection" className="mb-12">
      <h2 className="text-2xl font-bold mb-6" style={{color: 'var(--foreground)'}}>Feature Selection</h2>
      <div className="glass-card">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="glass-card" style={{borderColor: 'var(--card-border)'}}>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <i className="fas fa-chart-line mr-2 text-blue-500"></i>
              Feature Importance
            </h3>
            <div className="chart-container">
              <div className="flex items-center justify-center h-full bg-gray-100 rounded">
                <p className="text-gray-500">Feature importance chart will appear here</p>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <i className="fas fa-filter mr-2 text-purple-500"></i>
              Feature Selection Methods
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Selection Method</label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md">
                  <option>SelectKBest</option>
                  <option>Recursive Feature Elimination</option>
                  <option>Principal Component Analysis</option>
                  <option>Random Forest Importance</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Number of Features</label>
                <input type="range" min="1" max="20" defaultValue="10" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>1</span>
                  <span>10</span>
                  <span>20</span>
                </div>
              </div>
              <div className="flex items-center">
                <input id="auto-select" type="checkbox" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
                <label htmlFor="auto-select" className="ml-2 block text-sm text-gray-700">Auto-select optimal number of features</label>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Selected Features</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Age</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Income</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Education Level</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Credit Score</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Employment Years</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-6 rounded-lg transition duration-200">
            Apply Feature Selection
          </button>
        </div>
      </div>
    </section>
  );
}
