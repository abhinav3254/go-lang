package main

// revenue expense tax rate
// calculate earning before tax and after tax and ratio between these value

import "fmt"

func main() {

	var revenue float64
	var expense float64
	var taxRate float64

	fmt.Println("******* PROFIT CALCULATOR ********")

	fmt.Print("Revenue ")
	fmt.Scan(&revenue)

	fmt.Print("Expense ")
	fmt.Scan(&expense)

	fmt.Print("Tax Rate ")
	fmt.Scan(&taxRate)

	var earningBeforeTax = revenue - expense
	var earningAfterTax = earningBeforeTax - (earningBeforeTax * (taxRate / 100))

	fmt.Println("Before Tax Earning ", earningBeforeTax)
	fmt.Println("After Tax Earning ", earningAfterTax)

	ratio := earningBeforeTax / earningAfterTax

	fmt.Println("Ratio ", ratio)

	fmt.Println(("******"))

	// formatting the decimal places
	fmt.Printf("%.2f", ratio)

	fmt.Print(("\n******"))

}
