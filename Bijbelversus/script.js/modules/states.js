


//Loading state
const nextBtn = document.querySelector("button:nth-of-type(1)"); //select the left arrow button.

export function startLoading() {
    nextBtn.setAttribute("disabled", true)
    nextBtn.innerHTML = 'Loading....'
}

export function stopLoading() {
    nextBtn.removeAttribute("disabled")
    nextBtn.innerHTML = 'next'
}

export const handleFetchError = (element, error) => {
        element.innerHTML = "failed to load quotes";

        throw new Error(`Failed to fetch data: ${error}`);

}




