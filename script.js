 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
			 let area = Math.PI  * radius *radius
			 area = area.toFixed(2);
	 alert(`The area of the circle with radius ${radius} is ${area}`)
            
           
}
calculateArea();
