import { MainClass } from './app'

describe('app', () => {
  it('should be create a new instance of MainClass', async () => {
    const main = new MainClass('Henrique')
    expect(main).toBeTruthy()
  })

  it('should be get a correct greeting', async () => {
    let greating: string
    const hour = new Date().getHours()
    if (hour < 12) {
      greating = 'Bom dia'
    } else if (hour < 18) {
      greating = 'Boa tarde'
    } else {
      greating = 'Boa noite'
    };

    const main = new MainClass('Henrique')
    expect(main.hello()).toBe(`${greating} Henrique`)
  })
})
