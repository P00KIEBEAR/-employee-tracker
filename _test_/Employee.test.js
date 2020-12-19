
const Employee = require('../lib/Employee');


describe('Person', () => {
  it('should be a name', () => {
    const employee = new Employee('Pat', 13, "patpaggi@gmail.com");

    expect(employee.name).toBe('Pat');
  }),
    it('should be id', () => {
      const employee = new Employee('Boo', 183, "patpaggi@gmail.com")
      expect(employee.id).toEqual(expect.any(Number));
    }),
    it('should be an email', () => {

      const employee = new Employee('Bob', 18, "patpaggi@gmail.com")
      expect(employee.email).toBe('patpaggi@gmail.com');
    })
})


