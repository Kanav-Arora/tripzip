import { Border } from './border';
import { Font } from './font';
import { BoxShadow } from './boxShadow';
import { color } from './color';

export const Theme = {
    border: Border,
    font: Font,
    boxShadow: BoxShadow,
    color: color,
    spacing: (value) => `${value * 4}px`,
};
