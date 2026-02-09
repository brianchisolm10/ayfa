import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MealPlanQuestionnaire from './MealPlanQuestionnaire';
import AdvancedMealPlanQuestionnaire from './AdvancedMealPlanQuestionnaire';
import QuickMealPlanCustomizer from './QuickMealPlanCustomizer';
import MealPlanDisplay from './MealPlanDisplay';
import TopNav from './TopNav';
import Footer from './Footer';
import { generateMealPlan } from '../utils/mealPlanEngine';
import './MealPlanDemo.css';

function MealPlanDemo() {
  const navigate = useNavigate();
  const [step, setStep] = useState('questionnaire'); // Go directly to questionnaire
  const [generatedMealPlan, setGeneratedMealPlan] = useState(null);
  const [clientResponses, setClientResponses] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mealPlanMode, setMealPlanMode] = useState('quick'); // Always quick mode

  const handleChoiceQuick = () => {
    setStep('questionnaire');
  };

  const handleQuestionnaireComplete = async (responses) => {
    try {
      setError(null);
      setIsLoading(true);
      console.log('🍽️ Generating meal plan with responses:', responses);

      // Generate meal plan
      const mealPlan = await generateMealPlan(responses);
      console.log('✅ Meal plan generated:', mealPlan);

      setGeneratedMealPlan(mealPlan);
      setClientResponses(responses);
      setStep('display');
    } catch (error) {
      console.error('❌ Error generating meal plan:', error);
      setError('Error generating meal plan. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCustomizerComplete = async (customizedResponses) => {
    try {
      setError(null);
      setIsLoading(true);
      console.log('🍽️ Generating customized meal plan:', customizedResponses);

      // Generate meal plan based on customized responses
      const mealPlan = await generateMealPlan(customizedResponses);
      console.log('✅ Customized meal plan generated:', mealPlan);

      setGeneratedMealPlan(mealPlan);
      setClientResponses(customizedResponses);
      setStep('display');
    } catch (error) {
      console.error('❌ Error generating customized meal plan:', error);
      setError('Error generating meal plan. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToChoice = () => {
    setStep('questionnaire');
    setGeneratedMealPlan(null);
    setClientResponses(null);
    setError(null);
  };

  const handleBackToQuestionnaire = () => {
    setStep('questionnaire');
    setGeneratedMealPlan(null);
    setClientResponses(null);
    setError(null);
  };

  return (
    <div className="meal-plan-demo">
      <TopNav />

      {error && (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={handleBackToQuestionnaire}>Try Again</button>
        </div>
      )}

      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Generating your personalized meal plan...</p>
          </div>
        </div>
      )}

      {step === 'customizer' && !error && (
        <QuickMealPlanCustomizer 
          onComplete={handleCustomizerComplete}
          onBack={handleBackToChoice}
        />
      )}

      {step === 'advanced' && !error && (
        <AdvancedMealPlanQuestionnaire 
          onComplete={handleCustomizerComplete}
          onBack={handleBackToChoice}
        />
      )}

      {step === 'questionnaire' && !error && (
        <MealPlanQuestionnaire 
          onComplete={handleQuestionnaireComplete}
          mode={mealPlanMode}
          onBack={handleBackToChoice}
        />
      )}

      {step === 'display' && generatedMealPlan && !error && (
        <MealPlanDisplay 
          mealPlan={generatedMealPlan} 
          responses={clientResponses}
          mode={mealPlanMode}
        />
      )}
      <Footer />
    </div>
  );
}

export default MealPlanDemo;
