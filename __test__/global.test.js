const text = "Hola Mundo";
const fruits =[ "manzana","banana","durazno"]

test("should contain a text",()=>{
  expect(text).toMatch(/Mundo/)
})

test("tenemos una banana?",()=>{
  expect(fruits).toContain("banana")
})

test("mayor que", ()=>{
  expect(10).toBeGreaterThan(9)
})

test("verdadero",()=>{
  expect(true).toBeTruthy()
})

const reversedString = (str,callback)=>{
  callback(str.split("").reverse().join(""))
}
test("probar callback",() =>{
reversedString("Hola",(str)=>{
  expect(str).toBe("aloH")
})
})