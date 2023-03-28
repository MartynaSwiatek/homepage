{
    const onChangeBackgroundCLick = () => {

        const button = document.querySelector(".js-button");
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName");

        button.addEventListener("click", onChangeBackgroundCLick);
        body.classList.toggle("dark");

        themeName.innerText = body.classList.contains("dark")
            ? "białe" : "niebieskie";

    };

    const init = () => {
        onChangeBackgroundCLick();
    };

    init();
}