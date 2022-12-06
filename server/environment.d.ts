declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URI: string;
      STRIPE_SECRET: string;
      PUBLISHABLE_KEY: string;
      SECRET: string;
      NODE_ENV: 'development' | 'production';
      PORT?: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
