import { useState, useId } from 'react';
import { Calculator, RotateCcw, AlertCircle, ShieldCheck, MessageCircle, Info } from 'lucide-react';
import { getWhatsAppLink } from '../data/gymData';

type HeightUnit = 'cm' | 'ft';
type WeightUnit = 'kg' | 'lbs';

interface BmiCategoryInfo {
  label: string;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
  advice: string;
}

export default function BmiCalculator() {
  const heightCmId = useId();
  const heightFtId = useId();
  const heightInId = useId();
  const weightId = useId();

  // Unit toggles
  const [heightUnit, setHeightUnit] = useState<HeightUnit>('cm');
  const [weightUnit, setWeightUnit] = useState<WeightUnit>('kg');

  // Input states
  const [heightCm, setHeightCm] = useState<string>('');
  const [heightFt, setHeightFt] = useState<string>('');
  const [heightIn, setHeightIn] = useState<string>('');
  const [weight, setWeight] = useState<string>('');

  // Results & validation states
  const [bmiResult, setBmiResult] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Conversion & calculation
  const handleCalculate = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMsg(null);

    // Parse height in meters
    let heightInMeters = 0;
    if (heightUnit === 'cm') {
      const parsedCm = parseFloat(heightCm);
      if (!parsedCm || parsedCm <= 50 || parsedCm > 260) {
        setErrorMsg('Please enter a realistic height between 50 cm and 260 cm.');
        setBmiResult(null);
        return;
      }
      heightInMeters = parsedCm / 100;
    } else {
      const feet = parseFloat(heightFt);
      const inches = parseFloat(heightIn || '0');
      if (isNaN(feet) || feet <= 1 || feet > 8 || inches < 0 || inches >= 12) {
        setErrorMsg('Please enter valid feet (2-8) and inches (0-11).');
        setBmiResult(null);
        return;
      }
      const totalInches = feet * 12 + inches;
      heightInMeters = (totalInches * 2.54) / 100;
    }

    // Parse weight in kilograms
    let weightInKg = 0;
    const parsedWeight = parseFloat(weight);
    if (!parsedWeight || parsedWeight <= 20 || parsedWeight > 350) {
      setErrorMsg(`Please enter a realistic weight (${weightUnit === 'kg' ? '20 - 350 kg' : '45 - 770 lbs'}).`);
      setBmiResult(null);
      return;
    }

    if (weightUnit === 'kg') {
      weightInKg = parsedWeight;
    } else {
      weightInKg = parsedWeight * 0.45359237;
    }

    // Formula: BMI = kg / (m * m)
    const bmi = weightInKg / (heightInMeters * heightInMeters);
    setBmiResult(parseFloat(bmi.toFixed(1)));
  };

  const handleReset = () => {
    setHeightCm('');
    setHeightFt('');
    setHeightIn('');
    setWeight('');
    setBmiResult(null);
    setErrorMsg(null);
  };

  // Determine standard adult category
  const getCategoryInfo = (bmi: number): BmiCategoryInfo => {
    if (bmi < 18.5) {
      return {
        label: 'Underweight',
        color: 'text-amber-400',
        bgColor: 'bg-amber-400/10',
        borderColor: 'border-amber-400/30',
        description: 'Your BMI is below 18.5, indicating lower than standard body mass.',
        advice: 'Focus on progressive strength training and a nutrient-dense surplus diet with adequate protein to build lean muscle.'
      };
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
      return {
        label: 'Normal weight',
        color: 'text-[#CCFF00]',
        bgColor: 'bg-[#CCFF00]/10',
        borderColor: 'border-[#CCFF00]/40',
        description: 'Your BMI is in the healthy standard adult range (18.5 – 24.9).',
        advice: 'Maintain your excellent foundation with consistent resistance workouts, cardiovascular exercise, and balanced recovery.'
      };
    }
    if (bmi >= 25.0 && bmi <= 29.9) {
      return {
        label: 'Overweight',
        color: 'text-orange-400',
        bgColor: 'bg-orange-400/10',
        borderColor: 'border-orange-400/30',
        description: 'Your BMI is between 25.0 and 29.9, above the standard threshold.',
        advice: 'Incorporate a blend of HIIT conditioning, structured strength training, and mindful calorie balance to shed body fat.'
      };
    }
    return {
      label: 'Obese',
      color: 'text-rose-400',
      bgColor: 'bg-rose-400/10',
      borderColor: 'border-rose-400/30',
      description: 'Your BMI is 30.0 or higher.',
      advice: 'A gradual, sustainable program combining low-impact cardio, personal training coaching, and nutrition counseling is recommended.'
    };
  };

  // Calculate percentage pointer on the gauge (ranges 15 to 35)
  const getMeterPercentage = (bmi: number) => {
    const min = 15;
    const max = 35;
    const clamped = Math.min(Math.max(bmi, min), max);
    return ((clamped - min) / (max - min)) * 100;
  };

  const category = bmiResult ? getCategoryInfo(bmiResult) : null;

  return (
    <section id="bmi-calculator" className="py-20 sm:py-28 bg-[#FFFFFF] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0B132B]/70 mb-3 flex items-center gap-2">
            <span>HEALTH & ASSESSMENT TOOL</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>INSTANT BROWSER CALCULATION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#0B132B] mb-4 leading-tight">
            CHECK YOUR BMI
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Calculate your Body Mass Index (BMI) in seconds using metric or imperial measurements. 
            All calculations are performed entirely inside your device browser with complete privacy.
          </p>
        </div>

        {/* Main Calculator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Input Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            <form onSubmit={handleCalculate} className="space-y-6">
              
              {/* Height Row with Unit Switcher */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor={heightUnit === 'cm' ? heightCmId : heightFtId} className="text-sm font-bold uppercase tracking-wider text-[#0B132B]">
                    Height
                  </label>
                  {/* Unit Segmented Control */}
                  <div className="flex items-center gap-1 p-0.5 bg-slate-200/80 rounded-lg">
                    <button
                      type="button"
                      onClick={() => setHeightUnit('cm')}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                        heightUnit === 'cm' ? 'bg-[#0B132B] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Centimetres (cm)
                    </button>
                    <button
                      type="button"
                      onClick={() => setHeightUnit('ft')}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                        heightUnit === 'ft' ? 'bg-[#0B132B] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Feet & Inches (ft/in)
                    </button>
                  </div>
                </div>

                {heightUnit === 'cm' ? (
                  <div className="relative">
                    <input
                      id={heightCmId}
                      type="number"
                      step="any"
                      placeholder="e.g. 175"
                      value={heightCm}
                      onChange={(e) => setHeightCm(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B132B] text-base font-medium"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 uppercase">
                      cm
                    </span>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <input
                        id={heightFtId}
                        type="number"
                        placeholder="Feet (e.g. 5)"
                        value={heightFt}
                        onChange={(e) => setHeightFt(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B132B] text-base font-medium"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 uppercase">
                        ft
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        id={heightInId}
                        type="number"
                        placeholder="Inches (e.g. 9)"
                        value={heightIn}
                        onChange={(e) => setHeightIn(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B132B] text-base font-medium"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 uppercase">
                        in
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Weight Row with Unit Switcher */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor={weightId} className="text-sm font-bold uppercase tracking-wider text-[#0B132B]">
                    Weight
                  </label>
                  {/* Unit Segmented Control */}
                  <div className="flex items-center gap-1 p-0.5 bg-slate-200/80 rounded-lg">
                    <button
                      type="button"
                      onClick={() => setWeightUnit('kg')}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                        weightUnit === 'kg' ? 'bg-[#0B132B] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Kilograms (kg)
                    </button>
                    <button
                      type="button"
                      onClick={() => setWeightUnit('lbs')}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                        weightUnit === 'lbs' ? 'bg-[#0B132B] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Pounds (lbs)
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <input
                    id={weightId}
                    type="number"
                    step="any"
                    placeholder={weightUnit === 'kg' ? "e.g. 70" : "e.g. 154"}
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B132B] text-base font-medium"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 uppercase">
                    {weightUnit}
                  </span>
                </div>
              </div>

              {/* Error Message Alert */}
              {errorMsg && (
                <div className="flex items-center gap-2 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Action Buttons: Calculate & Reset */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-[#0B132B] hover:bg-[#132247] text-white font-bold uppercase tracking-wider text-sm transition-all duration-200 hover:shadow-md flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B132B]"
                >
                  <Calculator className="w-4 h-4 text-[#CCFF00]" />
                  <span>Calculate BMI</span>
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto py-4 px-5 rounded-xl bg-slate-200/80 hover:bg-slate-300 text-slate-700 font-semibold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>

            </form>

            {/* Privacy Guarantee Note */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-3 text-xs text-slate-500">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                <strong>Privacy Guaranteed:</strong> Results are calculated locally in your browser. We never store, log, or transmit your measurements.
              </span>
            </div>
          </div>

          {/* Right Column: Dynamic Results & Spectrum Gauge */}
          <div className="lg:col-span-5 bg-[#0B132B] text-white border border-[#1E3264] rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col justify-between min-h-[460px]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase tracking-widest text-[#CCFF00] font-bold">
                  ASSESSMENT RESULT
                </span>
                <span className="text-xs text-slate-400">Formula: kg / m²</span>
              </div>

              {bmiResult !== null && category ? (
                <div className="space-y-6 animate-in fade-in duration-300">
                  {/* Large Numeric Score */}
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-5xl sm:text-6xl font-extrabold text-white tabular-nums tracking-tight">
                      {bmiResult}
                    </span>
                    <span className="text-slate-400 font-mono text-sm">kg/m²</span>
                  </div>

                  {/* Category Status Card */}
                  <div className={`p-4 rounded-xl border ${category.borderColor} ${category.bgColor}`}>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Classification:
                    </div>
                    <div className={`text-xl font-bold uppercase tracking-wide ${category.color}`}>
                      {category.label}
                    </div>
                    <p className="mt-2 text-xs text-slate-200 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Visual Spectrum Gauge */}
                  <div>
                    <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1">
                      <span>Underweight (&lt;18.5)</span>
                      <span>Normal (18.5-24.9)</span>
                      <span>Overweight (25-30+)</span>
                    </div>
                    {/* Visual Segment Bar */}
                    <div className="relative h-3 w-full rounded-full bg-slate-800 overflow-hidden flex">
                      <div className="w-[17.5%] bg-amber-400/80" title="Underweight" />
                      <div className="w-[32.5%] bg-[#CCFF00]" title="Normal" />
                      <div className="w-[25%] bg-orange-400/80" title="Overweight" />
                      <div className="w-[25%] bg-rose-500/80" title="Obese" />
                    </div>
                    {/* Gauge Marker */}
                    <div className="relative w-full h-4 mt-1">
                      <div
                        className="absolute top-0 -translate-x-1/2 transition-all duration-500 flex flex-col items-center"
                        style={{ left: `${getMeterPercentage(bmiResult)}%` }}
                      >
                        <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-white" />
                        <span className="text-[10px] font-mono font-bold text-white tabular-nums">
                          {bmiResult}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Training Advice */}
                  <div className="text-xs text-slate-300 leading-relaxed bg-[#132247]/60 p-4 rounded-xl border border-[#1E3264]">
                    <strong className="text-white block mb-1">Recommended Next Step:</strong>
                    {category.advice}
                  </div>

                  {/* WhatsApp Consultation Action */}
                  <a
                    href={getWhatsAppLink(`Hello Devu Fitness Center! I checked my BMI (${bmiResult} - ${category.label}) on your website and would like guidance on a suitable workout and fitness plan.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#CCFF00] hover:bg-[#b8e600] text-[#070D1E] text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-[#070D1E]" />
                    <span>Discuss My Goals on WhatsApp</span>
                  </a>
                </div>
              ) : (
                <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#132247] border border-[#1E3264] flex items-center justify-center text-[#CCFF00]">
                    <Calculator className="w-7 h-7" />
                  </div>
                  <div className="max-w-xs">
                    <h4 className="font-display text-lg font-bold uppercase text-white mb-1">
                      Ready to Calculate
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Enter your height and weight on the left and tap "Calculate BMI" to see your score, standard category, and training advice.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* BMI Reference Standards Table */}
            <div className="mt-8 pt-5 border-t border-[#1E3264] text-xs text-slate-400">
              <div className="flex items-center gap-1.5 font-semibold text-slate-300 mb-2">
                <Info className="w-3.5 h-3.5 text-[#CCFF00]" />
                <span>Standard Adult Classifications</span>
              </div>
              <div className="grid grid-cols-2 gap-y-1 text-[11px] font-mono">
                <div>&lt; 18.5: Underweight</div>
                <div>18.5 – 24.9: Normal weight</div>
                <div>25.0 – 29.9: Overweight</div>
                <div>≥ 30.0: Obese</div>
              </div>
            </div>

          </div>

        </div>

        {/* Mandatory Health Disclaimer */}
        <div className="mt-8 p-4 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 text-xs leading-relaxed flex items-start gap-3">
          <Info className="w-4 h-4 text-[#0B132B] shrink-0 mt-0.5" />
          <p>
            <strong>Medical Disclaimer:</strong> BMI is a general screening measure, not a diagnosis. Adult BMI categories are not suitable for interpreting BMI in children and teenagers. Athletic muscle mass may also skew BMI values. For comprehensive medical or dietary assessments, please consult a healthcare professional.
          </p>
        </div>

      </div>
    </section>
  );
}
