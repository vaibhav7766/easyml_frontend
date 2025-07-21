export default function Visualizations() {
  return (
    <section id="visualizations" className="mb-12">
      <h2 className="text-2xl font-bold mb-6" style={{color: 'var(--foreground)'}}>Data Visualizations</h2>
      <div className="glass-card">
        <div className="mb-6">
          <div className="flex flex-wrap gap-4 mb-6">
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg">Histograms</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">Scatter Plots</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">Box Plots</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">Correlation Matrix</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">Pair Plots</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="glass-card" style={{borderColor: 'var(--card-border)'}}>
              <h3 className="text-lg font-semibold mb-4">Age Distribution</h3>
              <div className="chart-container">
                <div className="flex items-center justify-center h-full bg-gray-100 rounded">
                  <p className="text-gray-500">Histogram chart will appear here</p>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4">Income vs. Education</h3>
              <div className="chart-container">
                <div className="flex items-center justify-center h-full bg-gray-100 rounded">
                  <p className="text-gray-500">Scatter plot will appear here</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Correlation Matrix</h3>
            <div className="chart-container">
              <div className="flex items-center justify-center h-full bg-gray-100 rounded">
                <p className="text-gray-500">Correlation matrix will appear here</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Download as</label>
            <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md">
              <option>PNG</option>
              <option>JPEG</option>
              <option>PDF</option>
              <option>SVG</option>
            </select>
          </div>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-6 rounded-lg transition duration-200">
            Download Visualizations
          </button>
        </div>
      </div>
    </section>
  );
}
