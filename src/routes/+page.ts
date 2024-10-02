// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export const load = async ({ fetch }) => {
    try {
      const response = await fetch(
        'https://app-8eb63342-ceae-4dd7-b32f-a6f573ef78de.cleverapps.io/files'
      )
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
      }
      const files = await response.json()
      return { files }
    } catch (error) {
      console.error(error)
      return { error: 'Unable to fetch files' }
    }
  }