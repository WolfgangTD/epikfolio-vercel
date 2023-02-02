export async function loadElgato() {
    // Call an external API endpoint to get posts
    const res = await fetch('/eglato.png')
    const data = await res.json()
  
    return data
  }