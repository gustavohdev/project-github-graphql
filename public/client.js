document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("/data")
    const data = await response.text()
    console.log(data)
  })