package main

// correct way of importing packages
import (
	"fmt"
	"math"
)

func main() {
	// var investmentAmount float64 = 1000
	// var expectedReturnRate = 5.5 -- this also be written as bottom
	// expectedReturnRate := 5.5
	// var years float64 = 10

	// How declare multiple values in one single line
	// This approach makes the code hard to read because we have to make a close look to check which
	// value belong to which variable
	// investmentAmount, years, expectedReturnRate := 1000.0, 10.0, 5.5

	const inflationRate = 2.5

	var investmentAmount float64
	var years float64
	var expectedReturnRate float64

	// now taking user's input
	// Here & is the pointer for the investmentAmount
	// we can't directly pass investmentAmount instead we pass pointer of that variable
	fmt.Print("Investment Amount: ")
	fmt.Scan(&investmentAmount)

	fmt.Print("Years: ")
	fmt.Scan(&years)

	fmt.Print("Expected Return Rate: ")
	fmt.Scan(&expectedReturnRate)

	// We can also keep different kind of data types like this by not defining the float64
	// var investmentAmount, years = 1000, "10"

	futureValue := investmentAmount * math.Pow(1+expectedReturnRate/100, years)
	futureRealValue := futureValue / math.Pow(1+inflationRate/100, years)

	fmt.Println(futureValue)
	fmt.Println(futureRealValue)
}
