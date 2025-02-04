// this will tell go that this is main file
// If we will not mention this package name as main then we will not get the executable file
package main // this will tell go from where the execution needs to start

// built in package
// this is go standard library
import "fmt"

// go will call this main function so this function should be named as main
func main() {
	// this way also print works
	fmt.Println("Hello World")
	// and this way also it works
	print("Hello World!")
}

/**
Inside a package there should be only one main function means that when
we create two files named one.go and two.go and both have same package name as
main then there should be only one main() function
*/
