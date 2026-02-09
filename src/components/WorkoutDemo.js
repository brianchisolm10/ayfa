import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WorkoutQuestionnaire from './WorkoutQuestionnaire';
import AdvancedWorkoutQuestionnaire from './AdvancedWorkoutQuestionnaire';
import QuickWorkoutCustomizer from './QuickWorkoutCustomizer';
import TopNav from './TopNav';
import Footer from './Footer';
import { getCurrentUser, saveWorkoutToUser } from '../utils/userStorage';
import { generateDetailedWorkout } from '../utils/workoutEngine';
import './WorkoutDemo.css';

function WorkoutDemo() {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();
  const [step, setStep] = useState('questionnaire'); // Go directly to questionnaire
  const [error, setError] = useState(null);
  const [workoutMode, setWorkoutMode] = useState('quick'); // Always quick mode

  const handleQuestionnaireComplete = async (workout, responses) => {
    try {
      setError(null);
      
      // Save workout to user profile if logged in
      if (currentUser) {
        saveWorkoutToUser(currentUser.id, {
          name: `${responses.trainingStyle || 'Custom'} Workout`,
          ...workout,
          responses: responses
        });
      }
      
      console.log('Workout generated and saved successfully');
    } catch (error) {
      console.error('Error generating program:', error);
      setError('Error generating program. Please try again.');
    }
  };

  const handleCustomizerComplete = async (customizedResponses) => {
    try {
      setError(null);
      
      // Generate workout based on customized responses
      const workout = await generateDetailedWorkout(customizedResponses);
      
      // Save workout to user profile
      if (currentUser) {
        saveWorkoutToUser(currentUser.id, {
          name: `${customizedResponses.focusArea || 'Custom'} Workout - ${new Date().toLocaleDateString()}`,
          ...workout,
          responses: customizedResponses
        });
      }
      
      console.log('Customized workout generated and saved successfully');
    } catch (error) {
      console.error('Error generating customized workout:', error);
      setError('Error generating workout. Please try again.');
    }
  };

  const handleBackToChoice = () => {
    setStep('questionnaire');
    setError(null);
  };

  return (
    <div className="workout-demo">
      <TopNav />

      {error && (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={() => setError(null)}>Dismiss</button>
        </div>
      )}

      {step === 'questionnaire' && !error && (
        <WorkoutQuestionnaire 
          onComplete={handleQuestionnaireComplete}
          mode={workoutMode}
          onBack={handleBackToChoice}
        />
      )}
      <Footer />
    </div>
  );
}

export default WorkoutDemo;
