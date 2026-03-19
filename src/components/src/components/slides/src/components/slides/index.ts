import {
  Slide00Hero,
  Slide01About,
  Slide02ForWhom,
  Slide03Partnership,
  Slide04Benefits,
  Slide05RecurringIncome,
  Slide06Flexibility,
  Slide07EasyStart,
  Slide08Trust,
  Slide09Solutions,
  Slide10Team,
  Slide11Cases,
  Slide12IdealInvestor,
  Slide13Earnings,
  Slide14USALand,
  Slide15MoscowSyndicate,
  Slide16Georgia,
  Slide17PartnerGets,
  Slide18Steps,
  Slide20FAQ,
  Slide21CTA,
} from "@/components/slides";

interface SlideRendererProps {
  slideIndex: number;
}

const slideComponents = [
  Slide00Hero,
  Slide01About,
  Slide02ForWhom,
  Slide03Partnership,
  Slide04Benefits,
  Slide05RecurringIncome,
  Slide06Flexibility,
  Slide07EasyStart,
  Slide08Trust,
  Slide09Solutions,
  Slide10Team,
  Slide11Cases,
  Slide12IdealInvestor,
  Slide13Earnings,
  Slide14USALand,
  Slide15MoscowSyndicate,
  Slide16Georgia,
  Slide17PartnerGets,
  Slide18Steps,
  Slide20FAQ,
  Slide21CTA,
];

export const SlideRenderer = ({ slideIndex }: SlideRendererProps) => {
  const SlideComponent = slideComponents[slideIndex];
  if (!SlideComponent) return null;
  return <SlideComponent />;
};
