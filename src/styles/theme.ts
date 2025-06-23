export const theme = {
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
    success: '#34C759',
    warning: '#FF9500',
    error: '#FF3B30',
    background: '#F2F2F7',
    surface: '#FFFFFF',
    text: '#000000',
    textSecondary: '#8E8E93',
    border: '#C6C6C8'
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32
  },
  typography: {
    title: {
      fontSize: 28,
      fontWeight: 'bold' as const
    },
    subtitle: {
      fontSize: 22,
      fontWeight: '600' as const
    },
    body: {
      fontSize: 17,
      fontWeight: '400' as const
    },
    caption: {
      fontSize: 12,
      fontWeight: '400' as const
    }
  }
};
