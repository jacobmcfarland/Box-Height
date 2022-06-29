function boxResizingStandard()  {   
    
    let container = document.querySelector('.standard-line');

    let lastItem = document.querySelector('.standard-line .last-line');
    let box = document.querySelector('.standard-line .box'); 

    var cardButtonHeight = 0; 
    var cardButton = document.querySelector('.standard-line .card-button');
    if(cardButton){
        var cardButtonHeight = cardButton.offsetHeight;
    }

    var colButtonHeight = 0; 
    var colButton = document.querySelector('.standard-line .button-col');
    if(colButton){
        var colButtonHeight = colButton.offsetHeight;
    }
    
    const styles = window.getComputedStyle(container);
    const containerHeightNP = container.clientHeight - parseFloat(styles.paddingTop) - parseFloat(styles.paddingBottom);

    //let boxHeight = box.offsetHeight;
    let lastItemheight = lastItem.offsetHeight;
    let lastItemHeightHalf = Math.floor(lastItemheight / 2)

    let finalBox = containerHeightNP - 13 - lastItemHeightHalf -  (cardButtonHeight / 2) - (colButtonHeight / 2); 

    box.style.height = finalBox + 'px';
    console.log(cardButtonHight);
    }

    window.onload =  function(){
            boxResizingStandard();
        };


    window.onresize =  function(){
        boxResizingStandard();
    }
        
