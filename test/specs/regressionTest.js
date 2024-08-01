
const { step, default: AllureReporter } = require('@wdio/allure-reporter')
const regressionPage=require('../pageobjects/regressionPage')
const fs = require('fs')
let menudata = JSON.parse(fs.readFileSync('test/testdata/regressiondata.json'))

describe('Regression Suite',async()=>{
  
    it('C001 Launch URL and click Menu link "Tenancy"',async()=>{
    
      await  browser.url("https://corde.prododev.com/")
      AllureReporter.addStep("URL laucnhed")
      await browser.maximizeWindow()
      await  expect(browser).toHaveTitle("Corde Housing | Core Code")
      const logo  = await  regressionPage.Headerlogo.isDisplayed()
      console.log(await logo)
      let  array = await regressionPage.Menulinks
      console.log(array.length)
      await array.forEach( async array1 => {
      const val = await array1.getText()
      console.log("check the values",val)
      if(val==="My home"){
      console.log("hello")
      await array1.moveTo()
      console.log("hello me")
      console.log("check titile ",await browser.getTitle())
      let subMenu1 = await regressionPage.SubmneuLinks
      console.log("submenu val  "+ subMenu1.length)
       await subMenu1.forEach(async array2 => {
         const SubMenuVal = await array2.getText()
         console.log(SubMenuVal)
         if(SubMenuVal==="Tenancy"){
           await array2.click()
          
           console.log("check submenu  ",await browser.getTitle())
         }
       })
        }   
     })
  })

  it('Footer function',async()=>{
    await browser.url("https://corde.prododev.com/")
    console.log("Footer links are present check")
    await browser.scroll(0,700)
    let Footerlinks = await regressionPage.FooterLinks
    console.log("length of footer links " +Footerlinks.length)
    await Footerlinks.forEach(async links =>{
     
      if(await links.getAttribute("href")!==0){
        console.log("Footer links are present")
      }

    })
    
  })
  
  it('Search function',async() =>{
    await  browser.url("https://corde.prododev.com/")
    let searchEle = await regressionPage.Searchlink
    console.log(await searchEle.getText())
    await searchEle.click()
    console.log("Search title" + await browser.getTitle())
   ; (await regressionPage.SearchInput).setValue("test")
   await browser.scroll(20,500)
   let buttonclick =  await regressionPage.SearchCTA
    await buttonclick.click()
     let searchresults = await regressionPage.SearchResults
     console.log("length of the results one"+ await searchresults.length)
     let i=0
     await searchresults.forEach(async elem1 => {
      if(expect(elem1).toHaveText("test")){
        i =i+1
        console.log("Search results bring test pages")
      }
      if (searchresults.length===i){
      console.log("Search results are correct")
       }
      
     })

   })



 

  
})

