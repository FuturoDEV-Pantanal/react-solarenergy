function soma(num1, num2) {
    return num1 + num2
  }
  
  describe("Validação", () => {
    describe("Soma", () => {
      test("quando somar 1 + 1 o resultado deve 2", () => {
        const resultado = soma(1, 1)
        const resultadEsperado = 2
  
        expect(resultado).toBe(resultadEsperado)
      });
  
      it("testing jest: 1 + 2 = 3", () => {
        const resultado = soma(1, 2)
        const resultadEsperado = 3
  
        expect(resultado).toBe(resultadEsperado)
      });
    });
  
    describe("Subtração", () => {
      it("testing jest: 1 - 1 = 0", () => {
        expect(1 - 1).toBe(0);
      });
  
      it("testing jest: 1 - 2 = -1", () => {
        expect(1 - 2).toBe(-1);
      });
    });
  });