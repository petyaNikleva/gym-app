export enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  OurClases = 'ourclasses',
  ContactUs = 'contactus'
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}