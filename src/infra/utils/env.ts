import * as dotenv from 'dotenv'
dotenv.config()

class Env {
  get (envName: string) {
    return process.env[envName]
  }
}

// Singleton environment
export default new Env()
