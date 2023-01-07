import { getContrast } from 'polished';

import { colors } from '@caiulucas-ignite-ui/tokens';

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => (
    <div key={color} style={{ backgroundColor: color, padding: '2rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'monospace',
          color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff'
        }}
      >
        <strong>${key}</strong>
        <span>{color}</span>
      </div>
    </div>
  ));
}
