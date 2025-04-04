// Create and call a function that tests your update route handler [2 pts]
// Make sure that the function takes the name of the potion as a parameter
// There are already potion's with the label polyjuice or amortentia

async function patchPotion(name) {
    try {
        // fill in the path
        const response = await fetch("https://zany-space-acorn-x5v5xvv6969wf97x6-3000.app.github.dev" + "/update/" + label, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                label: "polyjuice" 
                
            })
  
        });
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
  }