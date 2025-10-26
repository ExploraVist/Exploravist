import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, Circle } from 'lucide-react';
import '../../styles/setup/SetupHero.css';

const SetupHero = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const stepRefs = useRef([]);

  const setupSteps = [
    {
      id: 'unbox',
      title: 'Unbox Your Device',
      description: 'Carefully open the packaging and remove all items from the box.',
      image: '/public/imgs/gen3.jpg',
      imageAlt: 'ExploraVist device in its packaging box with charging cable and instruction manual',
      instructions: [
        'Locate the main device box',
        'Remove the device from its protective packaging',
        'Find the charging cable and instruction manual',
        'Check that all components are present'
      ]
    },
    {
      id: 'charge',
      title: 'Initial Charging',
      description: 'Charge your device before first use to ensure optimal performance.',
      image: '/public/imgs/gen3.jpg',
      imageAlt: 'ExploraVist device connected to charging cable with LED indicator showing charging status',
      instructions: [
        'Connect the charging cable to the device',
        'Plug the USB end into a power source',
        'Wait for the LED indicator to show charging status',
        'Allow the device to charge for at least 2 hours'
      ]
    },
    {
      id: 'power',
      title: 'Power On',
      description: 'Turn on your device and listen for the startup sound.',
      image: '/public/imgs/gen3.jpg',
      imageAlt: 'ExploraVist device with power button highlighted and startup LED indicator glowing',
      instructions: [
        'Locate the power button on the device',
        'Press and hold the power button for 3 seconds',
        'Listen for the startup sound confirmation',
        'Feel for the vibration feedback'
      ]
    },
    {
      id: 'pair',
      title: 'Pair with Phone',
      description: 'Connect your device to your smartphone via Bluetooth.',
      image: '/public/imgs/gen3.jpg',
      imageAlt: 'Smartphone showing Bluetooth pairing screen with ExploraVist device detected',
      instructions: [
        'Open Bluetooth settings on your phone',
        'Look for "ExploraVist" in available devices',
        'Tap to pair and enter the code if prompted',
        'Wait for the connection confirmation sound'
      ]
    },
    {
      id: 'test',
      title: 'Test Basic Functions',
      description: 'Verify that your device is working correctly.',
      image: '/public/imgs/gen3.jpg',
      imageAlt: 'ExploraVist device being tested with various objects to demonstrate object recognition',
      instructions: [
        'Point the device at different objects',
        'Listen for audio descriptions',
        'Test the navigation features',
        'Verify text reading capabilities'
      ]
    }
  ];

  const nextStep = () => {
    if (currentStep < setupSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      // Focus on the new step for screen readers
      setTimeout(() => {
        if (stepRefs.current[currentStep + 1]) {
          stepRefs.current[currentStep + 1].focus();
        }
      }, 100);
    } else {
      setIsCompleted(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      // Focus on the previous step for screen readers
      setTimeout(() => {
        if (stepRefs.current[currentStep - 1]) {
          stepRefs.current[currentStep - 1].focus();
        }
      }, 100);
    }
  };


  // Focus management for screen readers
  useEffect(() => {
    if (stepRefs.current[currentStep]) {
      stepRefs.current[currentStep].focus();
    }
  }, [currentStep]);

  const currentStepData = setupSteps[currentStep];

  if (isCompleted) {
    return (
      <section className="setup_hero" role="region" aria-label="Setup Complete">
        <div className="setup_hero_wrapper">
          <div className="setup_completion" role="region" aria-label="Setup Complete">
            <CheckCircle className="completion_icon" aria-hidden="true" />
            <h1 className="completion_title">Setup Complete!</h1>
            <p className="completion_description">
              Congratulations! Your ExploraVist device is now ready to use. 
              You can start exploring your surroundings with confidence.
            </p>
            <div className="completion_actions">
              <button 
                className="setup_button primary"
                onClick={() => {
                  setCurrentStep(0);
                  setIsCompleted(false);
                }}
                aria-label="Start setup again"
              >
                Start Over
              </button>
              <a 
                href="/" 
                className="setup_button secondary"
                aria-label="Return to home page"
              >
                Go to Home
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="setup_hero" role="region" aria-label="Device Setup Guide">
      <div className="setup_hero_wrapper">

        <div className="setup_progress">
          <div className="progress_bar">
            {setupSteps.map((_, index) => (
              <div 
                key={index}
                className={`progress_dot ${index <= currentStep ? 'active' : ''}`}
                aria-hidden="true"
              >
                {index < currentStep ? (
                  <CheckCircle size={16} />
                ) : (
                  <Circle size={16} />
                )}
              </div>
            ))}
          </div>
          <p className="progress_text">
            Step {currentStep + 1} of {setupSteps.length}: {currentStepData.title}
          </p>
        </div>

        <div 
          className="setup_step"
          tabIndex="0"
          ref={el => stepRefs.current[currentStep] = el}
          role="region"
          aria-label={`Step ${currentStep + 1}: ${currentStepData.title}`}
        >
          <div className="step_content">
            <div className="step_image_container">
              <img 
                src={currentStepData.image} 
                alt={currentStepData.imageAlt}
                className="step_image"
              />
            </div>
            
            <div className="step_info">
              <h2 className="step_title">{currentStepData.title}</h2>
              <p className="step_description">{currentStepData.description}</p>
              
              <div className="step_instructions" role="list">
                <h3 className="instructions_title">Instructions:</h3>
                <ol className="instructions_list">
                  {currentStepData.instructions.map((instruction, index) => (
                    <li key={index} className="instruction_item" role="listitem">
                      {instruction}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <div className="step_navigation">
            <button 
              className="setup_button secondary"
              onClick={prevStep}
              disabled={currentStep === 0}
              aria-label="Go to previous step"
            >
              <ChevronLeft size={20} aria-hidden="true" />
              Previous
            </button>
            
            <button 
              className="setup_button primary"
              onClick={nextStep}
              aria-label={currentStep === setupSteps.length - 1 ? "Complete setup" : "Go to next step"}
            >
              {currentStep === setupSteps.length - 1 ? 'Complete' : 'Next'}
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="setup_help">
          <h3 className="help_title">Need Help?</h3>
          <p className="help_text">
            If you encounter any issues during setup, please contact our support team.
            You can also refer to the instruction manual included with your device.
          </p>
          <a href="/contact" className="help_link">
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default SetupHero;
