import { SettingsSection } from 'spcr-settings';

async function main() {
  while (!Spicetify?.showNotification) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  // Setup settings section
  const settings = new SettingsSection('Welcomer', 'welcomer-settings');

  const welcomerMsg = localStorage.getItem('welcomer-msg') || 'Welcome back to Spotify!';

  settings.addInput('welcomer-msg', 'Custom welcome message', welcomerMsg, (() => {
    localStorage.setItem('welcomer-msg', settings.getFieldValue('welcomer-msg'));
  }));

  settings.pushSettings();

  Spicetify.showNotification(welcomerMsg);
}

export default main;
