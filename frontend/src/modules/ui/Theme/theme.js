import { Border } from './border';
import { Font } from './font';
import { BoxShadow } from './boxShadow';

export const Theme = {
    border: Border,
    font: Font,
    boxShadow: BoxShadow,
    spacing: (value) => `${value * 4}px`,
};
