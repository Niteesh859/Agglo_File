import React, { useState } from 'react';
import { Eye, Sun, BookOpen } from 'lucide-react';
import './MyopiaAssessment.css';
import grid from '../assets/grid.png';

// Card Components
const Card = ({ children, className }) => (
  <div className={`border rounded-lg shadow-lg ${className}`}>{children}</div>
);

const CardHeader = ({ children }) => (
  <div className="bg-gray-200 p-4 rounded-t-lg">{children}</div>
);

const CardTitle = ({ children }) => (
  <h2 className="text-xl font-semibold text-gray-800">{children}</h2>
);

const CardContent = ({ children }) => (
  <div className="p-4">{children}</div>
);

// Tabs Components
const Tabs = ({ children, defaultValue }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          activeTab,
          setActiveTab,
        })
      )}
    </div>
  );
};

const TabsList = ({ children }) => (
  <div className="flex border-b">{children}</div>
);

const TabsTrigger = ({ value, activeTab, setActiveTab, children }) => (
  <button
    className={`px-4 py-2 text-sm font-medium ${activeTab === value ? 'border-b-2 border-blue-500' : 'text-gray-500'}`}
    onClick={() => setActiveTab(value)}
  >
    {children}
  </button>
);

const TabsContent = ({ value, activeTab, children }) => (
  activeTab === value ? <div>{children}</div> : null
);

// Slider Component
const Slider = ({ defaultValue, max, step, className, onValueChange }) => (
  <input
    type="range"
    value={defaultValue} // Change defaultValue to value
    max={max}
    step={step}
    className={`w-full ${className}`}
    onChange={(e) => onValueChange(parseInt(e.target.value))} // Directly use the value from the event
  />
);

