import { useState } from "react";
import { Layout } from "@/components/Layout";
import { SectionDivider } from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, ChevronRight, ChevronLeft, Download, Save, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface CalculatorData {
  purchasePrice: number;
  downPaymentPercent: number;
  loanInterestRate: number;
  loanTermYears: number;
  country: string;
  propertyType: string;
  monthlyRent: number;
  occupancyRate: number;
  managementFeePercent: number;
  propertyTaxAnnual: number;
  insuranceAnnual: number;
  hoaUtilitiesAnnual: number;
  maintenancePercent: number;
  appreciationRate: number;
  holdingPeriodYears: number;
}

const ROICalculator = () => {
  const [step, setStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  
  const [data, setData] = useState<CalculatorData>({
    purchasePrice: 120000,
    downPaymentPercent: 30,
    loanInterestRate: 4.5,
    loanTermYears: 25,
    country: "",
    propertyType: "1BR",
    monthlyRent: 1000,
    occupancyRate: 85,
    managementFeePercent: 10,
    propertyTaxAnnual: 300,
    insuranceAnnual: 240,
    hoaUtilitiesAnnual: 600,
    maintenancePercent: 5,
    appreciationRate: 3,
    holdingPeriodYears: 5,
  });

  // Calculations
  const downPaymentAmount = data.purchasePrice * (data.downPaymentPercent / 100);
  const closingCosts = data.purchasePrice * 0.02;
  const totalCashNeeded = downPaymentAmount + closingCosts;
  const loanAmount = data.purchasePrice - downPaymentAmount;
  
  // Mortgage calculation
  const monthlyInterestRate = data.loanInterestRate / 100 / 12;
  const numberOfPayments = data.loanTermYears * 12;
  const monthlyPayment = data.downPaymentPercent < 100 
    ? (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)
    : 0;
  const annualDebtService = monthlyPayment * 12;

  // Income
  const grossRentalIncome = data.monthlyRent * 12;
  const adjustedIncome = grossRentalIncome * (data.occupancyRate / 100);

  // Expenses
  const managementFee = adjustedIncome * (data.managementFeePercent / 100);
  const maintenanceCost = adjustedIncome * (data.maintenancePercent / 100);
  const operatingExpenses = managementFee + data.propertyTaxAnnual + data.insuranceAnnual + 
                            data.hoaUtilitiesAnnual + maintenanceCost;
  const totalExpenses = operatingExpenses + annualDebtService;

  // Key Metrics
  const noi = adjustedIncome - operatingExpenses;
  const annualCashFlow = noi - annualDebtService;
  const monthlyCashFlow = annualCashFlow / 12;
  const cashOnCashReturn = (annualCashFlow / totalCashNeeded) * 100;
  const capRate = (noi / data.purchasePrice) * 100;

  // 5-Year Projection
  const futureValue = data.purchasePrice * Math.pow(1 + data.appreciationRate / 100, data.holdingPeriodYears);
  const appreciationGain = futureValue - data.purchasePrice;
  const totalCashFlowAccumulated = annualCashFlow * data.holdingPeriodYears;
  
  // Simplified equity buildup (approximate)
  const principalPaidPerYear = annualDebtService * 0.3; // Rough estimate
  const equityBuildup = principalPaidPerYear * data.holdingPeriodYears;
  
  const totalProfit = appreciationGain + totalCashFlowAccumulated + equityBuildup;
  const totalROI = (totalProfit / totalCashNeeded) * 100;

  // Verdict
  const getVerdict = () => {
    if (cashOnCashReturn > 7 && monthlyCashFlow > 200 && totalROI > 40) {
      return { text: "ХОРОШАЯ СДЕЛКА", icon: "✅", color: "text-green-400", bg: "bg-green-400/10" };
    } else if (cashOnCashReturn >= 4 && monthlyCashFlow >= 0 && totalROI >= 20) {
      return { text: "СРЕДНЯЯ СДЕЛКА", icon: "⚠️", color: "text-yellow-400", bg: "bg-yellow-400/10" };
    } else {
      return { text: "ИЗБЕГАТЬ", icon: "❌", color: "text-red-400", bg: "bg-red-400/10" };
    }
  };

  const verdict = getVerdict();

  const updateData = (field: keyof CalculatorData, value: number | string) => {
    setData({ ...data, [field]: value });
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setStep(1);
    setShowResults(false);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background py-20">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="font-['Abril_Fatface'] text-5xl md:text-6xl mb-6 text-foreground">
              ROI Калькулятор
            </h1>
            <p className="font-['Circle'] text-lg text-muted-foreground max-w-3xl mx-auto">
              Простой калькулятор для оценки инвестиций в недвижимость. 
              Введи данные объекта - получи чёткую рекомендацию: покупать или нет.
            </p>
          </div>

          <SectionDivider />

          {/* Calculator Section */}
          {!showResults ? (
            <div className="max-w-4xl mx-auto">
              {/* Progress Indicator */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex items-center gap-2 ${step >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                      1
                    </div>
                    <span className="font-semibold">Объект</span>
                  </div>
                  <div className="flex-1 h-px bg-border mx-4" />
                  <div className={`flex items-center gap-2 ${step >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                      2
                    </div>
                    <span className="font-semibold">Доходы</span>
                  </div>
                  <div className="flex-1 h-px bg-border mx-4" />
                  <div className={`flex items-center gap-2 ${step >= 3 ? 'text-primary' : 'text-muted-foreground'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                      3
                    </div>
                    <span className="font-semibold">Результат</span>
                  </div>
                </div>
              </div>

              <TooltipProvider>
                {/* Step 1: Property Details */}
                {step === 1 && (
                  <Card className="bg-card/50 backdrop-blur border-primary/20">
                    <CardHeader>
                      <CardTitle className="font-['Abril_Fatface'] text-3xl">Детали Объекта</CardTitle>
                      <CardDescription>Основная информация о недвижимости</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Purchase Price */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Label htmlFor="purchasePrice">Цена Покупки (€)</Label>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="w-4 h-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Полная стоимость недвижимости</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <Input
                          id="purchasePrice"
                          type="number"
                          value={data.purchasePrice}
                          onChange={(e) => updateData('purchasePrice', parseFloat(e.target.value) || 0)}
                          placeholder="120000"
                        />
                      </div>

                      {/* Down Payment */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Label>Первоначальный Взнос (%)</Label>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="w-4 h-4 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Процент от цены, который платишь сразу</p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                          <span className="text-sm font-semibold text-primary">
                            {data.downPaymentPercent}% (€{downPaymentAmount.toLocaleString()})
                          </span>
                        </div>
                        <Slider
                          value={[data.downPaymentPercent]}
                          onValueChange={(value) => updateData('downPaymentPercent', value[0])}
                          min={10}
                          max={100}
                          step={5}
                          className="py-4"
                        />
                      </div>

                      {/* Loan Details (if applicable) */}
                      {data.downPaymentPercent < 100 && (
                        <>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Label htmlFor="loanInterestRate">Ставка По Кредиту (%)</Label>
                              <Tooltip>
                                <TooltipTrigger>
                                  <Info className="w-4 h-4 text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Годовая процентная ставка</p>
                                </TooltipContent>
                              </Tooltip>
                            </div>
                            <Input
                              id="loanInterestRate"
                              type="number"
                              step="0.1"
                              value={data.loanInterestRate}
                              onChange={(e) => updateData('loanInterestRate', parseFloat(e.target.value) || 0)}
                              placeholder="4.5"
                            />
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Label htmlFor="loanTermYears">Срок Кредита (лет)</Label>
                              <Tooltip>
                                <TooltipTrigger>
                                  <Info className="w-4 h-4 text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>На сколько лет берёшь кредит</p>
                                </TooltipContent>
                              </Tooltip>
                            </div>
                            <Select
                              value={data.loanTermYears.toString()}
                              onValueChange={(value) => updateData('loanTermYears', parseInt(value))}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="10">10 лет</SelectItem>
                                <SelectItem value="15">15 лет</SelectItem>
                                <SelectItem value="20">20 лет</SelectItem>
                                <SelectItem value="25">25 лет</SelectItem>
                                <SelectItem value="30">30 лет</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </>
                      )}

                      {/* Country/City */}
                      <div className="space-y-2">
                        <Label htmlFor="country">Город/Страна (опционально)</Label>
                        <Input
                          id="country"
                          value={data.country}
                          onChange={(e) => updateData('country', e.target.value)}
                          placeholder="Батуми, Грузия"
                        />
                      </div>

                      {/* Property Type */}
                      <div className="space-y-2">
                        <Label htmlFor="propertyType">Тип Недвижимости</Label>
                        <Select
                          value={data.propertyType}
                          onValueChange={(value) => updateData('propertyType', value)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Studio">Студия</SelectItem>
                            <SelectItem value="1BR">1 спальня</SelectItem>
                            <SelectItem value="2BR">2 спальни</SelectItem>
                            <SelectItem value="3BR+">3+ спальни</SelectItem>
                            <SelectItem value="Commercial">Коммерция</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex justify-end pt-4">
                        <Button onClick={() => setStep(2)} size="lg">
                          Далее <ChevronRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Step 2: Income & Expenses */}
                {step === 2 && (
                  <Card className="bg-card/50 backdrop-blur border-primary/20">
                    <CardHeader>
                      <CardTitle className="font-['Abril_Fatface'] text-3xl">Доходы и Расходы</CardTitle>
                      <CardDescription>Аренда и операционные затраты</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Monthly Rent */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Label htmlFor="monthlyRent">Месячная Аренда (€)</Label>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="w-4 h-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Средняя арендная плата в месяц</p>
                              <p className="text-xs text-muted-foreground">Годовой: €{(data.monthlyRent * 12).toLocaleString()}</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <Input
                          id="monthlyRent"
                          type="number"
                          value={data.monthlyRent}
                          onChange={(e) => updateData('monthlyRent', parseFloat(e.target.value) || 0)}
                          placeholder="1000"
                        />
                      </div>

                      {/* Occupancy Rate */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Label>Заполняемость (%)</Label>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="w-4 h-4 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Сколько месяцев в году сдаётся</p>
                                <p className="text-xs text-muted-foreground">{data.occupancyRate}% = {(data.occupancyRate * 12 / 100).toFixed(1)} мес/год</p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                          <span className="text-sm font-semibold text-primary">{data.occupancyRate}%</span>
                        </div>
                        <Slider
                          value={[data.occupancyRate]}
                          onValueChange={(value) => updateData('occupancyRate', value[0])}
                          min={50}
                          max={100}
                          step={5}
                          className="py-4"
                        />
                      </div>

                      {/* Management Fee */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Label>Управление (%)</Label>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="w-4 h-4 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Комиссия управляющей компании</p>
                                <p className="text-xs text-muted-foreground">Обычно 8-12% от аренды</p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                          <span className="text-sm font-semibold text-primary">
                            {data.managementFeePercent}% (€{managementFee.toFixed(0)}/год)
                          </span>
                        </div>
                        <Slider
                          value={[data.managementFeePercent]}
                          onValueChange={(value) => updateData('managementFeePercent', value[0])}
                          min={0}
                          max={20}
                          step={1}
                          className="py-4"
                        />
                      </div>

                      {/* Property Tax */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Label htmlFor="propertyTaxAnnual">Налог На Имущество (€/год)</Label>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="w-4 h-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Годовой налог на недвижимость</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <Input
                          id="propertyTaxAnnual"
                          type="number"
                          value={data.propertyTaxAnnual}
                          onChange={(e) => updateData('propertyTaxAnnual', parseFloat(e.target.value) || 0)}
                          placeholder="300"
                        />
                      </div>

                      {/* Insurance */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Label htmlFor="insuranceAnnual">Страховка (€/год)</Label>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="w-4 h-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Страхование имущества</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <Input
                          id="insuranceAnnual"
                          type="number"
                          value={data.insuranceAnnual}
                          onChange={(e) => updateData('insuranceAnnual', parseFloat(e.target.value) || 0)}
                          placeholder="240"
                        />
                      </div>

                      {/* HOA/Utilities */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Label htmlFor="hoaUtilitiesAnnual">ТСЖ / Коммуналка (€/год)</Label>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="w-4 h-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>ТСЖ, коммунальные платежи</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <Input
                          id="hoaUtilitiesAnnual"
                          type="number"
                          value={data.hoaUtilitiesAnnual}
                          onChange={(e) => updateData('hoaUtilitiesAnnual', parseFloat(e.target.value) || 0)}
                          placeholder="600"
                        />
                      </div>

                      {/* Maintenance */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Label>Обслуживание (%)</Label>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="w-4 h-4 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Резерв на ремонт и обслуживание</p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                          <span className="text-sm font-semibold text-primary">
                            {data.maintenancePercent}% (€{maintenanceCost.toFixed(0)}/год)
                          </span>
                        </div>
                        <Slider
                          value={[data.maintenancePercent]}
                          onValueChange={(value) => updateData('maintenancePercent', value[0])}
                          min={0}
                          max={10}
                          step={1}
                          className="py-4"
                        />
                      </div>

                      {/* Appreciation Rate */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Label>Рост Стоимости (%/год)</Label>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="w-4 h-4 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Ожидаемый рост цены недвижимости</p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                          <span className="text-sm font-semibold text-primary">{data.appreciationRate}%</span>
                        </div>
                        <Slider
                          value={[data.appreciationRate]}
                          onValueChange={(value) => updateData('appreciationRate', value[0])}
                          min={0}
                          max={10}
                          step={0.5}
                          className="py-4"
                        />
                      </div>

                      {/* Holding Period */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Label>Срок Владения (лет)</Label>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="w-4 h-4 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Сколько планируешь держать объект</p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                          <span className="text-sm font-semibold text-primary">{data.holdingPeriodYears} лет</span>
                        </div>
                        <Slider
                          value={[data.holdingPeriodYears]}
                          onValueChange={(value) => updateData('holdingPeriodYears', value[0])}
                          min={1}
                          max={10}
                          step={1}
                          className="py-4"
                        />
                      </div>

                      <div className="flex justify-between pt-4">
                        <Button variant="outline" onClick={() => setStep(1)}>
                          <ChevronLeft className="mr-2 w-4 h-4" /> Назад
                        </Button>
                        <Button onClick={handleCalculate} size="lg">
                          Рассчитать <Calculator className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TooltipProvider>
            </div>
          ) : (
            // Results Display
            <div className="max-w-6xl mx-auto space-y-12">
              {/* Verdict Card */}
              <Card className={`${verdict.bg} border-2 ${verdict.color.replace('text-', 'border-')}`}>
                <CardHeader>
                  <CardTitle className="font-['Abril_Fatface'] text-4xl text-center">
                    {verdict.icon} ВЕРДИКТ: {verdict.text}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary">{cashOnCashReturn.toFixed(1)}%</div>
                      <div className="text-sm text-muted-foreground">Cash-on-Cash</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">€{monthlyCashFlow.toFixed(0)}</div>
                      <div className="text-sm text-muted-foreground">Денежный Поток/Мес</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">{totalROI.toFixed(0)}%</div>
                      <div className="text-sm text-muted-foreground">{data.holdingPeriodYears}-Летний ROI</div>
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                  <p className="text-center text-foreground">
                    {cashOnCashReturn > 7 
                      ? "Хорошая доходность с положительным денежным потоком. Подходит для долгосрочной аренды."
                      : cashOnCashReturn >= 4
                      ? "Средняя доходность. Рассмотри другие варианты или улучши условия сделки."
                      : "Низкая доходность или отрицательный денежный поток. Не рекомендуется к покупке."}
                  </p>
                </CardContent>
              </Card>

              {/* Key Metrics Cards */}
              <div className="grid md:grid-cols-4 gap-6">
                <Card className="bg-card/50 backdrop-blur border-primary/20 text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">
                      €{monthlyCashFlow.toFixed(0)}
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">Денежный Поток/Мес</div>
                    <div className={`text-xs ${monthlyCashFlow > 200 ? 'text-green-400' : monthlyCashFlow >= 0 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {monthlyCashFlow > 200 ? '✅ Положительный' : monthlyCashFlow >= 0 ? '⚠️ Нулевой' : '❌ Отрицательный'}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-primary/20 text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {cashOnCashReturn.toFixed(1)}%
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">Cash-on-Cash</div>
                    <div className={`text-xs ${cashOnCashReturn > 7 ? 'text-green-400' : cashOnCashReturn >= 4 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {cashOnCashReturn > 7 ? '✅ Хорошо' : cashOnCashReturn >= 4 ? '⚠️ Средне' : '❌ Низко'}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-primary/20 text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {capRate.toFixed(1)}%
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">Cap Rate</div>
                    <div className={`text-xs ${capRate > 6 ? 'text-green-400' : capRate >= 4 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {capRate > 6 ? '✅ Хорошо' : capRate >= 4 ? '⚠️ Средне' : '❌ Низко'}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-primary/20 text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {totalROI.toFixed(0)}%
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">{data.holdingPeriodYears}-Летний ROI</div>
                    <div className={`text-xs ${totalROI > 40 ? 'text-green-400' : totalROI >= 20 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {totalROI > 40 ? '✅ Сильный' : totalROI >= 20 ? '⚠️ Средний' : '❌ Слабый'}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Detailed Breakdown */}
              <Card className="bg-card/50 backdrop-blur border-primary/20">
                <CardHeader>
                  <CardTitle className="font-['Abril_Fatface'] text-2xl">Детальный Разбор</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="investment">
                      <AccordionTrigger className="text-lg font-semibold">
                        Инвестиция
                      </AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <div className="flex justify-between">
                          <span>Цена покупки:</span>
                          <span className="font-semibold">€{data.purchasePrice.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Первоначальный взнос ({data.downPaymentPercent}%):</span>
                          <span className="font-semibold">€{downPaymentAmount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Кредит:</span>
                          <span className="font-semibold">€{loanAmount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Затраты на закрытие:</span>
                          <span className="font-semibold">€{closingCosts.toLocaleString()}</span>
                        </div>
                        <div className="h-px bg-border my-2" />
                        <div className="flex justify-between text-lg">
                          <span className="font-bold">Всего наличных нужно:</span>
                          <span className="font-bold text-primary">€{totalCashNeeded.toLocaleString()}</span>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="income">
                      <AccordionTrigger className="text-lg font-semibold">
                        Годовой Доход
                      </AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <div className="flex justify-between">
                          <span>Месячная аренда:</span>
                          <span className="font-semibold">€{data.monthlyRent.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Годовой валовой:</span>
                          <span className="font-semibold">€{grossRentalIncome.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Заполняемость ({data.occupancyRate}%):</span>
                          <span className="font-semibold text-primary">€{adjustedIncome.toLocaleString()}</span>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="expenses">
                      <AccordionTrigger className="text-lg font-semibold">
                        Годовые Расходы
                      </AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <div className="flex justify-between">
                          <span>Управление ({data.managementFeePercent}%):</span>
                          <span className="font-semibold">-€{managementFee.toFixed(0)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Налог на имущество:</span>
                          <span className="font-semibold">-€{data.propertyTaxAnnual.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Страховка:</span>
                          <span className="font-semibold">-€{data.insuranceAnnual.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>ТСЖ/Коммуналка:</span>
                          <span className="font-semibold">-€{data.hoaUtilitiesAnnual.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Обслуживание ({data.maintenancePercent}%):</span>
                          <span className="font-semibold">-€{maintenanceCost.toFixed(0)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Платёж по кредиту:</span>
                          <span className="font-semibold">-€{annualDebtService.toFixed(0)}</span>
                        </div>
                        <div className="h-px bg-border my-2" />
                        <div className="flex justify-between text-lg">
                          <span className="font-bold">Всего расходов:</span>
                          <span className="font-bold text-red-400">-€{totalExpenses.toFixed(0)}</span>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="cashflow">
                      <AccordionTrigger className="text-lg font-semibold">
                        Денежный Поток
                      </AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <div className="flex justify-between">
                          <span>Чистый операционный доход:</span>
                          <span className="font-semibold">€{noi.toFixed(0)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Обслуживание долга:</span>
                          <span className="font-semibold">-€{annualDebtService.toFixed(0)}</span>
                        </div>
                        <div className="h-px bg-border my-2" />
                        <div className="flex justify-between text-lg">
                          <span className="font-bold">Годовой денежный поток:</span>
                          <span className={`font-bold ${annualCashFlow > 0 ? 'text-green-400' : 'text-red-400'}`}>
                            €{annualCashFlow.toFixed(0)}
                          </span>
                        </div>
                        <div className="flex justify-between text-lg">
                          <span className="font-bold">Месячный денежный поток:</span>
                          <span className={`font-bold ${monthlyCashFlow > 0 ? 'text-green-400' : 'text-red-400'}`}>
                            €{monthlyCashFlow.toFixed(0)}
                          </span>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="returns">
                      <AccordionTrigger className="text-lg font-semibold">
                        Доходность
                      </AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <div className="flex justify-between">
                          <span>Cash-on-Cash Return:</span>
                          <span className="font-semibold text-primary">{cashOnCashReturn.toFixed(1)}%</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          (€{annualCashFlow.toFixed(0)} / €{totalCashNeeded.toLocaleString()})
                        </div>
                        <div className="h-px bg-border my-2" />
                        <div className="flex justify-between">
                          <span>Cap Rate:</span>
                          <span className="font-semibold text-primary">{capRate.toFixed(1)}%</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          (€{noi.toFixed(0)} / €{data.purchasePrice.toLocaleString()})
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="projection">
                      <AccordionTrigger className="text-lg font-semibold">
                        Прогноз На {data.holdingPeriodYears} Лет
                      </AccordionTrigger>
                      <AccordionContent className="space-y-2">
                        <div className="flex justify-between">
                          <span>Стоимость сегодня:</span>
                          <span className="font-semibold">€{data.purchasePrice.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Будущая стоимость ({data.appreciationRate}%/год):</span>
                          <span className="font-semibold">€{futureValue.toFixed(0)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Прирост стоимости:</span>
                          <span className="font-semibold text-green-400">€{appreciationGain.toFixed(0)}</span>
                        </div>
                        <div className="h-px bg-border my-2" />
                        <div className="flex justify-between">
                          <span>Денежный поток ({data.holdingPeriodYears} лет):</span>
                          <span className="font-semibold">€{totalCashFlowAccumulated.toFixed(0)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Погашение основного долга:</span>
                          <span className="font-semibold">€{equityBuildup.toFixed(0)}</span>
                        </div>
                        <div className="h-px bg-border my-2" />
                        <div className="flex justify-between text-lg">
                          <span className="font-bold">Общая прибыль:</span>
                          <span className="font-bold text-green-400">€{totalProfit.toFixed(0)}</span>
                        </div>
                        <div className="flex justify-between text-lg">
                          <span className="font-bold">Общий ROI:</span>
                          <span className="font-bold text-primary">{totalROI.toFixed(0)}%</span>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg">
                  <Download className="mr-2 w-4 h-4" /> Скачать PDF
                </Button>
                <Button variant="outline" size="lg">
                  <Save className="mr-2 w-4 h-4" /> Сохранить В Мои Сделки
                </Button>
                <Button onClick={handleReset} size="lg">
                  Новый Расчёт
                </Button>
              </div>
            </div>
          )}

          <SectionDivider />

          {/* Info Section */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-['Abril_Fatface'] text-3xl md:text-4xl mb-6 text-foreground">
              Профессиональный Анализ За 5 Минут
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              ROI Калькулятор входит в комьюнити Property Invest Labs. 
              Используй без ограничений вместе с другими инструментами за $59/месяц.
            </p>
            <Button size="lg">
              Присоединиться К Комьюнити →
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ROICalculator;
