import Env from '@infra/utils/env'
import configs from '@shared/configs/default.json'

export class MainClass {
  private readonly greeting: string

  constructor (
    private readonly name: string
  ) {
    this.greeting = this.getGreeting()
  }

  public hello () {
    return `${this.greeting} ${this.name}`
  };

  private getGreeting (): string {
    const hour = new Date().getHours()

    if (hour < 12) {
      return 'Bom dia'
    } else if (hour < 18) {
      return 'Boa tarde'
    } else {
      return 'Boa noite'
    }
  };
};

// Get configs
console.log(configs.App.envs.dev)

// Get enviroment variables
const PORT = Env.get('PORT')
console.log(PORT)

const main = new MainClass('Henrique')
console.log(main.hello())
