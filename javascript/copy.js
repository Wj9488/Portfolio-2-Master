console.log("Copy system working")


const copyData = () => {
    const copyTrigger = document.querySelector(".email__copy")
    copyTrigger.addEventListener("click", () => {
        copy("wtjones10@gmail.com")
        copyTrigger.textContent = "Copied";
        setTimeout(() => {
        copyTrigger.textContent = "Copy Email";
        }, 1500);
    })
    const copy = text => navigator.clipboard.writeText(text)
    }

    
copyData()
