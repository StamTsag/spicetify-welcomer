async function main() {
  while (!Spicetify?.showNotification) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  // Show welcome message on start.
  Spicetify.showNotification(`Welcome back to Spotify!`);
}

export default main;