// Button Component
const Button = ({ onClick, children, variant }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md ${variant === 'outline' ? 'border' : 'bg-blue-500 text-white'}`}
  >
    {children}
  </button>
);

// Input Component
const Input = ({ type, value, onChange, min, max }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    min={min}
    max={max}
    className="p-2 border rounded-md"
  />
);

// Main MyopiaAssessment Component
const MyopiaAssessment = () => {
  const [currentTest, setCurrentTest] = useState('vision');
  const [snellenScore, setSnellenScore] = useState(20);  // Initialize with a default value
  const [astigmatismScore, setAstigmatismScore] = useState(null);
  const [blurScore, setBlurScore] = useState(5);  // Initialize with a default value
  const [lifestyleData, setLifestyleData] = useState({
    screenTime: 0,
    outdoorTime: 0,
    readingDistance: 30,
    goodPosture: false
  });

  // Vision Test Components
  const SnellenTest = () => {
    // Function to calculate the font size based on snellenScore
    const getFontSize = (score) => {
      // Font size decreases as the score increases (i.e., visual acuity worsens)
      return `${(50 - score) * 2 + 20}px`;  // Example scaling
    };
  
    return (
      <div className="p-4 space-y-4">
        <h3 className="text-lg font-medium">Simulated Snellen Chart Test</h3>
        <div className="flex flex-col items-center space-y-4">
          {/* Dynamic E letter */}
          <div className="text-center space-y-2">
            <p className="font-bold" style={{ fontSize: getFontSize(snellenScore) }}>
              E
            </p>
          </div>
          <p className="text-sm text-gray-500">Adjust the slider to change the letter size</p>
          
          {/* Slider for controlling font size */}
          <Slider 
            defaultValue={snellenScore}  // Pass snellenScore directly
            max={50} 
            step={1}
            className="w-64"
            onValueChange={setSnellenScore}  // Directly update snellenScore
          />
          
          <p>Visual Acuity Score: {snellenScore ? `20/${snellenScore}` : 'Not tested'}</p>
        </div>
      </div>
    );
  };
  

  const AstigmatismTest = () => (
    <div className="p-4 space-y-4">
      <h3 className="text-lg font-medium">Astigmatism Grid Test</h3>
      <div className="flex flex-col items-center space-y-4">
        {/* Grid image for the Astigmatism Test */}
        <div className="w-64 h-64 relative">
          <img src={grid} alt="Grid" className="grid" />
        </div>
  
        <p className="text-sm text-gray-500">Do all lines appear equally dark and clear?</p>
  
        {/* Button section with hover effects */}
        <div className="flex space-x-2">
          <Button
            variant="outline"
            onClick={() => setAstigmatismScore('negative')}
            className="hover:bg-blue-500 hover:text-white"
          >
            Yes
          </Button>
          <Button
            variant="outline"
            onClick={() => setAstigmatismScore('positive')}
            className="hover:bg-red-500 hover:text-white"
          >
            No
          </Button>
        </div>
  
        <p>Astigmatism Test Result: {astigmatismScore || 'Not tested'}</p>
      </div>
    </div>
  );
  
  

  const BlurTest = () => (
    <div className="p-4 space-y-4">
      <h3 className="text-lg font-medium">Blur Sensitivity Test</h3>
      <div className="flex flex-col items-center space-y-4">
        <p className="text-lg" style={{ filter: `blur(${blurScore}px)` }}>
          Read this text and adjust the slider until it becomes clear
        </p>
        <Slider 
          defaultValue={blurScore}  // Pass blurScore directly
          max={10} 
          step={0.5}
          className="w-64"
          onValueChange={setBlurScore}  // Directly update blurScore
        />
        <p>Blur Sensitivity Score: {blurScore || 'Not tested'}</p>
      </div>
    </div>
  );

  // Lifestyle Data Collection Component
  const LifestyleForm = () => (
    <div className="p-4 space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Daily Screen Time (hours)
          </label>
          <div className="flex items-center space-x-2">
            <Eye className="text-gray-400" />
            <Input
              type="number"
              min="0"
              max="24"
              value={lifestyleData.screenTime}
              onChange={(e) => setLifestyleData({
                ...lifestyleData,
                screenTime: parseInt(e.target.value)
              })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Outdoor Activity Time (hours)
          </label>
          <div className="flex items-center space-x-2">
            <Sun className="text-gray-400" />
            <Input
              type="number"
              min="0"
              max="24"
              value={lifestyleData.outdoorTime}
              onChange={(e) => setLifestyleData({
                ...lifestyleData,
                outdoorTime: parseInt(e.target.value)
              })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Reading Distance (cm)
          </label>
          <div className="flex items-center space-x-2">
            <BookOpen className="text-gray-400" />
            <Slider
              defaultValue={lifestyleData.readingDistance}
              max={100}
              step={1}
              className="w-64"
              onValueChange={(value) => setLifestyleData({
                ...lifestyleData,
                readingDistance: value
              })}
            />
            <span>{lifestyleData.readingDistance} cm</span>
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={lifestyleData.goodPosture}
              onChange={(e) => setLifestyleData({
                ...lifestyleData,
                goodPosture: e.target.checked
              })}
              className="rounded border-gray-300"
            />
            <span className="text-sm font-medium text-gray-700">
              I maintain good posture while reading/using screens
            </span>
          </label>
        </div>
      </div>
    </div>
  );

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Myopia Risk Assessment</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="vision">
          <TabsList>
            <TabsTrigger value="vision" activeTab={currentTest} setActiveTab={setCurrentTest}>Vision Tests</TabsTrigger>
            <TabsTrigger value="lifestyle" activeTab={currentTest} setActiveTab={setCurrentTest}>Lifestyle Data</TabsTrigger>
          </TabsList>

          <TabsContent value="vision" activeTab={currentTest}>
            <SnellenTest />
            <AstigmatismTest />
            <BlurTest />
          </TabsContent>

          <TabsContent value="lifestyle" activeTab={currentTest}>
            <LifestyleForm />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default MyopiaAssessment;
