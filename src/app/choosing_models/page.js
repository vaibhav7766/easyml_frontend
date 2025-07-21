export default function ChoosingModels() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4" style={{color: 'var(--foreground)'}}>Choosing Models</h1>
      <p>Select and configure ML algorithms and hyperparameters here.</p>
      <section id="choosing_models" className="mb-12">
        <h2 className="text-2xl font-bold mb-6" style={{color: 'var(--foreground)'}}>Model Selection</h2>
        <div className="glass-card">
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Select Algorithm</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="glass-card hover:border-accent transition duration-200 cursor-pointer" style={{borderColor: 'var(--card-border)'}}>
                <div className="flex items-center mb-2">
                  <i className="fas fa-project-diagram text-blue-500 mr-2"></i>
                  <span className="font-medium">Decision Tree</span>
                </div>
                <p className="text-sm text-gray-500">Good for interpretability</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition duration-200 cursor-pointer bg-purple-50 border-purple-200">
                <div className="flex items-center mb-2">
                  <i className="fas fa-random text-purple-500 mr-2"></i>
                  <span className="font-medium">Random Forest</span>
                </div>
                <p className="text-sm text-gray-500">Ensemble method, robust</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition duration-200 cursor-pointer">
                <div className="flex items-center mb-2">
                  <i className="fas fa-network-wired text-green-500 mr-2"></i>
                  <span className="font-medium">Neural Network</span>
                </div>
                <p className="text-sm text-gray-500">For complex patterns</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition duration-200 cursor-pointer">
                <div className="flex items-center mb-2">
                  <i className="fas fa-chart-line text-yellow-500 mr-2"></i>
                  <span className="font-medium">SVM</span>
                </div>
                <p className="text-sm text-gray-500">Effective in high dimensions</p>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Hyperparameter Tuning</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Number of Estimators</label>
                <input type="number" defaultValue="100" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Max Depth</label>
                <input type="number" defaultValue="10" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Learning Rate</label>
                <input type="number" step="0.01" defaultValue="0.1" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md" />
              </div>
              <div className="flex items-center">
                <input id="cross-validation" type="checkbox" defaultChecked className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
                <label htmlFor="cross-validation" className="ml-2 block text-sm text-gray-700">Use cross-validation (5 folds)</label>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-6 rounded-lg transition duration-200">
              Compare Models
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-6 rounded-lg transition duration-200">
              Train Model
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
