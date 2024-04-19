// Alan JS
document.addEventListener("DOMContentLoaded", function() 
{
    const images = document.querySelectorAll('.image'); //Assigning class and IDs to variables
    const winlose = document.getElementById('winlose');
    const coveringimgs = document.getElementById('coveringimgs');
    let clicks = 0; //Setting clicks to 0 to initialize
    let selectedImages = []; 
    const losingIndex = Math.floor(Math.random() * 3); 

    images.forEach((image, index) => 
    {
        image.addEventListener('click', () => // Assign click event listener to each image in array
        {
            if (clicks < 2 && !selectedImages.includes(index)) 
            {
                if (index === losingIndex) 
                {
                    image.src = "Images/Contest/Loser.png";
                } 
                else 
                {
                    image.src = "Images/Contest/Winner.png";
                }
                selectedImages.push(image.src);
                clicks++;

                if (clicks === 2) 
                {
                    isMatch = selectedImages[0] === selectedImages[1];
                    
                    setTimeout(() => 
                    {
                        if (isMatch) 
                        {
                            displayChoiceImage(true);
                        } 
                        else 
                        {
                            displayChoiceImage(false);
                        }
                    }, 1000); //Setting delay before image is displayed (milliseconds)
                    
                    // Remove pointer events from all images
                    images.forEach(img => 
                    {
                        img.style.pointerEvents = 'none';
                    });
                    
                    setTimeout(() => 
                    {
                        coveringimgs.style.display = 'none';
                    }, 1000); //Setting delay before hiding coveringimgs (milliseconds)
                }
                // Remove pointer from clicked image
                image.style.pointerEvents = 'none';
            }
        });
    });

    function displayChoiceImage(winner) 
    {
        const choiceImage = document.createElement('img');
        choiceImage.src = winner ? 'Images/Contest/Congrats.png' : 'Images/Contest/LooseResult.png';
        choiceImage.alt = winner ? 'You Win!' : 'You Lose!';
        choiceImage.classList.add('choice-image');
        choiceImage.style.width = '40%';
        choiceImage.style.display = 'block';
        choiceImage.style.margin = '0 auto';
        winlose.appendChild(choiceImage);

        if (!winner) // If you loose you can click to start again
        {
            choiceImage.addEventListener('click', restartGame);
            choiceImage.style.cursor = 'pointer'; 
        }

        if(winner) 
        {
            winTextDiv.style.display = 'block';
        }
    }

    function restartGame() //Reload the Page
    {
        location.reload();
    }

    // Define the contactButton function
    function contactButton() 
    {
        // Redirect to the contact page
        window.location.href = "contactus.html";
    }

    // Link the contactButton function to the "Contact Us" button
    const contactButtonElement = document.getElementById('contactButton');
    if (contactButtonElement) 
    {
        contactButtonElement.addEventListener('click', contactButton);
    }
});
