export type TextTypes = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'P1' | 'P2' | 'Label';

export const textTypesClasses: { [key: string]: string } = {
  H1: 'text-7xl leading-[86px] font-semibold',
  H2: 'text-[64px] leading-[76px] font-semibold',
  H3: 'text-[56px] leading-[68px] font-light',
  H4: 'text-4xl leading-10 font-semibold',
  H5: 'text-3xl leading-9 font-semibold',
  H6: 'text-2xl leading-7 font-semibold',
  P1: 'text-base leading-6 font-normal',
  P2: 'text-sm leading-5 font-normal',
  Label: 'text-xs leading-4 font-normal',
};
