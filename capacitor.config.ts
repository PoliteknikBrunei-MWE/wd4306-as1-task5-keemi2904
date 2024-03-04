import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'places app (standalone)',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
