{
    const welcome = () => {
        console.log("witaj nastronie wyżła weimarskiego")
    }
    welcome()
    
    const button = document.querySelector(".js-button");
    const body = document.querySelector(".js-body");
    const themeName = document.querySelector(".js-themeName");
    
    const onChangeBackgroundCLick = () => {
        body.classList.toggle("dark");
         themeName.innerText = body.classList.contains("dark") 
        ? "białe" : "niebieskie";
    };
    
    button.addEventListener("click", onChangeBackgroundCLick);
    }