{
    const onChangeBackgroundClick = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName");

        body.classList.toggle("dark");

        themeName.innerText = body.classList.contains("dark")
            ? "białe" : "niebieskie";

    };

    const init = () => {
        const button = document.querySelector(".js-button");

        button.addEventListener("click", onChangeBackgroundClick);
    };

    init();
}